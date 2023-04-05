import styled from "styled-components";
import {Link} from "react-router-dom";

import { width } from "@/Services/screenSizes";

export const Container = styled.nav`
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (min-width: 1024px) {    
        display: none;
    }
`;

export const Text = styled(Link)`
    font-weight: 300;
    font-size: var(--medium);
    margin: 20px 15px;
    cursor: pointer;
    text-decoration: none;
    color: var(--white);
    font-family: 'Maven Pro';

    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`;

export const Logo = styled.button`
    margin: 20px 15px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: var(--white);
    &:hover{
        opacity: 0.7;
        transition: 0.2s;
    }
`;

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 80px;
    transition: 0.2s;
    z-index: 10;
   
    background: rgba(255, 255, 255, 0.15);
    border-radius: 15px 0px 0px 15px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(0px);
`;