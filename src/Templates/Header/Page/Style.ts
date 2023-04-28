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
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px; */

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    height: 10vh;
  }
  @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {    
    height: 10vh;
  }
  @media screen and (min-width: ${width.desktop}) and (max-width: ${width.largeDesktop}) {  
    height: 10vh;
  }
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {  
    height: 8vh;
  }
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
  padding-left: 15px;
  width: 200px;

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    width: 400px;
  }
`;
