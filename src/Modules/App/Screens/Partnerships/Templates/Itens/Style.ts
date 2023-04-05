import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  margin-top: 5%;
  margin-bottom: 5%;
  align-self: center;

  @media screen and (max-width: ${width.mobile}) {
    margin-top: 10%;
    margin-bottom: 20%;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 90%;
    margin-top: 10%;
    margin-bottom: 10%;
  }

  @media screen and (min-width: 720px) and (max-width: 770px) {
    width: 60%;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {

  }
`;

export const CardCont = styled.div`
  width: 70%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(217, 217, 217, 0.5);
  border-radius: 150px;
  justify-content: space-around;

  @media screen and (max-width: ${width.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 20%; */
    padding-top: 5%;
    border-radius: 50px;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4%;
    padding-bottom: 15%;
    border-radius: 50px;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {
    border-radius: 70px;
    /* vim até aqui: ass por Kauan */
  }

  @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {
  }

  @media screen and (min-width: ${width.desktop}) and (max-width: ${width.largeDesktop}) {
  }

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
  }

  @media screen and (min-width: ${width.extralargeDesktop}) {
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${width.mobile}) {
    margin-bottom: 10%;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    margin-bottom: 5%;
  }
`;

export const ContentContainer = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${width.mobile}) {
    width: 95%;
    padding-bottom: 20%;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 95%;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  color: #ae0806;
  text-align: center;
  font-size: 30px;
  margin-bottom: 3%;

  @media screen and (max-width: ${width.mobile}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    font-size: 23px;
    margin-bottom: 10%;
  }
`;

export const Paragraph = styled.span`
  color: black;
  text-align: center;
  font-size: 18px;
  width: 60%;

  @media screen and (max-width: ${width.mobile}) {
    font-size: 16px;
    width: 100%;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 100%;
    font-size: 20px;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid #ae0806;
  border-radius: 150px;
  padding: 20%;
  object-fit: scale-down;
  overflow: visible;
  background-color: white;
`;

export const ExternalImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 200px;
    width: 200px; */
`;
