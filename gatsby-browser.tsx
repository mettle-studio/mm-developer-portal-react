import React from 'react'
import { WrapPageElementBrowserArgs } from 'gatsby'

import Providers from './src/components/Providers'
import Layout from './src/components/Layout'

import './src/fonts.css'

// Highlighting for code blocks
// import "prism-themes/themes/prism-vsc-dark-plus.css";
import 'prism-themes/themes/prism-coldark-dark.css'

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({
  element,
  props: {
    location: { pathname },
  },
}: WrapPageElementBrowserArgs) => (
  <Providers>
    <Layout pathname={pathname}>{element}</Layout>
  </Providers>
)
