/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC } from 'react'
import { HeadFC, PageProps } from 'gatsby'
import { Typography } from '@mui/material'

import ContentWithSidebar from '../components/ContentWithSidebar'
import GroupedCardView from '../components/GroupedCardView'
import useContent from '../hooks/useContent'

const DiscoverPage: FC<PageProps> = ({ location: { pathname } }) => {
  const { contentGroups, pageTree } = useContent('discover')

  return (
    <ContentWithSidebar pathname={pathname} contentGroups={contentGroups} pageTree={pageTree}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Discover
      </Typography>
      <GroupedCardView contentGroups={contentGroups} />
    </ContentWithSidebar>
  )
}

export default DiscoverPage

// TODO: add more for SEO
export const Head: HeadFC = () => (
  <>
    <title>Discover</title>
    <meta name="description" content="Be inspired by amazing use cases of our Moata products" />
  </>
)
