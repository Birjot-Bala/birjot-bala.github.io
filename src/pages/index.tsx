import { graphql, PageProps } from 'gatsby';
import React from 'react'
import Layout from "../components/layout"
import { indexPage } from "../styles/index.module.css"

type DataProps = {
    markdownRemark: {
        html: string;
    }
}

const IndexPage = ({ data: { markdownRemark } }: PageProps<DataProps>): JSX.Element => {
    return (
        <Layout>
                <div className={ indexPage } dangerouslySetInnerHTML={{ __html: markdownRemark.html }}/>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    {
        markdownRemark(frontmatter: {slug: {eq: "home-page"}}) {
        html
        }
    }
`