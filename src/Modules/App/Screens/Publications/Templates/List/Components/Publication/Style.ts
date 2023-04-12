import styled from "styled-components";
import { width } from "@/Services/screenSizes"

export const Container = styled.div`
  width: 90%;
  margin: 20px 0px;
  padding: 15px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.foreground};

  @media screen and (max-width: ${width.mobile}) {    
    width: 100%;
    text-align: left;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
    text-align: left;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text.title};
`;
