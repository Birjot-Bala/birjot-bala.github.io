import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const SocialMediaLinks = () => {
    const data = useStaticQuery(graphql`
        {
            markdownRemark(frontmatter: {slug: {eq: "social"}}) {
                html
            }
        }
    `)

    return (
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    )
}

export default SocialMediaLinks