import React, { FC } from 'react'
import { graphql, HeadFC, PageProps } from 'gatsby'
import LandingPageContent from '../components/LandingPageContent'
import LandingPageBanner from '../components/LandingPageBanner'

const IndexPage: FC<PageProps<Queries.IndexPageQuery>> = ({ data: { allFile } }) => {
  return (
    <>
      <LandingPageBanner />
      <LandingPageContent images={allFile.edges.map((edge) => edge.node)} />
    </>
  )
}

export default IndexPage

// TODO: add more for SEO
export const Head: HeadFC = () => <title>Home Page</title>

export const pageQuery = graphql`
  query IndexPage {
    allFile(
      filter: { extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }, sourceInstanceName: { eq: "images" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
