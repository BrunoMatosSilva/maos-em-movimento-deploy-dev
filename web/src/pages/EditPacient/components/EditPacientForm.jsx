import "react-datepicker/dist/react-datepicker.css";
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Loader from '../../../components/Loader';
import { useState } from 'react'
import axios from "axios";
import { toast } from 'react-hot-toast';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';

import { PacientServices } from "../../../services/PacientsService";
import { schemaNewFormValidation } from "../../../validations/NewFormValidation";
import { useParams } from "react-router-dom";

function EditPacientForm({
  isName,
  isDateOfBirth,
  isFone,
  isAddressCep,
  isAddressRoad,
  isAddressNumber,
  isAddressComplement,
  isAddressDistrict,
  isAddressCity,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors
    }
  } = useForm({
    resolver: yupResolver(schemaNewFormValidation),
    defaultValues: {
      name: isName,
      date: isDateOfBirth.substring(0, 10),
      fone: isFone,
      addressCep: isAddressCep,
      addressRoad: isAddressRoad,
      addressNumber: isAddressNumber,
      addressComplement: isAddressComplement,
      addressDistrict: isAddressDistrict,
      addressCity: isAddressCity
    }
  })

  const fetchAddressData = async (cep) => {
    try {
      setIsLoading(true);

      const response =  await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { data } = response;

      setValue('addressRoad', data.logradouro || '')
      setValue('addressDistrict', data.bairro|| '');
      setValue('addressCity', data.localidade || '');

      setIsLoading(false)

    }catch(err){
      console.log('Erro ao buscar dados do CEP: ', err);
      setIsLoading(false)
    }
  }

  const handleCepChange = (event) => {
    const cep = event.target.value.replace(/\D/g, '');

    if (cep.length === 8) {
      fetchAddressData(cep);
    }
  };

  async function onSubmit(formData) {
    setIsLoading(true);
    const formattedData = {
      ...formData,
      dateOfBirth: new Date(formData.date).toISOString(),
    };
    
    try{
      await PacientServices.updatePacientById(id, formattedData);
      setIsLoading(false);
      toast.success("Paciente atualizado com sucesso!")
    }
    catch(error){
      setIsLoading(false)
      toast.error("Erro ao atualizar paciente!")
      
    }
  }

  return (
    <>
    <Loader isLoading={isLoading} />
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-6 px-2 mt-14 w-full md:max-w-[800px]"
    >
          <div className="w-full text-red-400 text-xs">
          <Input
          id="name"
          name="name"
          label="Nome:"
          type="text"
          register={register}
          errors={errors}
          placeholder="Nome Completo"
          />
          {errors.name?.message}
          </div>

          <div className="w-full flex justify-around gap-2">
          <div className="w-full flex flex-col text-red-400 text-xs">
            <Input
            id="date"
            name="date"
            label="Data de Nascimento:"
            type="date"
            register={register}
            errors={errors}
            placeholder="99/99/9999"
            />
            {errors.date?.message}
          </div>

          <div className="w-full flex flex-col text-red-400 text-xs">
          <Input
          id="fone"
          name="fone"
          label="Telefone:"
          type="fone"
          register={register}
          errors={errors}
          placeholder="11999999999*"
          />
          {errors.fone?.message}
          </div>

          <div className="w-full flex flex-col text-red-400 text-xs">
          <Input
          id="addressCep"
          name="addressCep"
          label="CEP:"
          type="text"
          register={register}
          errors={errors}
          placeholder="00000000"
          maxLength={9}
          onBlur={handleCepChange}
          />
          {errors.addressCep?.message}
          </div>
          </div>

          <div className="flex w-full gap-2">
            <div className="flex-1 flex-col text-red-400 text-xs">
            <Input
            id="addressRoad"
            name="addressRoad"
            label="Rua:"
            required
            type="text"
            register={register}
            errors={errors}
            placeholder="Rua*"
            />
            {errors.addressRoad?.message}
          </div>

          <div className="flex flex-col text-red-400 text-xs">
          <Input
          id="addressNumber"
          name="addressNumber"
          label="Número:"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Nº*"
          />
          {errors.addressNumber?.message}
          </div>
          </div>

          <Input
          id="addressComplement"
          name="addressComplement"
          label="Complemento:"
          type="text"
          register={register}
          errors={errors}
          placeholder="Complemento"
          />

        <div className="flex w-full gap-2">
        <div className="flex-1 flex flex-col text-red-400 text-xs">
            <Input
            id="addressDistrict"
            name="addressDistrict"
            label="Bairro:"
            required
            type="text"
            register={register}
            errors={errors}
            placeholder="Bairro*"
            />
            {errors.addressDistrict?.message}
          </div>

          <div className="flex-1 flex flex-col text-red-400 text-xs">
            <Input
            id="addressCity"
            name="addressCity"
            label="Cidade:"
            required
            type="text"
            register={register}
            errors={errors}
            placeholder="Cidade*"
            />
            {errors.addressCity?.message}
          </div>
          </div>

          <div className="flex w-full">
            <Button type="submit">
              Alterar
            </Button>
          </div>
      </form>
      </>
  )
}

export default EditPacientForm;