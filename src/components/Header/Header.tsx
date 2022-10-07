import React, { FC } from 'react'
import { Box, AppBar, Toolbar, Typography, Link } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { themes } from '@mott-macdonald/smi-react-ui-kit'
import { Link as GatsbyLink } from 'gatsby'

import ToolbarLink from './components/ToolbarLink'
import Moata from '../../images/moata.svg'

interface HeaderProps {
  pathname: string
}

const Header: FC<HeaderProps> = ({ pathname }) => {
  return (
    <ThemeProvider theme={themes.light}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'background.default',
        }}
      >
        <Toolbar sx={{ py: 3 }}>
          <Link to="/" sx={{ textDecoration: 'none', marginRight: 3 }} component={GatsbyLink}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Moata height={34} width={34} alt="moata" />
              <Typography variant="h4" sx={{ color: 'black', paddingLeft: 1 }}>
                Developer Portal
              </Typography>
            </Box>
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
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header
