import React, { FC, PropsWithChildren, StrictMode } from 'react'
import { CssBaseline, Container, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
import { themes } from '@mott-macdonald/smi-react-ui-kit'
import { groupBy } from 'rambdax'

import { Link, navigate } from 'gatsby'
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
              <TreeView defaultExpanded={['3']} sx={{ paddingTop: 10 }}>
                {Object.entries(groups).flatMap(([category, pages]) => (
                  <TreeItem nodeId={category} label={category[0].toUpperCase() + category.substring(1)}>
                    {pages.map((page, index) => (
                      <TreeItem
                        onClick={() => {
                          navigate(`${page!.slug!}`)
                        }}
                        nodeId={index.toString()}
                        label={page?.title}
                      />
                    ))}
                  </TreeItem>
                ))}
              </TreeView>
            </Box>
          )}
          <Box sx={{ p: 2 }}>{children}</Box>
        </Container>
      </ThemeProvider>
    </StrictMode>
  )
}

export default Layout
