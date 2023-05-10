import React, { useState } from 'react'
import { 
    Container, 
    IconClose, 
    IconOpen, 
    Logo, 
    Menu, 
    Text
} from './Style'

import { Link } from 'react-router-dom';

import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const MobileNavigationTemplate: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <Container>
      <Logo onClick={() => setIsVisible(!isVisible)}>
        {isVisible ?
          <IconClose />
          :
          <IconOpen />
        }
      </Logo>

      {isVisible ?
        <Menu>
          <Text to={'/'} onClick={() => setIsVisible(false)}>Home</Text>
          <Text to={'/equipamentos_infraestrutura'} onClick={() => setIsVisible(false)}>Equipamentos e Infraestrutura</Text>
          <Text to={'/programas_especiais'} onClick={() => setIsVisible(false)}>Programas Especiais</Text>
          <Text to={'/equipe'} onClick={() => setIsVisible(false)}>Equipe</Text>
          <Text to={'/andamento'} onClick={() => setIsVisible(false)}>Andamento</Text>
          <Text to={'/submissao_projetos'} onClick={() => setIsVisible(false)}>Submissão de Projetos</Text>
          <Text to={'/publicacoes'} onClick={() => setIsVisible(false)}>Publicações</Text>
          <Text to={'/parcerias'} onClick={() => setIsVisible(false)}>Parcerias</Text>
        </Menu>
        :
        null
      }
      
    </Container>
  )
}

export default MobileNavigationTemplate