import { Selector } from "react-redux";
import { BookingSummary } from "../../models/booking";
import { AppState } from "../store";

export const confirmedBookingsSelector: Selector<AppState, BookingSummary[]> = state => state.bookingsReducer.confirmedBookings;
export const requestedBookingsSelector: Selector<AppState, BookingSummary[]> = state => state.bookingsReducer.requestedBookings;