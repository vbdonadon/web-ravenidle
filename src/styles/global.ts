import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    display: block;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  script, style, title {
    display: none;
  }
`