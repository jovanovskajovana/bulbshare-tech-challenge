import styled from 'styled-components'

import {
  HEADER_HEIGHT,
  HEADER_MOBILE_HEIGHT,
  FOOTER_HEIGHT,
  FOOTER_MOBILE_HEIGHT,
} from '../../constants/ui'
import { breakpoints } from '../../constants/breakpoints'

export const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: calc(100vh - (${HEADER_HEIGHT} + ${FOOTER_HEIGHT}));
  margin-top: ${HEADER_HEIGHT};
  padding: 1.5rem 2rem 5rem;

  @media (max-width: ${breakpoints.screenMD}) {
    padding: 1.5rem 1.5rem 4rem;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    min-height: calc(
      100vh - (${HEADER_MOBILE_HEIGHT} + ${FOOTER_MOBILE_HEIGHT})
    );
    margin-top: ${HEADER_MOBILE_HEIGHT};
    padding: 0 0 3rem;
  }
`

export const FeedList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (max-width: ${breakpoints.screenSM}) {
    gap: 0;
  }
`
