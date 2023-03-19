import styled from "styled-components";

import { theme } from "@/styles/theme";
import { CAUDEX_BOLD } from "@/styles/typography";

export const Title = styled.h1`
  ${CAUDEX_BOLD.style};
  color: ${theme.primary.neutral.white};
  margin: 0px 0px 65px 0px;
`