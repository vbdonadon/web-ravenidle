import styled from "styled-components";

import { Poppins, Caudex } from 'next/font/google'

export const POPPINS_LIGHT = Poppins({
  weight: "300",
  style: ['normal'],
  subsets: ['latin']
})

export const POPPINS_REGULAR = Poppins({
  weight: "400",
  style: ['normal'],
  subsets: ['latin']
})

export const POPPINS_MEDIUM = Poppins({
  weight: "600",
  style: ['normal'],
  subsets: ['latin']
})

export const POPPINS_BOLD = Poppins({
  weight: "700",
  style: ['normal'],
  subsets: ['latin']
})

export const CAUDEX_REGULAR = Caudex({
  weight: "400",
  style: ['normal'],
  subsets: ['latin']
})

export const CAUDEX_BOLD = Caudex({
  weight: "700",
  style: ['normal'],
  subsets: ['latin']
})