import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5%;
    padding-left: 0.9%;
    padding-top: 0;
`;

export const Section = styled.div`
    width: 45%;
    /* background-color: black; */
    display: flex;
    flex-direction: column;
    
`;

export const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  margin-bottom: 10px;
`;

export const SampleInput = styled.input`
    width: 90%;
    height: 40px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    padding: 5px;
    margin-bottom: 10px;
    padding-left: 5%;
    
    `;