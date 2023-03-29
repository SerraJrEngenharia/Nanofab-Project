import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: bottom;
  align-items: center;
  background-color: ${({ theme }) => theme.foreground};
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 15px;
`;

export const Line = styled.div`
  width: 85%;
  height: 3px;
  background: ${({ theme }) => theme.middleground};
  margin-bottom: 10px;
`;

export const BottomSection = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
