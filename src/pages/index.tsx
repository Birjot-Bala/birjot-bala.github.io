import { graphql, PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import { category } from "../styles/home.module.css"

type DataProps = {
  markdownRemark: {
      html: string;
  }
}

const IndexPage = ({ data: { markdownRemark } }: PageProps<DataProps>): JSX.Element => {

  return (
    <Layout>
      <div className={ category } dangerouslySetInnerHTML={{ __html: markdownRemark.html }}/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    markdownRemark {
        html
    }
  }
`