import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import getDB from "../../dbService/db";
import { create } from "@mui/material/styles/createTransitions";

export const addLog = createAsyncThunk(
  "log/addLog",
  async (log, { rejectWithValue }) => {
    try {
      const db = await getDB();
      const request = db
        .transaction("logEvent", "readwrite")
        .objectStore("logEvent")
        .add(log);

      request.onsuccess = (event) => {
        console.log(event);
        console.log(`New log created, id: ${request.result}`);
      };

      request.onerror = (error) => {
        console.log(error);
        throw new Error(`Error creating new log: ${error.target.error}`);
      };
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
      const request = db.transaction("logEvent", "readonly")
      .objectStore("logEvent")
      .getAll()
      request.onsuccess = (event) => {
        console.log(event);
        console.log(`New log created, id: ${request.result}`);
      };
      
      request.onerror = (error) => {
        console.log(error);
        throw new Error(`Error creating new log: ${error.target.error}`);
      };

    } catch (error) {}
  }
);
// export const addLog = createAsyncThunk(
//   "log/addLog",
//   async({description, category, subcategory, date, performedTime}, {rejectWithValue}) => {
//     const emission = categories[category][subcategory] * performedTime;
//     const db = await getDB();
//     db.
//   }
// )
