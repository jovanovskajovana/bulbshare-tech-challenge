import { FC } from 'react'

import FeedItem from '../components/FeedItem'

import { Container } from '../styles/Layout'
import { HomeStyled, FeedList } from '../styles/pages/HomeStyled'

import feed from '../feed.json' // remove this

const Home: FC = () => (
  <HomeStyled>
    <Container column mobileColumn alignItems="center">
      <FeedList>
        {feed.map((item, index) => (
          <FeedItem
            key={index}
            brand={item.brand}
            briefref={item.briefref}
            banner_image={item.banner_image}
            feed_title={item.feed_title}
          />
        ))}
      </FeedList>
    </Container>
  </HomeStyled>
)

export default Home
