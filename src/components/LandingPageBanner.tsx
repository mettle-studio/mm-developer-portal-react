import { Stack, Hidden, Box, Typography, TypographyProps } from '@mui/material'
import React, { FC } from 'react'
import { useTheme } from '@mui/material/styles'
import { StaticImage } from 'gatsby-plugin-image'

const TypgraphyH2 = (props: TypographyProps) => (
  <Typography
    {...props}
    variant="h3"
    sx={{
      fontSize: (theme) => `${60 / theme.typography.htmlFontSize}rem`,
      letterSpacing: -0.5,
      lineHeight: 1.2,
      fontWeight: (theme) => theme.typography.fontWeightMedium,
    }}
  />
)

const BANNER_HEIGHT = 422

const LandingPageBanner: FC = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: BANNER_HEIGHT,
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      }}
    >
      <Stack
        sx={{
          width: {
            xl: 727,
            lg: 528,
            md: 360,
            sm: undefined,
          },
          ml: {
            md: theme.spacing(8),
            sm: theme.spacing(4),
            xs: theme.spacing(2),
          },
          mr: {
            lg: theme.spacing(8),
            md: theme.spacing(3),
            sm: theme.spacing(4),
            xs: theme.spacing(2),
          },
          alignSelf: 'center',
        }}
        spacing={3}
      >
        <Hidden smDown>
          <TypgraphyH2>Welcome to Labs Portal</TypgraphyH2>
          <Typography variant="h5">
            To inspire and enable our Mott MacDonald teams to innovate, collaborate and share on the Moata platform,
            helping achieve &quot;Engineering innovation on demand&quot;.
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="h3">Welcome to Labs Portal</Typography>
          <Typography variant="h6">
            To inspire and enable our Mott MacDonald teams to innovate, collaborate and share on the Moata platform,
            helping achieve &quot;Engineering innovation on demand&quot;.
          </Typography>
        </Hidden>
      </Stack>
      <Hidden smDown>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <StaticImage
            style={{
              height: '100%',
            }}
            height={BANNER_HEIGHT}
            backgroundColor="transparent"
            objectFit="none"
            placeholder="none"
            src="../assets/images/banner-image.png"
            alt="Welcome to the labs portal"
          />
        </Box>
      </Hidden>
    </Box>
  )
}

export default LandingPageBanner
