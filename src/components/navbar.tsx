import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import SocialMediaLink from './socialMediaLink'
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface NavBarProps {
    allMarkdownRemark: {
        nodes: [{
            frontmatter: {
                desc: string;
                link: string;
                image: IGatsbyImageData;
            }
            id: string;
        }]
    }
    site: {
        siteMetadata: {
            title: string;
        }
    }
}

const NavBar = (): JSX.Element => {
    const data: NavBarProps = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {slug: {glob: "social/*"}}}) {
            nodes {
                frontmatter {
                    desc
                    link
                    image {
                        childImageSharp {
                            gatsbyImageData (
                                placeholder: BLURRED
                            )
                        }
                    }
                }
                id
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    return (
        <nav>
            <h1>{ data.site.siteMetadata.title }</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
            </div>
            <div className='social-media'>
                {data.allMarkdownRemark.nodes.map((social) => {
                    return (
                        <SocialMediaLink key={ social.id } img={ social.frontmatter.image } link={ social.frontmatter.link } alt={ social.frontmatter.desc } />
                    )
                })}
            </div>
        </nav>
    )
}

export default NavBar