import styled from 'styled-components'

import { AVATAR_WIDTH } from '../../constants/ui'

export const CommentStyled = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
`

export const CommentDetails = styled.div`
  display: block;
  width: calc(100% - ${AVATAR_WIDTH});

  span {
    font-weight: 600;
  }
`
