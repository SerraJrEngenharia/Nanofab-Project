import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 40%;
  background-color: #d9d9d9aa;
  border-radius: 30px;
  margin: 3%;
  margin-top: 5%;
  padding: 2%;

  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 35px;

  @media screen and (max-width: ${width.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
    width: 100%;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.title};
`;

export const Text = styled.span`
  text-align: left;
  width: 50%;
  margin-bottom: 1%;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  font-weight: bolder;
`;

export const Input = styled.input`
  width: 50%;
  height: 30px;
  background-color: #e8e8e8;
  border-radius: 10px;
  border: 0px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    /* padding-left: 20px; */
    color: #5086b699;
    opacity: 1; /* Firefox */
    /* padding: 5px; */
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #5086b6;
  border: 0px;
  padding: 2%;
  padding-left: 10%;
  padding-right: 10%;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid #5086b6;

  :hover {
    color: #5086b6;
    background-color: #fff;
    border: 1px solid #5086b6;
    transition: 0.5s;
    cursor: pointer;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-beetween;
  margin-bottom: 20px;
  padding-left: 20px;
  width: 60%;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  font-size: ${({ theme }) => theme.fonts.small}px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 5px;

  :hover {
    color: #5086b6;
    text-decoration: underline;
    transition: 0.5s;
    cursor: pointer;
  }
`;
