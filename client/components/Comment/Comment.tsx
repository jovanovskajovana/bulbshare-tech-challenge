import { FC } from 'react'
import { useTheme } from 'styled-components'

import { BodySmall, BodyExtraSmall } from '../../styles/Typography'
import { Avatar, AvatarImg } from '../../styles/components/AvatarStyled'
import {
  CommentStyled,
  CommentDetails,
} from '../../styles/components/CommentStyled'

import { getDateDifference } from '../../utils/helpers'

export interface CommentProps {}

/**
 * A component displaying a single comment details.
 */
const Comment: FC<CommentProps> = () => {
  const theme = useTheme()

  return (
    <CommentStyled>
      <Avatar>
        <AvatarImg
          src="https://www.xtrafondos.com/wallpapers/vertical/bart-simpson-minimalista-3459.jpg"
          alt="name"
        />
      </Avatar>
      <CommentDetails>
        <BodySmall>
          <span>Ninja</span> Really cool shoes ! Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam finibus odio et ante venenatis,
          non maximus quam placerat.
        </BodySmall>
        <BodyExtraSmall color={theme.textSecondary}>
          {getDateDifference('2022-10-27 11:10:58')}
        </BodyExtraSmall>
      </CommentDetails>
    </CommentStyled>
  )
}

export default Comment
