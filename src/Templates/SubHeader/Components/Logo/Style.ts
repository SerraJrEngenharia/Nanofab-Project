import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  height: 10vh;
  padding: 35px;

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {
    margin-bottom: 5%;
  }
  
  @media screen and (min-width: ${width.desktop}) and (max-width: ${width.largeDesktop}) {
    margin-bottom: 10%;
    padding: 0;
  }

  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {    
    padding: 0;
    margin: 0;
  }
`;

export const Image = styled.img`
  height: 150px;
  width: 150px;

  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {
    height: 180px;
    width: 180px;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    height: 250px;
    width: 250px;
  }
`;

