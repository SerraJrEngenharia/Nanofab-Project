import styled from 'styled-components';
import { width } from '@/Services/screenSizes';

export const Container = styled.div`
	margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 120px;
    /* height: 150px; */
	margin: 0 40px;
	transition: 0.5s;
	overflow: hidden;
    &:hover{
	    transition: 0.5s;
        opacity: 0.7;
    }

    @media screen and (max-width: ${width.largeMobile}) {
	    width: 150px;
        /* height: 120px; */
    }
    @media screen and (max-width: ${width.mobile}){
        width: 120px;
        /* height: 120px; */
    }
    @media screen and (min-width: ${width.desktop}) {
	    width: 180px;
    }
    @media screen and (min-width: ${width.largeDesktop}) {
	    width: 240px;
        /* height: 210px; */
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {
	    width: 300px;
        /* height: 300px; */
    }
    @media screen and (max-width: ${width.notebook}){
        width: 120px;
    }
`;