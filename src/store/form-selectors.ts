import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "./store";

export const formFieldValueSelector = createSelector(
  [(state: AppState) => state, (_state, fieldKey: string) => fieldKey],
  (state, fieldKey: string) => {
    return state.formReducer.fieldValues[fieldKey];
  }
);
