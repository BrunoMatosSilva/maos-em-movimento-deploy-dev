import * as yup from "yup";

export const schemaAnamneseFormValidation = yup.object().shape({
  smoker: yup.string().required('É obrigatório marca uma opção'),
  insomnia: yup.string().required('É obrigatório marca uma opção'),
  stress: yup.string().required('É obrigatório marca uma opção'),
  headecha: yup.string().required('É obrigatório marca uma opção'),
  pregnant: yup.string().required('É obrigatório marca uma opção'),
  diabete: yup.string().required('É obrigatório marca uma opção'),
  hypertension: yup.string().required('É obrigatório marca uma opção'),
  circulatory: yup.string().required('É obrigatório marca uma opção'),
  allergy: yup.string().required('É obrigatório marca uma opção'),
  anaemia: yup.string().required('É obrigatório marca uma opção'),
  legPain: yup.string().required('É obrigatório marca uma opção'),
  backPain: yup.string().required('É obrigatório marca uma opção'),
  physical: yup.string().required('É obrigatório marca uma opção'),
  surgery: yup.string().required('É obrigatório marca uma opção'),
  medicament: yup.string().required('É obrigatório marca uma opção'),
})