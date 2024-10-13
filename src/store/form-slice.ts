import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFormField {
  key: string;
  value: string;
}

export interface IFormState {
  fieldValues: { [key: string]: string };
  errorValues: { [key: string]: string };
}

const initialState: IFormState = {
  fieldValues: {},
  errorValues: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFieldValue: (state: IFormState, action: PayloadAction<IFormField>) => {
      state.fieldValues[action.payload.key] = action.payload.value;
    },
    setErrorValue: (state: IFormState, action: PayloadAction<IFormField>) => {
      state.errorValues[action.payload.key] = action.payload.value;
    },
    clearField: (state: IFormState, action: PayloadAction<string>) => {
      delete state.fieldValues[action.payload];
    },
    clearError: (state: IFormState, action: PayloadAction<string>) => {
      delete state.fieldValues[action.payload];
    },
  },
});

export const { clearError, clearField, setErrorValue, setFieldValue } =
  formSlice.actions;
const reducer = formSlice.reducer;

export { reducer as formReducer };
