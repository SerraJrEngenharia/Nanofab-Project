import styled from "styled-components";
import { width } from "@/Services/screenSizes";
import { IoPersonCircleOutline } from "react-icons/io5";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b11211;
  background-color: #f8f8f8;
  
  cursor: pointer;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    color: #fff;
    background-color: #b11211;
    transition: 0.2s;
  }
`;


export const Text = styled.span`
  font-size: ${({ theme }) => theme.fonts.small}px;
  margin-right: 10px;

  @media screen and (max-width: ${width.largeDesktop}) {     
   font-size: 16px;
  }

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {     
   font-size: 38px;
   font-weight: 500;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}){    
    font-size: ${({ theme }) => theme.fonts.extralarge * 1.5}px;   
  }
`;

export const Icon = styled(IoPersonCircleOutline)`
  font-size: 38px;

  @media screen and (max-width: ${width.largeDesktop}) {     
   font-size: 28px;
  }

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {     
   font-size: 48px;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}){    
    font-size: 60px;   
  }
`

