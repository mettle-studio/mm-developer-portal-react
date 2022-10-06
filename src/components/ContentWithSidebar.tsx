import React, { FC, PropsWithChildren } from 'react'
import { Container, Box, Hidden, Stack, Divider } from '@mui/material'

import SideBar, { SideBarProps } from './SideBar'

const drawerWidth = 200

const ContentWithSidebar: FC<SideBarProps & PropsWithChildren> = ({ children, ...sideBarProps }) => {
  return (
    <>
      <Hidden xlDown>
        <SideBar sx={{ width: drawerWidth, position: 'absolute', pt: 4, ml: 2, left: 0 }} {...sideBarProps} />
      </Hidden>
      <Hidden smDown>
        <Container
          maxWidth="xl"
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: `${drawerWidth}px minmax(0, 1fr)`,
              md: `${drawerWidth}px minmax(0, 1fr) ${drawerWidth}px`,
            },
            py: 4,
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
      </Hidden>
      <Hidden smUp>
        <Container sx={{ py: 4 }}>
          <Stack spacing={2}>
            <SideBar {...sideBarProps} />
            <Divider />
            <Box>{children}</Box>
          </Stack>
        </Container>
      </Hidden>
    </>
  )
}

export default ContentWithSidebar
