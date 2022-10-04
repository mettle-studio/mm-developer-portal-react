import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";

const MarkdownTemplate: FC<PageProps<Queries.MarkdownTemplateQuery>> = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  if (markdownRemark === null) {
    return null;
  }
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <div>
        <h1>{frontmatter?.title}</h1>
        <h2>{frontmatter?.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html || "" }} />
      </div>
    </div>
  );
};

export default MarkdownTemplate;

export const pageQuery = graphql`
  query MarkdownTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
