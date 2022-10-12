import React, { FC } from 'react'
import { graphql, HeadFC, PageProps } from 'gatsby'
import { Typography } from '@mui/material'

import renderAst from '../utils/renderAst'
import ContentWithSidebar from '../components/ContentWithSidebar'
import useContent from '../hooks/useContent'

const MarkdownPageTemplate: FC<PageProps<Queries.MarkdownPageTemplateQuery>> = ({ location: { pathname }, data }) => {
  const { article } = data
  const { contentGroups, pageTree } = useContent(article?.fields?.category ?? '')
  if (article === null) {
    return null
  }
  const { frontmatter, fields, htmlAst } = article

  return (
    <ContentWithSidebar pathname={pathname} contentGroups={contentGroups} pageTree={pageTree}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        {fields?.title}
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
    <title>{article?.fields?.title}</title>
    <meta name="description" content={article?.frontmatter?.description ?? undefined} />
  </>
)

export const pageQuery = graphql`
  query MarkdownPageTemplate($id: String!) {
    article: markdownRemark(id: { eq: $id }) {
      htmlAst
      fields {
        slug
        title
        category
      }
      frontmatter {
        last_updated(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
