// React
import React, {useRef} from 'react';

// Native Components
import { Container, DivComboBox, Section, Title, SubTitle, SecurityContainer, RadioInput, RadioLabel, RadioContainer, Priority, Option, OptionsContainer, Description } from './Style';

// @Types
import { SampleConditionsFormProps } from './Types';

const SampleConditionsForm: React.FC<SampleConditionsFormProps> = ({ formData, setFormData }) => {

// const handleRetornarAmostraAnalisada = (bool : true) => 
const priorityOptions = ["Urgente", "Alta", "Média", "Baixa"];

const selectorRef = useRef<HTMLSelectElement>(null)
const getSelectorValue = () => {
   return selectorRef.current!.value 
  }

  return (
    <Container>
        <DivComboBox>
            <Section>
                <Title>{"Retornar a(s) amostra(s) analisada(s)?"}</Title>
                <RadioContainer>
                    <RadioInput type="radio"
                        id="retorna_sim"
                        name="analysisType"
                        value="retorna_sim"
                        color="red"
                        checked={
                            formData.retornar_amostra != undefined
                            ? formData.retornar_amostra
                            : false
                        }
                            onChange={() =>
                                setFormData({
                                ...formData,
                                retornar_amostra: true,
                                })
                            }
                    
                    />
                    <RadioLabel htmlFor="retorna_sim">Sim</RadioLabel>
                </RadioContainer>

                <RadioContainer>
                    <RadioInput type="radio" id="retorna_nao" name="analysisType" value="retorna_nao"
                        color="red"
                        checked={
                            formData.retornar_amostra != undefined
                            ? !formData.retornar_amostra
                            : false
                        }
                        onChange={() =>
                            setFormData({
                            ...formData,
                            retornar_amostra: false,
                            })
              }
                    />
                    <RadioLabel htmlFor="retorna_nao">Não</RadioLabel>
                </RadioContainer>
            </Section>

            <Section>
                <Title>Nível de prioridade desejada:</Title>
                <Priority
                    id="priority_selector" name="priority_selector" ref={selectorRef}
                    onChange={() => {
                    setFormData({
                        ...formData!,
                        nivel_prioridade: getSelectorValue(),
                    });
                    }}
                >
            <Option value={" "} selected disabled>
              {"Selecione uma prioridade"}
            </Option>
            {priorityOptions.map((eachOption) => (
              <Option value={eachOption}>{eachOption}</Option>
            ))}
          </Priority>
            </Section>
        </DivComboBox>

        

        <SecurityContainer>
            <Title>Informe as condições de segurança quanto ao manuseio do material.</Title>
            <SubTitle>Caso a quantidade de amostras passe o número proposto, avisar antes de envia-las</SubTitle>

            <OptionsContainer>

                <RadioContainer>
                    <RadioInput type="radio" id="inflamavel" name="securityConditions" value="inflamavel" onClick={() => setFormData({
                            ...formData,
                            condicao_seguranca: "inflamavel",
                            })} />
                    <RadioLabel htmlFor="inflamavel">Inflamável</RadioLabel>
                </RadioContainer>

                <RadioContainer>
                    <RadioInput type="radio" id="toxico" name="securityConditions" value="toxico" onClick={() => setFormData({
                            ...formData,
                            condicao_seguranca: "toxico",
                            })} />
                    <RadioLabel htmlFor="toxico">Tóxico</RadioLabel>
                </RadioContainer>

                <RadioContainer>
                    <RadioInput type="radio" id="hidroscopico" name="securityConditions" value="hidroscopico" onClick={() => setFormData({
                            ...formData,
                            condicao_seguranca: "hidroscopico",
                            })} />
                    <RadioLabel htmlFor="hidroscopico">Hidroscópico</RadioLabel>
                </RadioContainer>

                <RadioContainer>
                    <RadioInput type="radio" id="radioativo" name="securityConditions" value="radioativo" onClick={() => setFormData({
                            ...formData,
                            condicao_seguranca: "radioativo",
                            })} />
                    <RadioLabel htmlFor="radioativo">Radioativo</RadioLabel>
                </RadioContainer>

                <RadioContainer>
                    <RadioInput type="radio" id="corrosivo" name="securityConditions" value="corrosivo" onClick={() => setFormData({
                            ...formData,
                            condicao_seguranca: "corrosivo",
                            })} />
                    <RadioLabel htmlFor="corrosivo">Corrosivo</RadioLabel>
                </RadioContainer>

                <RadioContainer>
                    <RadioInput type="radio" id="corrosivo" name="securityConditions" value="corrosivo" onClick={() => setFormData({
                            ...formData,
                            condicao_seguranca: "outros",
                            })} />
                    <RadioLabel htmlFor="corrosivo">Outros</RadioLabel>
                </RadioContainer>

            </OptionsContainer>

            <Description>(*) Caso não saiba as condições de segurança quanto ao manuseio, não é necessário selecionar os campos.</Description>
        </SecurityContainer>
    </Container>
);
}

export default SampleConditionsForm;