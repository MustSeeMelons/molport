import styled from "styled-components";

import LogoSVG from "../assets/logo.svg";
import { breakpoint, Device } from "../breakpoint";
import { OurLink } from "./link";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;

  @media ${Device.LG} {
    max-width: ${breakpoint.LG};
  }

  @media ${Device.XL} {
    max-width: ${breakpoint.XL};
  }
`;

const Logo = styled(LogoSVG)`
  width: 135px;
  height: 41px;

  &:hover {
    cursor: pointer;

    opacity: 0.8;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const VerticalBar = styled.div`
  width: 2px;
  font-size: 16px;
  margin-left: 16px;
  margin-right: 16px;
`;

type HeaderProps = React.HTMLProps<HTMLDivElement>;

export const Header: React.FC<HeaderProps> = (_props) => {
  return (
    <Container>
      <Logo />
      <LinkContainer>
        <OurLink to="/register">Register</OurLink>
        <VerticalBar>I</VerticalBar>
        <OurLink to="/upload">Upload</OurLink>
      </LinkContainer>
    </Container>
  );
};
