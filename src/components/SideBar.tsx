import React, { FC, useContext, useMemo, useCallback } from 'react'
import { TreeView } from '@mui/lab'
import { SxProps } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { groupBy, is, last, reverse } from 'rambdax'
import { Link } from 'gatsby'

import { TreeViewExpandedNodeIdsContext } from './Providers'
import SideBarTreeItem from './SideBarTreeItem'

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

export interface SideBarProps {
  sx?: SxProps<Theme>
  pathname: string
  pages?: Page[]
  levelsToSkip?: number
}

const getPathComponents = (slug: string, levelsToSkip: number) => {
  const pathComponents = slug.split('/').filter((pathComponent) => pathComponent)
  if (pathComponents.length <= 0) {
    return ['index']
  }
  if (pathComponents.length <= levelsToSkip) {
    return [reverse(pathComponents)[0]]
  }
  return pathComponents.slice(levelsToSkip)
}

const SideBar: FC<SideBarProps> = ({ sx, pathname, pages, levelsToSkip = 0 }) => {
  const [expandedNodeIds, setExpandedNodeIds] = useContext(TreeViewExpandedNodeIdsContext)

  const pageTree = useMemo(() => {
    const group = (groupPages: Page[], level: number): BranchNode => {
      const groupGroups = groupBy((page) => getPathComponents(page.slug, levelsToSkip)[level], groupPages)
      const items = Object.entries(groupGroups).map<BranchNode>(([key, values]) => {
        const pathComponents = getPathComponents(values[0].slug, levelsToSkip)
        if (values.length === 1 && (pathComponents.length <= levelsToSkip || last(pathComponents) === key)) {
          return { [key]: { page: values[0] } }
        }
        return { [key]: group(values, level + 1) }
      })
      return items.reduce((acc, v) => ({ ...acc, ...v }), {})
    }

    return group(pages ?? [], 0)
  }, [pages, levelsToSkip])

  const renderNode = useCallback(
    (keys: string[], node: BranchNode | LeafNode) => {
      const root = keys.length === 1
      const nodeId = keys.join('/')
      if (isLeafNode(node)) {
        return (
          <Link style={{ textDecoration: 'none', color: 'unset' }} to={node.page.slug}>
            <SideBarTreeItem root={root} nodeId={nodeId} label={node.page.title} />
          </Link>
        )
      }
      const key = last(keys) ?? ''
      return (
        <SideBarTreeItem
          root={root}
          expanded={expandedNodeIds.includes(nodeId)}
          nodeId={nodeId}
          label={key[0].toUpperCase() + key.substring(1)}
        >
          {Object.entries(node).map(([childKey, childNode]) => renderNode([...keys, childKey], childNode))}
        </SideBarTreeItem>
      )
    },
    [expandedNodeIds],
  )

  const selected = useMemo(
    () =>
      pages
        ?.map((page) => getPathComponents(page.slug, levelsToSkip).join('/'))
        .find((nodeId) => pathname.slice(0, -1).endsWith(nodeId)),
    [pages, levelsToSkip, pathname],
  )

  return (
    <TreeView
      sx={{ ...(sx ?? {}), my: -1 }}
      multiSelect={false}
      expanded={expandedNodeIds}
      selected={selected}
      onNodeToggle={(_, newNodeIds) => {
        setExpandedNodeIds((oldNodeIds) => {
          const newNodeId = newNodeIds.find((nodeId) => !oldNodeIds.includes(nodeId))
          if (newNodeId === undefined) {
            // is unexpanding
            return newNodeIds
          }
          // return nodes that are the newly expanded node or are an ancestor of it
          return newNodeIds.filter((oldNodeId) => newNodeId.startsWith(oldNodeId))
        })
      }}
      onNodeSelect={(_: React.SyntheticEvent, selectedNodeIds: string | string[]) => {
        setExpandedNodeIds((oldNodeIds) => {
          const selectedNodeId = is(Array, selectedNodeIds) ? selectedNodeIds[0] : selectedNodeIds
          // return nodes that are the newly expanded node or are an ancestor of it
          return oldNodeIds.filter((oldNodeId) => selectedNodeId.startsWith(oldNodeId))
        })
      }}
    >
      {Object.entries(pageTree).map(([key, childNode]) => renderNode([key], childNode))}
    </TreeView>
  )
}

export default SideBar
