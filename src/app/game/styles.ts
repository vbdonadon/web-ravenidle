import styled from "styled-components";

export const Container = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  background: url('/background-container.webp');

  &::before {
    content: '';
    display: block;
    max-width: 100%;
    width: 100%;  
    height: 100vh;
    background-color: rgba(19, 20, 22, 0.75);
  }
`
