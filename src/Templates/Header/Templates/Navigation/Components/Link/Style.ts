import styled from "styled-components";

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

export const Text = styled.span`
  font-family: "Maven Pro";
  font-size: ${({ theme }) => theme.fonts.medium}px;
  color: #626262;
  color: ${({ theme }) => theme.colors.text.title};
`;
