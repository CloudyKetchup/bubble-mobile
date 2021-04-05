import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";
import { UserCredentialsState } from "./types";

const initialState: UserCredentialsState = {
  token: null
};

const slice = createSlice({
  name: "userCredentials",
  initialState,
  reducers
});

export default slice;