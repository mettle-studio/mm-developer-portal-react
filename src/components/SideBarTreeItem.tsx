import * as React from 'react'
import TreeItem, { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

declare module 'react' {
  interface CSSProperties {
    '--tree-view-color'?: string
    '--tree-view-bg-color'?: string
  }
}

type StyledTreeItemProps = TreeItemProps & {
  root: boolean
  expanded?: boolean
}

const SideBarTreeItem = (props: StyledTreeItemProps) => {
  const { root, expanded, label, children, ...other } = props
  const theme = useTheme()

  return (
    <TreeItem
      label={
        <Typography variant={root ? 'subtitle1' : 'body1'} sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
          {label}
        </Typography>
      }
      sx={{
        [`& .${treeItemClasses.content}`]: {
          paddingLeft: 0,
          backgroundColor: 'transparent',
          color: 'inherit',
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'primary.main',
          },
          '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
          [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit',
          },
        },
        [`& .${treeItemClasses.group}`]: {
          marginLeft: 2,
          [`& .${treeItemClasses.content}`]: {
            paddingLeft: 0,
          },
        },
      }}
      style={{
        fontWeight:
          expanded || (root && children) ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
        color: root && !expanded && children ? theme.palette.text.secondary : theme.palette.text.primary,
        marginTop: root ? theme.spacing(2) : theme.spacing(1),
        marginBottom: root ? theme.spacing(2) : theme.spacing(1),
      }}
      {...other}
    >
      {children}
    </TreeItem>
  )
}

export default SideBarTreeItem
