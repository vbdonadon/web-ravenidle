import styled from "styled-components";

import { theme } from '@/styles/theme';

import { POPPINS_LIGHT, POPPINS_REGULAR, POPPINS_MEDIUM, POPPINS_BOLD } from '@/styles/typography'

export const Container = styled.nav`
  position: fixed;
  top: 0px; left: 0px; 
  z-index: 40;

  display: block;
  padding: 0px 26px 0px 36px;
  width: 100%;
  height: 100vh;
  max-width: 360px;
  background-color: ${theme.primary.brand.default};
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

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;

  line-height: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: rgba(255,255,255,0.10);
  border-radius: 50%;

  i {
    transform: translate(1px, -1px);
  }
`

export const Sublist = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  gap: 2px;

  margin: 0px 0px 16px 0px;
`

export const SublistItem = styled.li`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    transition: background 0.4s ease-in-out;
    ${POPPINS_REGULAR.style};
    padding: 11px 24px 12px 44px;
    font-size: 16px;
    line-height: 25px;
    text-decoration: none;
    color: #7E828B;

    &:hover {
      background: linear-gradient(91.71deg, rgba(254, 218, 126, 0.2) 0%, rgba(254, 241, 126, 0) 102.02%);
      box-shadow:inset 0px 0px 0px 1px #FEF17E;
      border-radius: 100px;
      color: #FFF;
    }
  }
`