/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-var-requires */
import { CreateNodeArgs, CreatePagesArgs, CreateSchemaCustomizationArgs } from 'gatsby'

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
  const { createPage } = actions

  // Define a template
  const markdownPage = path.resolve(`./src/templates/MarkdownPageTemplate.tsx`)

  // Get all markdown articles sorted by priority
  const result = await graphql<{
    readonly allMarkdownRemark: {
      readonly nodes: ReadonlyArray<{
        readonly id: string
        readonly fields: {
          readonly slug: string
        }
      }>
    }
  }>(
    `
      {
        allMarkdownRemark(sort: { fields: [fields___sortPriority], order: DESC }) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `,
  )

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors)
    return
  }

  const articles = result.data?.allMarkdownRemark.nodes

  // Create article pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (articles && articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: article.fields.slug,
        component: markdownPage,
        context: {
          id: article.id,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }: CreateNodeArgs) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
    const category = slug.split('/')[1]
    createNodeField({
      name: `category`,
      node,
      value: category,
    })
    createNodeField({
      node,
      name: `sortPriority`,
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-explicit-any
      value: (node as any).frontmatter?.priority || -Number.MAX_VALUE,
    })
  }
}

exports.createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      last_updated: Date @dateformat
    }

    type Fields {
      slug: String
      category: String
      sortPriority: Int
    }
  `)
}
