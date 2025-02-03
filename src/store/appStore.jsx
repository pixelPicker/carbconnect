import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import logReducer from '../features/logging/logSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    log: logReducer,
  }
})

export default store;
