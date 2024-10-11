import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IGlobalState {
  isUiLocked: boolean;
}

const initialState: IGlobalState = {
  isUiLocked: true,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUiLocked: (state: IGlobalState, action: PayloadAction<boolean>) => {
      // Note: Immer is used internally, so we can modify the state like an animal, yay
      state.isUiLocked = action.payload;
    },
  },
});

export const { setUiLocked } = globalSlice.actions;
const reducer = globalSlice.reducer;

export { reducer as globalReducer };
