import React, { PropsWithChildren, FC } from 'react'
import { Grid, Stack, Typography } from '@mui/material'

import Card, { CardProps } from './Card'

interface GroupedCardViewProps extends PropsWithChildren {
  cardGroups: {
    cards: CardProps[]
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
            {cards.map((card) => (
              <Grid item sm={12} md={6}>
                <Card {...card} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      ))}
    </>
  )
}

export default GroupedCardView
