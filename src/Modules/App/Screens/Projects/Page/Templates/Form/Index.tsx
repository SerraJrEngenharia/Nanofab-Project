// React
import React, { EventHandler, ReactEventHandler, useState, useEffect } from "react";

// Native Components
import { Container, LogoContainer, Image } from "./Style";

// @Types
import { FormProps } from "./Types";

import TypeProject from "./TypeProject/Index";

import ButtonsBottom from "./ButtonsBottom/Index";

//images
import Search from "@/Assets/Form/search.png";

const Form: React.FC<FormProps> = ({}) => {
  const [formData, setFormData] = useState(
    { 
      orientador: "",
      outros: "" ,
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
        <ButtonsBottom formData={formData} setFormData={setFormData}  />
      </form>
    </Container>
  );
};

export default Form;
