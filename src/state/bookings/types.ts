import { BookingSummary } from "../../models/booking";

export type BookingsState = {
  requestedBookings: BookingSummary[]
  confirmedBookings: BookingSummary[]
};