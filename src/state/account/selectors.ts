import { Selector } from "react-redux";
import { IUser } from "../../models/user";
import { AppState } from "../store";

export const userProfileSelector: Selector<AppState, IUser | null> = state => state.accountReducer.userProfile;

export const userAuthenticatedSelector: Selector<AppState, boolean> = state => state.accountReducer.authenticated;