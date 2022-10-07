import React, { FC, PropsWithChildren } from 'react'
import { Link } from '@mui/material'
import { Link as GatsbyLink } from 'gatsby'

interface HeaderProps extends PropsWithChildren {
  pathname: string
  to: string
}

const ToolbarLink: FC<HeaderProps> = ({ pathname, to, children }) => {
  return (
    <Link
      to={to}
      sx={{
        // WARNING: the styling below may not be suitable dependent upon the required browser support
        // https://caniuse.com/?search=text-underline-offset
        // https://caniuse.com/?search=text-decoration-thickness
        textUnderlineOffset: 8,
        textDecorationThickness: 1,
        '&:hover': {
          textDecorationThickness: 1,
        },
        marginLeft: 3,
      }}
      color="#000000"
      underline={pathname === to ? 'always' : 'hover'}
      component={GatsbyLink}
    >
      {children}
    </Link>
  )
}

export default ToolbarLink
