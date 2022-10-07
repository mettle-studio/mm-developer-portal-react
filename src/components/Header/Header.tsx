import React, { FC } from 'react'
import { Box, AppBar, Toolbar, Typography, Container, Link } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { themes } from '@mott-macdonald/smi-react-ui-kit'
import { Link as GatsbyLink } from 'gatsby'
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
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 3 }}>
            <GatsbyLink to="/" style={{ textDecoration: 'none' }}>
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
            </GatsbyLink>
            <Link
              to="/page"
              sx={{
                // WARNING: the styling below may not be suitable dependent upon the required browser support
                // https://caniuse.com/?search=text-underline-offset
                // https://caniuse.com/?search=text-decoration-thickness
                textUnderlineOffset: 8,
                textDecorationThickness: 3,
                '&:hover': {
                  textDecorationThickness: 3,
                },
                paddingLeft: 3,
              }}
              color="inherit"
              underline={pathname === 'community' ? 'always' : 'hover'} // TODO: HOW TO GET PATHNAME
              component={GatsbyLink}
            >
              <Typography variant="body1">Page</Typography>
            </Link>
            <Link
              to="/documentation"
              sx={{
                // WARNING: the styling below may not be suitable dependent upon the required browser support
                // https://caniuse.com/?search=text-underline-offset
                // https://caniuse.com/?search=text-decoration-thickness
                textUnderlineOffset: 8,
                textDecorationThickness: 3,
                '&:hover': {
                  textDecorationThickness: 3,
                },
                paddingLeft: 3,
              }}
              color="inherit"
              underline={pathname === 'community' ? 'always' : 'hover'}
              component={GatsbyLink}
            >
              <Typography variant="body1">Documentation</Typography>
            </Link>
            <Link
              to="/community"
              sx={{
                // WARNING: the styling below may not be suitable dependent upon the required browser support
                // https://caniuse.com/?search=text-underline-offset
                // https://caniuse.com/?search=text-decoration-thickness
                textUnderlineOffset: 8,
                textDecorationThickness: 3,
                '&:hover': {
                  textDecorationThickness: 3,
                },
                paddingLeft: 3,
              }}
              color="inherit"
              underline={pathname === 'community' ? 'always' : 'hover'}
              component={GatsbyLink}
            >
              <Typography variant="body1">Community</Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header
