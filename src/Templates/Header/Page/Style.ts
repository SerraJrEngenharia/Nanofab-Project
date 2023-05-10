import styled from "styled-components";

import { width } from '../../../Services/screenSizes'

export const Container = styled.div`
  width: 100%;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  background-color: #F8F8F8;
  
  overflow: hidden;

  @media screen and (max-width: ${width.mobile}) {    
    width: 100%;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    /* width: 80%; */
  }

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {     
    /* 4k */
  }
  
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;

  height: 10vh;

`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const LoginContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.foreground};
  padding-right: 25px;
`;

export const LogoCompany = styled.img`
  width: 150px;

  @media screen and (max-width: ${width.mobile}) {    
    width: 110px;
  }

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    width: 400px;
  }
`;
