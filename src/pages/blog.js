import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import * as style from '../style/blog.module.css'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id} className={style.article}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>{node.frontmatter.date}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                id
                body
                frontmatter {
                    title
                    date(formatString:"MMM D, YYYY")
                }
            }
        }
    }
`

export default BlogPage