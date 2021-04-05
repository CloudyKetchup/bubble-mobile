import { createAsyncThunk } from "@reduxjs/toolkit";

import { bookingApi } from "../../api";

import { ActiveBookingSummary } from "../../models/booking";

import { SliceReducer } from "../types";
import { BookingsState } from "./types";

export const fetchBookings = createAsyncThunk("fetchBookings", async (token: string) => {
  const { data, error } = await bookingApi.fetchActiveBookings(token);

  if (error) throw new Error(error.message);

  return data;
});

const fetchBookingsFulfilled: SliceReducer<BookingsState, ActiveBookingSummary> = (state, action) => {
  const { confirmedBookings, requestedBookings } = action.payload;

  state.confirmedBookings = confirmedBookings;
  state.requestedBookings = requestedBookings;
};

export default {
  [fetchBookings.fulfilled.toString()]: fetchBookingsFulfilled
};