import React, { FC, PropsWithChildren, StrictMode } from 'react'
import { ThemeProvider, CssBaseline, Container, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material'
import { themes } from '@mott-macdonald/smi-react-ui-kit'
import { groupBy } from 'rambdax'

import { Link } from 'gatsby'
import Header from './Header'

const drawerWidth = 310

interface LayoutProps extends PropsWithChildren {
  pages?: {
    readonly slug: string
    readonly title: string
  }[]
}

const Layout: FC<LayoutProps> = ({ pages, children }) => {
  const groups = pages && groupBy((page) => page.slug.split('/')[2], pages)

  return (
    <StrictMode>
      <ThemeProvider theme={themes.light}>
        <CssBaseline />
        <Header />
        <Container
          maxWidth="xl"
          sx={{
            display: 'grid',
            gridTemplateColumns: `${drawerWidth}px minmax(0, 1fr)`,
          }}
        >
          {groups && (
            <Box
              sx={{
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
            >
              <List>
                {Object.entries(groups).flatMap(([category, categoryPages]) => (
                  <>
                    <ListItem disableGutters key={category}>
                      <ListItemText primary={category.toUpperCase()} />
                    </ListItem>
                    {categoryPages.map((page) => (
                      <ListItem disableGutters key={page.slug}>
                        <Link to={page.slug}>
                          <ListItemButton>
                            <ListItemText primary={page.title} />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    ))}
                  </>
                ))}
              </List>
            </Box>
          )}
          <Box sx={{ p: 2 }}>{children}</Box>
        </Container>
      </ThemeProvider>
    </StrictMode>
  )
}

export default Layout
