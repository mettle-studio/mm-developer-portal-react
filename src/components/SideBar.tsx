import React, { FC, useContext, useMemo, useEffect } from 'react'
import { TreeView } from '@mui/lab'
import { SxProps, Link, Stack, FormControl, InputLabel, Select, MenuItem, ListSubheader } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { is, last } from 'rambdax'
import { Link as GatsbyLink } from 'gatsby'
import { ChevronDown } from '@mott-macdonald/smi-react-ui-kit/icons'

import { TreeViewExpandedNodeIdsContext } from './Providers'
import SideBarTreeItem from './SideBarTreeItem'
import { ContentGroup, BranchNode, LeafNode, isLeafNode } from '../types'

const renderNode = (keys: string[], node: BranchNode | LeafNode, expandedNodeIds: string[]) => {
  const root = keys.length === 1
  const nodeId = keys.join('/')
  if (isLeafNode(node)) {
    return (
      <Link underline="none" component={GatsbyLink} to={node.page.slug}>
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
      {Object.entries(node).map(([childKey, childNode]) => renderNode([...keys, childKey], childNode, expandedNodeIds))}
    </SideBarTreeItem>
  )
}

const removeGroupFromNodeId = (nodeIdWithGroup: string, group?: string) =>
  nodeIdWithGroup.slice((group ?? '').length + 1)

export interface SideBarProps {
  sx?: SxProps<Theme>
  pathname: string
  contentGroups: ContentGroup[]
  pageTree: BranchNode | LeafNode
}

const SideBar: FC<SideBarProps> = ({ sx, pathname, contentGroups, pageTree }) => {
  const [expandedNodeIds, setExpandedNodeIds] = useContext(TreeViewExpandedNodeIdsContext)

  const nodeIdsWithGroup = useMemo(() => {
    const extract = (keys: string[], node: BranchNode | LeafNode): string[] => {
      const nodeId = keys.join('/')
      if (isLeafNode(node)) {
        return [nodeId]
      }
      return [
        nodeId,
        ...Object.entries(node).flatMap(([childKey, childNode]) => extract([...keys, childKey], childNode)),
      ]
    }
    return Object.entries(pageTree).flatMap(([childKey, childNode]) => extract([childKey], childNode))
  }, [pageTree])

  const selectedNodeIdWithGroup = useMemo(
    () => nodeIdsWithGroup.find((nodeId) => decodeURI(pathname).slice(0, -1).endsWith(nodeId)),
    [nodeIdsWithGroup, pathname],
  )

  const selectedTopLevelGroup = useMemo(
    () => selectedNodeIdWithGroup && Object.keys(pageTree).find((key) => key === selectedNodeIdWithGroup.split('/')[0]),
    [selectedNodeIdWithGroup, pageTree],
  )

  const groupPageTree = useMemo(
    () => (!selectedTopLevelGroup || isLeafNode(pageTree) ? undefined : pageTree[selectedTopLevelGroup]),
    [selectedTopLevelGroup, pageTree],
  )

  useEffect(() => {
    if (selectedTopLevelGroup === undefined) {
      setExpandedNodeIds([])
      return
    }
    const expandedNodeIdsWithGroup = nodeIdsWithGroup.filter(
      (nodeId) => selectedNodeIdWithGroup?.startsWith(nodeId) ?? false,
    )
    setExpandedNodeIds(
      expandedNodeIdsWithGroup.map((nodeIdWithGroup) => removeGroupFromNodeId(nodeIdWithGroup, selectedTopLevelGroup)),
    )
  }, [nodeIdsWithGroup, setExpandedNodeIds, selectedNodeIdWithGroup, selectedTopLevelGroup])

  return (
    <Stack sx={{ ...(sx ?? {}), my: 2 }} spacing={2}>
      <FormControl fullWidth>
        <InputLabel htmlFor="grouped-select">Product</InputLabel>
        <Select IconComponent={ChevronDown} value={selectedTopLevelGroup} id="grouped-select" label="Product">
          {contentGroups.flatMap(({ name: groupName, items }) => [
            ...(groupName ? [<ListSubheader>{groupName}</ListSubheader>] : []),
            ...items.map((item) => (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <MenuItem component={GatsbyLink} to={item.to} value={item.key}>
                {item.title}
              </MenuItem>
            )),
          ])}
        </Select>
      </FormControl>
      {groupPageTree && !isLeafNode(groupPageTree) && (
        <TreeView
          multiSelect={false}
          expanded={expandedNodeIds}
          selected={selectedNodeIdWithGroup && removeGroupFromNodeId(selectedNodeIdWithGroup, selectedTopLevelGroup)}
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
          {Object.entries(groupPageTree).map(([key, childNode]) => renderNode([key], childNode, expandedNodeIds))}
        </TreeView>
      )}
    </Stack>
  )
}

export default SideBar
