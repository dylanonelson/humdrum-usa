import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => (
  <main>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li><Link to={node.fields.slug}>{node.frontmatter.title}</Link></li>
      ))}
    </ul>
  </main>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
