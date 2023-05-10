import styled from "styled-components";
import {Link} from "react-router-dom";

import { width } from "@/Services/screenSizes";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

export const Container = styled.nav`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    /* @media screen and (min-width: 1300px) {    
        display: none;
    } */
`;

export const Text = styled(Link)`
    font-weight: 300;
    font-size: var(--medium);
    margin: 20px 15px;
    cursor: pointer;
    text-decoration: none;
    color: var(--white);
    font-family: 'Maven Pro';

    @media screen and (max-width: ${width.tablet}) {
        margin: 15px 7px;   
        font-size: var(--small);
    }

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
    left: 0px;
    transition: 0.2s;
    z-index: 10;
    padding: 15px;
    
    border: 1px solid #c2c2c2;
    background: #f2f2f2;
    border-radius: 0px 15px 15px 0px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(0px);
`;

export const IconOpen = styled(IoMenuOutline)`
    font-size: 40px;

    @media screen and (max-width: ${width.tablet}) {    
        font-size: 30px;
    }

`;

export const IconClose = styled(IoCloseOutline)`
    font-size: 40px;

    @media screen and (max-width: ${width.tablet}) {    
        font-size: 30px;
    }
`;