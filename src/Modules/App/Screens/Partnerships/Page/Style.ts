import styled from "styled-components";

import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 100%;

`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  @media screen and (max-width: ${width.mobile}) {    
    margin-top: 10%;
    margin-bottom: 3%;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    margin-top: 8%;
    margin-bottom: 3%;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
    margin-top: 7%;   
  }


  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    margin-top: 7%;
    margin-bottom: 5%;
  }

  @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {    
    margin-top: 4%;
    margin-bottom: 5%;
  }
`;