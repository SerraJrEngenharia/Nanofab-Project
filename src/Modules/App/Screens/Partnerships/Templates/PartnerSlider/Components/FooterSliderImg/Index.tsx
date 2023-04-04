// React
import React from 'react';

// Native Components
import { Container, Image } from './Style';

// @Types
import { FooterSliderImgProps } from './Types';

const FooterSliderImg: React.FC<FooterSliderImgProps> = ({image, altText}) => {
  return (
    <Container>
        <Image src={image} alt={altText}/>
    </Container>
);
}

export default FooterSliderImg;