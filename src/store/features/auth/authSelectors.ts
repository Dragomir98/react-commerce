import { RootState } from "../../store";

export const currentUserSelector = (state: RootState) => state.auth.currentUser;
export const authStateSelector = (state: RootState) =>
  state.auth.isAuthenticated;
export const authErrorSelector = (state: RootState) => state.auth.hasError;
export const authLoadingStateSelector = (state: RootState) =>
  state.auth.isLoading;
