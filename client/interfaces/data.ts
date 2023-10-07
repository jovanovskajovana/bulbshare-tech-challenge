export interface Brand {
  name: string
  logo: string
}

export interface FeedItemData {
  briefref: string
  brand: Brand
  name: string
  description: string
  feed_title: string
  banner_text: string
  banner_image: string
  ad_1_image: string
  ad_2_image: string
  starts_on: string
}

export interface User {
  userref: string
  name: string
  avatar: string
}

export interface CommentData {
  bcommentref: string
  briefref: string
  user: User
  comment: string
  submitted_on: string
}
