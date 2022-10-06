import * as React from 'react'
import { HeadFC } from 'gatsby'
import { Container, Typography } from '@mui/material'

const NotFoundPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 4,
      }}
    >
      <Typography variant="h3" paragraph>
        Page not found
      </Typography>
    </Container>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
