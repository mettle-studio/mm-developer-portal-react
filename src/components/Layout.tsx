import { CssBaseline } from '@mui/material'
import React, { PropsWithChildren, FC } from 'react'

import Header from './Header'

interface LayoutProps extends PropsWithChildren {
  pathname: string
}

const Layout: FC<LayoutProps> = ({ pathname, children }) => {
  return (
    <>
      <CssBaseline />
      <Header pathname={pathname} />
      {children}
    </>
  )
}

export default Layout
