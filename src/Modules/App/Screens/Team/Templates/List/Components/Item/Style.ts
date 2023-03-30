import styled, { css } from "styled-components";

interface ContainerStyleProps {
  styleActive?: boolean;
}

export const Container = styled.div<ContainerStyleProps>`
  width: 100%;
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
`;

export const FirstLabel = styled.span`
  width: 40%;
  font-size: ${({ theme }) => theme.fonts.small}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.title};
  padding-left: 10px;
`;

export const SecondLabel = styled.span`
  width: 15%;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.small}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.title};
`;
