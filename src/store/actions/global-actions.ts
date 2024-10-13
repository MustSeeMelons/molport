import { createAsyncThunk } from "@reduxjs/toolkit";
import { addSupplier, ISupplier } from "../global-slice";
import { NavigateFunction } from "react-router-dom";
import { countryList } from "../../country-api-stub";
import { parseCatalog } from "../../xlsx-functions";

// XXX The navigate should be placed in a middleware with its own action
export const registerSupplier = createAsyncThunk(
  "supplier/register",
  async (
    arg: { supplier: ISupplier; navigate: NavigateFunction },
    thunkAPI
  ) => {
    // XXX Validate supplier
    // XXX Show errors if any
    // XXX Do the API call

    // Skip everything and simply add the supplier & redirect
    thunkAPI.dispatch(addSupplier(arg.supplier));
    arg.navigate("/upload");
  }
);

interface IInitialSupplier {
  name: string;
  country: string;
  website: string;
  fileName: string;
}

const suppliers: IInitialSupplier[] = [
  {
    name: "ChemDiv, Inc",
    country: "United States",
    website: "http://www.chemdiv.com/",
    fileName: "/ChemDiv, Inc..xlsx",
  },
  {
    name: "BIONET - Key Organics Ltd.",
    country: "United Kingdom",
    website: "http://www.keyorganics.net/",
    fileName: "/BIONET - Key Organics Ltd..xlsx",
  },
  {
    name: "AnalytiCon Discovery - a Division of BRAIN Biotech AG",
    country: "Germany",
    website: "http://www.ac-discovery.com/",
    fileName: "/AnalytiCon Discovery - a Division of BRAIN Biotech AG.xlsx",
  },
];

export const fetchInitialData = createAsyncThunk(
  "supplier/initial",
  async (_arg, thunkAPI) => {
    const promises = suppliers.map((supplier) => {
      return fetch(supplier.fileName).then(async (response) => {
        if (response.ok) {
          const data = await response.arrayBuffer();

          const categories = parseCatalog(data);

          const result: ISupplier = {
            name: supplier.name,
            website: supplier.website,
            countryId:
              // Naivly try to look up correct country id (using flag as id)
              countryList.find(
                (c) =>
                  c.name.common.toLowerCase() === supplier.country.toLowerCase()
              )?.flag ?? "",
            catalog: categories,
          };

          return result;
        }
      });
    });

    const data = await Promise.all(promises);

    const validData = data.filter((data) => !!data);
    validData.forEach((data) => thunkAPI.dispatch(addSupplier(data)));

    // XXX unlock ui
  }
);
