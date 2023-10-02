import { FC } from 'react'

import { TestComponentStyled } from '../../styles/components/TestComponentStyled'

const TestComponent: FC = () => (
  <TestComponentStyled data-testid="test-component">
    Test Component
  </TestComponentStyled>
)

export default TestComponent
