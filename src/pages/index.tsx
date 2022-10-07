import React, { FC } from 'react'
import type { HeadFC } from 'gatsby'
import { graphql, PageProps } from 'gatsby'
import { Container, Typography } from '@mui/material'

import ContentWithSidebar from '../components/ContentWithSidebar'

const IndexPage: FC<PageProps<Queries.IndexPageQuery>> = ({ location: { pathname }, data }) => {
  const { allMarkdownRemark } = data
  const pages = allMarkdownRemark.edges
    .map((edge) => edge.node)
    .map((node) => ({
      title: node.frontmatter?.title ?? '',
      slug: node.fields?.slug ?? '',
    }))
  return (
    <ContentWithSidebar pathname={pathname} pages={pages}>
      <Container maxWidth="xl">
        <Typography variant="h3" paragraph>
          Welcome to the MM developer portal
        </Typography>
      </Container>
    </ContentWithSidebar>
  )
}

export default IndexPage

// TODO: add more for SEO
export const Head: HeadFC = () => <title>Home Page</title>

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { fields: [fields___sortPriority], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
