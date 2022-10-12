import React, { FC } from 'react'
import { Button, Card as MuiCard, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { Link as GatsbyLink } from 'gatsby'

interface Props {
  title: string
  description: string
  image: string
  to: string
}

const Card: FC<Props> = ({ title, description, image, to }: Props) => {
  return (
    <MuiCard>
      <CardMedia
        component="div"
        sx={{
          backgroundImage: `url(${image})`,
          height: 194,
          backgroundSize: 'cover',
          display: 'flex',
        }}
      />
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
        <Button component={GatsbyLink} to={to}>
          Learn More
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
