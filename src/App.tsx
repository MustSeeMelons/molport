import styled from "styled-components";
import { Device } from "./breakpoint";

const Container = styled.div`
  background-color: ${(p) => p.theme.colors.danger};
  color: red;

  @media ${Device.MD} {
    background-color: ${(p) => p.theme.colors.accentHover};
    color: red;
  }
`;

function App() {
  // TODO sidebar for routes
  // TODO 1. registration route
  // XXX select an existing supplier from a list for catalog upload?
  // TODO 2. catalog upload route
  // TODO upload xlsx
  // TODO display
  // XXX link catalog to selected supplier
  return <Container>content</Container>;
}

export default App;
