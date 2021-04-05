import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";
import extraReducers from "./extraReducers";
import { SittersState } from "./types";

const initialState: SittersState = {
  localSitters: []
};

const slice = createSlice({
  name: "sitters",
  initialState,
  reducers,
  extraReducers
});

export default slice;