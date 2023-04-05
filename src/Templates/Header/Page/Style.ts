import styled from "styled-components";

import { width } from '../../../Services/screenSizes'

export const Container = styled.div`
  width: 100%;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  background-color: #F8F8F8;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  @media screen and (max-width: ${width.mobile}) {    
    width: 100%;
  }
  
`;

export const Section = styled.div`
  width: 100%;
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
