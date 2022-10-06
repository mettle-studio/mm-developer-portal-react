import React, { FC, PropsWithChildren, useContext, useMemo } from 'react'
import { Container, Box } from '@mui/material'
import { TreeView } from '@mui/lab'
import { groupBy, last } from 'rambdax'
import { Link } from 'gatsby'

import { TreeViewExpandedNodeIdsContext } from './Providers'
import SideBarTreeItem from './SideBarTreeItem'

const drawerWidth = 200

interface Page {
  readonly slug: string
  readonly title: string
}

interface LeafNode {
  page: Page
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, @typescript-eslint/consistent-type-assertions
const isLeafNode = (node: LeafNode | BranchNode): node is LeafNode => (node as LeafNode).page !== undefined

interface BranchNode {
  [key: string]: LeafNode | BranchNode
}

interface SideBarProps extends PropsWithChildren {
  pathname: string
  pages?: Page[]
  levelsToSkip?: number
}

const getPathComponents = (slug: string) => slug.split('/').filter((pathComponent) => pathComponent)

const SideBar: FC<SideBarProps> = ({ pathname, pages, levelsToSkip = 0, children }) => {
  const [expandedNodeIds, setExpandedNodeIds] = useContext(TreeViewExpandedNodeIdsContext)

  const pageTree = useMemo(() => {
    const group = (groupPages: Page[], level: number): BranchNode => {
      const groupGroups = groupBy((page) => getPathComponents(page.slug)[level], groupPages)
      const items = Object.entries(groupGroups).map<BranchNode>(([key, values]) => {
        if (values.length === 1 && last(getPathComponents(values[0].slug)) === key) {
          return { [key]: { page: values[0] } }
        }
        return { [key]: group(values, level + 1) }
      })
      return items.reduce((acc, v) => ({ ...acc, ...v }), {})
    }

    return group(pages ?? [], levelsToSkip)
  }, [pages, levelsToSkip])

  const renderNode = (keys: string[], node: BranchNode | LeafNode) => {
    const nodeId = keys.join('/')
    if (isLeafNode(node)) {
      return (
        <Link style={{ textDecoration: 'none', color: 'unset' }} to={node.page.slug}>
          <SideBarTreeItem nodeId={nodeId} label={node.page.title} />
        </Link>
      )
    }
    const key = last(keys) ?? ''
    return (
      <SideBarTreeItem bold nodeId={nodeId} label={key[0].toUpperCase() + key.substring(1)}>
        {Object.entries(node).map(([childKey, childNode]) => renderNode([...keys, childKey], childNode))}
      </SideBarTreeItem>
    )
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'grid',
        gridTemplateColumns: `${drawerWidth}px minmax(0, 1fr) ${drawerWidth}px`,
        paddingTop: 4,
        columnGap: 4,
      }}
    >
      <Box
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <TreeView
          expanded={expandedNodeIds}
          selected={[getPathComponents(pathname).slice(levelsToSkip).join('/')]}
          onNodeToggle={(_, nodeIds) => setExpandedNodeIds(nodeIds)}
        >
          {Object.entries(pageTree).map(([key, childNode]) => renderNode([key], childNode))}
        </TreeView>
      </Box>
      <Box>{children}</Box>
    </Container>
  )
}

export default SideBar
