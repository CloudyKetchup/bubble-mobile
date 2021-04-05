import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";
import extraReducers from "./extraReducers";
import { BookingsState } from "./types";

const initialState: BookingsState = {
  requestedBookings: [],
  confirmedBookings: []
};

const slice = createSlice({
  name: "bookings",
  initialState,
  reducers,
  extraReducers
});

export default slice;