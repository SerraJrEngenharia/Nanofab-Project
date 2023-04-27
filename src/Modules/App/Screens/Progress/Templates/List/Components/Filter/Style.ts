import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const FContainer = styled.div`
    width: 90%;
    margin-bottom: 3%;
`;

export const FTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.large}px;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
`;

export const FCombobox = styled.select`
    width: 25%;
    border-radius: 10px;
    margin-right: 20px;
    padding: 0.5%;
    cursor: pointer;

    font-size: ${({ theme }) => theme.fonts.small}px;

    @media screen and (max-width: ${width.mobile}) {
        width: 50%;
      }

    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        width: 50%;
    }

   
`;

export const FOptions = styled.option`
    font-size: ${({ theme }) => theme.fonts.extralarge}px;
`;

export const FButtonFilter = styled.button`
    width: 10%;
    padding: 0.5%;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    font-size: ${({ theme }) => theme.fonts.small}px;
    cursor: pointer;

    &:hover{
        background-color: #D5D4D4;
        transition: 0.5s;
    }

    @media screen and (max-width: ${width.mobile}) {
        width: 50%;
      }

    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        width: 50%;
    }

    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
       width: 50%;
      }

      
`;

export const FFilterContainer = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: row;
    width: 100%;
    margin-bottom: 3%;
`;
