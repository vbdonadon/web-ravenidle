'use client'

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: block;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  background: url('/background-container.webp');
  padding: 0px 0px 0px 360px;
  z-index: 10;

  &::before {
    content: '';
    display: block;
    max-width: 100%;
    width: 100%;  
    height: 100vh;
    background-color: rgba(19, 20, 22, 0.75);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -10;
  }
`
