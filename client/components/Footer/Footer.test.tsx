import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer Component', () => {
  it('renders without errors', () => {
    render(<Footer />)
    const loaderElement = screen.getByTestId('footer')
    expect(loaderElement).toBeInTheDocument()
  })
})
