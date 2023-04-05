import styled from "styled-components";
import { width } from "@/Services/screenSizes";

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

  @media screen and (max-width: ${width.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 12%;
    }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
      display: flex;
      width: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 5%;
      padding: 10px;
      margin-top: 12%;
  }
  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
      display: flex;
      width: 85%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 5%;
      padding: 10px;
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${width.mobile}) {    
      width: 100%;
      padding: 10px 10px;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
      width: 90%;
      padding: 10px 10px;
  }
  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
      width: 90%;
      padding: 10px 10px;
  }
`;

export const Text = styled.span`
  margin: 10px 20px 5px 20px;
  font-size: ${({ theme }) => theme.fonts.small}px;

  @media screen and (max-width: ${width.mobile}) {    
    text-align: justify;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
    text-align: justify;
  }
  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
    text-align: justify;
  }
`;
