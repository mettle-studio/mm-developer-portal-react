const usePages = ({ allMarkdownRemark }: Queries.DiscoverPageQuery) =>
  allMarkdownRemark.edges
    .map((edge) => edge.node)
    .filter((node) => node.fields?.category === 'discover')
    .map((node) => ({
      title: node.frontmatter?.title ?? '',
      slug: node.fields?.slug ?? '',
    }))

export default usePages
