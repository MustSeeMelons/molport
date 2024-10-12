import React from "react";
import styled from "styled-components";
import { defaultTransition } from "../style";

const Container = styled.button`
  padding: 12px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${(p) => p.theme.colors.brand_1};
  cursor: pointer;
  border-radius: 150px;
  font-size: 20px;

  ${defaultTransition}

  &:hover {
    background-color: ${(p) => p.theme.colors.primaryHover};
  }
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Container
      tabIndex={props.tabIndex}
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </Container>
  );
};
