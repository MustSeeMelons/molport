import styled from "styled-components";
import {
  ButtonContainer,
  FormButton,
  FormContentContainer,
  FormTitle,
  InputContainer,
} from "./form";
import { FormLabel } from "../form-label";
import { Select } from "../select";
import { FormInput } from "../form-input";
import { ICatalogEntry, setSupplierCatalog } from "../../store/global-slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect, useState } from "react";
import { parseCatalog } from "../../xlsx-functions";

const Container = styled.form``;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
`;

const TableHeadingRow = styled.tr`
  background-color: ${(p) => p.theme.colors.brand_3};
  border-radius: 150px;

  :first-child {
    background-color: ${(p) => p.theme.colors.brand_3};
    border-top-left-radius: 150px;
    border-bottom-left-radius: 150px;
  }

  :last-child {
    background-color: ${(p) => p.theme.colors.brand_3};
    border-top-right-radius: 150px;
    border-bottom-right-radius: 150px;
  }
`;

const TableHeading = styled.th`
  padding: 16px;
`;

const TableRow = styled.tr`
  border-bottom: 2px solid ${(p) => p.theme.colors.light};
`;

const TadleData = styled.td`
  padding: 8px;
  text-align: center;
`;

const tableHeadings: string[] = [
  "Molport ID",
  "Supplier",
  "SMILES",
  "Sell Unit",
  "Measure",
  "Price (USD)",
  "Direct Shipping Time (Days)",
  "Direct Shipping Price (USD)",
];

export const UploadForm = () => {
  const suppliers = useAppSelector((state) => state.globalReducer.suppliers);
  const [selectedSupplier, setSupplier] = useState<string | undefined>();
  const [catalog, setCatalog] = useState<ICatalogEntry[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!selectedSupplier && suppliers.length > 0) {
      setSupplier(suppliers[0].name);
    }
  }, [suppliers]);

  const renderTable = () => {
    if (catalog.length === 0) {
      return null;
    }

    return (
      <>
        <FormTitle>Catalog preview</FormTitle>
        {/* XXX Depending on complexity we might want to add a table library */}
        <TableContainer>
          <Table>
            <thead>
              <TableHeadingRow>
                {tableHeadings.map((h, index) => (
                  <TableHeading key={`heading-${index}`}>{h}</TableHeading>
                ))}
              </TableHeadingRow>
            </thead>
            <tbody>
              {catalog.map((p, index) => {
                return (
                  <TableRow key={`row-${index}`}>
                    <TadleData>{p["Molport ID"]}</TadleData>
                    <TadleData>{p.Supplier}</TadleData>
                    <TadleData>{p.SMILES}</TadleData>
                    <TadleData>{p["Sell Unit"]}</TadleData>
                    <TadleData>{p.Measure}</TadleData>
                    <TadleData>{p["Price (USD)"]}</TadleData>
                    <TadleData>{p["Direct Shipping Time (Days)"]}</TadleData>
                    <TadleData>{p["Direct Shipping Price (USD)"]}</TadleData>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </TableContainer>
      </>
    );
  };

  return (
    <Container>
      <FormTitle>Upload catalog</FormTitle>
      <FormContentContainer>
        <InputContainer>
          <FormLabel htmlFor="country">Supplier</FormLabel>
          <Select
            id="supplier"
            type="text"
            value={selectedSupplier}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setSupplier(e.target.value);
            }}
          >
            {suppliers.map((s, index) => {
              return (
                <option
                  key={`supplier-${index}`}
                  // XXX we don't have a good id field in the data, using name
                  value={s.name}
                >
                  {s.name}
                </option>
              );
            })}
          </Select>
        </InputContainer>
        <InputContainer>
          <FormLabel htmlFor="catalog">File</FormLabel>
          <FormInput
            id="catalog"
            type="file"
            accept=".xlsx"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files) {
                const file = e.target.files[0];

                const reader = new FileReader();

                reader.onload = (readerResult) => {
                  if (readerResult.target && readerResult.target?.result) {
                    const categories = parseCatalog(
                      readerResult.target.result as ArrayBuffer
                    );

                    setCatalog(categories);
                  }
                };

                reader.readAsArrayBuffer(file);
              }
            }}
          ></FormInput>
        </InputContainer>
        <ButtonContainer>
          {/* XXX disable button if we have no file selected */}
          <FormButton
            tabIndex={0}
            type="button"
            onClick={() => {
              if (catalog.length > 0) {
                // XXX lock ui, show some spinner
                dispatch(
                  setSupplierCatalog({
                    catalog: catalog,
                    supplierName: selectedSupplier ?? "",
                  })
                );
              } else {
                console.warn(`Nothing to add yet`);
              }
            }}
          >
            Upload
          </FormButton>
        </ButtonContainer>
      </FormContentContainer>
      {renderTable()}
    </Container>
  );
};
