"use client"

import { useEffect, useState } from 'react';
import { CHARACTER } from '@/types/Character';

import GET from '@/services/Character/GET';

import * as S from './styles';

const BaseCharacter = () => {
  const [character, setCharacter] = useState<CHARACTER>()
  const [maximumHeath, setMaximumHealth] = useState(0)
  const [maximumMana, setMaximumMana] = useState(0)

  useEffect(() => {
    (async () => {
      await GET.GET_CHARACTER().then(response => {
        if (response?.id) {
          response.character_status.find(status => status.status.name == "MAXIMUM_HEALTH" && setMaximumHealth(status.status_value))
          response.character_status.find(status => status.status.name == "MAXIMUM_MANA" && setMaximumMana(status.status_value))
          setCharacter(response)
        }
      })
    })()
  }, [])

  return (
    <S.Controller>
      <S.EquipamentList>
        <S.EquipamentItem></S.EquipamentItem>

        <S.EquipamentItem></S.EquipamentItem>

        <S.EquipamentItem></S.EquipamentItem>

        <S.EquipamentItem></S.EquipamentItem>

        <S.EquipamentItem></S.EquipamentItem>
      </S.EquipamentList>

      <S.Container>
        <S.InfoContainer>
          <S.Name>{character?.name}</S.Name>
          <S.Level>Lv. {character?.level}</S.Level>
        </S.InfoContainer>
        <S.Healthbar>{maximumHeath}</S.Healthbar>
        <S.Manabar>{maximumMana}</S.Manabar>
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

      <S.EquipamentList>
        <S.EquipamentItem></S.EquipamentItem>

        <S.EquipamentItem></S.EquipamentItem>

        <S.EquipamentItem></S.EquipamentItem>

        <S.EquipamentItem></S.EquipamentItem>

        <S.EquipamentItem></S.EquipamentItem>
      </S.EquipamentList>
    </S.Controller>
  )
}

export default BaseCharacter