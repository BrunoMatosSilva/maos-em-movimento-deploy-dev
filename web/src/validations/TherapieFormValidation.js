import * as yup from "yup";

export const therapieFormValidation = yup.object().shape({
  name: yup.string().min(2, 'Precisa ter pelo menos 2 caracteres.').required('Nome da terapia é obrigatório'),
  therapist: yup.string().min(2, 'Precisa ter pelo menos 2 caracteres.').required('Profissional que realiza é obrigatório'),
})