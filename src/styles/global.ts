'use client'

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    display: block;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  span {
    display: inline-block;
  }

  script, style, title {
    display: none;
  }
`