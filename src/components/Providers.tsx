import React, { createContext, FC, PropsWithChildren, StrictMode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { themes } from '@mott-macdonald/smi-react-ui-kit'

export const TreeViewExpandedNodeIdsContext = createContext<[string[], React.Dispatch<React.SetStateAction<string[]>>]>(
  [[''], () => {}],
)

const Providers: FC<PropsWithChildren> = ({ children }) => {
  const expandedNodeIdsState = React.useState<string[]>([])

  return (
    <StrictMode>
      <ThemeProvider theme={themes.light}>
        <TreeViewExpandedNodeIdsContext.Provider value={expandedNodeIdsState}>
          {children}
        </TreeViewExpandedNodeIdsContext.Provider>
      </ThemeProvider>
    </StrictMode>
  )
}

export default Providers
