import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import moment from 'moment'

import { theme } from '../../constants/theme'

import { CommentData } from '../../interfaces/data'

import Comment from './Comment'

const mockCommentData: CommentData = {
  bcommentref: '',
  briefref: '',
  user: {
    name: 'John Doe',
    avatar: 'avatar_url.jpg',
    userref: '',
  },
  comment: 'This is a test comment',
  submitted_on: moment().add(-2, 'days').format('YYYY-MM-DD'),
}

describe('Comment Component', () => {
  it('renders without errors', () => {
    render(
      <ThemeProvider theme={theme}>
        <Comment data={mockCommentData} />
      </ThemeProvider>,
    )

    const commentElement = screen.getByTestId('comment')
    expect(commentElement).toBeInTheDocument()
  })

  it('renders user name and comment', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Comment data={mockCommentData} />
      </ThemeProvider>,
    )

    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('This is a test comment')).toBeInTheDocument()
  })

  it('renders the user avatar with alt text', () => {
    const { getByAltText } = render(
      <ThemeProvider theme={theme}>
        <Comment data={mockCommentData} />
      </ThemeProvider>,
    )

    expect(getByAltText('John Doe')).toBeInTheDocument()
  })

  it('renders the date difference', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Comment data={mockCommentData} />
      </ThemeProvider>,
    )

    const expectedDateDifference = '2 days ago'

    expect(getByText(expectedDateDifference)).toBeInTheDocument()
  })
})
