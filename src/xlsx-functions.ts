import * as XLSX from "xlsx";
import { ICatalogEntry } from "./store/global-slice";

// XXX proper validation should be done
export const parseCatalog = (array: ArrayBuffer): ICatalogEntry[] => {
  try {
    const workbook = XLSX.read(array, { type: "array" });

    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 0,
    });

    return jsonData as ICatalogEntry[];
  } catch (_e) {
    return [];
  }
};
