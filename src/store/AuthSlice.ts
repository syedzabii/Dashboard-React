import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  authCheckComplete: boolean;
  fetchingDone: boolean;
  admin: null;
}
const initialState: AuthState = {
  isAuthenticated: false,
  admin: null,
  authCheckComplete: false,
  fetchingDone: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    setAdmin: (state, action) => {
      state.admin = action.payload;
    },

    authCheckComplete: (state) => {
      state.authCheckComplete = true;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
