import accountSlice from "./slice";

export * from "./selectors";
export { default as accountSlice } from "./slice";
export const { setUserProfile, setUserAuthenticated, clearUserProfile } = accountSlice.actions;