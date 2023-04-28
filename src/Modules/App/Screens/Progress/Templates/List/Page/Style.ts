import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
`;

export const ScheduleContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const ButtonsNavigation = styled.div`
  margin-top: 1%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;

  @media screen and (max-width: ${width.mobile}) {
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ButtonNavigate = styled.button`
  width: 10%;
  padding: 0.5%;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  margin: 1%;
  font-size: ${({ theme }) => theme.fonts.small}px;
  cursor: pointer;

  :hover {
    background-color: #d5d4d4;
    transition: 0.5s;
  }

  @media screen and (max-width: ${width.mobile}) {
    width: 50%;
  }

  @media screen and (min-width: 390px) and (max-width: ${width.largeMobile}) {
    width: 50%;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 50%;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
    width: 50%;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {
    width: 60%;
  }
`;

export const FilterSection = styled.div`
  width: 98%;
  margin-bottom: 3%;
`;

export const FilterTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.large}px;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    font-size: ${({ theme }) => theme.fonts.large}px;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
    font-size: ${({ theme }) => theme.fonts.extralarge}px;
  }
`;

export const Combobox = styled.select`
  width: 25%;
  border-radius: 10px;
  margin-right: 20px;
  padding: 0.5%;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.small}px;

  @media screen and (max-width: ${width.mobile}) {
    width: 50%;
    margin-right: 6px;
  }

  @media screen and (min-width: 390px) and (max-width: ${width.largeMobile}) {
    width: 50%;
    margin-right: 5px;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 60%;
    margin-right: 6px;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
    width: 60%;
    margin-right: 10px;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {
    width: 60%;
    margin-right: 10px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    width: 50%;
  }
  @media screen and (min-width: ${width.desktop}) and (max-width: ${width.largeDesktop}) {
    width: 50%;
  }

`;

export const Options = styled.option`
  font-size: ${({ theme }) => theme.fonts.extralarge}px;
`;

export const FilterButton = styled.button`
  width: 10%;
  padding: 0.5%;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  font-size: ${({ theme }) => theme.fonts.small}px;
  cursor: pointer;

  &:hover {
    background-color: #d5d4d4;
    transition: 0.5s;
  }

  @media screen and (max-width: ${width.mobile}) {
    width: 50%;
  }

  @media screen and (min-width: 390px) and (max-width: ${width.largeMobile}) {
    width: 50%;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 60%;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
    width: 50%;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {
    width: 60%;
    margin-right: 10px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
  width: 100%;
`;
