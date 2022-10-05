import * as React from "react";
import { HeadFC } from "gatsby";
import { Container, Typography } from "@mui/material";

import Layout from "../components/Layout";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <Layout>
      <Container maxWidth="xl">
        <Typography variant="h3" paragraph>
          Page not found
        </Typography>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
