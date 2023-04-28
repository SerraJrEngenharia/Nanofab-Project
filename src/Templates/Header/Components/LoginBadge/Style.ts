import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  cursor: pointer;

  &:hover{
    color: #fff;
    transition: 0.2s;
  }
`;


export const Text = styled.span`
  font-size: ${({ theme }) => theme.fonts.small}px;
  margin-right: 10px;
`;
