import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import * as style from '../../components/layout.module.css'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id} className={style.article}>
                        <h2><Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link></h2>
                        <p>{node.frontmatter.date}</p>
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
                slug
                frontmatter {
                    title
                    date(formatString:"MMM D, YYYY")
                }
            }
        }
    }
`

export default BlogPage