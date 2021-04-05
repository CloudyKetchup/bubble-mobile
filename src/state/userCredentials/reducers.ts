import { SliceReducer } from "../types";
import { UserCredentialsState } from "./types";

export const setUserToken: SliceReducer<UserCredentialsState, string | null> = (state, action) => (state.token = action.payload);