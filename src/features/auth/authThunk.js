import { createAsyncThunk } from "@reduxjs/toolkit";
import getDB from "../../dbService/db";

export const signup = createAsyncThunk(
  "auth/createUser",
  async ({ userName, email, password }, { rejectWithValue }) => {
    try {
      const user = { userName, email, password };
      const db = await getDB();
      const transaction = db.transaction("user", "readwrite");
      transaction.onerror = (event) => {
        throw new Error(event.target.error?.message);
      };

      const objectStore = transaction.objectStore("user");

      const checkExistingUser = objectStore.getAll();
      const isExistingUser = await new Promise((resolve) => {
        checkExistingUser.onerror = (event) => {
          throw new Error(event.target.error?.message);
        };
        checkExistingUser.onsuccess = (event) => {
          if (event.target.result.length !== 0) {
            resolve(true);
          }
          resolve(false);
        };
      });
      if (isExistingUser) {
        throw new Error("User Already exists!");
      }

      const request = objectStore.put(user);
      return await new Promise((resolve, reject) => {
        request.onsuccess = () => {
          console.log("User created successfully:", user);
          resolve(user);
        };
        request.onerror = (event) => {
          console.error("Error creating user:", event.target.error?.message);
          reject(rejectWithValue(event.target.error?.message));
        };
      });
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/addUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const db = await getDB();
      const transaction = db.transaction("user", "readonly");
      transaction.onerror = (event) => {
        throw new Error(event.target.error?.message);
      };
      const objectStore = transaction.objectStore("user");

      const getUser = objectStore.getAll();
      const userCredentials = await new Promise((resolve, reject) => {
        getUser.onerror = (event) => {
          throw new Error(event.target.error?.message);
        };
        getUser.onsuccess = (event) => {
          const user = event.target.result;
          if (user && user.email === email && user.password === password) {
            resolve(user);
          } else {
            resolve(false);
          }
        };
      });
      if (userCredentials) {
        return userCredentials;
      } else {
        throw new Error("User doesn't exist or incorrect credentials");
      }
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getUser = async () => {
  try {
    const db = await getDB();
    const transaction = db.transaction("user", "readonly");
    transaction.onerror = (event) => {
      throw new Error(event.target.error?.message);
    };
    const objectStore = transaction.objectStore("user");

    const getUser = objectStore.getAll();
    const userCredentials = await new Promise((resolve, reject) => {
      getUser.onerror = (event) => {
        throw new Error(event.target.error?.message);
      };
      getUser.onsuccess = (event) => {
        console.log(event.target.result, event);
        if (event.target.result) {
          let user = event.target.result[0];
          resolve(user);
        } else {
          resolve(false);
        }
      };
    });
    if (userCredentials) {
      return userCredentials;
    } else {
      return null;
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
};

export const deleteAllUsers = createAsyncThunk("auth/signout", async () => {
  try {
    const db = await getDB();
    const transaction = db.transaction("user", "readwrite");
    const objectStore = transaction.objectStore("user");

    const result = await new Promise((resolve, reject) => {
      const request = objectStore.clear();

      request.onsuccess = () => {
        console.log("All users have been deleted");
        resolve(true);
      };

      request.onerror = (event) => {
        console.error("Error deleting users:", event.target.error?.message);
        resolve(false);
      };
    });
  } catch (error) {
    console.error("Error in deleteAllUsers:", error.message);
    throw new Error(error.message);
  }
});
