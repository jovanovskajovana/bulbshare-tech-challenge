import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoaderStyled = styled.div`
  display: inline-block;
  box-sizing: border-box;
  border: 0.375rem solid ${({ theme }) => theme.borderPrimary};
  border-bottom-color: transparent;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  animation: ${rotate} 1s linear infinite;
`
