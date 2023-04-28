import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../App/store";
import { initialState } from "./reducer";

const loginState = (state: RootState) => state?.loginState || initialState;

const selectLoggedInUser = createSelector(
  [loginState],
  (state) => state.loggedInUser
);

const selectTest = createSelector([loginState], (state) => state.test);

export { selectLoggedInUser, selectTest };
