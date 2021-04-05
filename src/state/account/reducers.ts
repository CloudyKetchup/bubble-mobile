import { IUser } from "../../models/user";
import { SliceReducer } from "../types";
import { AccountState } from "./types";

export const setUserProfile: SliceReducer<AccountState, IUser | null> = (state, action) => void(state.userProfile = action.payload);

export const setUserAuthenticated: SliceReducer<AccountState, boolean> = (state, action) => void(state.authenticated = action.payload);

export const clearUserProfile = (state: AccountState) => void(state.userProfile = null);