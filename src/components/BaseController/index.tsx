import styled from "styled-components";

type BaseContainerProps = {
  children: React.ReactNode
}

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 29px;
`

const BaseController = ({ children }: BaseContainerProps) => <Wrapper>
  {children}
</Wrapper>

export default BaseController