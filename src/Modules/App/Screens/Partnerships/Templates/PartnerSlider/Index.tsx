// React
import React from 'react';

// Native Components
import { Container, LogoSliderTrack, Text } from "./Style";

// @Types
import { PartnerSliderProps } from './Types';

// Components
import FooterSliderImg from './Components/FooterSliderImg/Index'

// Images
import CBPFImage from "@/Assets/ParceriasLogos/cbpf.jpg";
import FAPERJImage from "@/Assets/ParceriasLogos/faperj.svg";
import FINEPImage from "@/Assets/ParceriasLogos/finep.svg";
import UFFImage from "@/Assets/ParceriasLogos/logoUFF.png";
import IMEImage from "@/Assets/ParceriasLogos/ime.jpg";
import PUCImage from "@/Assets/ParceriasLogos/pucrj.jpg";
import UFRJImage from "@/Assets/ParceriasLogos/UFRJ.jpg";
import CEFETImage from "@/Assets/ParceriasLogos/cefet.png";

const PartnerSlider: React.FC<PartnerSliderProps> = ({}) => {

  const partners = [
    {
      image: CBPFImage,
      altText: 'Centro Brasileiro de Pesquisas Físicas - CBPF'
    },
    {
      image: FAPERJImage,
      altText: 'Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro'
    },
    {
      image: FINEPImage,
      altText: 'FINEP - Agência Brasileira de Inovação'
    },
    {
      image: UFFImage,
      altText: 'UFF - Universidade Federal Fluminense'
    },
    {
      image: IMEImage,
      altText: 'IME - Instituto Militar de Engenharia'
    },
    {
      image: UFRJImage,
      altText: 'UFRJ - Universidade Federal do Rio de Janeiro'
    },
    {
      image: PUCImage,
      altText: 'PUC - Pontifícia Universidade Católica do Rio de Janeiro '  
    },
    {
      image: CEFETImage,
       altText: 'CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca'
    },
    {
      image: CBPFImage,
      altText: 'Centro Brasileiro de Pesquisas Físicas - CBPF'
    },
    {
      image: FAPERJImage,
      altText: 'Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro'
    },
    {
      image: FINEPImage,
      altText: 'FINEP - Agência Brasileira de Inovação'
    },
    {
      image: UFFImage,
      altText: 'UFF - Universidade Federal Fluminense'
    },
    {
      image: IMEImage,
      altText: 'IME - Instituto Militar de Engenharia'
    },
    {
      image: UFRJImage,
      altText: 'UFRJ - Universidade Federal do Rio de Janeiro'
    },
    {
      image: PUCImage,
      altText: 'PUC - Pontifícia Universidade Católica do Rio de Janeiro '  
    },
    {
      image: CEFETImage,
       altText: 'CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca'
    },
    {
      image: CBPFImage,
      altText: 'Centro Brasileiro de Pesquisas Físicas - CBPF'
    },
    {
      image: FAPERJImage,
      altText: 'Fundação Carlos Chagas Filho de Amparo a Pesquisa do Estado do Rio de Janeiro'
    },
    {
      image: FINEPImage,
      altText: 'FINEP - Agência Brasileira de Inovação'
    },
    {
      image: UFFImage,
      altText: 'UFF - Universidade Federal Fluminense'
    },
    {
      image: IMEImage,
      altText: 'IME - Instituto Militar de Engenharia'
    },
    {
      image: UFRJImage,
      altText: 'UFRJ - Universidade Federal do Rio de Janeiro'
    },
    {
      image: PUCImage,
      altText: 'PUC - Pontifícia Universidade Católica do Rio de Janeiro '  
    },
    {
      image: CEFETImage,
       altText: 'CEFET - Centro Federal de Educação Tecnológica Celso Suckow da Fonseca'
    }
  ]
  return (
    <Container>
      <Text>Parceiros</Text>
        <LogoSliderTrack>
          {
            partners.map((eachPartner) => {
              return (
                <FooterSliderImg
                  key={partners.indexOf(eachPartner)}
                  image={eachPartner.image}
                  altText={eachPartner.altText}
                />
              )
            })
          }
        </LogoSliderTrack>
    </Container>
  )
}

export default PartnerSlider;