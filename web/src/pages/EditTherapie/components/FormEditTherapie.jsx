import { useState } from "react"
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from "@hookform/resolvers/yup";

import { TherapieServices } from "../../../services/TherapieService";
import { useParams } from "react-router-dom";
import { therapieFormValidation } from "../../../validations/TherapieFormValidation";
import Loader from "../../../components/Loader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

function FormEditTherapie({
  isName,
  isTherapist
}) {
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    resolver: yupResolver(therapieFormValidation),
    defaultValues: {
      name: isName,
      therapist: isTherapist
    }
  })

 async function onSubmit(formData){
    setIsLoading(true);

    try {
      await TherapieServices.updateTherapieById(id, formData);
      setIsLoading(false);
      toast.success("Terapia editada com sucesso!")

    }catch(error){
      setIsLoading(false)
      toast.error("Erro ao editar Terapia")
    }
  }

  return (
    <>
    <Loader isLoading={isLoading} />
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col px-2 gap-8 mt-14 w-full max-w-[800px]'>
    <div className="w-full text-red-400 text-xs">
            <Input
            id="name"
            name="name"
            label="Therapia:"
            type="text"
            register={register}
            errors={errors}
            placeholder="Nome da Terapia"
            />
            {errors.name?.message}
      </div>
        

        <div className='flex justify-center flex-col gap-4 md:flex-row'>
          <div className="w-full text-red-400 text-xs">
              <Input
              id="therapist"
              name="therapist"
              label="Profissional:"
              type="text"
              register={register}
              errors={errors}
              placeholder="Profissional que Realiza"
              />
              {errors.therapist?.message}
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

export default FormEditTherapie