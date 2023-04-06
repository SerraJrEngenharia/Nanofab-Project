import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  display: flex;
  justify-content: bottom;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.middleground};
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 15px;

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
   height: 10vh;
  }
`;

export const Line = styled.div`
  width: 85%;
  height: 3px;
  background: ${({ theme }) => theme.colors.text.content};
  margin-bottom: 10px;

  @media screen and (max-width: ${width.mobile}) {    
    width: 50%;
  }
`;

export const BottomSection = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${width.mobile}) {    
    flex-direction: column;
  }
`;

export const Text = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.content};

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
   font-size: 30px;
  }

`;
