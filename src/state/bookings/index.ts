import bookingsSlice from "./slice";

export * from "./selectors";
export const { setConfirmedBookings, setRequestedBookings } = bookingsSlice.actions;
export { bookingsSlice };