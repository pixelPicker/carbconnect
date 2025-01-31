import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientSupabase } from "../../client";
import { deleteUser, setError, setUser } from "./authSlice";

export const signup = createAsyncThunk(
  "auth/createUser",
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      const { data, error } = await clientSupabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: username,
          },
        },
      });

      if (error) {
        return rejectWithValue(error.message);
      }
      return data.user;
    } catch (error) {
      return rejectWithValue("Something went wrong. Please try again later")
    }
  }
);

export const signin = createAsyncThunk(
  "auth/addUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data, error } = await clientSupabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        return rejectWithValue(error.message);
      }
      return data.user;
    } catch (error) {
      return rejectWithValue("Something went wrong. Please try again later");
    }
  }
);
export const signout = createAsyncThunk(
  "auth/deleteUser",
  async (_, { rejectWithValue }) => {
    try {
      const { error } = await clientSupabase.auth.signOut();
      if (error) {
        return rejectWithValue(error.message);
      }
    } catch (error) {
      return rejectWithValue("Something went wrong. Please try again later")
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/setUser",
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { user },
      } = await clientSupabase.auth.getUser();
      if (user) {
        return user;
      } else {
        return rejectWithValue("No user found");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const checkAuthChanges = () => async (dispatch) => {
  clientSupabase.auth.onAuthStateChange((event, session) => {
    if (event === "INITIAL_SESSION" || event === "SIGNED_IN") {
      dispatch(setUser(session?.user));
    } else if (event === "SIGNED_OUT") {
      dispatch(deleteUser());
    }
  });
};
