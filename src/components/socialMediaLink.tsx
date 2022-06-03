import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface SocialProps {
    img: IGatsbyImageData;
    alt: string;
    link: string;
}

const SocialMediaLink = ({img, alt, link}: SocialProps): JSX.Element => {
    return (
        <a href={ link } target='_blank' rel="noopener noreferrer">
            <GatsbyImage image={getImage(img) as IGatsbyImageData} alt={ alt } />
        </a>
    )
}

export default SocialMediaLink