import React, { FC } from 'react'
import { graphql, HeadFC, PageProps } from 'gatsby'
import { Typography } from '@mui/material'

import renderAst from '../utils/renderAst'
import ContentWithSidebar from '../components/ContentWithSidebar'

const MarkdownPageTemplate: FC<PageProps<Queries.MarkdownPageTemplateQuery>> = ({ location: { pathname }, data }) => {
  const { allMarkdownRemark, article } = data
  if (article === null) {
    return null
  }
  const { frontmatter, htmlAst, fields } = article

  const pages = allMarkdownRemark.edges
    .map((edge) => edge.node)
    .filter((node) => node.fields?.category === fields?.category)
    .map((node) => ({
      title: node.frontmatter?.title ?? '',
      slug: node.fields?.slug ?? '',
    }))

  return (
    <ContentWithSidebar pathname={pathname} pages={pages} levelsToSkip={1}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        {frontmatter?.title}
      </Typography>
      {renderAst(htmlAst)}
      <Typography variant="caption">last updated at: {frontmatter?.last_updated}</Typography>
    </ContentWithSidebar>
  )
}

export default MarkdownPageTemplate

// TODO: add more for SEO
export const Head: HeadFC<Queries.MarkdownPageTemplateQuery> = ({ data: { article } }) => (
  <>
    <title>{article?.frontmatter?.title}</title>
    <meta name="description" content={article?.frontmatter?.description ?? undefined} />
  </>
)

export const pageQuery = graphql`
  query MarkdownPageTemplate($id: String!) {
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
    article: markdownRemark(id: { eq: $id }) {
      htmlAst
      fields {
        slug
        category
      }
      frontmatter {
        last_updated(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
