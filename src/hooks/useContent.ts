import { graphql, useStaticQuery } from 'gatsby'
import { groupBy, last } from 'rambdax'
import { BranchNode, Page, ContentGroup, LeafNode } from '../types'

type ContentQuery = {
  readonly allMarkdownRemark: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly fields: { readonly slug: string; readonly title: string; readonly category: string }
      }
    }>
  }
  readonly allGroupsYaml: {
    readonly sections: ReadonlyArray<{
      readonly name: string
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly name: string
          readonly items: ReadonlyArray<{
            readonly description: string
            readonly directory: string
            readonly image: {
              readonly childImageSharp: {
                readonly gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData
              }
            }
          }>
        }
      }>
    }>
  }
}

const getPathComponents = (slug: string) => slug.split('/').filter((pathComponent) => pathComponent)

const groupPages = (groupPageList: Page[], level: number): BranchNode => {
  const groupGroups = groupBy((page) => getPathComponents(page.slug)[level], groupPageList)
  const items = Object.entries(groupGroups).map<BranchNode>(([key, values]) => {
    const pathComponents = getPathComponents(values[0].slug)
    if (values.length === 1 && (pathComponents.length <= 0 || last(pathComponents) === key)) {
      return { [key]: { page: values[0] } }
    }
    return { [key]: groupPages(values, level + 1) }
  })
  return items.reduce((acc, v) => ({ ...acc, ...v }), {})
}

const useContent = (section: string): { contentGroups: ContentGroup[]; pageTree: BranchNode | LeafNode } => {
  const {
    allMarkdownRemark,
    allGroupsYaml: { sections },
  } = useStaticQuery<ContentQuery>(
    graphql`
      query ContentQuery {
        allMarkdownRemark(sort: { fields: [fields___sortPriority], order: DESC }) {
          edges {
            node {
              fields {
                slug
                category
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
                items {
                  description
                  directory
                  image {
                    childImageSharp {
                      gatsbyImageData(layout: CONSTRAINED)
                    }
                  }
                }
              }
            }
            name: fieldValue
          }
        }
      }
    `,
  )

  const pages = allMarkdownRemark.edges
    .map((edge) => edge.node)
    .filter((node) => node.fields.category === section)
    .map((node) => ({
      title: node.fields.title,
      slug: node.fields.slug,
    }))

  return {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    contentGroups: sections
      .find((group) => group.name === section)!
      .edges.map((edge) => edge.node)
      .map((group) => ({
        ...group,
        items: group.items.map((item) => ({
          to: pages.find((page) => page.slug.startsWith(`/${section}/${item.directory}`))?.slug,
          title: item.directory,
          description: item.description,
          image: item.image.childImageSharp.gatsbyImageData,
          key: item.directory,
        })),
      })),
    pageTree: groupPages(pages, 0)[section],
  }
}

export default useContent
