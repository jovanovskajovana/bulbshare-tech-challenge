import { FC } from 'react'

import { Brand } from '../../interfaces/data'

import { BodyLarge, BodySmall } from '../../styles/Typography'
import { ButtonAsLink } from '../../styles/components/ButtonStyled'
import {
  FeedItemStyled,
  FeedItemHeader,
  ItemBrand,
  BrandLogo,
  LogoImg,
  FeedItemBody,
  BodyOverlay,
} from '../../styles/components/FeedItemStyled'
import { useTheme } from 'styled-components'

interface FeedItemProps {
  brand: Brand
  briefref: string
  banner_image: string
  feed_title: string
}

/**
 * An item from the feed listed on Home page,
 * receiving basic feed info to be displayed in a grid.
 */
const FeedItem: FC<FeedItemProps> = ({
  brand,
  briefref,
  banner_image,
  feed_title,
}) => {
  const theme = useTheme()

  const handleModalOpen = () => console.log('Handle modal open')

  return (
    <FeedItemStyled data-testid="feed-item">
      <FeedItemHeader>
        <ItemBrand>
          <BrandLogo>
            <LogoImg src={brand.logo} alt={brand.name} />
          </BrandLogo>
          <BodySmall weight={600}>{brand.name}</BodySmall>
        </ItemBrand>
        <ButtonAsLink onClick={handleModalOpen}>
          <BodySmall color={theme.textHighlight} weight={600}>
            Join Brief Now
          </BodySmall>
        </ButtonAsLink>
      </FeedItemHeader>
      <FeedItemBody bgImage={banner_image}>
        <BodyLarge
          color={theme.textReverse}
          weight={600}
          className="feed-title"
        >
          {feed_title}
        </BodyLarge>
        <BodyOverlay />
      </FeedItemBody>
    </FeedItemStyled>
  )
}

export default FeedItem
