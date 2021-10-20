import { createSlice } from "@reduxjs/toolkit";
import {
  emailPasswordLogin,
  googleLogin,
  logoutUser,
  registerUser,
} from "./authReducers";

//initial state setup
interface StateProps {
  currentUser?: any;
  isAuthenticated?: boolean;
  hasError?: boolean;
  isLoading?: boolean;
}

const initialState: StateProps = {
  currentUser: null,
  isAuthenticated: false,
  hasError: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    observeCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(emailPasswordLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(emailPasswordLogin.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(emailPasswordLogin.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    });

    builder.addCase(googleLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(googleLogin.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(googleLogin.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    });

    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.hasError = false;
      state.isLoading = false;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    });

    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    });
  },
});

//reducers
export const { observeCurrentUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
