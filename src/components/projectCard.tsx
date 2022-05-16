import React from 'react'
import { card } from '../styles/card.module.css'

interface CardProps {
    img: string;
    alt: string;
    github: string;
    children: JSX.Element | JSX.Element[];
}

const ProjectCard = ({img, alt, github, children}: CardProps): JSX.Element => {



  return (
    <div className={ card } onClick={() => window.open(github,"_blank")}>
        <img src={img} alt={alt} />
        { children }
    </div>
  )
}

export default ProjectCard