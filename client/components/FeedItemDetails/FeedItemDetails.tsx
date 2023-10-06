import { FC, useState, useEffect, useCallback } from 'react'
import { useTheme } from 'styled-components'
import moment from 'moment'

import { FeedItemData } from '../../interfaces/data'

import { BodyLarge, BodyMedium, BodySmall } from '../../styles/Typography'
import { Avatar, AvatarImg } from '../../styles/components/AvatarStyled'
import { ButtonRound } from '../../styles/components/ButtonStyled'
import { Container } from '../../styles/Layout'
import {
  FeedItemDetailsStyled,
  ButtonClose,
  Content,
  Scrollable,
  Media,
  MediaImage,
  ArrowsGroup,
  Comments,
  Details,
  DetailsImage,
  CommentsHeader,
  CommentsBody,
} from '../../styles/components/FeedItemDetailsStyled'

import Comment from '../Comment'
import CloseDialog from '../_icons/close-dialog'
import SwitchDown from '../_icons/switch-down'

export interface FeedItemDetailsProps {
  feedItemData?: FeedItemData
  handleCloseButtonClick: () => void
}

/**
 * A component displaying item details, including
 * media, text content, and comments.
 */
const FeedItemDetails: FC<FeedItemDetailsProps> = ({
  feedItemData,
  handleCloseButtonClick,
}) => {
  const theme = useTheme()

  const [isDetailsView, setIsDetailsView] = useState(false)

  const handleClose = () => {
    setIsDetailsView(false)
    handleCloseButtonClick()
  }

  const handleUp = () => {
    setIsDetailsView(false)
  }

  const handleDown = () => {
    setIsDetailsView(true)
  }

  const detectKeydown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
    }

    if (e.key === 'ArrowUp') {
      handleUp()
    }

    if (e.key === 'ArrowDown') {
      handleDown()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', detectKeydown, false)

    return () => {
      document.removeEventListener('keydown', detectKeydown, false)
    }
  }, [])

  return (
    <FeedItemDetailsStyled data-testid="feed-item-details">
      <ButtonClose onClick={handleClose}>
        <CloseDialog />
      </ButtonClose>
      {!feedItemData ? (
        <Container alignItems="center" justifyContent="center">
          <BodyLarge color={theme.textSecondary}>
            Oops, content cannot be displayed!
          </BodyLarge>
        </Container>
      ) : (
        <>
          <Content>
            <Scrollable scrollDown={isDetailsView}>
              <Media>
                <MediaImage bgImage={feedItemData.banner_image} />
              </Media>
              <Details>
                <Container
                  column
                  mobileColumn
                  alignItems="center"
                  maxWidth="50%"
                >
                  <Avatar>
                    <AvatarImg
                      src={feedItemData.brand.logo}
                      alt={feedItemData.brand.name}
                    />
                  </Avatar>
                  <BodyLarge weight={600} marginTop="2rem">
                    {feedItemData.feed_title}
                  </BodyLarge>
                  <BodySmall
                    color={theme.textSecondary}
                    weight={500}
                    marginTop="0.5rem"
                  >
                    {moment(feedItemData.starts_on).format('DD MMMM YYYY')}
                  </BodySmall>
                  <BodyMedium alignCenter marginTop="2rem">
                    {feedItemData.banner_text}
                  </BodyMedium>
                  <DetailsImage
                    src={feedItemData.ad_1_image}
                    alt={feedItemData.feed_title}
                  />
                  <BodyMedium alignCenter marginTop="3rem">
                    {feedItemData.description}
                  </BodyMedium>
                  <DetailsImage
                    src={feedItemData.ad_2_image}
                    alt={feedItemData.feed_title}
                  />
                </Container>
              </Details>
            </Scrollable>
            <ArrowsGroup>
              <ButtonRound isDisabled={!isDetailsView} onClick={handleUp}>
                <SwitchDown className="rotate" />
              </ButtonRound>
              <ButtonRound isDisabled={isDetailsView} onClick={handleDown}>
                <SwitchDown />
              </ButtonRound>
            </ArrowsGroup>
          </Content>
          <Comments>
            <CommentsHeader>
              <Avatar>
                <AvatarImg
                  src={feedItemData.brand.logo}
                  alt={feedItemData.brand.name}
                />
              </Avatar>
              <BodySmall weight={600}>{feedItemData.brand.name}</BodySmall>
            </CommentsHeader>
            <CommentsBody>
              <Comment />
              <Comment />
              <Comment />
            </CommentsBody>
          </Comments>
        </>
      )}
    </FeedItemDetailsStyled>
  )
}

export default FeedItemDetails
