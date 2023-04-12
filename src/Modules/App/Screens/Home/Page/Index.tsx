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
      text: "O Laboratório Multiusuário de Nanofabricação e Caracterização de Nanomateriais, NANOFAB, foi criado no Departamento de Engenharia Mecânica da UERJ e está vinculado ao Programa de Pós-graduação em Engenharia Mecânica (PPG-EM/UERJ) através da proposta aprovada para a aquisição de um microscópio eletrônico de alta resolução do tipo MEV-FEG no Edital Pró-Equipamentos CAPES 2013. Este projeto partiu de uma demanda científica e tecnológica na área de microscopia eletrônica e em nanotecnologia, a partir da existência de grupos de pesquisa em nanomateriais e nanodispositivos, organizados em redes de cooperação. Nesse contexto, o NANOFAB estuda materiais cujas dimensőes estăo abaixo da faixa micrométrica. Além disso, o NANOFAB atenderá demandas na área de nanofabricação com a aquisição de um microscópio FIB (Focused Ion Beam), a partir de recursos aprovados no Edital FAPERJ 2015, Grandes Equipamentos.",
    },

    {
      text: "O NANOFAB pode caracterizar materiais nanoestruturados na forma de pós, filmes finos e agregados depositados sobre substratos e usa um sistema capaz de análises em materiais năo condutores. O sistema permite análise simultânea de topografia e composiçăo química do material. O microscópio FIB também permitirá a preparação de amostras para microscopia eletrônica de transmissão.",
    },

    {
      text: "O NANOFAB dá suporte a projetos estratégicos em diversas áreas de atuaçăo do Estado e do País, tais como materiais para indústrias no setores de óleo e gás, metal-mecânicas, nas indústrias de fármacos e saúde, na geração de hidrogênio, revestimentos de aços e compósitos.",
    },
  ];

  const cardDescriptions = [
    {
      image: MoleculeIcon,
      title: "Coordenação e Comitê Gestor",
      text: "O NANOFAB é coordenado pelo prof. Norberto Mangiavacchi (UERJ) e tem como vice-coordenador o prof. Eduardo de Albuquerque Brocchi (PUC-Rio). O Comitê Gestor do NANOFAB é composto por três membros, eleitos a cada dois anos. Para o Biênio 2016-2018, o Comitê Gestor do NANOFAB é formado pelos prof. José Brant de Campos (UERJ), Hector Reynaldo Meneses da Costa (CEFET) e Rogério Navarro Correia de Siqueira (PUC-Rio).",
    },
    {
      image: MicroscopeIcon,
      title: "Unidades e Programas Envolvidos / Projetos de Pesquisa",
      text: "Algumas unidades estăo diretamente ligadas ao NANOFAB: A Faculdade de Engenharia da UERJ (cursos de Engenharia Civil, Engenharia Elétrica e Engenharia Mecânica), o Instituto de Química da UERJ (Química da UERJ) e Instituto de Física da UERJ.",
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
