import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 100%;
  padding: 5%;
  padding-left: 3.5%;

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

export const InputOrientador = styled.input`
    width: 90%;
    height: 30px;
    background-color: #E8E8E8;
    border-radius: 10px;
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


export const ComponentTypes = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
    `;

export const CheckBoxTypes = styled.input`
    height: 15px;
    width: 15px;
`;

export const LabelTypes = styled.label`
  margin-left: 5px;
  font-family: "Maven Pro";
  `;

export const DivRow = styled.div`
  display: flex;
  
  flex-direction: row;
  margin: 5px;
  `;

export const InputContainer = styled.div`
  margin-bottom: 3%;
  `;

export const InputOutros = styled(InputOrientador)`

`;


export const InputDetectores = styled(InputOrientador)`

`;


export const InputProjetoCientifico = styled(InputOrientador)`

`;

export const InputOrientadorContainer = styled.div`
    margin-bottom: 3%;
`;

// export const InputOutrosContainer = styled(InputOrientadorContainer)`
//
// `;

// export const InputDetectoresContainer = styled(InputOrientadorContainer)`
//
// `;

// export const InputProjetoCientificoContainer = styled(InputOrientadorContainer)`
//
// `;