import { createSlice } from "@reduxjs/toolkit";
import { signup, signin, deleteAllUsers } from "./authThunk";

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    addUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    createUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    deleteUser: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signup.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false
        console.log(action);
        state.user = action.payload
        console.log("User successfully added");
        
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      .addCase(signin.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        console.log("User successfully logged in");
        
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      
      .addCase(deleteAllUsers.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteAllUsers.fulfilled, (state, action) => {
        state.loading = false
        state.user = null
      })
      .addCase(deleteAllUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
});

export const { createUser, setUser, deleteUser, setError } = authSlice.actions;
export default authSlice.reducer;
