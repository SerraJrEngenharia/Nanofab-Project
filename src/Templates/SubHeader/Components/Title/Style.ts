import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div``;

export const Text = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.extralarge}px;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};

  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {
    font-size: ${({ theme }) => theme.fonts.extralarge * 1.5}px;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    font-size: ${({ theme }) => theme.fonts.extralarge * 2}px;
  }
`;
