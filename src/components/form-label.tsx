import React from "react";
import styled from "styled-components";

const Container = styled.label`
  box-sizing: border-box;
  display: inline-block;
  font-weight: 400;
  line-height: 1.2;
  font-size: 16px;
  padding: 8px;
`;

type FormLabelProps = React.HTMLProps<HTMLLabelElement>;

export const FormLabel: React.FC<FormLabelProps> = (props) => {
  return <Container htmlFor={props.htmlFor}>{props.children}</Container>;
};
