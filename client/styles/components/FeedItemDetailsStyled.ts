import styled from 'styled-components'

import { breakpoints } from '../../constants/breakpoints'
import { COMMENTS_CONTAINER_WIDTH } from '../../constants/ui'

import { ButtonRound } from './ButtonStyled'

export const FeedItemDetailsStyled = styled.div`
  position: relative;
  display: flex;
  height: 100%;

  @media (max-width: ${breakpoints.screenMD}) {
    flex-direction: column;
    overflow-y: scroll;
  }
`
export const Content = styled.div`
  position: relative;
  width: calc(100% - ${COMMENTS_CONTAINER_WIDTH});
  max-height: 100vh;
  overflow: hidden;

  @media (max-width: ${breakpoints.screenMD}) {
    width: 100%;
  }
`

interface ScrollableProps {
  scrollDown: boolean
}

export const Scrollable = styled.div<ScrollableProps>`
  height: 100%;
  transform: ${({ scrollDown }) =>
    scrollDown ? 'translateY(-100vh)' : 'translateY(0)'};
  transition: 0.3s ease-out;
`

export const Media = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundDark};
  width: 100%;
  height: 100vh;
`

interface MediaImageProps {
  bgImage: string
}

export const MediaImage = styled.div<MediaImageProps>`
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 55%;

  @media (max-width: ${breakpoints.screenMD}) {
    width: 75%;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    width: 100%;
  }
`

export const Details = styled.div`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  width: 100%;
  max-height: 100vh;
  padding: 3rem 2rem;
  overflow-y: auto;

  @media (max-width: ${breakpoints.screenMD}) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    padding: 3rem 1rem;
  }
`

export const DetailsImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 3rem;
`

export const Comments = styled.div`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-left: 1px solid ${({ theme }) => theme.borderPrimary};
  width: 100%;
  max-width: ${COMMENTS_CONTAINER_WIDTH};
  max-height: 100vh;
  overflow-y: auto;

  @media (max-width: ${breakpoints.screenMD}) {
    max-width: 100%;
  }
`

export const CommentsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
  width: 100%;
  padding: 0.75rem 1.5rem;
`

export const CommentsBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
`

export const ButtonClose = styled(ButtonRound)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 1;

  @media (max-width: ${breakpoints.screenSM}) {
    top: 1rem;
    left: 1rem;
  }
`

export const ArrowsGroup = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 1;

  @media (max-width: ${breakpoints.screenSM}) {
    right: 1rem;
  }

  .rotate {
    transform: rotate(180deg);
  }
`
