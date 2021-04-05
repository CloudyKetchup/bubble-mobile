import { BookingSummary } from "../../models/booking";
import { SliceReducer } from "../types";
import { BookingsState } from "./types";

export const setConfirmedBookings: SliceReducer<BookingsState, BookingSummary[]> = (state, action) => void(state.confirmedBookings = action.payload);

export const setRequestedBookings: SliceReducer<BookingsState, BookingSummary[]> = (state, action) => void(state.requestedBookings = action.payload);