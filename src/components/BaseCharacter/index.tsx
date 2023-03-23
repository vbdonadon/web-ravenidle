"use client"

import { useEffect, useState } from 'react';
import { CHARACTER } from '@/types/Character';

import GET from '@/services/Character/GET';

import * as S from './styles';

const BaseCharacter = () => {
  const [character, setCharacter] = useState<CHARACTER>()

  useEffect(() => {
    (async () => {
      setCharacter(await GET.GET_CHARACTER())
    })()
  }, [])

  return (
    <S.Container>
      <S.InfoContainer>
        <S.Name>{character?.name}</S.Name>
        <S.Level>Lv. {character?.level}</S.Level>
      </S.InfoContainer>
      <S.Healthbar>1020</S.Healthbar>
      <S.Manabar>540</S.Manabar>
      <S.OverallStatus>
        <S.Attribute>
          <S.ValueName>Ataque</S.ValueName>
          <S.Value>145</S.Value>
        </S.Attribute>
        <S.Attribute>
          <S.ValueName>Defesa</S.ValueName>
          <S.Value>175</S.Value>
        </S.Attribute>
      </S.OverallStatus>
    </S.Container>
  )
}

export default BaseCharacter