import React, { FC } from 'react'
import { graphql, HeadFC, PageProps } from 'gatsby'
import { Typography } from '@mui/material'

import ContentWithSidebar from '../components/ContentWithSidebar'
import GroupedcardView from '../components/GroupedCardView'

const DocumentationPage: FC<PageProps<Queries.DocumentationPageQuery>> = ({ location: { pathname }, data }) => {
  const {
    allMarkdownRemark,
    allGroupsYaml: { sections },
  } = data

  const pages = allMarkdownRemark.edges
    .map((edge) => edge.node)
    .filter((node) => node.fields?.category === 'documentation')
    .map((node) => ({
      title: node.frontmatter?.title ?? '',
      slug: node.fields?.slug ?? '',
    }))

  const cardGroups =
    sections
      .find((section) => section.fieldValue === 'documentation')
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
        Documentation
      </Typography>
      <GroupedcardView cardGroups={cardGroups} />
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

export const pageQuery = graphql`
  query DocumentationPage {
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
