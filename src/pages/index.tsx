import React, { FC } from 'react'
import type { HeadFC } from 'gatsby'
import { PageProps } from 'gatsby'
import { Container, Typography } from '@mui/material'

const IndexPage: FC<PageProps> = () => {
  return (
    <Container sx={{ mt: 4 }} maxWidth="xl">
      <Typography variant="h3" paragraph>
        Welcome to the MM developer portal
      </Typography>
    </Container>
  )
}

export default IndexPage

// TODO: add more for SEO
export const Head: HeadFC = () => <title>Home Page</title>
