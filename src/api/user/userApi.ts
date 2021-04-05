import axios from "axios";

import config from "../../config.json";
import { ApiResponse } from "../../models/api";
import { IUser } from "../../models/user";

const api = axios.create({ baseURL: `${config.api.url}` });

export function login(email: string, password: string): Promise<ApiResponse<{ token: string }>> {
  const data = { email, password };

  return api.post("/auth/local?web=0", data)
    .then(({ data }) => ({ data }))
    .catch(error => ({ error }))
}

export function getUser(token: string): Promise<ApiResponse<IUser>> {
  const options = {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };

  return api.get("/api/user", options)
    .then(({ data }) => ({ data }))
    .catch(error => ({ error }))
}