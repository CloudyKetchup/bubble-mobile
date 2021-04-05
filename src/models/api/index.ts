import { AxiosError } from "axios";

export type ApiResponse<T, E = AxiosError> = {
  data?: T
  error?: E
};