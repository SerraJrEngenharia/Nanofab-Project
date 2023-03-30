import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 20px 0px;
  padding: 15px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text.title};
`;
