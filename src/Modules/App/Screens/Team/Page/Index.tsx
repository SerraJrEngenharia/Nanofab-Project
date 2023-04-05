// React
import React from "react";

// Native Components
import { Container } from "./Style";

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import ListTemplate from "../Templates/List/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

// @Types
import { PageProps } from "./Types";

const TeamPage: React.FC<PageProps> = ({}) => {
  const persons = [
    {
      name: "José Brant de Campos",
      unit: "PPG-EM/UERJ",
      bond: "Permanente",
      titration: "Doutor, PQ 2, CNE ",
      personFunction: "Coordenador e Comitê Gestor",
    },
    {
      name: "Noberto Mangiavacchi",
      unit: "UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Vice-Coodenador",
    },
    {
      name: "Hector Reynaldo Meneses",
      unit: "CEFET-RJ",
      bond: "Permanente",
      titration: "Doutor, PQ 2",
      personFunction: "Comitê Gestor",
    },
    {
      name: "Rogério Navarro Correia de Siqueira",
      unit: "PUC-Rio",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Comitê Gestor",
    },
    {
      name: "Suzana Bottega Peripolli",
      unit: "PPG-EM/UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Comitê Gestor",
    },
    {
      name: "Lilian Pantoja Sosman",
      unit: "IF - PPGF/UERJ",
      bond: "Permanente",
      titration: "Doutor, PQ 2",
      personFunction: "Comitê de Usuários",
    },
    {
      name: "Ivana Lourenço de Mello Ferreira",
      unit: "PPGQ/UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Comitê de Usuários",
    },
    {
      name: "Marilia Garcia Diniz",
      unit: "PPG-EM/UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Comitê de Usuários",
    },
    {
      name: "José Ricardo Muniz Ferreira",
      unit: "Empresa R-CRio",
      bond: "Sócio",
      titration: "Doutor",
      personFunction: "Comitê de Usuários",
    },
    {
      name: "Eduardo de Albuquerque Brocchi",
      unit: "PUC-Rio",
      bond: "Permanente",
      titration: "Doutor, PQ 1C, CNE",
      personFunction: "Pesquisador",
    },
    {
      name: "José Guilherme Santos Silva",
      unit: "PPG-EF/UERJ",
      bond: "Permanente",
      titration: "Doutor, PQ 1B, CNE",
      personFunction: "Pesquisador",
    },
    {
      name: "Luciano Rodrigues Ornelas de Lima",
      unit: "PPG-EF/UERJ",
      bond: "Permanente",
      titration: "Doutor, PQ 1D, CNE",
      personFunction: "Pesquisador",
    },
    {
      name: "Marcos Antonio da Silva Costa",
      unit: "PPGQ/UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "Nakédia Maysa Freitas Carvalho",
      unit: "PPGQ/UERJ",
      bond: "Permanente",
      titration: "Doutor, PQ 2, CNE",
      personFunction: "Pesquisador",
    },
    {
      name: "Francisco José Moura",
      unit: "PUC-Rio",
      bond: "Permanente",
      titration: "Doutor, PQ 2",
      personFunction: "Pesquisador",
    },
    {
      name: "Rodrigo Fernandes Magalhães de Souza",
      unit: "PUC-Rio",
      bond: "Permanente",
      titration: "Doutor, PQ2",
      personFunction: "Pesquisador",
    },
    {
      name: "Eric Cardona Romani",
      unit: "SENAI",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "Jorge Luis do Amaral",
      unit: "PPG-EL/UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "Marilza Sampaio Aguilar",
      unit: "PPG-EM/UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "Daniel José Naid Mansur Chalhub",
      unit: "PPG-EM/UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "José da Rocha Miranda Pontes",
      unit: "PPGQ/UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "Ana Maria Furtado de Sousa",
      unit: "PPGQ/UERJ",
      bond: "Permanente",
      titration: "Doutor, PQ2",
      personFunction: "Pesquisador",
    },
    {
      name: "Jaqueline Dias Senra",
      unit: "PPGQ/UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "Juliana Fonseca de Lima",
      unit: "PPGQ/UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "Herman Lima Pessoa",
      unit: "CBPF",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "Letícia Aguilera dos Santos",
      unit: "IPRJ/UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "Cecilia Vilani",
      unit: "PUC-Rio",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "Celio Albano da Costa",
      unit: "UFRJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "José Luis Lopes da Silveira",
      unit: "UFRJ",
      bond: "Permanente",
      titration: "Doutor, PQ2",
      personFunction: "Pesquisador",
    },
    {
      name: "Eduardo Sousa Lima",
      unit: "IME",
      bond: "Permanente",
      titration: "Doutor, PQ2",
      personFunction: "Pesquisador",
    },
    {
      name: "Eustáquio de Souza Baêta Junior",
      unit: "PPG-EM/UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Pesquisador",
    },
    {
      name: "Maybi Fálker Sampaio",
      unit: "NANOFAB/UERJ",
      bond: "Bolsista QUALITEC/UERJ",
      titration: "Doutor",
      personFunction: "Equipe NANOFAB",
    },
    {
      name: "Kellen Venâncio dos Santos",
      unit: "NANOFAB/UERJ",
      bond: "Bolsista TCT/FAPERJ",
      titration: "Engenheira",
      personFunction: "Equipe NANOFAB",
    },
    {
      name: "Camila Alves Pelicarto Silva",
      unit: "NANOFAB/UERJ",
      bond: "Bolsista PROATEC/UERJ",
      titration: "Engenheira",
      personFunction: "Equipe NANOFAB",
    },
  ];

  return (
    <Container>
      <HeaderTemplate />

      <ListTemplate list={persons} />

      <FooterTemplate />
    </Container>
  );
};

export default TeamPage;
