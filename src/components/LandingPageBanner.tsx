import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import { useTheme } from '@mui/material/styles'
import BannerImage from '../assets/images/banner-image.png'

const LandingPageBanner: FC = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: theme.spacing(50),
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        paddingLeft: theme.spacing(8),
      }}
    >
      <Box sx={{ maxWidth: theme.spacing(95), paddingRight: theme.spacing(8), alignSelf: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: 60,
            letterSpacing: '-0.5px',
            lineHeight: 1.2,
            fontWeight: 'semibold',
          }}
        >
          Welcome to Labs Portal
        </Typography>
        <Typography variant="h5">
          To inspire and enable our Mott MacDonald teams to innovate, collaborate and share on the Moata platform,
          helping achieve &quot;Engineering innovation on demand&quot;.
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${BannerImage})`,
          flex: 1,
          backgroundSize: 'auto 150%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  )
}

export default LandingPageBanner
