import { FC, PropsWithChildren, useEffect } from 'react'

import { ModalStyled, ModalContent } from '../../styles/components/ModalStyled'

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean
}

/**
 * A modal dialog used as a wrapper for any displayable content.
 */
const Modal: FC<ModalProps> = ({ children, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  return (
    <ModalStyled isOpen={isOpen}>
      <ModalContent>{children}</ModalContent>
    </ModalStyled>
  )
}

export default Modal
