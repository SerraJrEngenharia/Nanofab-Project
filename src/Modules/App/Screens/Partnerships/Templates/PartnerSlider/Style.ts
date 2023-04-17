import styled from "styled-components";
import { width } from '@/Services/screenSizes'


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	overflow: hidden;
	position: relative;
	width: 100%;
    height: 21vh;
    background: #fff;
    -webkit-box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.125);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    padding-bottom: 10px;
    @media screen and (max-width: ${width.largeDesktop}){
        height: 16%;
    }
    @media screen and (max-width: ${width.tablet}){
        height: 17%;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {
	    height: 17%;
    }

    @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
        margin-top: 5%; 
    }

    @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {    
        margin-top: 5%; 
    }

    @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
        margin-top: 5%; 
    }



`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fonts.medium}px;
  color: ${({ theme }) => theme.colors.text.content};
  text-align: center;
  margin: 10px;

  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {
    font-size: ${({ theme }) => theme.fonts.large}px;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    font-size: ${({ theme }) => theme.fonts.extralarge}px;
  }
`;

export const LogoSliderTrack = styled.div`
    -webkit-animation: logo-scroll 40s linear infinite;
	animation: logo-scroll 40s linear infinite;
	display: flex;
	margin: 0;
    @-webkit-keyframes logo-scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100% {
            -webkit-transform: translateX(calc(-250px * 7));
            transform: translateX(calc(-250px * 7));
        }
    }
    @keyframes logo-scroll {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
        100% {
            -webkit-transform: translateX(calc(-250px * 7));
            transform: translateX(calc(-250px * 7));
        }
    }
`;