import { FC, useState } from 'react'
import { useTheme } from 'styled-components'

import { FeedItemData } from '../../interfaces/data'

import { BodyLarge, BodySmall } from '../../styles/Typography'
import { ButtonAsLink } from '../../styles/components/ButtonStyled'
import { Avatar, AvatarImg } from '../../styles/components/AvatarStyled'
import {
  FeedItemStyled,
  FeedItemHeader,
  ItemBrand,
  FeedItemBody,
  ItemTitle,
  BodyOverlay,
} from '../../styles/components/FeedItemStyled'

import Modal from '../Modal'
import FeedItemDetails from '../FeedItemDetails'

interface FeedItemProps {
  data: FeedItemData
}

/**
 * An item from the feed listed on Home page,
 * receiving basic feed info to be displayed in a grid.
 */
const FeedItem: FC<FeedItemProps> = ({ data }) => {
  const theme = useTheme()

  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [currentBriefref, setCurrentBriefref] = useState<string | null>(null)

  const onDetailsModalOpen = (briefref: string) => {
    setCurrentBriefref(briefref)
    setIsDetailsModalOpen(true)
  }

  const onDetailsModalClose = () => {
    setCurrentBriefref(null)
    setIsDetailsModalOpen(false)
  }

  return (
    <>
      <FeedItemStyled data-testid="feed-item">
        <FeedItemHeader>
          <ItemBrand>
            <Avatar>
              <AvatarImg src={data.brand.logo} alt={data.brand.name} />
            </Avatar>
            <BodySmall weight={600}>{data.brand.name}</BodySmall>
          </ItemBrand>
          <ButtonAsLink onClick={() => onDetailsModalOpen(data.briefref)}>
            <BodySmall color={theme.textHighlight} weight={600}>
              Join Brief Now
            </BodySmall>
          </ButtonAsLink>
        </FeedItemHeader>
        <FeedItemBody bgImage={data.banner_image}>
          <ItemTitle>
            <BodyLarge color={theme.textReverse} weight={600}>
              {data.feed_title}
            </BodyLarge>
          </ItemTitle>
          <BodyOverlay />
        </FeedItemBody>
      </FeedItemStyled>
      <Modal isOpen={isDetailsModalOpen}>
        {currentBriefref && (
          <FeedItemDetails
            feedItemData={data}
            handleCloseButtonClick={onDetailsModalClose}
          />
        )}
      </Modal>
    </>
  )
}

export default FeedItem
