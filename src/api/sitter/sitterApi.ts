import axios from "axios";

import { ApiResponse } from "../../models/api";
import { ISitter } from "../../models/sitter";

import config from "../../config.json";

const api = axios.create({ baseURL: `${config.api.url}` });

export function findSitters(token: string): Promise<ApiResponse<ISitter[]>> {
  const options = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  return api.get("/api/search", options)
    .then(({ data }) => ({ data }))
    .catch(error => ({ error }));
}