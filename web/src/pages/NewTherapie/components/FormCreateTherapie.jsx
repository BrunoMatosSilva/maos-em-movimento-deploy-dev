import { useState } from "react"
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Loader from '../../../components/Loader';
import { toast } from 'react-hot-toast';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { therapieFormValidation } from "../../../validations/TherapieFormValidation";
import { TherapieServices } from "../../../services/TherapieService";

function FormCreateTherapie() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm({
    resolver: yupResolver(therapieFormValidation)
  })

  async function onSubmit(formData){
    setIsLoading(true);

    try {
      await TherapieServices.sendTherapie(formData);
      setIsLoading(false);
      toast.success("Terapia cadastrada com sucesso!")
      reset();

    }catch(error){
      setIsLoading(false)
      toast.error("Erro ao cadastra Terapia")
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
              Cadastrar
            </Button>
          </div>
      </form>
    </>
  )
}

export default FormCreateTherapie