'use client'

import { POPPINS_MEDIUM } from "@/styles/typography";

import ModuleEquipaments from '@/components/ModuleEquipaments'
import ModuleAttributes from '@/components/ModuleAttributes'

import * as S from './styles'

const CharacterPage = () => {
  return (
    <S.Wrapper>
      <S.Title>Nickname <span>Paladin</span></S.Title>

      <ModuleEquipaments />
      <ModuleAttributes />
    </S.Wrapper>
  );
}

export default CharacterPage;