import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.text.highlight};
`;

export const FirstLabel = styled.span`
  width: 40%;
  font-size: ${({ theme }) => theme.fonts.large}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.auxiliary.error.dark};
  padding-left: 20px;
`;

export const SecondLabel = styled.span`
  width: 15%;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.large}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.auxiliary.error.dark};
`;
