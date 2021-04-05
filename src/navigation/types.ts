import { ISitter } from "../models/sitter";

export type RootStackParamList = {
  Root: undefined,
  LoginScreen: undefined
};

export type SitterProfileParamList = {
  SitterProfile: {
    sitter: ISitter
  }
};

export type HomeScreenParamList = {
  Home: undefined
  Sitters: undefined
  Bookings: undefined
};