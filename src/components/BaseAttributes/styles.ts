import styled from "styled-components";

import { theme } from "@/styles/theme";
import { CAUDEX_BOLD, CAUDEX_REGULAR, POPPINS_MEDIUM, POPPINS_LIGHT } from "@/styles/typography";

export const Container = styled.div`
  background-color: ${theme.primary.brand.default};
  padding: 32px 32px 32px 32px;
  border-radius: 8px;
`

export const Title = styled.strong`
  ${POPPINS_MEDIUM.style};
  color: ${theme.primary.neutral.white};
  margin: 0px 0px 32px 0px;
  font-size: 20px;
`

export const Attributes = styled.ul``

export const Attribute = styled.li`
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

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  ${CAUDEX_REGULAR.style};
  font-size: 32px;
  line-height: 0px;
  color: ${theme.primary.neutral.white};
`