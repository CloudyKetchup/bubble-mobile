import { configureStore } from "@reduxjs/toolkit";

import createSecureStore from "redux-persist-expo-securestore";
import { persistReducer } from "redux-persist";

import { accountSlice } from "./account";
import { sittersSlice } from "./sitters";
import { bookingsSlice } from "./bookings";
import { userCredentialsSlice } from "./userCredentials";

export const secureStorage = createSecureStore();

const securePersistConfig = {
  key: "user_token",
  storage: secureStorage
};

const store = configureStore({
  reducer: {
    accountReducer: accountSlice.reducer,
    sittersReducer: sittersSlice.reducer,
    bookingsReducer: bookingsSlice.reducer,
    userTokenReducer: persistReducer(securePersistConfig, userCredentialsSlice.reducer)
  }
});

export type AppState = ReturnType<typeof store.getState>;

export default store;