import { configureStore } from "@reduxjs/toolkit";
import authSlice, { AuthState } from "./AuthSlice";

export interface ReduxState {
  auth: AuthState;
}
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
