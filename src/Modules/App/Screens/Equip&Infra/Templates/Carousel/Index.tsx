// React
import React from 'react';

// Native Components
import { Container } from './Style';
import { Carousel } from 'antd';

// @Types
import { CarouselProps } from './Types'

const CarouselComponent: React.FC<CarouselProps> = ({}) => {

  return (
    <Container>
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </Container>
  );
}

export default CarouselComponent;