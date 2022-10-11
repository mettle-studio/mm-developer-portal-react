import React, { PropsWithChildren, FC } from 'react'
import { Grid, Link, Stack, Typography } from '@mui/material'
import { Link as GatsbyLink } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface GroupedCardViewProps extends PropsWithChildren {
  cardGroups: {
    cards:
      | {
          firstPage: string | undefined
          description?: string | null
          directory?: string | null
          name?: string | null
          image?: {
            readonly childImageSharp: {
              readonly gatsbyImageData: IGatsbyImageData
            } | null
          } | null
        }[]
      | undefined
    name: string | null
  }[]
}

const GroupedCardView: FC<GroupedCardViewProps> = ({ cardGroups }) => {
  return (
    <>
      {cardGroups.map(({ name: groupName, cards }) => (
        <Stack sx={{ mb: 4 }}>
          {groupName && (
            <Typography variant="h4" sx={{ mb: 2 }}>
              {groupName}
            </Typography>
          )}
          <Grid container spacing={4}>
            {cards?.map((card) => (
              <Grid item xs={12} sm={6}>
                <Link component={GatsbyLink} to={card.firstPage ?? ''}>
                  {card.name}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Stack>
      ))}
    </>
  )
}

export default GroupedCardView
