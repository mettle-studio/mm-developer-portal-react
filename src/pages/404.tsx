import * as React from 'react'
import { HeadFC } from 'gatsby'
import { Container, Typography } from '@mui/material'

import Layout from '../components/Providers'

const NotFoundPage = () => {
  return (
    <Layout>
      <Container maxWidth="xl">
        <Typography variant="h3" paragraph>
          Page not found
        </Typography>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
