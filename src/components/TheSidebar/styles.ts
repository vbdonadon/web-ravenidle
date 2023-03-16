import styled from "styled-components";

import { POPPINS_LIGHT, POPPINS_REGULAR, POPPINS_MEDIUM, POPPINS_BOLD } from '@/styles/typography'

export const Container = styled.aside`
  position: fixed;
  top: 0px; left: 0px;
  z-index: 40;

  display: block;
  width: 100%;
  height: 100vh;
  max-width: 360px;
  background-color: #131416;
`

export const Logo = styled.img`
  width: 100%;
  max-width: 290px;
  padding: 34px 0px 0px 0px;
  margin: 0px auto 64px auto;
`

export const List = styled.ul``

export const ListItem = styled.li`
  ${POPPINS_REGULAR.style};
  padding: 0px 24px 0px 44px;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: rgba(255,255,255,.8);
  margin: 0px 0px 8px 0px;
`

export const Sublist = styled.ul`
  margin: 0px 0px 16px 0px;
`

export const SublistItem = styled.li`
  a {
    transition: background 0.4s ease-in-out;
    ${POPPINS_REGULAR.style};
    padding: 13px 24px 14px 44px;
    font-size: 16px;
    line-height: 25px;
    text-decoration: none;
    color: #7E828B;

    &:hover {
      background-color: #1A1B1C;
      border-right: 2px solid #3CF3C6;
      color: #3CF3C6;
    }
  }
`