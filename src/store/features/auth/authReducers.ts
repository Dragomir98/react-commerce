import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import {
  doc,
  DocumentData,
  DocumentReference,
  getDoc,
  setDoc,
  updateDoc,
} from "@firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import firestoreDb, { auth } from "../../../firebase";
import User from "../../../models/User";

interface RegisterAuthArgs {
  email: string;
  password: string;
  userDetails?: User;
}

interface UpdatedUser {
  updatedUserDetails: User;
  currentUserRef: DocumentReference<DocumentData>;
}

export const registerUser = createAsyncThunk(
  "register",
  async (
    { email, password, userDetails }: RegisterAuthArgs,
    { rejectWithValue }
  ) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = await result.user.uid;
      const registeredUser = await setDoc(doc(firestoreDb, "users", userId), {
        ...userDetails,
        id: userId,
        email,
        firstName: null,
        lastName: null,
        profilePic:
          "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
        phoneNumber: null,
        isAdmin: false,
      });
      return registeredUser;
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
      const userId = result.user.uid;
      const usersCollectionRef = doc(firestoreDb, "users", userId);
      const userSnapshot = await getDoc(usersCollectionRef);
      return userSnapshot.data();
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
      const userId = result.user.uid;

      const usersCollectionRef = doc(firestoreDb, "users", userId);
      const userSnapshot = await getDoc(usersCollectionRef);

      if (!userSnapshot.data()) {
        const newUserSnapshot = await setDoc(usersCollectionRef, {
          id: userId,
          email: result.user.email,
          firstName: result.user.displayName?.split(" ")[0],
          lastName: result.user.displayName?.split(" ")[1],
          profilePic: result.user.photoURL,
          phoneNumber: result.user.phoneNumber,
          isAdmin: false,
        });
        return newUserSnapshot;
      }

      return userSnapshot.data();
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

export const updateUser = createAsyncThunk(
  "updateUser",
  async (
    { updatedUserDetails, currentUserRef }: UpdatedUser,
    { rejectWithValue }
  ) => {
    try {
      await updateDoc(currentUserRef, {
        ...updatedUserDetails,
        firstName: updatedUserDetails.firstName,
        lastName: updatedUserDetails.lastName,
        profilePic: updatedUserDetails.profilePic,
        phoneNumber: updatedUserDetails.phoneNumber,
      });
    } catch (err) {
      return rejectWithValue({ error: err.message });
    }
  }
);
