import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 35px;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  margin: 10px 20px 5px 20px;
  font-size: ${({ theme }) => theme.fonts.small}px;
`;
