import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
    width: 90%;
    margin-bottom: 3%;
`;

export const Title = styled.h2`
    font-size: ${({ theme }) => theme.fonts.large}px;
`;

export const Combobox = styled.select`
    width: 25%;
    border-radius: 10px;
    margin-bottom: 3%;
    padding: 0.5%;
`;

export const ButtonFilter = styled.button`
    width: 10%;
    padding: 0.5%;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    font-size: ${({ theme }) => theme.fonts.small}px;
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ButtonsNavigation = styled.div`
    margin-top: 3%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonNavigate = styled.button`
    width: 10%;
    padding: 0.5%;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    margin: 1%;
    font-size: ${({ theme }) => theme.fonts.small}px;
`;
