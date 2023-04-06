// React
import React from "react";

// Native Components
import { Center, Container } from "./Style";
import PartnerSlider from "../Templates/PartnerSlider/Index";

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";
import SubHeaderTemplate from '@/Templates/SubHeader/Page/Index';
import PartnershipItem from "../Templates/Itens/Index";

// Images
import PartnershipIcon from "@/Assets/Chemistry/handshake.png";
import CBPFImage from "@/Assets/ParceriasLogos/cbpf.jpg";
import FAPERJImage from "@/Assets/ParceriasLogos/faperj.svg";
import FINEPImage from "@/Assets/ParceriasLogos/finep.svg";

// @Types
import { PageProps } from "./Types";

const PartnershipsPage: React.FC<PageProps> = ({}) => {

  const partners = [
    {
      image: CBPFImage,
      title: 'Centro Brasileiro de Pesquisas Físicas - CBPF',
      paragraph: 'O NANOFAB desenvolve parceria científica e tecnológica com o CBPF na área de Instrumentação Científica, com o desenvolvimento de dispositivos multiplicadores e elétrons (GEM-Gas Electron Multiplier) e detectores bidimensionais de raios-x a gás.',
    },
    
    {
      image: FAPERJImage,
      title:'Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro',
      paragraph:'O NANOFAB recebe apoio da FAPERJ em projetos de infraestrutura e pesquisa como o PENSA-RIO e através de projetos em colaboração com os pesquisadores',
    },
    
    {
      image: FINEPImage,
      title: 'FINEP - Agência Brasileira de Inovação',
      paragraph: 'O NANOFAB participa de editais da FINEP em projetos estruturantes como o Grande Laboratórios Multiusuários e Ações Transversais.',
    },
  ]
  return (
    <Container>
      <HeaderTemplate />

      <SubHeaderTemplate title="Parcerias" image={PartnershipIcon}/>
      <Center>
          {
          partners.map((eachDescription) => {
            return <PartnershipItem 
              key={partners.indexOf(eachDescription)} 
              image={eachDescription.image} 
              title={eachDescription.title} 
              paragraph={eachDescription.paragraph}/>
          })
        }
      </Center>
      

      <PartnerSlider />

      <FooterTemplate />
      
    </Container>
  );
};

export default PartnershipsPage;
