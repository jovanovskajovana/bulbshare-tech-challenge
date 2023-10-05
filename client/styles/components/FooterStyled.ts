import styled from 'styled-components'

import { breakpoints } from '../../constants/breakpoints'

export const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;

  @media (max-width: ${breakpoints.screenMD}) {
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    padding: 1.5rem 1rem;
  }
`
