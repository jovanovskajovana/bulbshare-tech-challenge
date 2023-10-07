import axios from 'axios'

import { PAGE_LIMIT } from '../constants/data'

import { FeedItemData, CommentData } from '../interfaces/data'

export default {
  async fetchFeed(page: number): Promise<FeedItemData[]> {
    const { data } = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BASE_URL}/feed?page=${page}&limit=${PAGE_LIMIT}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return data
  },
  async fetchComments(briefref: string): Promise<CommentData[]> {
    const { data } = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BASE_URL}/comments/${briefref}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return data
  },
}
