// React
import React from 'react';

// Native Components
import { Container, InputOrientador, InputOrientadorContainer, InputOutrosContainer, Title, ComponentTypes, CheckBoxTypes, LabelTypes, DivRow, InputOutros} from './Style';

// @Types
import { TypeProjectProps } from './Types';

const TypeProject: React.FC<TypeProjectProps> = ({}) => {
  return (
    <Container>
        <InputOrientadorContainer>
            <Title>Orientador:</Title>
            <InputOrientador placeholder="(*) Informar o nome do orientador, quando o soliciante for aluno de graduação ou pós-graduação. (Ex: 'Prof. ****')">   
            </InputOrientador>
        </InputOrientadorContainer>

        <Title>Tipos:</Title>
        <ComponentTypes>
            <DivRow>
                <CheckBoxTypes type="checkbox" value="1"></CheckBoxTypes>
                <LabelTypes>{"Microscopia de Varredura de Alta Resolução (MEV-FEG)"}</LabelTypes> 
            </DivRow>

            <DivRow>
                <CheckBoxTypes type="checkbox" value="1"></CheckBoxTypes>
                <LabelTypes>Microscopia por Feixe de Íons Focalizado</LabelTypes> 
            </DivRow>

            <DivRow>
                <CheckBoxTypes type="checkbox" value="1"></CheckBoxTypes>
                <LabelTypes>Textura</LabelTypes> 
            </DivRow>

            <DivRow>
                <CheckBoxTypes type="checkbox" value="1"></CheckBoxTypes>
                <LabelTypes>Difração de Raios-x</LabelTypes> 
            </DivRow>
        </ComponentTypes>

        <InputOutrosContainer>
            <Title>Outros:</Title>
            <InputOutros placeholder="Informar nome.">   
            </InputOutros>
        </InputOutrosContainer>

    </Container>
);
}

export default TypeProject;
