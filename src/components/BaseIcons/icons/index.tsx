import styled, { css } from 'styled-components'

import SVGIconCharacter from '../svgs/SVGIconCharacter'

export type IconProps = {
  size?: 'small' | 'medium' | 'large'
}

const ICON_SIZES = {
  small: '16px',
  medium: '24px',
  large: '32px'
}

const wrapperSizeModifier = {
  small: () => css`
    width: 100%;
    max-width: ${ICON_SIZES.small};
    height: ${ICON_SIZES.small};
  `,
  medium: () => css`
    width: 100%;
    max-width: ${ICON_SIZES.medium};
    height: ${ICON_SIZES.medium};
  `,
  large: () => css`
    width: 100%;
    max-width: ${ICON_SIZES.large};
    height: ${ICON_SIZES.large};
  `,
}

const Wrapper = styled.i<IconProps>`
  ${({ size = 'medium' }) => css`
    display: inline-block;

    svg {
      width: 100%;
      height: 100%;
    }

    ${size && wrapperSizeModifier[size]}
  `}
`

export const IconCharacter = (props: IconProps) => (
  <Wrapper {...props}>
    {SVGIconCharacter}
  </Wrapper>
)