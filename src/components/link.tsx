import { Link } from "react-router-dom";
import styled from "styled-components";

export const OurLink = styled(Link)`
  color: ${(p) => p.theme.colors.brand_2};
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`;
