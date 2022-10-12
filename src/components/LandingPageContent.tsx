import { Typography, Grid, Container, Box } from '@mui/material'
import React, { FC } from 'react'
import Card from './Card'

import discoverCardImage from '../assets/images/discover.jpg'
import documentationCardImage from '../assets/images/documentation.jpg'
import communityCardImage from '../assets/images/community.jpg'

const LandingPage: FC = () => {
  return (
    <Container sx={{ mt: 4 }} maxWidth="xl">
      <Typography variant="h3" paragraph>
        How would you like to get started?
      </Typography>
      <Grid container columnSpacing={5} rowSpacing={5} sx={{ justifyContent: 'space-between' }}>
        <Grid item sm={4} xs={12}>
          <Card
            title="Discover"
            description="Product description is pinned to two lines, with ellipses used to truncate any overflow. Lorem ipsum dolor sit met et fiducini mon amor con"
            image={discoverCardImage}
            to="/discover/"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card
            title="Documentation"
            description="Product description is pinned to two lines, with ellipses used to truncate any overflow. Lorem ipsum dolor sit met et fiducini mon amor con"
            image={documentationCardImage}
            to="/documentation/"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card
            title="Community"
            description="Product description is pinned to two lines, with ellipses used to truncate any overflow. Lorem ipsum dolor sit met et fiducini mon amor con"
            image={communityCardImage}
            to="/community/"
          />
        </Grid>
      </Grid>
      <Box sx={{ paddingTop: 8, paddingBottom: 8 }}>
        <Typography variant="h3" paragraph>
          About Labs Portal
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          The Moata Labs Portal aims to provide an information source for citizen developers, to help compose their own
          solutions. The Portal will open up published documentation related to Moata products and provide guidance on
          how to use them. Additionally, composable solutions from the business will be showcased to inspire and engage
          the community.
        </Typography>
      </Box>
    </Container>
  )
}

export default LandingPage
