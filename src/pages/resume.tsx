import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { category } from "../styles/resume.module.css"

type DataProps = {
  markdownRemark: {
      html: string;
  }
}

const ResumePage = ({ data: { markdownRemark } }: PageProps<DataProps>): JSX.Element => {
  return (
    <Layout>
      <div className={ category } dangerouslySetInnerHTML={{ __html: markdownRemark.html }}/>
    </Layout>
  )
}

export default ResumePage

export const query = graphql`
  {
    markdownRemark(frontmatter: {slug: {eq: "resume"}}) {
      html
    }
  }
`