// React
import React from 'react';

// Native Components
import { Container } from './Style';

// @Types
import { SubArticleProps } from './Types';

// Components
import CardComponent from '../Components/Card/Index';

// Images
import MicroscopeIcon from '../../../../../../../Assets/Chemistry/microscopio.svg'
import MolIcon from '../../../../../../../Assets/Chemistry/mol.svg'


const SubArticlesPage: React.FC<SubArticleProps> = ({}) => {

    const CardDescription = [
        {
            image: MolIcon,
            title: 'Coordenação e Comitê Gestor',
            text: 'O NANOFAB é coordenado pelo prof. Norberto Mangiavacchi (UERJ) e tem como vice-coordenador o prof. Eduardo de Albuquerque Brocchi (PUC-Rio). O Comitę Gestor do NANOFAB, é composto por tres membros eleitos a cada dois anos. Para o Bienio 2016-2018, o Comite Gestor do NANOFAB é formado pelos prof. José Brant de Campos (UERJ), Hector Reynaldo Meneses da Costa (CEFET) e Rogério Navarro Correia de Siqueira (PUC-Rio).',
        },
        {
            image: MicroscopeIcon,
            title: 'Unidades e Programas Envolvidos / Projetos de Pesquisa',
            text: 'Algumas unidades estăo diretamente ligadas ao NANOFAB: A Faculdade de Engenharia da UERJ (cursos de Engenharia Civil, Engenharia Elétrica e Engenharia Mecânica), o Instituto de Química da UERJ (Química da UERJ) e Instituto de Física da UERJ.'
        }
    ]
    return (
        <Container>
            {CardDescription.map((eachDescription, index) => {
                return(
                    <CardComponent key={index} image={eachDescription.image} title={eachDescription.title} text={eachDescription.text}/>
                )

            })}
        </Container>
    );
}

export default SubArticlesPage;