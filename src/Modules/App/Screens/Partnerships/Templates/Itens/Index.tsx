// React
import React from 'react';

// Native Components
import { 
    Container,
    ImageContainer,
    ContentContainer,
    Paragraph,
    Image,
    Title,
    CardCont,
    ExternalImageContainer
 } from './Style';

// @Types
import { ItensProps } from './Types';

const PartnershipItem: React.FC<ItensProps> = ({image, title, paragraph}) => {
  return (
    <Container>
        <CardCont>
            <ImageContainer>
                <Image src={image} alt={title}/>
            </ImageContainer>
            <ContentContainer>
                <Title>{title}</Title>
                <Paragraph>{paragraph}</Paragraph>
            </ContentContainer>
        </CardCont>
    </Container>
);
}

export default PartnershipItem;