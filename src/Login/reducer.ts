import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state

type TLoggedInUser = {
  id: number;
  email: string;
  username: string;
};

type LoginStateProps = {
  loggedInUser: TLoggedInUser;
  test: string;
};

// Define the initial state using that type
export const initialState: LoginStateProps = {
  loggedInUser: {
    id: 0,
    email: "",
    username: "",
  },
  test: "",
};

const loginSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<TLoggedInUser>) => {
      state.loggedInUser = action.payload;
    },
    setTestValue: (state, action: PayloadAction<string>) => {
      state.test = action.payload;
    },
  },
});

export const { setLoggedInUser, setTestValue } = loginSlice.actions;

export default loginSlice.reducer;
