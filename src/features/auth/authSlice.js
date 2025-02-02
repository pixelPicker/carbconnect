import { createSlice } from "@reduxjs/toolkit";
import { getUser, signup, signin, signout } from "./authThunk";

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
      
      .addCase(signout.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(signout.fulfilled, (state, action) => {
        state.loading = false
        state.user = null
      })
      .addCase(signout.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

  },
});

export const { createUser, setUser, deleteUser, setError } = authSlice.actions;
export default authSlice.reducer;
