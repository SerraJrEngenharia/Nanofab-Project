export interface FormProps {
    
}

// export type PriorityTypes =  "urgente" | "alta" | "média" | "baixa";


export interface SampleProps {
    identificacao_amostra: string,
    composicao_quimica: string,
  }



export interface FormDataProps {
    formData: {
        analise_qualitativa: boolean,
        analise_quantitativa: boolean,
        quantidade_amostras: number,
        tecnicas_condicoes: string,
        orientador: string;
        
        // TIPOS
        microscopia_eletronica: boolean,
        amostras_met: boolean,
        nanomat: boolean,
        microfab: boolean,
        grafeno_cvd: boolean,
        microsoldadora: boolean,
        microdurometro: boolean,
        estereoscopio: boolean,
        //
        
        outros: string;
        detectores: string,
        projeto_descricao_amostras: string,
        
        // SampleData
        
        amostras: Array<SampleProps>,
        
        // SampleConditionsData
        
        retornar_amostra?: boolean,
        nivel_prioridade: string,
        condicao_seguranca: string,
    };
    setFormData: React.Dispatch<React.SetStateAction<{
        analise_qualitativa: boolean,
        analise_quantitativa: boolean,
        quantidade_amostras: number,
        tecnicas_condicoes: string,
        orientador: string;
        
        // TIPOS
        microscopia_eletronica: boolean,
        amostras_met: boolean,
        nanomat: boolean,
        microfab: boolean,
        grafeno_cvd: boolean,
        microsoldadora: boolean,
        microdurometro: boolean,
        estereoscopio: boolean,
        //
        
        outros: string;
        detectores: string,
        projeto_descricao_amostras: string,
        
        // SampleData
        
        amostras: Array<SampleProps>,
        
        // SampleConditionsData
        
        retornar_amostra?: boolean,
        nivel_prioridade: string,
        condicao_seguranca: string,
    }>>;
}