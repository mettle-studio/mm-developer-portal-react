import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ContentGroupItem {
  title: string
  description: string
  image: IGatsbyImageData
  to?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  key: string
}

export interface ContentGroup {
  name: string
  items: ReadonlyArray<ContentGroupItem>
}

export interface Page {
  readonly slug: string
  readonly title: string
}

export interface LeafNode {
  page: Page
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, @typescript-eslint/consistent-type-assertions
export const isLeafNode = (node: LeafNode | BranchNode): node is LeafNode => (node as LeafNode).page !== undefined

export interface BranchNode {
  [key: string]: LeafNode | BranchNode
}
