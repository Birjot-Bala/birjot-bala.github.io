import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import ProjectCard from '../components/projectCard'

type ProjectsProp = {
    allMarkdownRemark: {
        nodes: [{
            frontmatter: {
                title: string;
                desc: string;
                image: {
                    publicURL: string;
                }
            }
            html: string;
            id: string;
        }]
    }
}

const ProjectsPage = ({ data : { allMarkdownRemark } }: PageProps<ProjectsProp>): JSX.Element => {
    return (
        <Layout>
            {allMarkdownRemark.nodes.map((project) => {
                return (
                    <ProjectCard key={project.id} img={project.frontmatter.image.publicURL} alt={project.frontmatter.desc}>
                        <div dangerouslySetInnerHTML={{ __html: project.html }} />
                    </ProjectCard>
                )
            })}
        </Layout>
    )
}

export default ProjectsPage

export const query = graphql`
{
    allMarkdownRemark(filter: {frontmatter: {slug: {glob: "projects/*"}}}) {
        nodes {
            frontmatter {
                title
                desc
                image {
                    publicURL
                }
            }
            html
        }
    }
}
`