import { createAsyncThunk } from "@reduxjs/toolkit";
import { sittersApi } from "../../api";
import { ISitter } from "../../models/sitter";
import { SliceReducer } from "../types";
import { SittersState } from "./types";

export const fetchLocalSitters = createAsyncThunk("fetchLocalSitters", async (token: string) => {
  const { data, error } = await sittersApi.findSitters(token);

  if (error) throw new Error(error.message);

  return data;
});

const fetchLocalSittersFulfilled: SliceReducer<SittersState, ISitter[]> = (state, action) => {
  state.localSitters = action.payload;
};

export default {
  [fetchLocalSitters.fulfilled.toString()]: fetchLocalSittersFulfilled
};