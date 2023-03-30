import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Text = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.extralarge}px;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  text-align: center;
`;
