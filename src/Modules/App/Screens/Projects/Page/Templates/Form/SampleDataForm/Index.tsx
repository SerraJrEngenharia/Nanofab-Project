// React
import React from 'react';

// Native Components
import { Container, Section, Title, SampleInput } from './Style';

// @Types
import { SampleDataFormProps } from './Types';

const SampleDataForm: React.FC<SampleDataFormProps> = ({}) => {
  return (
    <Container>

      <Section>
        <Title>{"Identificação da(s) Amostra(s):"}</Title>
        <SampleInput type="text" name="sample_01"
                // value={formData.amostras[0]}
                // onChange={(e) =>
                //     setFormData(
                //         { orientador: e.target.value,
                //         outros: formData.outros
                //         })}
                // placeholder="(*) Informar o nome do orientador, quando o soliciante for aluno de graduação ou pós-graduação. (Ex: 'Prof. ****')"
         />
         <SampleInput type="text" name="sample_02" />
         <SampleInput type="text" name="sample_03" />
         <SampleInput type="text" name="sample_04" />
         <SampleInput type="text" name="sample_05" />
        
      </Section>
        
      <Section>
        <Title>{"Composição Química:"}</Title>

        <SampleInput type="text" name="composition_01"
                // value={formData.amostras[0]}
                // onChange={(e) =>
                //     setFormData(
                //         { orientador: e.target.value,
                //         outros: formData.outros
                //         })}
                // placeholder="(*) Informar o nome do orientador, quando o soliciante for aluno de graduação ou pós-graduação. (Ex: 'Prof. ****')"
         />
         <SampleInput type="text" name="composition_02" />
         <SampleInput type="text" name="composition_03" />
         <SampleInput type="text" name="composition_04" />
         <SampleInput type="text" name="composition_05" />
      
      </Section>
    </Container>
);
}

export default SampleDataForm;