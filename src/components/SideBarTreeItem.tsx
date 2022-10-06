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
  bold?: boolean
}

const SideBarTreeItem = (props: StyledTreeItemProps) => {
  const { bold, label, ...other } = props
  const theme = useTheme()

  return (
    <TreeItem
      label={
        <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
          {label}
        </Typography>
      }
      sx={{
        my: 0.5,
        [`& .${treeItemClasses.content}`]: {
          paddingLeft: 0,
          backgroundColor: 'transparent',
          color: 'text.secondary',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: 'transparent',
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
        fontWeight: bold ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
      }}
      {...other}
    />
  )
}

export default SideBarTreeItem
