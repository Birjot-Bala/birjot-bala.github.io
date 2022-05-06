import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'


const NavBar = (): JSX.Element => {
    const data = useStaticQuery(graphql`
        {
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
        </nav>
    )
}

export default NavBar