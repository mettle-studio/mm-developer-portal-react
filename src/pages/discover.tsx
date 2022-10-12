import React, { FC } from 'react'
import { graphql, HeadFC, PageProps } from 'gatsby'
import { Typography } from '@mui/material'

import ContentWithSidebar from '../components/ContentWithSidebar'
import GroupedcardView from '../components/GroupedCardView'

const DiscoverPage: FC<PageProps<Queries.DiscoverPageQuery>> = ({ location: { pathname }, data }) => {
  const {
    allMarkdownRemark,
    allGroupsYaml: { sections },
  } = data

  const pages = allMarkdownRemark.edges
    .map((edge) => edge.node)
    .filter((node) => node.fields?.category === 'discover')
    .map((node) => ({
      title: node.frontmatter?.title ?? '',
      slug: node.fields?.slug ?? '',
    }))

  const cardGroups =
    sections
      .find((section) => section.fieldValue === 'discover')
      ?.edges.map((edge) => edge.node)
      .map((group) => ({
        ...group,
        cards: group.cards?.map((card) => ({
          link: pages.find((page) => page.slug.startsWith(`/discover/${card?.directory}`))?.slug,
          title: card?.name,
          description: card?.description,
          gatsbyImageData: card?.image?.childImageSharp?.gatsbyImageData,
        })),
      })) ?? []

  return (
    <ContentWithSidebar pathname={pathname} pages={pages} levelsToSkip={1}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Discover
      </Typography>
      <GroupedcardView cardGroups={cardGroups} />
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

export const pageQuery = graphql`
  query DiscoverPage {
    allMarkdownRemark(sort: { fields: [fields___sortPriority], order: DESC }) {
      edges {
        node {
          fields {
            slug
            category
          }
          frontmatter {
            title
          }
        }
      }
    }
    allGroupsYaml {
      sections: group(field: fields___category) {
        edges {
          node {
            name
            cards {
              description
              directory
              name
              image {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
        }
        fieldValue
      }
    }
  }
`
