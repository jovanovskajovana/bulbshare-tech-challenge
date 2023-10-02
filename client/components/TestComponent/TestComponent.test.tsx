import { render, screen } from '@testing-library/react'

import TestComponent from './TestComponent'

describe('Test Component', () => {
  it('renders without errors', () => {
    render(<TestComponent />)
    const loaderElement = screen.getByTestId('test-component')
    expect(loaderElement).toBeInTheDocument()
  })
})
