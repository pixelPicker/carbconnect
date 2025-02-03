import { createSlice } from "@reduxjs/toolkit";
import { getAllLogs, addLog, deleteAllLogs } from "./logThunk";

export const logSlice = createSlice({
  name: 'log',
  initialState: {logs: [], loading: false, error: null},
  reducers: {
    deleteLogs: (state, action) => {
      state.loading = false
      state.logs = []
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLogs.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(getAllLogs.fulfilled, (state, action) => {
        state.loading = true
        console.log(action)
        state.logs = action.payload
      })
      .addCase(getAllLogs.rejected, (state, action) => {
        state.loading = true
        state.error = action.payload
      })
      .addCase(addLog.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(addLog.fulfilled, (state, action) => {
        state.loading=  false
        state.logs.push(action.payload); 
      })
      .addCase(addLog.rejected, (state, action) => {
        state.loading=  false
        state.error = action.payload; 
      });
  }
})

export const {deleteLogs} = logSlice.actions;
export default logSlice.reducer;