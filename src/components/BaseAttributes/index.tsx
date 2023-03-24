"use client"

import { useEffect, useState } from 'react';
import {  CHARACTER } from '@/types/Character';

import GET from '@/services/Character/GET';
import UPDATE from '@/services/Character/UPDATE';

import * as S from './styles';

const BaseAttributes = () => {
  const [character, setCharacter] = useState<CHARACTER>()
  const [availableAttribute, setAvailableAttribute] = useState<number>(0);

  const UPDATE_ATTRIBUTE = (event: any) => {
    event.preventDefault();
    console.log("UPDATE_ATTRIBUTE")
  }

  useEffect(() => {
    (async () => {
      await setCharacter(await GET.GET_CHARACTER())
    })()
  }, [])
  
  return (
    <S.Container>
      <S.Column>
        <S.Title>Primary Attributes</S.Title>
        <S.AttributeList onSubmit={() => UPDATE_ATTRIBUTE(event)}>
          {character?.character_attributes.map(attribute => (
            <S.AttributeItem key={attribute.id}>
              <S.AttributeName>
                <S.Image 
                  src={`/icons/${attribute.attributes.name}-icon.png`}
                />
                {attribute.attributes.name}
              </S.AttributeName>

              <S.AttributeValue value={attribute.attribute_value} readOnly />
              
              <S.Buttons>              
                <S.Button type='button' disabled={!!character.attribute_points}>
                  + 
                </S.Button>

                <S.Button type='button'>
                  -
                </S.Button>
              </S.Buttons>
            </S.AttributeItem>
          ))}
          
          <S.AttributeItem>
            Points Available: <span>{character?.attribute_points}</span>
          </S.AttributeItem>
        </S.AttributeList>
      </S.Column>

      <S.Column>
        <S.Title>Secondary Attributes</S.Title>
        <S.SecondaryList>
          {character?.character_status.map(secondary => (
            <S.SecondaryItem key={secondary.id}>
              <S.SecondaryName>
                <S.Image src="/icons/magical-attack-icon.png" />
                {secondary.status.name}
              </S.SecondaryName>

              <S.Values>
                <S.Value>
                  {secondary.status_value}
                </S.Value>

                <S.Value>
                  0
                </S.Value>

                <S.Value>
                  0
                </S.Value>
              </S.Values>
            </S.SecondaryItem>
          ))}
        </S.SecondaryList>
      </S.Column>
    </S.Container>
  )
}

export default BaseAttributes 