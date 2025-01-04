import { createGlobalTheme } from "@vanilla-extract/css";

const theme = createGlobalTheme(":root", {
  gray: {
    100: "#D6D6D6",
    200: "#BEBEBE",
    300: "#838383",
    500: "#2D2D2D",
    600: "#262626",
  },
  green: {
    100: "#3CD364",
    200: "#2E6B3E",
  },
  white: "#FFFFFF",
  black: "#222222",
});

export default theme;