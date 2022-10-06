import React, { FC, PropsWithChildren } from 'react'
import { Container, Box, Hidden } from '@mui/material'

import SideBar, { SideBarProps } from './SideBar'

const drawerWidth = 200

const ContentWithSidebar: FC<SideBarProps & PropsWithChildren> = ({ children, ...sideBarProps }) => {
  return (
    <>
      <Hidden xlDown>
        <SideBar sx={{ width: drawerWidth, position: 'absolute', pt: 4, ml: 2, left: 0 }} {...sideBarProps} />
      </Hidden>
      <Container
        maxWidth="xl"
        sx={{
          display: 'grid',
          gridTemplateColumns: `${drawerWidth}px minmax(0, 1fr) ${drawerWidth}px`,
          pt: 4,
          columnGap: 4,
        }}
      >
        <Hidden xlUp>
          <SideBar {...sideBarProps} />
        </Hidden>
        <Hidden xlDown>
          <Box />
        </Hidden>
        <Box>{children}</Box>
      </Container>
    </>
  )
}

export default ContentWithSidebar
