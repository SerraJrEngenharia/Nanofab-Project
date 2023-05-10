// React
import React from 'react';

// Native Components
import { Container } from './Style';

import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

// @Types
import { PageProps } from './Types';
import CarouselComponent from '../Templates/Carousel/Index';

const EquipInfraPage: React.FC<PageProps> = ({}) => {
  
  const list = [
    {
      name: 'Microscópio Eletrônico de Varredura',
      image: null
    },
    {
      name: 'Microdurômetro',
      image: null
    },
    {
      name: 'Estereoscópio',
      image: null
    },
    {
      name: 'Fotoalinhadora',
      image: null
    },
    {
      name: 'Evaporadora Térmica',
      image: null
    },
    {
      name: 'Spinner',
      image: null
    },
    {
      name: 'Preparação de Nanomateriais para MET',
      image: null
    },

  ]

  return (
    <Container>
        <HeaderTemplate />
        {/* <CarouselComponent /> */}
        <FooterTemplate />    
    </Container>
);
}

export default EquipInfraPage;