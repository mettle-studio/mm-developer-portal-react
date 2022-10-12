import React, { FC } from 'react'
import type { HeadFC } from 'gatsby'
import { PageProps } from 'gatsby'
import LandingPageContent from '../components/LandingPageContent'
import LandingPageBanner from '../components/LandingPageBanner'

const IndexPage: FC<PageProps> = () => {
  return (
    <>
      <LandingPageBanner />
      <LandingPageContent />
    </>
  )
}

export default IndexPage

// TODO: add more for SEO
export const Head: HeadFC = () => <title>Home Page</title>
