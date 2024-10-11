import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { globalReducer } from "./global-slice";

export const store = configureStore({
  reducer: {
    globalReducer,
  },
  devTools: true,
});

// Derived Redux types
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// // Types version of the generic useDispatch/useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();
