import styled from "styled-components";
import { defaultTransition } from "../style";
import TickSVG from "../assets/tick.svg";

const Tick = styled(TickSVG)`
  position: absolute;
  width: 16px;
  height: 12px;
  z-index: 10;
  top: 20px;
  right: 20px;
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
  min-width: 300px;
`;

const SelectElement = styled.select`
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
  appearance: none;
  width: 100%;
  cursor: pointer;

  ${defaultTransition};

  &:focus {
    border-color: ${(p) => p.theme.colors.brand_2};
  }
`;

type SelectProps = React.HTMLProps<HTMLSelectElement>;

export const Select: React.FC<SelectProps> = (props) => {
  return (
    <Container>
      <Tick />
      <SelectElement id={props.id} onChange={props.onChange}>
        {props.children}
      </SelectElement>
    </Container>
  );
};
