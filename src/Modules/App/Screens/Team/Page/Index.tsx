// React
import React from "react";

// Native Components
import { Container } from "./Style";

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

// @Types
import { PageProps } from "./Types";
import ListDropdownTemplate from "../Templates/ListDropdown/Page/Index";

const TeamPage: React.FC<PageProps> = ({}) => {
  const personsData = [
    {
        personFunction: 'Comitê Gestor',
        persons: [
            {
                name: "José Brant de Campos",
                unit: "PPG-EM/UERJ",
                bond: "Permanente",
                titration: "Doutor, PQ 2, CNE ",
            },
            {
                name: "Noberto Mangiavacchi",
                unit: "UERJ",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Hector Reynaldo Meneses",
                unit: "CEFET-RJ",
                bond: "Permanente",
                titration: "Doutor, PQ 2",
            },
            {
                name: "Rogério Navarro Correia de Siqueira",
                unit: "PUC-Rio",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Suzana Bottega Peripolli",
                unit: "PPG-EM/UERJ",
                bond: "Permanente",
                titration: "Doutor",
            }
        ]
    },
    {
        personFunction: 'Comitê de Usuários',
        persons: [
            {
                name: "Lilian Pantoja Sosman",
                unit: "IF - PPGF/UERJ",
                bond: "Permanente",
                titration: "Doutor, PQ 2",
            },
            {
                name: "Ivana Lourenço de Mello Ferreira",
                unit: "PPGQ/UERJ",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Marilia Garcia Diniz",
                unit: "PPG-EM/UERJ",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "José Ricardo Muniz Ferreira",
                unit: "Empresa R-CRio",
                bond: "Sócio",
                titration: "Doutor",
            }
            
        ]
    },
    {
        personFunction: 'Pesquisador',
        persons: [
            {
                name: "Eduardo de Albuquerque Brocchi",
                unit: "PUC-Rio",
                bond: "Permanente",
                titration: "Doutor, PQ 1C, CNE",
            },
            {
                name: "José Guilherme Santos Silva",
                unit: "PPG-EF/UERJ",
                bond: "Permanente",
                titration: "Doutor, PQ 1B, CNE",
            },
            {
                name: "Luciano Rodrigues Ornelas de Lima",
                unit: "PPG-EF/UERJ",
                bond: "Permanente",
                titration: "Doutor, PQ 1D, CNE",
            },
            {
                name: "Marcos Antonio da Silva Costa",
                unit: "PPGQ/UERJ",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Nakédia Maysa Freitas Carvalho",
                unit: "PPGQ/UERJ",
                bond: "Permanente",
                titration: "Doutor, PQ 2, CNE",
            },
            {
                name: "Francisco José Moura",
                unit: "PUC-Rio",
                bond: "Permanente",
                titration: "Doutor, PQ 2",
            },
            {
                name: "Rodrigo Fernandes Magalhães de Souza",
                unit: "PUC-Rio",
                bond: "Permanente",
                titration: "Doutor, PQ2",
            },
            {
                name: "Eric Cardona Romani",
                unit: "SENAI",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Jorge Luis do Amaral",
                unit: "PPG-EL/UERJ",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Marilza Sampaio Aguilar",
                unit: "PPG-EM/UERJ",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Daniel José Naid Mansur Chalhub",
                unit: "PPG-EM/UERJ",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "José da Rocha Miranda Pontes",
                unit: "PPGQ/UERJ",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Ana Maria Furtado de Sousa",
                unit: "PPGQ/UERJ",
                bond: "Permanente",
                titration: "Doutor, PQ2",
            },
            {
                name: "Jaqueline Dias Senra",
                unit: "PPGQ/UERJ",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Juliana Fonseca de Lima",
                unit: "PPGQ/UERJ",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Herman Lima Pessoa",
                unit: "CBPF",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Letícia Aguilera dos Santos",
                unit: "IPRJ/UERJ",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Cecilia Vilani",
                unit: "PUC-Rio",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "Celio Albano da Costa",
                unit: "UFRJ",
                bond: "Permanente",
                titration: "Doutor",
            },
            {
                name: "José Luis Lopes da Silveira",
                unit: "UFRJ",
                bond: "Permanente",
                titration: "Doutor, PQ2",
            },
            {
                name: "Eduardo Sousa Lima",
                unit: "IME",
                bond: "Permanente",
                titration: "Doutor, PQ2",
            },
            {
                name: "Eustáquio de Souza Baêta Junior",
                unit: "PPG-EM/UERJ",
                bond: "Permanente",
                titration: "Doutor",
            },
        ]
    },
    {
        personFunction: 'Equipe NANOFAB',
        persons:[
            {
                name: "Maybi Fálker Sampaio",
                unit: "NANOFAB/UERJ",
                bond: "Bolsista QUALITEC/UERJ",
                titration: "Doutor",
            },
            {
                name: "Kellen Venâncio dos Santos",
                unit: "NANOFAB/UERJ",
                bond: "Bolsista TCT/FAPERJ",
                titration: "Engenheira",
            },
            {
                name: "Camila Alves Pelicarto Silva",
                unit: "NANOFAB/UERJ",
                bond: "Bolsista PROATEC/UERJ",
                titration: "Engenheira",
            }
        ]
    }
]

  return (
    <Container>
      <HeaderTemplate />

      {/* <ListTemplate list={personsData} /> */}

      <ListDropdownTemplate list={personsData} />

      <FooterTemplate />
    </Container>
  );
};

export default TeamPage;
