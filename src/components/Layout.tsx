import { CssBaseline } from '@mui/material'
import React, { PropsWithChildren, FC } from 'react'

import Header from './Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      {children}
    </>
  )
}

export default Layout
