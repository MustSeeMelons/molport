import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// XXX Supplier data should be in its own slice
export interface ISupplier {
  name: string;
  countryId: string;
  website: string;
  catalog: ICatalogEntry[];
}

export interface ICatalogEntry {
  "Molport ID": string;
  Supplier: string;
  SMILES: string;
  "Sell Unit": number;
  Measure: string;
  "Price (USD)": number;
  "Direct Shipping Time (Days)": number;
  "Direct Shipping Price (USD)": number;
}

export interface IGlobalState {
  isUiLocked: boolean;

  suppliers: ISupplier[];
}

const initialState: IGlobalState = {
  isUiLocked: true,
  suppliers: [],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUiLocked: (state: IGlobalState, action: PayloadAction<boolean>) => {
      state.isUiLocked = action.payload;
    },

    addSupplier: (state: IGlobalState, action: PayloadAction<ISupplier>) => {
      if (!state.suppliers.find((s) => s.name === action.payload.name)) {
        state.suppliers.push(action.payload);
      } else {
        console.warn(`Tried to add duplicate supplier: ${action.payload.name}`);
      }
    },
    setSupplierCatalog: (
      state: IGlobalState,
      action: PayloadAction<{ supplierName: string; catalog: ICatalogEntry[] }>
    ) => {
      const supplier = state.suppliers.find(
        (s) => s.name === action.payload.supplierName
      );

      if (supplier) {
        supplier.catalog = action.payload.catalog;
      } else {
        console.warn(`Supplier not found: ${action.payload.supplierName}`);
      }
    },
  },
});

export const { setUiLocked, addSupplier, setSupplierCatalog } =
  globalSlice.actions;
const reducer = globalSlice.reducer;

export { reducer as globalReducer };
