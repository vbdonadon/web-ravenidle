"use client"

import { useEffect, useState } from 'react';

import GET from '@/services/Character/GET';

import * as S from './styles';
import {  CHARACTER } from '@/types/Character';

const BaseAttributes = () => {
  const [character, setCharacter] = useState<CHARACTER>()
  const [currentAttribute, setCurrentAttribute] = useState<number>(0);

  useEffect(() => {
    (async () => {
      await setCharacter(await GET.GET_CHARACTER())
      await setCurrentAttribute((await GET.GET_CHARACTER()).attribute_points)
    })()
  }, [])
  
  return (
    <S.Container>
      <S.Column>
        <S.Title>Primary Attributes</S.Title>
        <S.AttributeList>
          {character?.character_attributes.map(attribute => (
            <S.AttributeItem key={attribute.id}>
              <S.AttributeName>
                <S.Image 
                  src={`/icons/${attribute.attributes.name}-icon.png`}
                />
                {attribute.attributes.name}
              </S.AttributeName>

              <S.AttributeValue>
                {attribute.attribute_value}
              </S.AttributeValue>
              
              <S.Buttons>              
                <S.Button>
                  + 
                </S.Button>

                <S.Button>
                  -
                </S.Button>
              </S.Buttons>
            </S.AttributeItem>
          ))}
          
          <S.AttributeItem>
          Points Available: <span>{currentAttribute}</span>
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