/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { ITheme } from "./styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    id: string;
    colors: {
      // Colors from the style guide
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
      // Colors found in the site
      textElement: string;
      inputBackground: string;
      background: string;
    };
  }
}
