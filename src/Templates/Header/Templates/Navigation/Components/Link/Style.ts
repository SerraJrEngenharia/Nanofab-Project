import styled from "styled-components";

import { Link } from "react-router-dom";
import { width } from "@/Services/screenSizes";

export const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  text-align: center;
  padding: 10px;
  transition: all 0.2s linear;

  &:hover {
    background-color: #e6e6e6;
    border-radius: 15px;
  }
`;

export const Text = styled(Link)`
  font-family: "Maven Pro";
  font-size: ${({ theme }) => theme.fonts.medium}px;
  color: #626262;
  color: ${({ theme }) => theme.colors.text.title};
  
    // @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {    
    // 
    // }

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }
`;
