import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../firebase";

interface RegisterAuthArgs {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  "register",
  async ({ email, password }: RegisterAuthArgs, { rejectWithValue }) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result.user;
    } catch (err) {
      return rejectWithValue({ error: err.message });
    }
  }
);

//email and password login
export const emailPasswordLogin = createAsyncThunk(
  "emailPasswordLogin",
  async ({ email, password }: RegisterAuthArgs, { rejectWithValue }) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (err) {
      return rejectWithValue({ error: err.message });
    }
  }
);

//google login
const provider = new GoogleAuthProvider();
export const googleLogin = createAsyncThunk(
  "googleLogin",
  async (req, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (err) {
      return rejectWithValue({ error: err.message });
    }
  }
);

export const logoutUser = createAsyncThunk(
  "logout",
  async (req, { rejectWithValue }) => {
    try {
      await signOut(auth).then((res) => res);
    } catch (err) {
      return rejectWithValue({ error: err.message });
    }
  }
);
