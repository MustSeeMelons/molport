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

const Container = styled.form``;

export const RegistrationForm = () => {
  return (
    <Container>
      <FormTitle>Supplier Registration</FormTitle>
      <FormContentContainer>
        <InputContainer>
          <FormLabel htmlFor="supplier_name">Name</FormLabel>
          <FormInput id="supplier_name" type="text"></FormInput>
        </InputContainer>

        <InputContainer>
          <FormLabel htmlFor="country">Country</FormLabel>
          <Select id="country" type="text">
            <option value=""></option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </Select>
        </InputContainer>

        <InputContainer>
          <FormLabel htmlFor="website">Website</FormLabel>
          <FormInput id="website" type="text"></FormInput>
        </InputContainer>

        <ButtonContainer>
          <FormButton
            tabIndex={0}
            type="button"
            onClick={() => {
              console.log("klik");
            }}
          >
            Sign Up
          </FormButton>
        </ButtonContainer>
      </FormContentContainer>
    </Container>
  );
};
