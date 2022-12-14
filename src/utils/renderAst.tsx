/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/void-dom-elements-no-children */
import React, { PropsWithChildren } from 'react'
import {
  Box,
  Typography,
  List,
  ListItem,
  Divider,
  Paper,
  Link,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
} from '@mui/material'
import RehypeReact from 'rehype-react'

const h2 = ({ children }: PropsWithChildren) => (
  <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
    {children}
  </Typography>
)

// seems like some incorrect typing in the imported library... :/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: ({ children }: PropsWithChildren) => (
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        {children}
      </Typography>
    ),
    h2,
    h3: h2,
    h4: h2,
    h5: h2,
    h6: h2,
    p: ({ children }: PropsWithChildren) => <Typography paragraph>{children}</Typography>,
    ul: ({ children }: PropsWithChildren) => (
      <List sx={{ listStyleType: 'disc', pl: 2, py: 0, mb: 2, '& ol': { mb: 0 }, '& ul': { mb: 0 } }}>{children}</List>
    ),
    ol: ({ children }: PropsWithChildren) => (
      <List sx={{ listStyleType: 'decimal', pl: 2, py: 0, mb: 2, '& ol': { mb: 0 }, '& ul': { mb: 0 } }}>
        {children}
      </List>
    ),
    li: ({ children }: PropsWithChildren) => (
      <ListItem sx={{ display: 'list-item', py: 0, my: 1 }}>{children}</ListItem>
    ),
    hr: () => <Divider sx={{ mb: 2 }} />,
    blockquote: ({ children }: PropsWithChildren) => (
      <Paper
        sx={{
          padding: 2,
          backgroundColor: 'unset',
          borderColor: 'backround.paper',
          borderLeft: `2px solid`,
          mb: 2,
        }}
      >
        {children}
      </Paper>
    ),
    a: ({ children, ...props }: PropsWithChildren) => <Link {...props}>{children}</Link>,
    div: (props: { className?: string } & PropsWithChildren) => (
      <Box
        {...props}
        sx={{
          '&.gatsby-highlight': {
            my: 3,
          },
          '&.gatsby-highlight > pre': {
            py: 2,
            borderRadius: '4px',
            fontSize: '0.75rem',
            overflowX: 'auto',
          },
        }}
      />
    ),
    figure: ({ children, ...props }: PropsWithChildren) => (
      <Box
        {...props}
        sx={{
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        {children}
      </Box>
    ),
    img: ({ children, ...props }: PropsWithChildren) => (
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
        }}
      >
        <img {...props}>{children}</img>
      </Box>
    ),
    figcaption: ({ children, ...props }: PropsWithChildren) => (
      <Box {...props} sx={{ mt: 1, textAlign: 'left', color: 'text.secondary' }}>
        {children}
      </Box>
    ),
    table: ({ children, ...props }: PropsWithChildren) => (
      <TableContainer component={Paper} sx={{ my: 3, borderRadius: '4px' }}>
        <Table {...props}>{children}</Table>
      </TableContainer>
    ),
    thead: ({ children, ...props }: PropsWithChildren) => <TableHead {...props}>{children}</TableHead>,
    tr: ({ children, ...props }: PropsWithChildren) => <TableRow {...props}>{children}</TableRow>,
    th: ({ children, ...props }: PropsWithChildren) => <TableCell {...props}>{children}</TableCell>,
    td: ({ children, ...props }: PropsWithChildren) => <TableCell {...props}>{children}</TableCell>,
  },
}).Compiler

export default renderAst
