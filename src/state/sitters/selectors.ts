import { Selector } from "react-redux";
import { ISitter } from "../../models/sitter";
import { AppState } from "../store";

export const localSittersSelector: Selector<AppState, ISitter[]> = state => state.sittersReducer.localSitters;