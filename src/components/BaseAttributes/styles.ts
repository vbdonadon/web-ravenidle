import styled from "styled-components";

import { theme } from "@/styles/theme";
import { CAUDEX_REGULAR, POPPINS_MEDIUM, POPPINS_LIGHT, CAUDEX_BOLD } from "@/styles/typography";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 29px;
`

export const Title = styled.strong`
  ${POPPINS_MEDIUM.style};
  color: ${theme.primary.neutral.white};
  margin: 0px 0px 32px 0px;
  font-size: 20px;
`

export const AttributeList = styled.ul``

export const AttributeItem = styled.li`
  ${CAUDEX_REGULAR.style};
  color: ${theme.primary.neutral.white};
  padding: 28px 0px 29px 0px;
  font-size: 20px;

  border-bottom: 1px solid rgba(0, 0, 0, 20%);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
  
  span {
    color: #FFC670;
    width: 42px;
    height: 42px;
    background-color: ${theme.primary.brand.secondary};
    border-radius: 4px;
    ${CAUDEX_BOLD.style};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const Button = styled.button`
  background-color: ${theme.primary.brand.secondary};
  border-radius: 4px;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(0, 0, 0, 20%);

  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  ${CAUDEX_REGULAR.style};
  font-size: 32px;
  line-height: 0px;
  color: ${theme.primary.neutral.white};

  &:hover, &:focus {
    color:  #FFC670;
    box-shadow: 0px 0px 0px 1px  #FFC670;
  }
`

export const Column = styled.div`
  background-color: ${theme.primary.brand.default};
  padding: 32px 32px 32px 32px;
  border-radius: 8px;
  min-width: 560px;
`

export const SecondaryList = styled.ul`
`

export const SecondaryItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${POPPINS_LIGHT.style};
  font-size: 16px;
  line-height: 160%;
  color: ${theme.primary.neutral.white};
  
  padding: 18px 0px 18px 0px;
  border-bottom: 1px solid rgba(0,0,0,20%);

  &:last-child {
    border-bottom: none;
  }
`

export const SecondaryName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  gap: 16px;
`

export const Values = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Value = styled.li`
  min-width: 82px;
  gap: 22px;

  &:nth-child(2) {
    color: #FFC670;
  }

  &:nth-child(3) {
    color: #66FF63;
  }
`

export const AttributeName = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center ;
  justify-content: stretch;
  gap: 16px;
`

export const AttributeValue = styled.strong`
  background-color: ${theme.primary.brand.secondary};
  margin: 0px 12px 0px auto;
  border-radius: 4px;
  width: 42px;
  height: 42px;
  box-shadow: 1px solid rgba(0, 0, 0, 20%);

  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  ${CAUDEX_REGULAR.style};
  font-size: 20px;
  line-height: 0px;
  color: ${theme.primary.neutral.white};
`

export const Image = styled.img`
  max-width: 32px;
  width: 100%;
`