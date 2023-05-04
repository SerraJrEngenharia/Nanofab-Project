// React
import React from 'react';

// Native Components
import { Container, DivComboBox, Section, QtdAmostras, Title, InputContainer, TecniqueInput, RadioInput, RadioLabel, RadioContainer } from './Style';

// @Types
import { FirstGroupFormProps } from './Types';

const FirstGroupForm: React.FC<FirstGroupFormProps> = ({}) => {
  return (
    <Container>
        <DivComboBox>
            <Section>
                <Title>Tipo de Análise</Title>
                <RadioContainer>
                    <RadioInput type="radio" id="quantitativa" name="analysisType" value="Quantitativa" color='red'/>
                    <RadioLabel htmlFor="quantitativa">Quantitativa</RadioLabel>
                </RadioContainer>

                <RadioContainer>
                    <RadioInput type="radio" id="qualitativa" name="analysisType" value="Qualitativa"/>
                    <RadioLabel htmlFor="qualitativa">Qualitativa</RadioLabel>
                </RadioContainer>
            </Section>

            <Section>
                <Title>Qntd. de Amostras</Title>
                <QtdAmostras type='number' min="0"/>
            </Section>
        </DivComboBox>

        <InputContainer>
            <Title>Técnicas de Medida e Condições de Varredura:</Title>
            <TecniqueInput placeholder="Se souber, descreva as técnicas de medida e as condições de carredura." />   
        </InputContainer>
    </Container>
);
}

export default FirstGroupForm;