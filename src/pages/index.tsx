import React, { FC } from 'react'
import type { HeadFC } from 'gatsby'
import { graphql, PageProps } from 'gatsby'
import { Container, Typography } from '@mui/material'

import SideBar from '../components/SideBar'

const IndexPage: FC<PageProps<Queries.IndexPageQuery>> = ({ location: { pathname }, data }) => {
  const { allMarkdownRemark } = data
  const pages = allMarkdownRemark.edges
    .map((edge) => edge.node)
    .map((node) => ({
      title: node.frontmatter?.title ?? '',
      slug: node.fields?.slug ?? '',
    }))
  return (
    <SideBar pathname={pathname} pages={pages}>
      <Container maxWidth="xl">
        <Typography variant="h3" paragraph>
          Welcome to the MM developer portal
        </Typography>
      </Container>
    </SideBar>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark {
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
