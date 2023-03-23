"use client"

import * as Icons from './icons';
import { IconProps } from './icons';

export type IconNames = 'IconCharacter'; 

type BaseIconsProps = {
  name: IconNames
} & IconProps

const components = {...Icons};

const BaseIcons = ({ name, ...props }: BaseIconsProps) => {
  const Icon = components[name]

  return <Icon {...props} />
}

export default BaseIcons;