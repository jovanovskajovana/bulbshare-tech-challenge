import { FC } from 'react'

import { Container } from '../../styles/Layout'
import {
  HeaderStyled,
  MenuBtn,
  BtnIcon,
} from '../../styles/components/HeaderStyled'

import BulbshareLogo from '../_icons/bulbshare-logo'

/**
 * The main header of the website.
 */
const Header: FC = () => {
  const handleMenuOpen = () => alert('Not yet implemented!')

  return (
    <HeaderStyled data-testid="header">
      <Container alignItems="center" justifyContent="space-between">
        <BulbshareLogo />
        <MenuBtn onClick={handleMenuOpen}>
          <BtnIcon>
            <span></span>
            <span></span>
            <span></span>
          </BtnIcon>
        </MenuBtn>
      </Container>
    </HeaderStyled>
  )
}

export default Header
