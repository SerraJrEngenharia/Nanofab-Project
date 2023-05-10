// React
import React, {useState} from 'react';

// Native Components
import { Container, DivComboBox, Section, QtdAmostras, Title, InputContainer, TecniqueInput, RadioInput, RadioLabel, RadioContainer } from './Style';

// @Types
import { FirstGroupFormProps } from './Types';

const FirstGroupForm: React.FC<FirstGroupFormProps> = ({formData, setFormData}) => {
  return (
    <Container>
        <DivComboBox>
            <Section>
                <Title>Tipo de Análise</Title>
                <RadioContainer>
                    <RadioInput type="radio" id="quantitativa" name="analysisType" color='red'
                    value="quantitativa"
                    checked={formData.analise_quantitativa}
                    onChange={() => 
                        {
                        if (formData.analise_quantitativa !== formData.analise_qualitativa){
                            setFormData(
                                { 
                                ...formData,
                                analise_quantitativa: !formData.analise_quantitativa,
                                analise_qualitativa: !formData.analise_qualitativa
                                })
                        }
                        if (formData.analise_quantitativa === formData.analise_qualitativa){
                            setFormData(
                                { 
                                    ...formData,
                                    analise_quantitativa: true,
                                    analise_qualitativa: false
                                })       
                            }}
                    } />
                    <RadioLabel htmlFor="quantitativa">Quantitativa</RadioLabel>
                </RadioContainer>

                <RadioContainer>
                    <RadioInput type="radio" id="qualitativa" name="analysisType" 
                    value="Qualitativa"
                    // checked={formData.analise_qualitativa}
                    onChange={() => 
                        {
                        if (formData.analise_quantitativa !== formData.analise_qualitativa){
                            setFormData(
                                { 
                                ...formData,
                                analise_quantitativa: !formData.analise_quantitativa,
                                analise_qualitativa: !formData.analise_qualitativa
                                })
                        }
                        if (formData.analise_quantitativa === formData.analise_qualitativa){
                            setFormData(
                                { 
                                    ...formData,
                                    analise_quantitativa: false,
                                    analise_qualitativa: true
                                })    
                            }}
                        }
                    />
                    <RadioLabel htmlFor="qualitativa">Qualitativa</RadioLabel>
                </RadioContainer>
            </Section>

            <Section>
                <Title>Qntd. de Amostras</Title>
                <QtdAmostras type='number' min="1"
                value={formData.quantidade_amostras}
                onChange={(e) => setFormData(
                { 
                    ...formData,
                    quantidade_amostras: parseInt(e.target.value)
                })}/>
            </Section>
        </DivComboBox>

        <InputContainer>
            <Title>Técnicas de Medida e Condições de Varredura:</Title>
            <TecniqueInput
                type="text"
                name="tecnicas_condicoes"
                value={formData.tecnicas_condicoes}
                onChange={(e) =>
                    setFormData(
                        {   
                            ...formData,
                            tecnicas_condicoes: e.target.value,
                        })} placeholder="Se souber, descreva as técnicas de medida e as condições de carredura." />   
        </InputContainer>
    </Container>
);
}

export default FirstGroupForm;