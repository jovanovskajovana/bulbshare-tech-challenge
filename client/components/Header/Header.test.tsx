import { render, screen } from '@testing-library/react'

import Header from './Header'

describe('Header Component', () => {
  it('renders without errors', () => {
    render(<Header />)
    const loaderElement = screen.getByTestId('header')
    expect(loaderElement).toBeInTheDocument()
  })
})
