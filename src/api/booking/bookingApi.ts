import axios from "axios";

import config from "../../config.json";
import { ApiResponse } from "../../models/api";
import { ActiveBookingSummary, IBooking, } from "../../models/booking";

const api = axios.create({ baseURL: config.api.url });

export function fetchActiveBookings(token: string): Promise<ApiResponse<IBooking[]>> {
  const options = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  return api.get("/api/booking/activesummary", options)
    .then(({ data }) => ({ data }))
    .catch(error => ({ error }));
}

export function fetchBooking(id: string, token: string): Promise<ApiResponse<ActiveBookingSummary>> {
  const options = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  return api.get(`/api/booking/${id}`, options)
    .then(({ data }) => ({ data }))
    .catch(error => ({ error }));
}