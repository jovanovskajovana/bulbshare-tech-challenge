import styled from 'styled-components'

export interface ButtonProps {
  isDisabled?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  opacity: ${({ isDisabled }) => (isDisabled ? '0.6' : '1')};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
`

export const ButtonAsLink = styled(Button)`
  border: 0;
  background-color: ${({ theme }) => theme.transparent};
`
