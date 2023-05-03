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
    }>>;
}