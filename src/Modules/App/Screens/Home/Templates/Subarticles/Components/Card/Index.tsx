// React
import React from 'react';

// Native Components
import { Container, Text, Title, ImgContainer, Image } from './Style';

// @Types
import { CardProps } from './Types';

const CardComponent: React.FC<CardProps> = ({image, title, text}) => {
  return (
    <Container>
        <ImgContainer>
          <Image src={image} alt={title}/>
        </ImgContainer>

        <Title>{title}</Title>
        <Text>{text}</Text>
    </Container>
);
}

export default CardComponent;