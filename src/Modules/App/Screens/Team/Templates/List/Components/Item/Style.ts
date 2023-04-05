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

`;
