interface Breakpoint {
  SM: string;
  MD: string;
  LG: string;
  XL: string;
}

export const breakpoint: Breakpoint = {
  SM: "400px",
  MD: "720px",
  LG: "1280px",
  XL: "1440px",
};

export const Device = {
  SM: `(min-width: ${breakpoint.SM})`,
  MD: `(min-width: ${breakpoint.MD})`,
  LG: `(min-width: ${breakpoint.LG})`,
  XL: `(min-width: ${breakpoint.XL})`,
};
