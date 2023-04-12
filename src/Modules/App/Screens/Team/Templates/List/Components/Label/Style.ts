import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.text.highlight};

  @media screen and (max-width: ${width.mobile}) {
    width: 900px;  
  } 

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 1000px;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    padding-top: 8px;
    padding-bottom: 8px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {    
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}){    
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const FirstLabel = styled.span`
  width: 40%;
  font-size: ${({ theme }) => theme.fonts.large}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.auxiliary.error.dark};
  padding-left: 20px;

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 25%;
  }
  
  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    font-size: ${({ theme }) => theme.fonts.medium}px;
  }
  
  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {    
    font-size: ${({ theme }) => theme.fonts.extralarge}px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}){    
    font-size: ${({ theme }) => theme.fonts.extralarge * 1.5}px;
  }
  
`;

export const SecondLabel = styled.span`
  width: 15%;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.large}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.auxiliary.error.dark};

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 18.75%;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    font-size: ${({ theme }) => theme.fonts.medium}px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {    
    font-size: ${({ theme }) => theme.fonts.extralarge}px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}){    
    font-size: ${({ theme }) => theme.fonts.extralarge * 1.5}px;
  }
`;
