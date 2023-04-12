import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 55vh; */
  margin: 50px 0px;

  @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {
    width: 60%;
  }

  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {
    width: 70%;
    font-size: ${({ theme }) => theme.fonts.large}px;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    padding: 60px;
    width: 90%;
    font-size: ${({ theme }) => theme.fonts.extralarge * 1.1}px;
  }
`;

export const Section = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  @media screen and (max-width: ${width.mobile}) {
    width: 90%;
  }
`;

export const Aside = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.text.highlight};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-color: ${({ theme }) => theme.colors.foreground};
  border-bottom-width: 3px;
  border-bottom-style: solid;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fonts.extralarge}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.auxiliary.error.dark};
  text-align: center;
  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {
    font-size: ${({ theme }) => theme.fonts.extralarge * 1.5}px;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    font-size: ${({ theme }) => theme.fonts.extralarge * 2.4}px;
  }
`;

export const Items = styled.div`
  width: 100%;
  /* padding: 20px 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(255, 255, 255, 0.4); */
  /* backdrop-filter: blur(20px); */

  @media screen and (max-width: ${width.mobile}) {
    width: 80%;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 90%;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    padding: 50px;
  }
`;
