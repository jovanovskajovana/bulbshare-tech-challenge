import { FC, useEffect, useCallback, useRef } from 'react'
import { useTheme } from 'styled-components'
import { useInfiniteQuery } from '@tanstack/react-query'

import FeedApi from '../api/FeedApi'

import FeedItem from '../components/FeedItem'
import FeedItemSkeleton from '../components/FeedItemSkeleton'

import { PAGE_LIMIT } from '../constants/data'

import { Container } from '../styles/Layout'
import { BodyLarge, BodySmall } from '../styles/Typography'
import { HomeStyled, FeedList } from '../styles/pages/HomeStyled'

import { getArrayFromLength } from '../utils/helpers'

const Home: FC = () => {
  const theme = useTheme()
  const feedList = useRef<HTMLInputElement>(null)

  const {
    isLoading,
    isError,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['feed'],
    queryFn: ({ pageParam = 1 }) => FeedApi.fetchFeed(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.length === PAGE_LIMIT ? allPages.length + 1 : undefined

      return nextPage
    },
    refetchOnWindowFocus: false,
  })

  const handleFetchNextPage = useCallback(() => {
    const windowsHeight = window.innerHeight
    const feedListOffsetBottom =
      feedList.current?.getBoundingClientRect().bottom ?? 0

    const OFFSET = 120

    if (windowsHeight > feedListOffsetBottom + OFFSET) {
      fetchNextPage()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleFetchNextPage)

    return () => window.removeEventListener('scroll', handleFetchNextPage)
  }, [])

  return (
    <HomeStyled>
      <Container column mobileColumn alignItems="center">
        <FeedList ref={feedList}>
          {isLoading ? (
            getArrayFromLength(3).map((_, index) => (
              <FeedItemSkeleton key={index} />
            ))
          ) : isError ? (
            <BodyLarge color={theme.textSecondary}>
              Oops, something went wrong.
            </BodyLarge>
          ) : (
            <>
              {/* Initial feed items */}
              {data.pages.map((page) =>
                page.map((item, index) => <FeedItem key={index} data={item} />),
              )}

              {/* Fetching feed items */}
              {isFetchingNextPage &&
                getArrayFromLength(3).map((_, index) => (
                  <FeedItemSkeleton key={index} />
                ))}

              {/* No more feed items */}
              {!hasNextPage && (
                <BodySmall color={theme.textSecondary} marginTop="1.5rem">
                  Nothing more to load.
                </BodySmall>
              )}
            </>
          )}
        </FeedList>
      </Container>
    </HomeStyled>
  )
}

export default Home
