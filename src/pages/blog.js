import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {/* {
                    data.allMdx.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                } */}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query MyQuery {
        allMdx(sort: {fields: frontmatter___date}) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YY")
                }
                id
                body
            }
        }
    }    
`

export default BlogPage