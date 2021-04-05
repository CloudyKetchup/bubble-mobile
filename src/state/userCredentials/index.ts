import userCredentialsSlice from "./slice";

export * from "./selectors";
export const { setUserToken } = userCredentialsSlice.actions;
export { userCredentialsSlice };