import React from 'react'
import { card } from '../styles/card.module.css'

interface CardProps {
    img: string;
    alt: string;
    children: JSX.Element | JSX.Element[];
}

const ProjectCard = ({img, alt, children}: CardProps): JSX.Element => {
  return (
    <div className={ card }>
        <img src={img} alt={alt} />
        { children }
    </div>
  )
}

export default ProjectCard