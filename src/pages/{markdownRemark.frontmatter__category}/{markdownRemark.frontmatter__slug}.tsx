import React, { FC, PropsWithChildren } from "react";
import { graphql, PageProps } from "gatsby";
import {
  Container,
  Typography,
  List,
  ListItem,
  Divider,
  Paper,
  Link,
} from "@mui/material";
import rehypeReact from "rehype-react";

import Layout from "../../components/Layout";

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

const isPage = (
  value: any
): value is {
  category: string;
  slug: string;
  title: string;
} =>
  value &&
  value.category !== null &&
  value.slug !== null &&
  value.title !== null;

const MarkdownTemplate: FC<PageProps<Queries.MarkdownTemplateQuery>> = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { allMarkdownRemark, markdownRemark } = data; // data.markdownRemark holds your post data
  if (markdownRemark === null) {
    return null;
  }
  const { frontmatter, htmlAst } = markdownRemark;
  const pages = allMarkdownRemark.edges.map((edge) => edge.node!.frontmatter!);
  return (
    <Layout pages={pages}>
      <Typography variant="caption">
        {frontmatter?.title}: {frontmatter?.date}
      </Typography>
      {renderAst(htmlAst)}
    </Layout>
  );
};

export default MarkdownTemplate;

export const pageQuery = graphql`
  query MarkdownTemplate($id: String!) {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            category
            slug
            title
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        category
        slug
        title
      }
    }
  }
`;
