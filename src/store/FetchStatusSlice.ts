import { createSlice } from "@reduxjs/toolkit";

export interface FetchStatusState {
  fetchDone: boolean;
  currentlyFetching: boolean;
}
const initialState: FetchStatusState = {
  fetchDone: false,
  currentlyFetching: false,
};
createSlice({
  name: "fetchStatus",
  initialState,
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});
