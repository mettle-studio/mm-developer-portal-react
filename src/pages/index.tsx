import React, { FC } from "react";
import type { HeadFC } from "gatsby";
import { graphql, PageProps } from "gatsby";
import { Container, Typography } from "@mui/material";

import Layout from "../components/Layout";

const IndexPage: FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const { allMarkdownRemark } = data;
  const pages = allMarkdownRemark.edges.map((edge) => ({
    title: edge.node!.frontmatter!.title,
    slug: edge.node!.fields!.slug,
  }));
  return (
    <Layout pages={pages}>
      <Container maxWidth="xl">
        <Typography variant="h3" paragraph>
          Welcome to the MM developer portal
        </Typography>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
