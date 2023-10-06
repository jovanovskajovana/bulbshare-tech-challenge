import { FC } from 'react'

import {
  FeedItemStyled,
  FeedItemHeader,
  ItemBrand,
} from '../../styles/components/FeedItemStyled'
import {
  FeedItemBodySkeleton,
  AvatarSkeleton,
  TextSkeleton,
} from '../../styles/components/SkeletonStyled'

/**
 * A skeleton component to indicate the
 * loading state for a feed item.
 */
const FeedItemSkeleton: FC = () => (
  <FeedItemStyled data-testid="feed-item-skeleton">
    <FeedItemHeader>
      <ItemBrand>
        <AvatarSkeleton />
        <TextSkeleton minWidth="10rem" />
      </ItemBrand>
      <TextSkeleton minWidth="8rem" />
    </FeedItemHeader>
    <FeedItemBodySkeleton />
  </FeedItemStyled>
)

export default FeedItemSkeleton
