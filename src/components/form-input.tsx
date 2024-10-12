import styled from "styled-components";
import { defaultTransition } from "../style";
import React from "react";

const Container = styled.input`
  box-sizing: border-box;
  background-color: ${(p) => p.theme.colors.inputBackground};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  padding: 12px 16px;
  color: ${(p) => p.theme.colors.brand_2};
  outline: none;
  border-radius: 80px;
  border: 1px solid #e6e6e6;
  font-family: inherit;
  width: 100%;
  cursor: pointer;

  ${defaultTransition};

  &:focus {
    border-color: ${(p) => p.theme.colors.brand_2};
    background-color: ${(p) => p.theme.colors.background};
  }

  &::file-selector-button {
    border-radius: 150px;
    outline: none;
    border: none;
    font-family: inherit;
    margin-right: 8px;
  }
`;

type FormInputProps = React.HTMLProps<HTMLInputElement>;

// Basic app input
export const FormInput: React.FC<FormInputProps> = (props) => {
  return (
    <Container
      id={props.id}
      type={props.type}
      className={props.className}
      onChange={props.onChange}
    >
      {props.children}
    </Container>
  );
};
