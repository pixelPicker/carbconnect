import { createAsyncThunk } from "@reduxjs/toolkit";
import getDB from "../../dbService/db";

export const addLog = createAsyncThunk(
  "log/addLog",
  async (log, { rejectWithValue }) => {
    try {
      const db = await getDB();
      const request = db
        .transaction("logEvent", "readwrite")
        .objectStore("logEvent")
        .add(log);

      return await new Promise((resolve, reject) => {
        request.onsuccess = () => {
          resolve({ ...log, logId: request.result });
        };

        request.onerror = () => {
          reject(new Error(`Error creating new log: ${request.error.message}`));
        };
      });
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getAllLogs = createAsyncThunk(
  "log/getAllLogs",
  async (_, { rejectWithValue }) => {
    try {
      const db = await getDB();
      const request = db
        .transaction("logEvent", "readonly")
        .objectStore("logEvent")
        .getAll();

      return await new Promise((resolve, reject) => {
        request.onsuccess = () => {
          resolve(request.result); // Returns all logs
        };

        request.onerror = () => {
          reject(
            rejectWithValue(`Error fetching logs: ${request.error.message}`)
          );
        };
      });
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const deleteAllLogs = async () => {
  const db = await getDB();
  const transaction = db.transaction("logEvent", "readwrite");
  const objectStore = transaction.objectStore("logEvent");

  objectStore.clear();
};
