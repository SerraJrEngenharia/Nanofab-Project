import styled from "styled-components";

export const Container = styled.div``;

export const Text = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.extralarge}px;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
`;
