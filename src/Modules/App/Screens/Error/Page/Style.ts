import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.span`
  font-size: ${({ theme }) => theme.fonts.large}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.highlight};
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.auxiliary.error.dark};
  border-radius: 20px;
`;
