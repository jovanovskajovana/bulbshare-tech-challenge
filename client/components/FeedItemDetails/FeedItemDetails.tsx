import { FC, useState, useEffect, useCallback, useRef } from 'react'
import { useTheme } from 'styled-components'
import { useQuery } from '@tanstack/react-query'
import moment from 'moment'

import FeedApi from '../../api/FeedApi'

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
import { LoaderStyled } from '../../styles/components/LoaderStyled'

export interface FeedItemDetailsProps {
  feedItemData: FeedItemData
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
  const detailsContainer = useRef<HTMLInputElement>(null)

  const [isDetailsView, setIsDetailsView] = useState(false)

  const { isLoading, isError, data } = useQuery({
    queryKey: ['comments', feedItemData.briefref],
    queryFn: () => FeedApi.fetchComments(feedItemData.briefref),
    refetchOnWindowFocus: false,
  })

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

  const detectWheel = useCallback((e: WheelEvent) => {
    const detailsContainerOffsetTop =
      detailsContainer.current?.getBoundingClientRect().top ?? 0

    const PADDING_TOP = 48

    if (e.deltaY > 0 && !isDetailsView) {
      setIsDetailsView(true)
    } else if (e.deltaY < -100 && detailsContainerOffsetTop === PADDING_TOP) {
      setIsDetailsView(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', detectKeydown)

    return () => {
      document.removeEventListener('keydown', detectKeydown)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('wheel', detectWheel)

    return () => window.removeEventListener('wheel', detectWheel)
  }, [])

  return (
    <FeedItemDetailsStyled data-testid="feed-item-details">
      <ButtonClose onClick={handleClose}>
        <CloseDialog />
      </ButtonClose>
      <Content>
        <Scrollable scrollDown={isDetailsView}>
          <Media>
            <MediaImage bgImage={feedItemData.banner_image} />
          </Media>
          <Details id="details">
            <Container
              column
              mobileColumn
              alignItems="center"
              maxWidth="50%"
              ref={detailsContainer}
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
          {isLoading ? (
            <LoaderStyled />
          ) : isError ? (
            <BodySmall color={theme.textSecondary}>
              Oops, something went wrong.
            </BodySmall>
          ) : data.length === 0 ? (
            <BodySmall color={theme.textSecondary}>No comments yet.</BodySmall>
          ) : (
            data.map((item, index) => <Comment key={index} data={item} />)
          )}
        </CommentsBody>
      </Comments>
    </FeedItemDetailsStyled>
  )
}

export default FeedItemDetails
