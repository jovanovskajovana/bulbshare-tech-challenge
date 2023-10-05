import styled from 'styled-components'

interface ModalStyledProps {
  isOpen: boolean
}

export const ModalStyled = styled.div<ModalStyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.2s ease;
  z-index: 2;
`

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  width: 100%;
  height: 100%;
  overflow-y: auto;
`
