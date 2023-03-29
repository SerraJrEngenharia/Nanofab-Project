import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  text-align: center;
  padding: 10px;
  background-color: #f5f5f5;
  transition: all 0.2s linear;

  &:hover {
    background-color: #e6e6e6;
    border-radius: 15px;
  }
`;

export const Text = styled.span`
  font-family: "Maven Pro";
  font-size: 1.5rem;
  color: #626262;
`;
