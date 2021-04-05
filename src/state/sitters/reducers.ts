import { ISitter } from "../../models/sitter";
import { SliceReducer } from "../types";
import { SittersState } from "./types";

export const setLocalSitters: SliceReducer<SittersState, ISitter[]> = (state, action) => void(state.localSitters = action.payload);