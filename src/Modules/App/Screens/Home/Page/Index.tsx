// React
import React from "react";

// Native Components
import { Container } from "./Style";

// Assets
import MicroscopeIcon from "@/Assets/Chemistry/microscopio.svg";
import MoleculeIcon from "@/Assets/Chemistry/mol.svg";

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";
import ArticlePage from "../Templates/Article/Page/Index";
import SubArticlesPage from "../Templates/Subarticles/Page/Index";

// @Types
import { PageProps } from "./Types";

const HomePage: React.FC<PageProps> = ({}) => {

  const articleDescriptions = [
    {
      text: "O Laboratório Multiusuário de Nanofabricaçao e Caracterizaçao de Nanomateriais, NANOFAB, foi criado no Departamento de Engenharia Mecânica da UERJ e está vinculado ao Programa de Pós-graduaçao em Engenharia Mecânica (PPG-EM/UERJ) através da proposta aprovada para a aquisiçao de um microscópio eletrônico de alta resoluçao do tipo MEV-FEG no Edital Pró-Equipamentos CAPES 2013. Este projeto partiu de uma demanda científica e tecnológica na área de microscopia eletrônica e em nanotecnologia, a partir da existencia de grupos de pesquisa em nanomateriais e nanodispositivos, organizados em redes de cooperaçao. Neste contexto, o NANOFAB estuda materiais cujas dimensőes estăo abaixo da faixa micrométrica. ",
    },

    {
      text: "Além disso, o NANOFAB atende demandas na área de micro e nanofabricaçao com o oferecimento de uma infraestrutura de sala limpa para fabricação de microdispositivos e deposição de Grafeno por deposição de vapor químico (Chemical Vapor Deposition). Esta sala limpa possui uma área especial para a manipulação e preparação de nanomateriais.",
    },

    {
      text: "O NANOFAB pode caracterizar materiais nanoestruturados na forma de pós, filmes finos e agregados depositados sobre substratos e usa um sistema capaz de análises em materiais năo condutores. O sistema permite análise simultânea de topografia e composiçăo química do material. Além disso, possui equipamentos para preparação de amostras para microscopia eletrônica de transmissão (MET).",
    },

    {
      text: "O NANOFAB dá suporte a projetos estratégicos em diversas áreas de atuaçăo do Estado e do País, tais como materiais para indústrias no setores de óleo e gás, metal-mecânicas, nas indústrias de fármacos e saúde, na geraçăo de hidrogęnio, revestimentos de aços e compósitos.",
    },
  ];

  const cardDescriptions = [
    {
      image: MoleculeIcon,
      title: "Coordenação e Comitê Gestor",
      text: "O NANOFAB é coordenado pelo prof. José Brant de Campos (UERJ) e tem como vice-coordenador o prof. Norberto Mangiavacchi (UERJ). O Comitę Gestor do NANOFAB, é composto por quatro membros eleitos a cada dois anos. Para o Bienio 2023-2025, o Comite Gestor do NANOFAB é formado pelos prof. José Brant de Campos (UERJ), Hector Reynaldo Meneses da Costa (CEFET), Rogério Navarro Correia de Siqueira (PUC-Rio) e pela profa. Suzana Bottega Peripolli (UERJ).",
    },
    {
      image: MicroscopeIcon,
      title: "Unidades e Programas Envolvidos / Projetos de Pesquisa",
      text: "Algumas unidades estăo diretamente ligadas ao NANOFAB: A Faculdade de Engenharia da UERJ (cursos de Engenharia Civil, Engenharia Elétrica e Engenharia Mecânica), o Instituto de Química da UERJ (Química  e Engenharia Química) e o Instituto de Física da UERJ. O NANOFAB é um laboratório pertencente ao PROGEMULTI/UERJ (Programa de Gestão de Laboratórios e Equipamentos Multiusuários) da UERJ. Dentro das parcerias externas de pesquisa e institucionais, o NANOFAB desenvolve trabalhos com o sistema SENAI, CBPF, PUC-Rio, CEFET, UFRJ e UFF e coopera com universidades e centros de pesquisa no exterior, como o Centro de Microeletrônica de Barcelona (CNM), na Espanha e a Universidade de Louvain (UCLouvain), na Bélgica.",
    },
  ];

  return (
    <Container>
      <HeaderTemplate />

      <ArticlePage descriptions={articleDescriptions} />

      <SubArticlesPage cards={cardDescriptions} />

      <FooterTemplate />
    </Container>
  );
};

export default HomePage;
