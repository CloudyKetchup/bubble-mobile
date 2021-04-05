import { Selector } from "react-redux";
import { AppState } from "../store";

export const userTokenSelector: Selector<AppState, string | null> = state => state.userTokenReducer.token;