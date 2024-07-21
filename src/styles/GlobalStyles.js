import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
  }  

  h1, h2, h3, h4, h5, p, span, label, input, button {
    font-family: "outfit", "sans-serif";
    -webkit-font-smoothing: antialiased;
  } 
`;
