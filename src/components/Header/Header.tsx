import React, { FC } from 'react'
import { Box, AppBar, Toolbar, Typography, Link, Stack } from '@mui/material'
import { Link as GatsbyLink } from 'gatsby'

import ToolbarLink from './components/ToolbarLink'
import Moata from '../../images/moata.svg'

interface HeaderProps {
  pathname: string
}

const Header: FC<HeaderProps> = ({ pathname }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'background.default',
      }}
    >
      <Toolbar sx={{ py: 3 }}>
        <Stack alignItems="center" direction="row" spacing={3}>
          <Link sx={{ mr: 3 }} to="/" underline="none" component={GatsbyLink}>
            <Stack alignItems="center" direction="row" spacing={1}>
              <Moata height={34} width={34} alt="moata" />
              <Typography variant="h4" sx={{ color: 'black' }}>
                Developer Portal
              </Typography>
            </Stack>
          </Link>
          <ToolbarLink to="/discover" pathname={pathname}>
            <Typography variant="body1">Discover</Typography>
          </ToolbarLink>
          <ToolbarLink to="/documentation" pathname={pathname}>
            <Typography variant="body1">Documentation</Typography>
          </ToolbarLink>
          <ToolbarLink to="/community" pathname={pathname}>
            <Typography variant="body1">Community</Typography>
          </ToolbarLink>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
