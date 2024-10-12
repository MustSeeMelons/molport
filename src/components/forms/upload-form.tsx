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

// XXX dummy test data
interface ICatalogEntry {
  molportId: string;
  supplier: string;
  SMILES: string;
  sellUnit: number;
  measure: string;
  price: number;
  directShippingTime: number;
  directShippingPrice: number;
}

const produce: ICatalogEntry[] = [
  {
    molportId: "Molport-000-000-277",
    supplier: "BIONET - Key Organics Ltd.",
    SMILES: "Oc1c(CC=C)cccc1C=O",
    sellUnit: 1,
    measure: "g",
    price: 80,
    directShippingPrice: 100,
    directShippingTime: 3,
  },
  {
    molportId: "Molport-000-000-277",
    supplier: "BIONET - Key Organics Ltd.",
    SMILES: "Oc1c(CC=C)cccc1C=O",
    sellUnit: 1,
    measure: "g",
    price: 80,
    directShippingPrice: 100,
    directShippingTime: 3,
  },
  {
    molportId: "Molport-000-000-277",
    supplier: "BIONET - Key Organics Ltd.",
    SMILES: "Oc1c(CC=C)cccc1C=O",
    sellUnit: 1,
    measure: "g",
    price: 80,
    directShippingPrice: 100,
    directShippingTime: 3,
  },
  {
    molportId: "Molport-000-000-277",
    supplier: "BIONET - Key Organics Ltd.",
    SMILES: "Oc1c(CC=C)cccc1C=O",
    sellUnit: 1,
    measure: "g",
    price: 80,
    directShippingPrice: 100,
    directShippingTime: 3,
  },
  {
    molportId: "Molport-000-000-277",
    supplier: "BIONET - Key Organics Ltd.",
    SMILES: "Oc1c(CC=C)cccc1C=O",
    sellUnit: 1,
    measure: "g",
    price: 80,
    directShippingPrice: 100,
    directShippingTime: 3,
  },
  {
    molportId: "Molport-000-000-277",
    supplier: "BIONET - Key Organics Ltd.",
    SMILES: "Oc1c(CC=C)cccc1C=O",
    sellUnit: 1,
    measure: "g",
    price: 80,
    directShippingPrice: 100,
    directShippingTime: 3,
  },
  {
    molportId: "Molport-000-000-277",
    supplier: "BIONET - Key Organics Ltd.",
    SMILES: "Oc1c(CC=C)cccc1C=O",
    sellUnit: 1,
    measure: "g",
    price: 80,
    directShippingPrice: 100,
    directShippingTime: 3,
  },
];

export const UploadForm = () => {
  return (
    <Container>
      <FormTitle>Upload catalog</FormTitle>
      <FormContentContainer>
        <InputContainer>
          <FormLabel htmlFor="country">Supplier</FormLabel>
          <Select id="supplier" type="text">
            <option value=""></option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </Select>
        </InputContainer>
        <InputContainer>
          <FormLabel htmlFor="catalog">File</FormLabel>
          <FormInput id="catalog" type="file"></FormInput>
        </InputContainer>
        <ButtonContainer>
          <FormButton
            tabIndex={0}
            type="button"
            onClick={() => {
              console.log("klik");
            }}
          >
            Upload
          </FormButton>
        </ButtonContainer>
      </FormContentContainer>
      <FormTitle>Catalog preview</FormTitle>
      {/* XXX Depending on complexity we might want to add a table library */}
      <TableContainer>
        <Table>
          <TableHeadingRow>
            {tableHeadings.map((h) => (
              <TableHeading>{h}</TableHeading>
            ))}
          </TableHeadingRow>
          {produce.map((p) => {
            return (
              <TableRow>
                <TadleData>{p.molportId}</TadleData>
                <TadleData>{p.supplier}</TadleData>
                <TadleData>{p.SMILES}</TadleData>
                <TadleData>{p.sellUnit}</TadleData>
                <TadleData>{p.measure}</TadleData>
                <TadleData>{p.price}</TadleData>
                <TadleData>{p.directShippingTime}</TadleData>
                <TadleData>{p.directShippingPrice}</TadleData>
              </TableRow>
            );
          })}
        </Table>
      </TableContainer>
    </Container>
  );
};
