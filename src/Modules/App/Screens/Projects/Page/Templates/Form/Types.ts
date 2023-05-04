export interface FormProps {
   
}

export interface FormDataProps {
    formData: {
        orientador: string;
        outros: string;
    };
    setFormData: React.Dispatch<React.SetStateAction<{
        orientador: string;
        outros: string;
        /*
        analise_qualitativa: boolean,
        analise_quantitativa: boolean,
        quantidade_amostras: number,
        tecnicas_condicoes: string,
        
        // SampleData
        
        amostras: [
            {
                identificacao_amostra: string,
                composicao_quimica: string,
            }, 
            {
                identificacao_amostra: string,
                composicao_quimica: "2",
            }, 
            {
                identificacao_amostra: "3",
                composicao_quimica: "3",
            }
        ],

        // SampleConditionsData
        
        retornar_amostra: boolean,
        nivel_prioridade: "prioridade_teste"
        inflamavel: boolean,
        toxico: boolean,
        hidroscopico: boolean,
        radioativo: boolean,
        corrosivo: boolean,
        // outros: ""
      */

    }>>;
}