import React, { PropsWithChildren, FC } from 'react'
import { Grid, Stack, Typography } from '@mui/material'

import Card from './Card'
import { ContentGroup } from '../types'

interface GroupedCardViewProps extends PropsWithChildren {
  contentGroups: ContentGroup[]
}

const GroupedCardView: FC<GroupedCardViewProps> = ({ contentGroups }) => {
  return (
    <>
      {contentGroups.map(({ name: groupName, items }) => (
        <Stack sx={{ mb: 4 }}>
          {groupName && (
            <Typography variant="h4" sx={{ mb: 2 }}>
              {groupName}
            </Typography>
          )}
          <Grid container spacing={4}>
            {items.map((item) => (
              <Grid item sm={12} md={6}>
                <Card {...item} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      ))}
    </>
  )
}

export default GroupedCardView
