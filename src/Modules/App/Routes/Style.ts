import styled from 'styled-components';

import BackgroundSvg from "@/Assets/Background/background2.svg";
import { width } from '@/Services/screenSizes';

export const Container = styled.div`
  background-image: url(${BackgroundSvg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  @media screen and (max-width: ${width.mobile}) {    
    background-size: 100% 1200px;
    background-repeat: repeat;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
    background-size: 100% 1200px;
    background-repeat: repeat;
  }
`;
