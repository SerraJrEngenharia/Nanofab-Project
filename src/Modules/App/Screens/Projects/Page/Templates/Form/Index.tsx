// React
import React, { EventHandler, ReactEventHandler, useState, useEffect } from "react";

// Native Components
import { Container, LogoContainer, Image } from "./Style";

// @Types
import { FormProps, SampleProps } from "./Types";

import TypeProject from "./TypeProject/Index";

import ButtonsBottom from "./ButtonsBottom/Index";

import FirstGroupForm from "./FirstGroupForm/Index";

import SampleDataForm from "./SampleDataForm/Index";

import SampleConditionsForm from "./SampleConditionsForm/Index";

//images
import Search from "@/Assets/Form/search.png";

export const MAX_SAMPLE = 200


const Form: React.FC<FormProps> = ({}) => {
  const [sampleNumber, setSampleNumber] = useState(1);
  const [formData, setFormData] = useState(
    { 
      analise_qualitativa: false,
      analise_quantitativa: false,
      quantidade_amostras: 1,
      tecnicas_condicoes: "",
      orientador: "", 
      
      // TIPOS
      microscopia_eletronica: false,
      amostras_met: false,
      nanomat: false,
      microfab: false,
      grafeno_cvd: false,
      microsoldadora: false,
      microdurometro: false,
      estereoscopio: false,
      //
      
      outros: "",
      detectores: "",
      projeto_descricao_amostras: "",
      
      // SampleData
      amostras: Array(MAX_SAMPLE).fill({}),
      
      // amostras: [
      //     {
      //       identificacao_amostra: "1",
      //       composicao_quimica: "1",
      //     }, 
      //     {
      //       identificacao_amostra: "2",
      //       composicao_quimica: "2",
      //     }, 
      //     {
      //       identificacao_amostra: "3",
      //       composicao_quimica: "3",
      //     }
      //   ],
      
      // SampleConditionsData
      nivel_prioridade: "",
      condicao_seguranca: "",

      // orientador: "",
      // outros: "" ,
      // analise_qualitativa: false,
      // analise_quantitativa: false,
      // quantidade_amostras: 1,
      // tecnicas_condicoes: "",
      // detectores: "",
      // projeto_descricao_amostras: "",
      
      // // SampleData
      
      // amostras: [
      //   {
      //         identificacao_amostra: "1",
      //         composicao_quimica: "1",
      //   }, 
      //   {
      //     identificacao_amostra: "2",
      //     composicao_quimica: "2",
      //   }, 
      //   {
      //     identificacao_amostra: "3",
      //     composicao_quimica: "3",
      //   }
      // ],
      
      // // SampleConditionsData
      
      // // retornar_amostra: undefined, // sim -> true; não -> false, s/ state para cada botão sim/não
      // nivel_prioridade: "teste",
      // condicao_seguranca: ""
    }
    );

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    saveFormData();
  };
  
  function saveFormData() {
    // localStorage.setItem('formData', JSON.stringify(formData));
  }
  
  useEffect(() => {
    // const storedData = JSON.parse(localStorage.getItem('formData') || "{}");
    
    // if (storedData != '{}') {
    //   setFormData(storedData);
    // }
  }, []);  
  

  return (
    <Container>
      <LogoContainer>
        <Image src={Search} />
      </LogoContainer>
      <form onSubmit={handleSubmit}>
        <FirstGroupForm formData={formData} setFormData={setFormData}/>
        <TypeProject formData={formData} setFormData={setFormData} />
        <SampleDataForm formData={formData} setFormData={setFormData}  />
        <SampleConditionsForm formData={formData} setFormData={setFormData}  />
        <ButtonsBottom formData={formData} setFormData={setFormData} />
      </form>
    </Container>
  );
};

export default Form;
