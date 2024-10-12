import styled from "styled-components";
import { Device } from "../../breakpoint";
import { Button } from "../button";

export const FormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  @media ${Device.MD} {
    row-gap: 8px;
  }

  @media ${Device.LG} {
    flex-direction: row;
    column-gap: 16px;
  }
`;

export const FormTitle = styled.div`
  padding: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 0;
  font-size: 24px;
`;

// Label+Input container
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonContainer = styled(InputContainer)`
  justify-content: flex-end;
`;

export const FormButton = styled(Button)`
  margin-top: 40px;

  @media ${Device.LG} {
    margin-top: 0;
  }
`;
