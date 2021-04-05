import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmedBookingsSelector, requestedBookingsSelector } from "../../../state/bookings";
import { fetchBookings } from "../../../state/bookings/extraReducers";

import useUserToken from "../../../hooks/useUserToken";

export const useBookings = () => {
  const confirmedBookings = useSelector(confirmedBookingsSelector);
  const requestedBookings = useSelector(requestedBookingsSelector);
  const { get }  = useUserToken();
  const dispatch = useDispatch();

  const fetch = useCallback(async () => {
    const token = await get();

    if (token) {
      dispatch(fetchBookings(token));
    }
  }, []);

  return { confirmedBookings, requestedBookings, fetch };
};