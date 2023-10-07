import { render, screen } from '@testing-library/react'

import FeedItemSkeleton from './FeedItemSkeleton'

describe('FeedItemSkeleton Component', () => {
  it('renders without errors', () => {
    render(<FeedItemSkeleton />)
    const loaderElement = screen.getByTestId('feed-item-skeleton')
    expect(loaderElement).toBeInTheDocument()
  })
})
