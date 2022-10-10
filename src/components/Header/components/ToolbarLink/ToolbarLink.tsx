import React, { FC, PropsWithChildren } from 'react'
import { Link } from '@mui/material'
import { Link as GatsbyLink } from 'gatsby'

interface HeaderProps extends PropsWithChildren {
  pathname: string
  to: string
  target?: '_self' | '_blank' | '_parent' | '_top'
}

const ToolbarLink: FC<HeaderProps> = ({ pathname, to, target, children }) => {
  const headerPath = pathname.slice(0, pathname.substring(1).indexOf('/') + 2)
  return (
    <Link
      to={to}
      target={target}
      sx={{
        textUnderlineOffset: 8,
        textDecorationThickness: 1,
        '&:hover': {
          textDecorationThickness: 1,
        },
      }}
      color="#000000"
      underline={headerPath === to ? 'always' : 'hover'}
      component={GatsbyLink}
    >
      {children}
    </Link>
  )
}

export default ToolbarLink
