import * as yup from "yup";

export const schemaNewFormValidation = yup.object().shape({
  name: yup.string().min(2, 'Precisa ter pelo menos 2 caracteres.').required('Nome é obrigatório'),
  date: yup.string().required('Data de Nascimento é obrigatório'),
  fone: yup.string().min(11, 'Formato de telefone invalido').required('Telefone é obrigatório'),
  addressCep: yup.string().required('Cep é obrigatório'),
  addressRoad: yup.string().min(2, 'Precisa ter pelo menos 2 caracteres').required('Rua é obrigatório'),
  addressNumber: yup.string().min(1, 'Precisa ter pelo menos 1 caracteres').required('Número é obrigatório'),
  addressDistrict: yup.string().min(2, 'Precisa ter pelo menos 2 caracteres').required('Bairro é obrigatório'),
  addressCity: yup.string().min(2, 'Precisa ter pelo menos 2 caracteres').required('Cidade é obrigatório'),
})