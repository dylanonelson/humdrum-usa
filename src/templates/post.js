import React from 'react'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <section
      dangerouslySetInnerHTML={{ __html: post.html }}
    >
    </section>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
