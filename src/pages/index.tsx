import { graphql, PageProps } from 'gatsby';
import React from 'react'
import Layout from "../components/layout"
import Projects from '../components/projects';
import { indexPage, text } from "../styles/index.module.css"

type DataProps = {
    markdownRemark: {
        html: string;  
        frontmatter: {
            svg: {
                publicURL: string;
            }
        }
    }
}

const IndexPage = ({ data: { markdownRemark } }: PageProps<DataProps>): JSX.Element => {
    return (
        <Layout>
            <div className={ indexPage }>
                <div className={ text } dangerouslySetInnerHTML={{ __html: markdownRemark.html }}/>
                <img src={ markdownRemark.frontmatter.svg.publicURL } />
                <Projects />
            </div>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    {
        markdownRemark(frontmatter: {slug: {eq: "home-page"}}) {
            html
            frontmatter {
                svg {
                    publicURL
                }
            }
        }
    }
`