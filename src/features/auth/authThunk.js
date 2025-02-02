import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUser, setError, setUser } from "./authSlice";
import getDB from "../../dbService/db";

const userKey = import.meta.env.VITE_USER_KEY;

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
          if (event.target.result !== undefined) {
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
          let user = event.target.result[0]
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

export const signout = createAsyncThunk(
  "auth/deleteUser",
  async (_, { rejectWithValue }) => {
    try {
      const { error } = await clientSupabase.auth.signOut();
      if (error) {
        return rejectWithValue(error.message);
      }
    } catch (error) {
      return rejectWithValue("Something went wrong. Please try again later");
    }
  }
);

// export const checkAuthChanges = () => async (dispatch) => {
//   clientSupabase.auth.onAuthStateChange((event, session) => {
//     if (event === "INITIAL_SESSION" || event === "SIGNED_IN") {
//       dispatch(setUser(session?.user));
//     } else if (event === "SIGNED_OUT") {
//       dispatch(deleteUser());
//     }
//   });
// };
