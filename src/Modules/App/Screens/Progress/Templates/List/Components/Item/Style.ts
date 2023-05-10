import styled, { css } from "styled-components";
import { width } from "@/Services/screenSizes";

interface ContainerStyleProps {
  styleActive?: boolean;
}

export const Container = styled.div<ContainerStyleProps>`
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  flex-direction: row;

  ${({ styleActive }) =>
    styleActive
      ? css`
          background-color: ${({ theme }) => theme.colors.foreground}55;
        `
      : css`
          background-color: ${({ theme }) => theme.colors.middleground}55;
        `}

  @media screen and (max-width: ${width.mobile}) {
    width: 900px;  
  } 

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 1000px;

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
  font-size: ${({ theme }) => theme.fonts.small}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.title};
  padding-left: 10px;

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 25%;
  }
  @media screen and (min-width: ${width.tablet}) and (max-width: 1025px) {
    font-size: ${({ theme }) => theme.fonts.extrasmall}px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}){    
    font-size: ${({ theme }) => theme.fonts.extralarge}px;
  }
  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {    
    font-size: ${({ theme }) => theme.fonts.large}px;
    padding-left: 20px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}){    
    font-size: ${({ theme }) => theme.fonts.extralarge}px;
  }


`;

export const SecondLabel = styled.span`
  width: 15%;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.small}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.title};

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 18.75%; // Enough to tell the user to scroll to the side, shows the second tab slightly
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: 1025px) {
    font-size: ${({ theme }) => theme.fonts.extrasmall}px;
  }

  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {    
    font-size: ${({ theme }) => theme.fonts.large}px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}){    
    font-size: ${({ theme }) => theme.fonts.extralarge}px;
  }
`;

