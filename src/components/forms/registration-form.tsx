import styled from "styled-components";
import { FormLabel } from "../form-label";
import { FormInput } from "../form-input";

import { Select } from "../select";
import {
  ButtonContainer,
  FormButton,
  FormContentContainer,
  FormTitle,
  InputContainer,
} from "./form";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setFieldValue } from "../../store/form-slice";
import { formFieldValueSelector } from "../../store/form-selectors";
import { useEffect, useState } from "react";
import { countryList, ICountry } from "../../country-api-stub";
import { registerSupplier } from "../../store/actions/global-actions";
import { useNavigate } from "react-router-dom";

const Container = styled.form``;

enum RegistrationField {
  SUPPLIER_NAME = "supplier_name",
  SUPPLIER_COUNTRY = "supplier_country",
  SUPPLIER_WEBSITE = "supplier_website",
}

export const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const [countries, setCountries] = useState<ICountry[]>([]);

  const navigate = useNavigate();

  const supplierName = useAppSelector((state) =>
    formFieldValueSelector(state, RegistrationField.SUPPLIER_NAME)
  );

  const supplierCountry = useAppSelector((state) =>
    formFieldValueSelector(state, RegistrationField.SUPPLIER_COUNTRY)
  );

  const supplierWebsite = useAppSelector((state) =>
    formFieldValueSelector(state, RegistrationField.SUPPLIER_WEBSITE)
  );

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flag", {
      mode: "no-cors",
    })
      .then(async (_response) => {
        // XXX API won't allow localhost, stubbing data
        setCountries(countryList);
      })
      .catch((_e) => {
        // XXX process error
      });
  }, []);

  return (
    <Container>
      <FormTitle>Supplier Registration</FormTitle>
      <FormContentContainer>
        <InputContainer>
          <FormLabel htmlFor="supplier_name">Name</FormLabel>
          <FormInput
            id="supplier_name"
            value={supplierName}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              // XXX a slight debounce could be nice on the handlers
              dispatch(
                setFieldValue({
                  key: RegistrationField.SUPPLIER_NAME,
                  value: e.target.value,
                })
              );
            }}
          ></FormInput>
        </InputContainer>

        {/* XXX Should be a searchable select for such a long list */}
        <InputContainer>
          <FormLabel htmlFor="country">Country</FormLabel>
          <Select
            id="country"
            type="text"
            value={supplierCountry}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              dispatch(
                setFieldValue({
                  key: RegistrationField.SUPPLIER_COUNTRY,
                  value: e.target.value,
                })
              );
            }}
          >
            <option value=""></option>
            {countries.map((c) => {
              return (
                <option key={`${c.flag}`} value={c.flag}>
                  {c.name.common}
                </option>
              );
            })}
          </Select>
        </InputContainer>

        <InputContainer>
          <FormLabel htmlFor="website">Website</FormLabel>
          <FormInput
            id="website"
            type="text"
            value={supplierWebsite}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                setFieldValue({
                  key: RegistrationField.SUPPLIER_WEBSITE,
                  value: e.target.value,
                })
              );
            }}
          ></FormInput>
        </InputContainer>

        <ButtonContainer>
          <FormButton
            tabIndex={0}
            type="button"
            onClick={() => {
              dispatch(
                // XXX lock ui, show some spinner
                registerSupplier({
                  navigate,
                  supplier: {
                    name: supplierName,
                    countryId: supplierCountry,
                    website: supplierWebsite,
                    catalog: [],
                  },
                })
              );
            }}
          >
            Sign Up
          </FormButton>
        </ButtonContainer>
      </FormContentContainer>
    </Container>
  );
};
