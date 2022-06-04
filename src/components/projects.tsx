import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import ProjectCard from './projectCard'
import { cardGroup } from "../styles/card.module.css"

type ProjectsProp = {
    allMarkdownRemark: {
        nodes: [{
            frontmatter: {
                title: string;
                desc: string;
                image: IGatsbyImageData;
                github: string;
            }
            html: string;
            id: string;
        }]
    }
}

const Projects = (): JSX.Element => {

    const { allMarkdownRemark }: ProjectsProp = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {slug: {glob: "projects/*"}}}) {
            nodes {
                frontmatter {
                    title
                    desc
                    image {
                        childImageSharp {
                            gatsbyImageData (
                                placeholder: BLURRED
                            )
                        }
                    }
                    github
                }
                html
                id
            }
        }
    }
    `)
    return (
        <div className={cardGroup}>
            {allMarkdownRemark.nodes.map((project) => {
                return (
                    <ProjectCard key={project.id} img={project.frontmatter.image} alt={project.frontmatter.desc} github={project.frontmatter.github}>
                        <div dangerouslySetInnerHTML={{ __html: project.html }} />
                    </ProjectCard>
                )
            })}
        </div>
    )
}

export default Projects