import { Typography, Grid, Container, Box, Hidden } from '@mui/material'
import React, { FC } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import Card from './Card'

interface LandingPageProps {
  images: { readonly name: string; readonly childImageSharp: { readonly gatsbyImageData: IGatsbyImageData } | null }[]
}

const LandingPage: FC<LandingPageProps> = ({ images }) => {
  return (
    <Container sx={{ my: 6 }} maxWidth="md">
      <Hidden smDown>
        <Typography variant="h3" paragraph>
          How would you like to get started?
        </Typography>
      </Hidden>
      <Hidden smUp>
        <Typography variant="h4" paragraph>
          How would you like to get started?
        </Typography>
      </Hidden>
      <Grid container spacing={4}>
        <Grid item sm={4} xs={12}>
          <Card
            title="Discover"
            description="Product description is pinned to two lines, with ellipses used to truncate any overflow. Lorem ipsum dolor sit met et fiducini mon amor con"
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            image={images.find((image) => image.name === 'discover')!.childImageSharp!.gatsbyImageData}
            to="/discover/"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card
            title="Documentation"
            description="Product description is pinned to two lines, with ellipses used to truncate any overflow. Lorem ipsum dolor sit met et fiducini mon amor con"
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            image={images.find((image) => image.name === 'documentation')!.childImageSharp!.gatsbyImageData}
            to="/documentation/"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card
            title="Community"
            description="Product description is pinned to two lines, with ellipses used to truncate any overflow. Lorem ipsum dolor sit met et fiducini mon amor con"
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            image={images.find((image) => image.name === 'community')!.childImageSharp!.gatsbyImageData}
            to="https://support.moata.com/hc/en-gb/community/topics"
            target="_blank"
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 8 }}>
        <Hidden smDown>
          <Typography variant="h3" paragraph>
            About Labs Portal
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            The Moata Labs Portal aims to provide an information source for citizen developers, to help compose their
            own solutions. The Portal will open up published documentation related to Moata products and provide
            guidance on how to use them. Additionally, composable solutions from the business will be showcased to
            inspire and engage the community.
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="h4" paragraph>
            About Labs Portal
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            The Moata Labs Portal aims to provide an information source for citizen developers, to help compose their
            own solutions. The Portal will open up published documentation related to Moata products and provide
            guidance on how to use them. Additionally, composable solutions from the business will be showcased to
            inspire and engage the community.
          </Typography>
        </Hidden>
      </Box>
    </Container>
  )
}

export default LandingPage
