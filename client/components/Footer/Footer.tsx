import { FC } from 'react'
import { useTheme } from 'styled-components'
import moment from 'moment'

import { Container } from '../../styles/Layout'
import { BodySmall } from '../../styles/Typography'
import { FooterStyled } from '../../styles/components/FooterStyled'

/**
 * The main footer of the website.
 */
const Footer: FC = () => {
  const theme = useTheme()

  return (
    <FooterStyled data-testid="footer">
      <Container alignItems="center" justifyContent="center">
        <BodySmall color={theme.textSecondary} alignCenter>
          © {moment().year()} Bulbshare. All Rights Reserved, Bulbshare Limited
        </BodySmall>
      </Container>
    </FooterStyled>
  )
}

export default Footer
