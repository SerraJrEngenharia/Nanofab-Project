import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 6%;

  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {    
    padding-top: 0px;
  }
`;

export const Text = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.extralarge}px;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  text-align: center;

  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {    
    font-size: ${({ theme }) => theme.fonts.extralarge * 1.5}px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}){     
    font-size: ${({ theme }) => theme.fonts.extralarge * 2}px;
  }
`;
