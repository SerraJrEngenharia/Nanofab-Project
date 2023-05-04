import { useState } from 'react'

// React
import React from 'react';

// Native Components
import { Container, Title, Text, Input, Button, InputContainer100, InputContainer50, InputContainer33, ExternalContainer } from './Style';

// @Types
import { RegisterProps } from './Types';

const Register: React.FC<RegisterProps> = ({}) => {
  
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [dept, setDept] = useState('')
  const [outro, setOutro] = useState('')
  const [telefone, setTelefone] = useState('')
  const [ramal, setRamal] = useState('')
  const [funcao, setFuncao] = useState('')
  const [usuario, setUsuario] = useState('')
  const [senha1, setSenha1] = useState('')
  const [senha2, setSenha2] = useState('')

  const [list, setList] = useState(Array<RegisterProps>)
  const [status, setStatus] = useState(false)
  
  const renderInfos = () => {
    list.map((eachElement)=>{
      console.log(eachElement)
    })
  }

  const comparePasswords = () => {
    if(senha1 !== senha2)
    {
      alert('Suas senhas são diferentes. Tente novamente.')
      setSenha1('')
      setSenha2('')
    }
    else
    {
      setStatus(true)
    }
  }

  const saveInfo = () => {
    if(status)
    {
      const info = {
        nome: {nome},
        telefone: {telefone},
        ramal: {ramal},
        funcao: {funcao},
        email: {email},
        departamento: {dept},
        usuario: {usuario},
        senha: {senha1},
        outro: {outro},
      }

      // setList([...list, info])
    }
  }
  
  return (
    <Container>
      <Title>Registrar-se</Title>

      <ExternalContainer>
        <InputContainer100>
          <Text>Instituição:</Text>
          <Input placeholder="Entre com a instituição" />
        </InputContainer100>
      </ExternalContainer>

      <ExternalContainer>
        <InputContainer50>
          <Text>Departamento:</Text>
          <Input placeholder="Entre com a departamento" onChange={(dept)=>{setDept(dept.target.value);}}/>
        </InputContainer50>
        <InputContainer50>
          <Text>Outros:</Text>
          <Input placeholder="Outros" onChange={(outro)=>{setOutro(outro.target.value)}} />
        </InputContainer50>
      </ExternalContainer>

      <ExternalContainer>
        <InputContainer100>
          <Text>Nome:</Text>
          <Input placeholder="Digite seu nome" onChange={(nome)=>{setNome(nome.target.value)}}/>
        </InputContainer100>
      </ExternalContainer>

      <ExternalContainer>

        <InputContainer33>
          <Text>Telefone:</Text>
          <Input placeholder="Digite seu telefone" onChange={(telefone)=>{setTelefone(telefone.target.value)}}/>
        </InputContainer33>
        
        <InputContainer33>
          <Text>Ramal:</Text>
          <Input placeholder="Digite seu ramal" onChange={(ramal)=>{setRamal(ramal.target.value)}} />
        </InputContainer33>
        
        <InputContainer33>
          <Text>Função:</Text>
          <Input placeholder="Digite sua função" onChange={(funcao)=>{setFuncao(funcao.target.value)}} />
        </InputContainer33>
      </ExternalContainer>
      
      <ExternalContainer>
        <InputContainer100>
          <Text>Usuário:</Text>
          <Input placeholder='Digite seu usuário' onChange={(usuario)=>{setUsuario(usuario.target.value)}} />
        </InputContainer100>
      </ExternalContainer>

      <ExternalContainer>
        <InputContainer50>
          <Text>Senha:</Text>
          <Input type='password' placeholder='Entre com sua senha aqui' onChange={(senha1)=>{setSenha1(senha1.target.value)}}/>
        </InputContainer50>
        
        <InputContainer50>
          <Text>Confirme sua senha:</Text>
          <Input type='password' placeholder='Confirme sua senha aqui' onChange={(senha2)=>{setSenha2(senha2.target.value)}} />
        </InputContainer50>
      </ExternalContainer>
     
      <Button onClick={renderInfos}>Registrar</Button>
    </Container>
  );
}

export default Register;