import React, { FC } from 'react'
import { AppBar, Toolbar, Typography, Link, Stack, Hidden } from '@mui/material'
import { Link as GatsbyLink } from 'gatsby'

import ToolbarLink from './components/ToolbarLink'
import Moata from '../../assets/svgs/moata.svg'

interface HeaderProps {
  pathname: string
}

const Header: FC<HeaderProps> = ({ pathname }) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'background.default',
        borderBottomStyle: 'solid',
        borderBottomColor: 'divider',
      }}
    >
      <Toolbar sx={{ py: 3 }}>
        <Stack alignItems="center" direction="row" spacing={3}>
          <Link sx={{ mr: 3 }} to="/" underline="none" component={GatsbyLink}>
            <Stack alignItems="center" direction="row" spacing={2}>
              <Moata height={34} width={34} alt="moata" />
              <Typography variant="h4" sx={{ color: 'black' }}>
                Developer Portal
              </Typography>
            </Stack>
          </Link>
          <Hidden mdDown>
            <ToolbarLink to="/discover/" pathname={pathname}>
              <Typography variant="body1">Discover</Typography>
            </ToolbarLink>
            <ToolbarLink to="/documentation/" pathname={pathname}>
              <Typography variant="body1">Documentation</Typography>
            </ToolbarLink>
            <ToolbarLink to="https://support.moata.com/hc/en-gb/community/topics" target="_blank" pathname={pathname}>
              <Typography variant="body1">Community</Typography>
            </ToolbarLink>
          </Hidden>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
