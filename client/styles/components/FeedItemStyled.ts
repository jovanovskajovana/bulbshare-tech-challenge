import styled from 'styled-components'

import { breakpoints } from '../../constants/breakpoints'

export const FeedItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  border-radius: 0.25rem;
  width: 100%;
  max-width: 38rem;

  @media (max-width: ${breakpoints.screenSM}) {
    border-radius: 0;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    max-width: 100%;
  }
`

export const FeedItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1.5rem;
`

export const ItemBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface FeedItemBodyProps {
  bgImage: string
}

export const FeedItemBody = styled.div<FeedItemBodyProps>`
  position: relative;
  display: flex;
  align-items: flex-end;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 600px;
  padding: 1.5rem 1.5rem;

  @media (max-width: ${breakpoints.screenSM}) {
    height: 400px;
  }
`

export const BodyOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(35, 35, 35, 0) 0%,
    rgba(26, 26, 26, 0.4) 100%
  );
  width: 100%;
  height: 100%;
`

export const ItemTitle = styled.div`
  max-width: 65%;
  z-index: 1;
`
