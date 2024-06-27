import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

import { GlobalStyles } from "../styles/GlobalStyles";

export default function MainTemplate({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>{children}</main>
    </ThemeProvider>
  );
}
