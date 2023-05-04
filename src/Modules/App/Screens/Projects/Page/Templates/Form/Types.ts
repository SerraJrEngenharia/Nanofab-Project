export interface FormProps {
    
}

// export type PriorityTypes =  "urgente" | "alta" | "média" | "baixa";


export interface SampleProps {
    identificacao_amostra: string,
    composicao_quimica: string,
  }



export interface FormDataProps {
    formData: {
        orientador: string;
        outros: string;
        analise_qualitativa: boolean,
        analise_quantitativa: boolean,
        quantidade_amostras: number,
        tecnicas_condicoes: string,
        detectores: string,
        projeto_descricao_amostras: string,
        
        // SampleData
        
        amostras: Array<SampleProps>,
        
        // SampleConditionsData
        
        retornar_amostra: boolean,
        nivel_prioridade: string,
        inflamavel: boolean,
        toxico: boolean,
        hidroscopico: boolean,
        radioativo: boolean,
        corrosivo: boolean,
        /*
        // outros: ""
        */
    };
    setFormData: React.Dispatch<React.SetStateAction<{
        orientador: string;
        outros: string;
        analise_qualitativa: boolean,
        analise_quantitativa: boolean,
        quantidade_amostras: number,
        tecnicas_condicoes: string,
        detectores: string,
        projeto_descricao_amostras: string,
        
        // SampleData
        
        amostras: Array<SampleProps>,
        
        // SampleConditionsData
        
        retornar_amostra: boolean,
        nivel_prioridade: string,
        inflamavel: boolean,
        toxico: boolean,
        hidroscopico: boolean,
        radioativo: boolean,
        corrosivo: boolean,
        /*
        // outros: ""
        */
    }>>;
}