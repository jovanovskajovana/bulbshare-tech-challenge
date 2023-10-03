import { render, screen } from '@testing-library/react'

import FeedItem from './FeedItem'

describe('FeedItem Component', () => {
  it('renders without errors', () => {
    render(<FeedItem />)
    const loaderElement = screen.getByTestId('feed-item')
    expect(loaderElement).toBeInTheDocument()
  })
})
