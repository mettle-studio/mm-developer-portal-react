/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC } from 'react'
import { HeadFC, PageProps } from 'gatsby'
import { Typography } from '@mui/material'

import ContentWithSidebar from '../components/ContentWithSidebar'
import GroupedcardView from '../components/GroupedCardView'
import useContent from '../hooks/useContent'

const DocumentationPage: FC<PageProps> = ({ location: { pathname } }) => {
  const { contentGroups, pageTree } = useContent('documentation')

  return (
    <ContentWithSidebar pathname={pathname} contentGroups={contentGroups} pageTree={pageTree}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Documentation
      </Typography>
      <GroupedcardView contentGroups={contentGroups} />
    </ContentWithSidebar>
  )
}

export default DocumentationPage

// TODO: add more for SEO
export const Head: HeadFC = () => (
  <>
    <title>Documentation</title>
    <meta name="description" content="Technical documentation about MM products" />
  </>
)
