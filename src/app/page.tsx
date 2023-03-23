'use client'

import BaseController from '@/components/BaseController'
import BaseAttributes from '@/components/BaseAttributes'
import BaseCharacter from '@/components/BaseCharacter'

import * as S from './styles'

export default function Home() {
  return (
    <>
      <S.Title>Welcome to RavenIdle!</S.Title>
      <BaseController>
        <BaseCharacter />
        <BaseAttributes />
      </BaseController>
    </>
  )
}
