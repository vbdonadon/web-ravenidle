import { POPPINS_REGULAR, POPPINS_BOLD, CAUDEX_REGULAR } from './../../styles/typography';
import { POPPINS_MEDIUM } from '@/styles/typography';
import styled from "styled-components";

import { theme } from "@/styles/theme";

export const Controller = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
  gap: 16px;
`

export const Container = styled.div`
  background-color: ${theme.primary.brand.default};
  padding: 32px 32px 32px 32px;
  border-radius: 8px;
  min-width: 391px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  padding: 192px 0px 35px 0px;
`

export const Name = styled.h2`
  ${POPPINS_MEDIUM.style};
  color: ${theme.primary.neutral.white};
  font-size: 32px;
`

export const Class = styled.strong``

export const Level = styled.strong`
  ${POPPINS_REGULAR.style};
  color: ${theme.primary.support.tertiary};
  font-size: 32px;
`

export const Healthbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9px 24px 9px 24px;
  border-radius: 4px;
  border: 2px solid ${theme.primary.brand.secondary};

  background: linear-gradient(180deg, #36D259 0%, rgba(0, 0, 0, 0) 251.21%);

  ${POPPINS_BOLD.style};
  color: ${theme.primary.brand.secondary};
  font-size: 16px;

  margin: 0px 0px 18px;
`
export const Manabar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9px 24px 9px 24px;
  border-radius: 4px;
  border: 2px solid ${theme.primary.brand.secondary};

  background: linear-gradient(180deg, #3662D2 0%, rgba(0, 0, 0, 0) 251.21%);

  ${POPPINS_BOLD.style};
  color: ${theme.primary.brand.secondary};
  font-size: 16px;

  margin: 0px 0px 46px;
`

export const OverallStatus = styled.div`
  background-color: rgba(0, 0, 0, 20%);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  padding: 27px 0px 20px 0px;
  border-radius: 4px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(50% - 1px);
    transform: translateY(-50%);

    background-color: rgba(207, 126, 254, 0.2);
    width: 100%;
    max-width: 1px;
    height: calc(100% - 44px);
  }
`

export const Attribute = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Value = styled.strong`
  ${POPPINS_MEDIUM.style};
  font-size: 40px;
  color: ${theme.primary.neutral.white};
`

export const ValueName = styled.strong`
  ${CAUDEX_REGULAR.style};
  color: ${theme.primary.neutral.white};
  text-align: center;
  border: 1px solid linear-gradient(267.56deg, rgba(207, 126, 254, 0.3) -5.55%, rgba(207, 126, 254, 0) 90.04%);
`

export const EquipamentList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`

export const EquipamentItem = styled.li`
  background-color: ${theme.primary.brand.default};
  border-radius: 4px;
  width: 112px;
  height: 112px;
`