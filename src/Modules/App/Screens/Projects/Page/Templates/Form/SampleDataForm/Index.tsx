// React
import React, { useEffect } from "react";

// Native Components
import { Container, Section, Title, SampleInput } from "./Style";

// @Types
import { SampleDataFormProps } from "./Types";

const SampleDataForm: React.FC<SampleDataFormProps> = ({
  formData,
  setFormData,
}) => {

  const handleAmostra = (id_input: number, texto: string, tipo: string) => {
    const array_am2 = formData.amostras;

    if (tipo === "composicaoAmostra"){
      array_am2[id_input] = {
        identificacao_amostra: array_am2[id_input].identificacao_amostra,
        composicao_quimica: texto,
      }
    }
    else{
      array_am2[id_input] = {
        identificacao_amostra: texto,
        composicao_quimica: array_am2[id_input].composicao_quimica,
      }
    }

    setFormData(
      {
        ...formData,
        amostras: array_am2,
      }
    )
  };

  return (
    <Container>
      <Section>
        <Title>{"Identificação da(s) Amostra(s):"}</Title>
        <>
          {Array.from(
              { length: formData.quantidade_amostras },
              (eachSample, index) => (
                <SampleInput
                  type="text"
                  key={index}
                  onChange={(e) => handleAmostra(index, e.target.value, 'identificacaoAmostra')}
                  name="chemicalIdentification"
                />
              )
            )}
        </>
      </Section>

      <Section>
        <Title>{"Composição Química:"}</Title>

        <>
          {Array.from(
              { length: formData.quantidade_amostras },
              (eachSample, index) => (
                <SampleInput
                  type="text"
                  key={index}
                  onChange={(e) => handleAmostra(index, e.target.value, 'composicaoAmostra')}
                  name="chemicalComposition"
                />
              )
            )}
        </>

      </Section>
    </Container>
  );
};

export default SampleDataForm;
