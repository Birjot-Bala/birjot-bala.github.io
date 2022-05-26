import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react'
import { card } from '../styles/card.module.css'

interface CardProps {
    img: IGatsbyImageData;
    alt: string;
    github: string;
    children: JSX.Element | JSX.Element[];
}

const ProjectCard = ({img, alt, github, children}: CardProps): JSX.Element => {
  return (
    <div className={ card }>
        <GatsbyImage image={getImage(img) as IGatsbyImageData} alt={alt} />
        { children }
        <button onClick={() => window.open(github, "_blank")}>Github</button>
    </div>
  )
}

export default ProjectCard