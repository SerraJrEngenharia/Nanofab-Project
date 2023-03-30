import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: -70px;
  left: -70px;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 100%;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;
