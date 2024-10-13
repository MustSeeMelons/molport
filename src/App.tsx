import styled from "styled-components";
import { breakpoint, Device } from "./breakpoint";
import { RegistrationForm } from "./components/forms/registration-form";
import { Header } from "./components/header";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { UploadForm } from "./components/forms/upload-form";
import { useAppDispatch } from "./store/store";
import { fetchInitialData } from "./store/actions/global-actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;

  @media ${Device.MD} {
    padding: 32px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;

  @media ${Device.LG} {
    max-width: ${breakpoint.LG};
  }

  @media ${Device.XL} {
    max-width: ${breakpoint.XL};
  }
`;

function App() {
  const dispatch = useAppDispatch();

  // Fetch the initial XLSX data
  useEffect(() => {
    dispatch(fetchInitialData());
  }, []);

  return (
    <Container>
      <Header />
      <ContentContainer>
        <Routes>
          {/* XXX add landing page */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/upload" element={<UploadForm />} />
          {/* XXX add proper 404 page */}
          <Route path="*" element={<RegistrationForm />} />
        </Routes>
      </ContentContainer>
    </Container>
  );
}

export default App;
