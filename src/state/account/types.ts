import { IUser } from "../../models/user";

export type AccountState = {
  authenticated: boolean
  userProfile: IUser | null
};