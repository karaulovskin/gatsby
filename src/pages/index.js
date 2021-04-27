import * as React from "react"
import {Link, graphql} from "gatsby"
import {StaticImage, GatsbyImage, getImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => {
    const node = data.allMarkdownRemark.nodes
    console.log(node)

    return (
        <Layout>
            <Seo title="Home"/>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{marginBottom: `1.45rem`}}
            />
            <p>
                <Link to="/page-2/">Go to page 2</Link> <br/>
                <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            </p>

            {
                node.map(post => {
                    const {category, title, url, image} = post.frontmatter
                    const img = getImage(image)
                    console.log('getImage', getImage)
                    return (
                        <div key={post.id}>
                            <GatsbyImage image={img} alt={title}></GatsbyImage>
                            <Link to={`/${category}/${url}`}>{title}</Link>
                        </div>
                    )
                })
            }

        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query MainPage {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    category
                    title
                    url
                    image
                }
                id
            }
        }
    }
`
