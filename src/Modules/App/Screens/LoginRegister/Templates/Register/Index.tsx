import { useDebugValue, useEffect, useState } from 'react'
import { ChangeEvent } from 'react';
import { toast } from 'react-toastify'

// React
import React from 'react';

// Native Components
import {
  Container,
  Title,
  Text,
  Input,
  Button,
  InputContainer100,
  InputContainer50,
  InputContainer33,
  ExternalContainer,
  InstContainer,
  InstSection,
  Combobox,
  RadioContainer,
  RadioInput,
  RadioLabel
} from "./Style";

// @Types
import { RegisterProps } from './Types';
import { createUsers } from '@/Services/api';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = ({}) => {
  
  const [nome, setNome] = useState('')
  const [privada, setPrivada] = useState(false);
  const [publica, setPublica] = useState(false);
  const [inst, setInst] = useState('')
  const [email, setEmail] = useState('')
  const [dept, setDept] = useState('')
  const [outro, setOutro] = useState('')
  const [telefone, setTelefone] = useState('')
  const [ramal, setRamal] = useState('')
  const [funcao, setFuncao] = useState('')
  const [usuario, setUsuario] = useState('')
  const [senha1, setSenha1] = useState('')
  const [senha2, setSenha2] = useState('')
  const [status, setStatus] = useState(false)
  
  const navigate = useNavigate()

  const handleClick = () => {
    const response = comparePasswords()

    if(response){
      saveInfo()
    }
  }

  const comparePasswords = () => {
    if(senha1 != senha2)
    {
      toast.warn('Suas senhas são diferentes. Tente novamente.')
      setSenha1('')
      setSenha2('')

      setStatus(false)
      return false
    }
    else
    {
      setStatus(true)

      return true
    }
  }

  const saveInfo = async () => {
    if(status)
    {
      const info = {
        nome: nome,
        publica: publica,
        privada: privada,
        inst: inst,
        telefone: telefone,
        ramal: ramal,
        funcao: funcao,
        email: email,
        departamento: dept,
        usuario: usuario,
        senha1: senha1,
        outro: outro,
      }

      if(nome && (publica || privada) && inst && telefone && ramal && funcao && email && dept && usuario && senha1 && outro){
        try{
          await createUsers(info)
          navigate("/login")
        } catch (e){
          toast.error("Ocorreu um erro tente novamente")
        }
      }
      else{
        toast.warning("Preencha todos os campos de texto")
      }
    }
  }

    // function changingSelection(element: ChangeEvent<HTMLSelectElement>) {
    //   if (element.target.value === "") {
    //     setTipo("");
    //   } else if (element.target.value === "") {
    //     setTipo("");
    //   } else if (element.target.value === "") {
    //     setTipo("");
    //   } else if (element.target.value === "") {
    //     setTipo("");
    //   } else if (element.target.value === "") {
    //     setTipo("");
    //   }
    // }
  
  return (
    <Container>
      <Title>Registrar-se</Title>

      <ExternalContainer>
      <InputContainer50>
          <Text>Instituição:</Text>
          <Input
            placeholder="Entre com a Instituição"
            value={inst}
            onChange={(inst) => {
              setInst(inst.target.value);
            }}
          />
        </InputContainer50>
        {/* <InputContainer50>
          <Text>Instituição:</Text>
          <InstSection>
            <InstContainer>
              <Combobox onChange={(e) => changingSelection(e)}>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </Combobox>
            </InstContainer>
          </InstSection>
        </InputContainer50> */}

        <InputContainer50>
          <Text>Tipo:</Text>
          <RadioContainer>
            <RadioInput
              type="radio"
              id="publica"
              name="institutionType"
              value="Publica"
              onChange={() => {
                if (publica !== privada){
                  setPrivada(!privada)
                  setPublica(!publica)
                }
                if (publica == privada){
                  setPrivada(false)
                  setPublica(true)      
                }
              }}
            />
            <RadioLabel>Pública</RadioLabel>
          </RadioContainer>
          <RadioContainer>
            <RadioInput
              type="radio"
              id="privada"
              name="institutionType"
              value="Privada"
              onChange={() => {
                if (privada !== publica){
                  setPrivada(!privada)
                  setPublica(!publica)
                }
                if (privada == publica){
                  setPrivada(true)
                  setPublica(false)      
                }
              }}
            />
            <RadioLabel>Privada</RadioLabel>
          </RadioContainer>
        </InputContainer50>
      </ExternalContainer>

      <ExternalContainer>
        <InputContainer50>
          <Text>Departamento:</Text>
          <Input
            placeholder="Entre com a departamento"
            value={dept}
            onChange={(dept) => {
              setDept(dept.target.value);
            }}
          />
        </InputContainer50>
        <InputContainer50>
          <Text>Outros:</Text>
          <Input
            placeholder="Outros"
            value={outro}
            onChange={(outro) => {
              setOutro(outro.target.value);
            }}
          />
        </InputContainer50>
      </ExternalContainer>

      <ExternalContainer>
        <InputContainer100>
          <Text>Nome:</Text>
          <Input
            placeholder="Digite seu nome"
            value={nome}
            onChange={(nome) => {
              setNome(nome.target.value);
            }}
          />
        </InputContainer100>
      </ExternalContainer>

      <ExternalContainer>
        <InputContainer100>
          <Text>Email:</Text>
          <Input
            placeholder="Digite seu email"
            value={email}
            onChange={(email) => {
              setEmail(email.target.value);
            }}
          />
        </InputContainer100>
      </ExternalContainer>

      <ExternalContainer>
        <InputContainer33>
          <Text>Telefone:</Text>
          <Input
            placeholder="Digite seu telefone"
            data-mask='telefone'
            value={telefone}
            onChange={(telefone) => {
              setTelefone(telefone.target.value);
            }}
          />
        </InputContainer33>

        <InputContainer33>
          <Text>Ramal:</Text>
          <Input
            placeholder="Digite seu ramal"
            value={ramal}
            onChange={(ramal) => {
              setRamal(ramal.target.value);
            }}
          />
        </InputContainer33>


        <InputContainer33>
          <Text>Função:</Text>
          <Input
            placeholder="Digite sua função"
            value={funcao}
            onChange={(funcao) => {
              setFuncao(funcao.target.value);
            }}
          />
        </InputContainer33>
        {/* <InputContainer33>
          <Text>Função:</Text>
          <InstSection>
            <InstContainer>
              <Combobox onChange={(e) => changingSelection(e)}>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </Combobox>
            </InstContainer>
          </InstSection>
        </InputContainer33> */}
      </ExternalContainer>

      <ExternalContainer>
        <InputContainer100>
          <Text>Usuário:</Text>
          <Input
            placeholder="Digite seu usuário"
            value={usuario}
            onChange={(usuario) => {
              setUsuario(usuario.target.value);
            }}
          />
        </InputContainer100>
      </ExternalContainer>

      <ExternalContainer>
        <InputContainer50>
          <Text>Senha:</Text>
          <Input
            type="password"
            placeholder="Entre com sua senha aqui"
            value={senha1}
            onChange={(senha1) => {
              setSenha1(senha1.target.value);
            }}
          />
        </InputContainer50>

        <InputContainer50>
          <Text>Confirme sua senha:</Text>
          <Input
            type="password"
            placeholder="Confirme sua senha aqui"
            value={senha2}
            onChange={(senha2) => {
              setSenha2(senha2.target.value);
            }}
          />
        </InputContainer50>
      </ExternalContainer>

      <Button onClick={handleClick}>Registrar</Button>
    </Container>
  );
}

export default Register;