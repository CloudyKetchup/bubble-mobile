import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";
import { AccountState } from "./types";

// import user from "../../../assets/data/user.json";

const initialState: AccountState = {
  authenticated: false,
  userProfile: null
};

const slice = createSlice({
  name: "account",
  initialState,
  reducers
});

export default slice;