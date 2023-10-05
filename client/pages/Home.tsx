import { FC, useState } from 'react'

import FeedItem from '../components/FeedItem'
import FeedItemDetails from '../components/FeedItemDetails'
import Modal from '../components/Modal'

import { Container } from '../styles/Layout'
import { HomeStyled, FeedList } from '../styles/pages/HomeStyled'

import feed from '../feed.json' // remove this

const Home: FC = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [currentBriefref, setCurrentBriefref] = useState<string | null>(null)

  const onDetailsModalOpen = (briefref: string) => {
    setCurrentBriefref(briefref)
    setIsDetailsModalOpen(true)
  }

  const onDetailsModalClose = () => {
    setCurrentBriefref(null)
    setIsDetailsModalOpen(false)
  }

  return (
    <HomeStyled>
      <Container column mobileColumn alignItems="center">
        <FeedList>
          {feed.map((item, index) => (
            <FeedItem
              key={index}
              brand={item.brand}
              banner_image={item.banner_image}
              feed_title={item.feed_title}
              handleLinkClick={() => onDetailsModalOpen(item.briefref)}
            />
          ))}
        </FeedList>
      </Container>
      <Modal isOpen={isDetailsModalOpen}>
        <FeedItemDetails
          feedItemData={feed.find((item) => item.briefref === currentBriefref)}
          handleCloseButtonClick={onDetailsModalClose}
        />
      </Modal>
    </HomeStyled>
  )
}

export default Home
