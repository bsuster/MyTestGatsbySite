import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
    // const image = getImage(data.mdx.frontmatter.hero_image)
    console.log(data)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage
                image={data.mdx.frontmatter.hero_image.childrenImageSharp[0].gatsbyImageData}
                alt={data.mdx.frontmatter.hero_image_alt}>
            </GatsbyImage>
            <p>
                Photo Credit: {' '}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>
                    {data.mdx.frontmatter.hero_image_credit_text}
                </a>
            </p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childrenImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }  
`

export default BlogPost