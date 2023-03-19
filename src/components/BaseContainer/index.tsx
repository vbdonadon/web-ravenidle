'use client'

import styled from 'styled-components'

import { theme } from '@/styles/theme'

export const Wrapper = styled.div`
  background-color: ${theme.primary.brand.secondary};
  display: block;
  max-width: 100%;
  min-height: 100vh;
  padding: 81px 86px 122px calc(360px + 67px);
`

type BaseContainerProps = {
  children: React.ReactNode
}

const BaseContainer = ({ children }: BaseContainerProps) => <Wrapper>
  {children}
</Wrapper>

export default BaseContainer
