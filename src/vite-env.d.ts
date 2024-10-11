/// <reference types="vite/client" />

import { ITheme } from "./styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    id: string;
    colors: {
      brand_1: string;
      brand_2: string;
      brand_3: string;
      primary: string;
      primaryHover: string;
      secondary: string;
      secondaryHover: string;
      accent: string;
      accentHover: string;
      success: string;
      info: string;
      warning: string;
      danger: string;
      light: string;
      dark: string;
      neutral: string;
      linkColor: string;
      navLinks: string;
    };
  }
}
