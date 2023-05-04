import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
    width: 100%;
    margin-bottom: 3%;

`;

export const Title = styled.h2` // Orientador, Tipos, Outros, etc.
  margin: 0;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  margin-bottom: 10px;
  
   @media screen and (max-width: ${width.mobile}) {    
    font-size: ${({ theme }) => theme.fonts.medium}px;
    margin-top: 10%;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    font-size: ${({ theme }) => theme.fonts.medium}px;
    margin-top: 8%;
  }
  /*
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
    width: 200px;
    height: 200px;
  }
  */
`;

export const DivComboBox = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
`;

export const Section = styled.section`
    width: 30%;
`;

export const RadioContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
`;

export const RadioInput = styled.input`
    border: 1px solid #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;

export const RadioLabel = styled.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`;

export const QtdAmostras = styled.input`
    width: 90%;
    height: 40px;
    background-color: #E8E8E8;
    border-radius: 20px;
    border: 0px;
    padding: 5px;
    
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      padding-left: 20px;
      color: #5086B699;
      opacity: 1; /* Firefox */
    }
    
    @media screen and (max-width: ${width.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`;


export const InputContainer = styled.div`
  margin-bottom: 3%;
`;

export const TecniqueInput = styled.input`
    width: 90%;
    height: 30px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    padding: 5px;
    font-family: 'Maven Pro';
    
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      padding-left: 20px;
      color: #5086B699;
      opacity: 1; /* Firefox */
    }
    
    @media screen and (max-width: ${width.mobile}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      }
    }

    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        padding-left: 10px;
      } 
   }
`;


