import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const Section = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
`;

export const LogoCompany = styled.img`
  padding-left: 15px;
  width: 200px;
`;
