import { FC } from 'react'
import { useTheme } from 'styled-components'

import { CommentData } from '../../interfaces/data'

import { BodySmall, BodyExtraSmall } from '../../styles/Typography'
import { Avatar, AvatarImg } from '../../styles/components/AvatarStyled'
import {
  CommentStyled,
  CommentDetails,
} from '../../styles/components/CommentStyled'

import { getDateDifference } from '../../utils/helpers'

export interface CommentProps {
  data: CommentData
}

/**
 * A component displaying a single comment details.
 */
const Comment: FC<CommentProps> = ({ data }) => {
  const theme = useTheme()

  return (
    <CommentStyled data-testid="comment">
      <Avatar>
        <AvatarImg src={data.user.avatar} alt={data.user.name} />
      </Avatar>
      <CommentDetails>
        <BodySmall>
          <span>{data.user.name}</span> {data.comment}
        </BodySmall>
        <BodyExtraSmall color={theme.textSecondary}>
          {getDateDifference(data.submitted_on)}
        </BodyExtraSmall>
      </CommentDetails>
    </CommentStyled>
  )
}

export default Comment
