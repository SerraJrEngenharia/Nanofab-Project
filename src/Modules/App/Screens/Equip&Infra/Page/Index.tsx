// React
import React from 'react';

// Native Components
import { Container, Content, Section, EquipImg } from "./Style";
import { Carousel } from "antd";

import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

import MicroImage from "@/Assets/institutoMaua.png";

// @Types
import { PageProps } from './Types';

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
      <Content>
        <Carousel autoplay>
          <Section>
            <EquipImg src={MicroImage}/>
          </Section>
          <Section>
            <EquipImg />
          </Section>
          <Section>
            <EquipImg />
          </Section>
          <Section>
            <EquipImg />
          </Section>
        </Carousel>
      </Content>
      <FooterTemplate />
    </Container>
  );
}

export default EquipInfraPage;