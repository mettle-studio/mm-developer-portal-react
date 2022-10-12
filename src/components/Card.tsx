import React, { FC } from 'react'
import { Button, Card as MuiCard, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { Link as GatsbyLink } from 'gatsby'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'

interface CardProps {
  title: string
  description: string
  image: IGatsbyImageData
  to: string
  target?: '_self' | '_blank' | '_parent' | '_top'
}

const Card: FC<CardProps> = ({ title, description, image, to, target }) => {
  return (
    <MuiCard>
      <CardMedia sx={{ height: 194 }}>
        <GatsbyImage style={{ height: '100%' }} objectFit="cover" image={image} alt={title} />
      </CardMedia>
      <CardContent title={description}>
        <Stack spacing={2}>
          <Stack direction="column">
            <Typography variant="h5" noWrap>
              {title}
            </Typography>
          </Stack>
          <Typography
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </Typography>
        </Stack>
      </CardContent>

      <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button component={GatsbyLink} to={to} target={target}>
          Learn More
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
