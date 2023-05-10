// React
import React from 'react';

// Native Components
import {
    Container,
    InputOrientador,
    InputOrientadorContainer,
    // InputOutrosContainer,
    InputContainer,
    // InputDetectoresContainer,
    // InputProjetoCientificoContainer,
    Title,
    ComponentTypes,
    CheckBoxTypes,
    LabelTypes,
    DivRow,
    InputOutros,
    InputDetectores,
    InputProjetoCientifico,
  } from "./Style";

// @Types
import { TypeProjectProps } from './Types';

const TypeProject: React.FC<TypeProjectProps> = ({ formData, setFormData }) => {
    
    // const setFormData2 = (teste) => {
    //     let temporario = teste
    //     setFormData({...formData,
    //     temporario: !formData.teste})
    // }
        

    const handleCheck = (teste: string) => {
        console.log(teste)
        // switch (teste) {
        //     // case 'microscopia_eletronica':
        //     //     setFormData(teste)
        //     //     console.log('teste_microscop');
        //     //         break;
        //     case 'amostras_met':
        //         setFormData(
        //             {   
        //                 ...formData,
        //                 amostras_met: !formData.amostras_met,
        //             })
        //             break;
        //     case 'grafeno_cvd':
        //         setFormData(
        //             {   
        //                 ...formData,
        //                 grafeno_cvd: !formData.grafeno_cvd,
        //             })
        //             break;
        //     case 'microsoldadora':
        //         setFormData(
        //             {   
        //                 ...formData,
        //                 microsoldadora: !formData.microsoldadora,
        //             })
        //             break;
        //     case 'estereoscopio':
        //         setFormData(
        //             {   
        //                 ...formData,
        //                 estereoscopio: !formData.estereoscopio,
        //             })
        //             break;
        //     case 'nanomat':
        //         setFormData(
        //             {   
        //                 ...formData,
        //                 nanomat: !formData.nanomat,
        //             })
        //             break;
        //     default:
        //       console.log('Caso fora do switch-case');
        //   }
    }

  return (
    <Container>
        <InputOrientadorContainer>
            <Title>Orientador:</Title>
            <InputOrientador
                type="text"
                name="orientador"
                value={formData.orientador}
                onChange={(e) =>
                    setFormData(
                        {   
                            ...formData,
                            orientador: e.target.value,
                        })}
                placeholder="(*) Informar o nome do orientador, quando o soliciante for aluno de graduação ou pós-graduação. (Ex: 'Prof. ****')"
        ></InputOrientador>
        </InputOrientadorContainer>

        <Title>Tipos:</Title>
        {/* <ComponentTypes> */}

            <DivRow>
                <CheckBoxTypes type="checkbox" value="1" checked={formData.microscopia_eletronica} onChange={() => handleCheck('microscopia_eletronica')}></CheckBoxTypes>
                <LabelTypes>Microscopia Eletrônica de Varredura</LabelTypes> 
            </DivRow>

            <DivRow>
                <CheckBoxTypes type="checkbox" value="amostras_met" checked={formData.amostras_met} onChange={() => handleCheck('amostras_met')}></CheckBoxTypes>
                <LabelTypes>Preparação de Amostras para MET</LabelTypes> 
            </DivRow>

            {/* <DivRow>
                <CheckBoxTypes type="checkbox" value="nanomat" checked={formData.nanomat} onChange={() => handleCheck('nanomat')}></CheckBoxTypes>
                <LabelTypes>Sala Limpa: microfabricação</LabelTypes> 
            </DivRow>

            <DivRow>
                <CheckBoxTypes type="checkbox" value="microfab" checked={formData.microfab} onChange={() => handleCheck('microfab')}></CheckBoxTypes>
                <LabelTypes>Sala Limpa: preparação de Nanomateriais</LabelTypes> 
            </DivRow>

            <DivRow>
                <CheckBoxTypes type="checkbox" value="grafeno_cvd" checked={formData.grafeno_cvd} onChange={() => handleCheck('microsoldadora')}></CheckBoxTypes>
                <LabelTypes>Microsoldadora</LabelTypes> 
            </DivRow>

            <DivRow>
                <CheckBoxTypes type="checkbox" value="microdurometro" checked={formData.microdurometro} onChange={() => handleCheck('microdurometro')}></CheckBoxTypes>
                <LabelTypes>Microdurômetro</LabelTypes> 
            </DivRow>

            <DivRow>
                <CheckBoxTypes type="checkbox" value="estereoscopio" checked={formData.estereoscopio} onChange={() => handleCheck('estereoscopio')}></CheckBoxTypes>
                <LabelTypes>Estereoscópio</LabelTypes> 
            </DivRow> */}
        {/* </ComponentTypes> */}

        <InputContainer>
            <Title>Outros:</Title>
            <InputOutros
                type="text"
                name="outros"
                value={formData.outros}
                onChange={(e) =>
                    setFormData(
                        { 
                            ...formData,
                            outros: e.target.value
                        })}
                placeholder="Informar nome."
        ></InputOutros>
        </InputContainer>

        <InputContainer>
            <Title>Detectores:</Title>
            <InputDetectores
                type="text"
                name="outros"
                value={formData.detectores}
                onChange={(e) =>
                    setFormData(
                        { 
                            ...formData,
                            detectores: e.target.value
                        })} 
                placeholder="[TEMP] Informar detectores.">   
            </InputDetectores>
        </InputContainer>

        <InputContainer>
            <Title>Projeto Científico e Descrição das Amostras:</Title>
            <InputProjetoCientifico
                type="text"
                name="outros"
                value={formData.projeto_descricao_amostras}
                onChange={(e) =>
                    setFormData(
                        { 
                            ...formData,
                            projeto_descricao_amostras: e.target.value
                        })} 
                 placeholder="[TEMP] Informar Projeto Científico e Descrição das Amostras:.">   
            </InputProjetoCientifico>
        </InputContainer>

    </Container>
);
}

export default TypeProject;
