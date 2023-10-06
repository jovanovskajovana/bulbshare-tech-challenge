import styled, { keyframes } from 'styled-components'

import { breakpoints } from '../../constants/breakpoints'

const load = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`

export const Skeleton = styled.div`
  background: ${({ theme }) => theme.backgroundSecondary};
  background: linear-gradient(to right, #f9f9f9 8%, #ececec 38%, #f9f9f9 54%);
  background-size: 1000px 500px;
  animation: ${load} 0.8s linear infinite forwards;
`

export const FeedItemBodySkeleton = styled(Skeleton)`
  width: 100%;
  height: 600px;

  @media (max-width: ${breakpoints.screenSM}) {
    height: 400px;
  }
`

export const AvatarSkeleton = styled(Skeleton)`
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
`

interface TextSkeletonProps {
  minWidth: string
}

export const TextSkeleton = styled(Skeleton)<TextSkeletonProps>`
  width: ${({ minWidth }) => minWidth};
  height: 1rem;
`
