// React
import React from 'react';

// Native Components
import { 
  Container,
  Text,
  ContentContainer,
  } 
 from './Style';

// @Types
import { PageProps } from './Types';

//Components
import LogoComponent from '../Components/Logo/Index';

const ArticlePage: React.FC<PageProps> = ({}) => {
  const Descriptions = [
    {
      text: "O Laboratório Multiusuário de Nanofabricaçao e Caracterizaçao de Nanomateriais, NANOFAB, foi criado no Departamento de Engenharia Mecânica da UERJ e está vinculado ao Programa de Pós-graduaçao em Engenharia Mecânica (PPG-EM/UERJ) através da proposta aprovada para a aquisiçao de um microscópio eletrônico de alta resoluçao do tipo MEV-FEG no Edital Pró-Equipamentos CAPES 2013. Este projeto partiu de uma demanda científica e tecnológica na área de microscopia eletrônica e em nanotecnologia, a partir da existencia de grupos de pesquisa em nanomateriais e nanodispositivos, organizados em redes de cooperaçao. Neste contexto, o NANOFAB estuda materiais cujas dimensőes estăo abaixo da faixa micrométrica. Além disso, o NANOFAB atenderá demandas na área de nanofabricaçao com a aquisiçao de um microscópio FIB (Focused Ion Beam), a partir de recursos aprovados no Edital FAPERJ 2015, Grandes Equipamentos.",
    },
    
    {
      text: "O NANOFAB pode caracterizar materiais nanoestruturados na forma de pós, filmes finos e agregados depositados sobre substratos e usa um sistema capaz de análises em materiais năo condutores. O sistema permite análise simultânea de topografia e composiçăo química do material. O microscópio FIB também permitirá a preparaçao de amostras para microscopia eletrônica de transmissão.",
    },

    {
      text: " O NANOFAB dá suporte a projetos estratégicos em diversas áreas de atuaçăo do Estado e do País, tais como materiais para indústrias no setores de óleo e gás, metal-mecânicas, nas indústrias de fármacos e saúde, na geração de hidrogênio, revestimentos de aços e compósitos.",
    },
  ];

  return (
    <Container>
        <LogoComponent />
        <ContentContainer>
          {Descriptions.map((eachDescription) => {return(<Text>{eachDescription.text}</Text>)
          })}
        </ContentContainer>
    </Container>
);
}

export default ArticlePage;