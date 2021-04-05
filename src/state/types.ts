import { PayloadAction } from "@reduxjs/toolkit";

export type SliceReducer<S, T> = (state: S, action: PayloadAction<T>) => void;