import React, { PropsWithChildren } from "react";
import {
  Typography,
  List,
  ListItem,
  Divider,
  Paper,
  Link,
} from "@mui/material";
import rehypeReact from "rehype-react";

// this needs fixing
// @ts-ignore
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: ({ children }: PropsWithChildren) => (
      <Typography variant="h3" paragraph>
        {children}
      </Typography>
    ),
    h2: ({ children }: PropsWithChildren) => (
      <Typography variant="h4" paragraph>
        {children}
      </Typography>
    ),
    h3: ({ children }: PropsWithChildren) => (
      <Typography variant="h5" paragraph>
        {children}
      </Typography>
    ),
    h4: ({ children }: PropsWithChildren) => (
      <Typography variant="h6" paragraph>
        {children}
      </Typography>
    ),
    h5: ({ children }: PropsWithChildren) => (
      <Typography variant="h6" paragraph>
        {children}
      </Typography>
    ),
    h6: ({ children }: PropsWithChildren) => (
      <Typography variant="h6" paragraph>
        {children}
      </Typography>
    ),
    p: ({ children }: PropsWithChildren) => (
      <Typography variant="body1" paragraph>
        {children}
      </Typography>
    ),
    ul: ({ children }: PropsWithChildren) => (
      <List sx={{ listStyleType: "disc", pl: 2 }}>{children}</List>
    ),
    ol: ({ children }: PropsWithChildren) => (
      <List sx={{ listStyleType: "decimal", pl: 2 }}>{children}</List>
    ),
    li: ({ children }: PropsWithChildren) => (
      <ListItem sx={{ display: "list-item" }}>{children}</ListItem>
    ),
    hr: () => <Divider sx={{ mb: 2 }} />,
    blockquote: ({ children }: PropsWithChildren) => (
      <Paper
        sx={{
          padding: 2,
          backgroundColor: "unset",
          borderColor: "backround.paper",
          borderLeft: `2px solid`,
          mb: 2,
        }}
      >
        {children}
      </Paper>
    ),
    a: ({ children, ...props }: PropsWithChildren) => (
      <Link {...props}>{children}</Link>
    ),
  },
}).Compiler;

export default renderAst;
