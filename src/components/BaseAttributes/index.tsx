"use client"

import { useEffect, useRef, useState } from 'react';

import GET from '@/services/Character/GET';
import UPDATE from '@/services/Character/UPDATE';

import {  CHARACTER } from '@/types/Character';
import { IUpdateAttribute } from '@/services/Character/UPDATE';

import * as S from './styles';
import { useRouter } from 'next/router';

const BaseAttributes = () => {
  const [character, setCharacter] = useState<CHARACTER>()
  const [currentMight, setCurrentMight] = useState({ currentValue: 0, plusValue: 0 })
  const [currentIntelligence, setCurrentIntelligence] = useState({ currentValue: 0, plusValue: 0 })
  const [currentDexterity, setCurrentDexterity] = useState({ currentValue: 0, plusValue: 0 })
  const [currentWisdom, setCurrentWisdom] = useState({ currentValue: 0, plusValue: 0 })
  const [availablePoints, setAvailablePoints] = useState(0);
  const [usedPoints, setUsedPoints] = useState(0)

  // const UPDATE_ATTRIBUTE = async () => {
  //   event?.preventDefault();

  //   if (character?.id) {
  //     await UPDATE.UPDATE_ATTRIBUTE({ id: character?.id, attributes: [
  //       {
  //           name: "MIGHT",
  //           value: 1
  //       },
  //       {
  //           name: "DEXTERITY",
  //           value: 0
  //       },
  //       {
  //           name: "INTELLIGENCE",
  //           value: 0
  //       },
  //       {
  //           name: "WISDOM",
  //           value: 0
  //       }
  //     ]})
  //   }
  // }

  const handleSubmit = async () => {
    event?.preventDefault()
    
    if (character?.id) {
      await UPDATE.UPDATE_ATTRIBUTE({
        id: character.id, 
        attributes: [
          {
            "name": "MIGHT",
            "value": currentMight.plusValue
          },
          {
            "name": "INTELLIGENCE",
            "value": currentIntelligence.plusValue
          },
          {
            "name": "DEXTERITY",
            "value": currentDexterity.plusValue
          },
          {
            "name": "WISDOM",
            "value": currentWisdom.plusValue
          }
        ]
      }).finally(() => window.location.reload())
    }
  }

  useEffect(() => {
    (async () => {
      await setCharacter(await GET.GET_CHARACTER())

      await GET.GET_CHARACTER().then(response => {
        response.character_attributes.find(attribute => attribute.attribute_name == 'MIGHT' && setCurrentMight({ currentValue: attribute.attribute_value, plusValue: currentMight.plusValue }))
        response.character_attributes.find(attribute => attribute.attribute_name == 'INTELLIGENCE' && setCurrentIntelligence({ currentValue: attribute.attribute_value, plusValue: currentMight.plusValue }))
        response.character_attributes.find(attribute => attribute.attribute_name == 'DEXTERITY' && setCurrentDexterity({ currentValue: attribute.attribute_value, plusValue: currentMight.plusValue }))
        response.character_attributes.find(attribute => attribute.attribute_name == 'WISDOM' && setCurrentWisdom({ currentValue: attribute.attribute_value, plusValue: currentMight.plusValue }))

        setAvailablePoints(response.attribute_points)
        setUsedPoints(response.attribute_points)
      })
    })()
  }, [])

  return (
    <S.Container>
      <S.Column>
        <S.Title>Primary Attributes</S.Title>
          <S.AttributeForm onSubmit={handleSubmit}>
            <S.AttributeItem>
              <S.AttributeName>
                <S.Image 
                  src={`/icons/might-icon.png`}
                />
                MIGHT
              </S.AttributeName>

              <S.AttributeValue name="might" value={currentMight.currentValue + currentMight.plusValue} className={currentMight.plusValue > 0 ? 'valueChange' : ''} readOnly />
              
              <S.Buttons>              
                <S.Button type='button' onClick={() => {
                  if (usedPoints > 0 && currentMight.plusValue >= 0) {
                    setCurrentMight({ currentValue: currentMight.currentValue, plusValue: currentMight.plusValue + 1 })
                    setUsedPoints(usedPoints - 1);
                  }
                }}>
                  + 
                </S.Button>

                  <S.Button type='button'  
                    onClick={() => {
                      if (usedPoints < availablePoints && currentMight.plusValue > 0) {
                        setCurrentMight({ currentValue: currentMight.currentValue, plusValue: currentMight.plusValue - 1 })
                        setUsedPoints(usedPoints + 1);
                      }
                    }}
                  >
                  -
                </S.Button>
              </S.Buttons>
            </S.AttributeItem>

            <S.AttributeItem>
              <S.AttributeName>
                <S.Image 
                  src={`/icons/intelligence-icon.png`}
                />
                INTELLIGENCE
              </S.AttributeName>

              <S.AttributeValue name="intelligence" value={currentIntelligence.currentValue + currentIntelligence.plusValue} className={currentIntelligence.plusValue > 0 ? 'valueChange' : ''} readOnly />
              
              <S.Buttons>              
                <S.Button type='button' onClick={() => {
                  if (usedPoints > 0 && currentIntelligence.plusValue >= 0) {
                    setCurrentIntelligence({ currentValue: currentIntelligence.currentValue, plusValue: currentIntelligence.plusValue + 1 })
                    setUsedPoints(usedPoints - 1);
                  }
                }}>
                  + 
                </S.Button>

                  <S.Button type='button'  
                    onClick={() => {
                      if (usedPoints < availablePoints && currentIntelligence.plusValue > 0) {
                        setCurrentIntelligence({ currentValue: currentIntelligence.currentValue, plusValue: currentIntelligence.plusValue - 1 })
                        setUsedPoints(usedPoints + 1);
                      }
                    }}
                  >
                  -
                </S.Button>
              </S.Buttons>
            </S.AttributeItem>

            <S.AttributeItem>
              <S.AttributeName>
                <S.Image 
                  src={`/icons/dexterity-icon.png`}
                />
                DEXTERITY
              </S.AttributeName>

              <S.AttributeValue name="dexterity" value={currentDexterity.currentValue + currentDexterity.plusValue} className={currentDexterity.plusValue > 0 ? 'valueChange' : ''} readOnly />
              
              <S.Buttons>              
                <S.Button type='button' onClick={() => {
                  if (usedPoints > 0 && currentDexterity.plusValue >= 0) {
                    setCurrentDexterity({ currentValue: currentDexterity.currentValue, plusValue: currentDexterity.plusValue + 1 })
                    setUsedPoints(usedPoints - 1);
                  }
                }}>
                  + 
                </S.Button>

                  <S.Button type='button'  
                    onClick={() => {
                      if (usedPoints < availablePoints && currentDexterity.plusValue > 0) {
                        setCurrentDexterity({ currentValue: currentDexterity.currentValue, plusValue: currentDexterity.plusValue - 1 })
                        setUsedPoints(usedPoints + 1);
                      }
                    }}
                  >
                  -
                </S.Button>
              </S.Buttons>
            </S.AttributeItem>

            <S.AttributeItem>
              <S.AttributeName>
                <S.Image 
                  src={`/icons/wisdom-icon.png`}
                />
                WISDOM
              </S.AttributeName>

              <S.AttributeValue name="wisdom" value={currentWisdom.currentValue + currentWisdom.plusValue} className={currentWisdom.plusValue > 0 ? 'valueChange' : ''} readOnly />
              
              <S.Buttons>        
                <S.Button type='button' onClick={() => {
                  if (usedPoints > 0 && currentWisdom.plusValue >= 0) {
                    setCurrentWisdom({ currentValue: currentWisdom.currentValue, plusValue: currentWisdom.plusValue + 1 })
                    setUsedPoints(usedPoints - 1);
                  }
                }}>
                  + 
                </S.Button>

                  <S.Button type='button'  
                    onClick={() => {
                      if (usedPoints < availablePoints && currentWisdom.plusValue > 0) {
                        setCurrentWisdom({ currentValue: currentWisdom.currentValue, plusValue: currentWisdom.plusValue - 1 })
                        setUsedPoints(usedPoints + 1);
                      }
                    }}
                  >
                  -
                </S.Button>
              </S.Buttons>
            </S.AttributeItem>
            
            <S.AttributeItem>
              Points Available: 

              <S.WrapperAttributeItem>
                <span>{usedPoints}</span>

                <button type='submit'>
                  <img src="/icons/check-icon.svg" alt="" />
                </button>
              </S.WrapperAttributeItem>
            </S.AttributeItem>
          </S.AttributeForm>
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
                  {secondary.status_value}
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