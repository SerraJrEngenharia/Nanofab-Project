// React
import React, { EventHandler, ReactEventHandler, useState, useEffect } from "react";

// Native Components
import { Container, LogoContainer, Image } from "./Style";

// @Types
import { FormProps } from "./Types";

import TypeProject from "./TypeProject/Index";

import ButtonsBottom from "./ButtonsBottom/Index";

import SampleDataForm from "./SampleDataForm/Index";

import SampleConditionsForm from "./SampleConditionsForm/Index";

//images
import Search from "@/Assets/Form/search.png";

const Form: React.FC<FormProps> = ({}) => {
  const [formData, setFormData] = useState(
    { 
      orientador: "",
      outros: "" ,
      /*
      analise_qualitativa: false,
      analise_quantitativa: false,
      quantidade_amostras: 0,
      tecnicas_condicoes: "",

      // SampleData

      amostras: [
        {
          identificacao_amostra: "1",
          composicao_quimica: "1",
        }, 
        {
          identificacao_amostra: "2",
          composicao_quimica: "2",
        }, 
        {
          identificacao_amostra: "3",
          composicao_quimica: "3",
        }
      ],

      // SampleConditionsData

      retornar_amostra: false, // sim -> true; não -> false, s/ state para cada botão sim/não
      nivel_prioridade: "prioridade_teste"
      inflamavel: false,
      toxico: false,
      hidroscopico: false,
      radioativo: false,
      corrosivo: false,
      // outros: ""
      */
    }
    );

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    saveFormData();
  };
  
  function saveFormData() {
    localStorage.setItem('formData', JSON.stringify(formData));
  }
  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData') || "{}");
    
    if (storedData != '{}') {
      setFormData(storedData);
    }
  }, []);  
  

  return (
    <Container>
      <LogoContainer>
        <Image src={Search} />
      </LogoContainer>
      <form onSubmit={handleSubmit}>
        <TypeProject formData={formData} setFormData={setFormData} />
        <SampleDataForm formData={formData} setFormData={setFormData}  />
        <SampleConditionsForm formData={formData} setFormData={setFormData}  />
        <ButtonsBottom formData={formData} setFormData={setFormData} />
      </form>
    </Container>
  );
};

export default Form;
