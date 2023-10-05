import { FC } from 'react'
import { useTheme } from 'styled-components'

import { Brand } from '../../interfaces/data'

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

interface FeedItemProps {
  brand: Brand
  banner_image: string
  feed_title: string
  handleLinkClick: () => void
}

/**
 * An item from the feed listed on Home page,
 * receiving basic feed info to be displayed in a grid.
 */
const FeedItem: FC<FeedItemProps> = ({
  brand,
  banner_image,
  feed_title,
  handleLinkClick,
}) => {
  const theme = useTheme()

  return (
    <FeedItemStyled data-testid="feed-item">
      <FeedItemHeader>
        <ItemBrand>
          <Avatar>
            <AvatarImg src={brand.logo} alt={brand.name} />
          </Avatar>
          <BodySmall weight={600}>{brand.name}</BodySmall>
        </ItemBrand>
        <ButtonAsLink onClick={handleLinkClick}>
          <BodySmall color={theme.textHighlight} weight={600}>
            Join Brief Now
          </BodySmall>
        </ButtonAsLink>
      </FeedItemHeader>
      <FeedItemBody bgImage={banner_image}>
        <ItemTitle>
          <BodyLarge color={theme.textReverse} weight={600}>
            {feed_title}
          </BodyLarge>
        </ItemTitle>
        <BodyOverlay />
      </FeedItemBody>
    </FeedItemStyled>
  )
}

export default FeedItem
