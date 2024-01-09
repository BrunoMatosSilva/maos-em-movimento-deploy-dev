import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Input from '../../../components/Input';
import { RadioInput } from '../../../components/RadioInput';
import { useForm } from 'react-hook-form';
import { Textarea } from '../../../components/Textarea';
import Button from '../../../components/Button';
import Loader from '../../../components/Loader';
import { yupResolver } from "@hookform/resolvers/yup";
import {schemaAnamneseFormValidation} from "../../../validations/AnamneseFormValidation";
import { AnamneseServices } from '../../../services/AnamneseService';

function FormCreateAnamnese() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm({
   resolver: yupResolver(schemaAnamneseFormValidation),
  })

  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(formData) {
    setIsLoading(true);

    try{
      await AnamneseServices.sendAnamnese(id, formData);
      setIsLoading(false);
      toast.success("Ficha cadastrada com sucesso!");
      reset();
    }
    catch(error){
      setIsLoading(false)
      toast.error("Erro ao cadastra ficha!")
      
    }
  }

  return (
    <>
    <Loader isLoading={isLoading} />
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-6 px-2 my-14 w-full md:max-w-[800px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex-1 flex-col items-center gap-2">
            <div className="flex items-center gap-2">
            <p className='text-sm md:text-base text-blue-400 font-semibold'>Fumante: </p>
            <RadioInput 
            name="smoker" 
            id="smoker-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="smoker" 
            id="smoker-não" 
            value="Não" 
            register={register} 
            />
            </div>
            <div className="w-full text-red-400 text-xs">
              {errors.smoker?.message}
            </div>
            
        </div>

        <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Insônia: </p>
            <RadioInput 
            name="insomnia" 
            id="insomnia-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="insomnia" 
            id="insomnia-não" 
            value="Não" 
            register={register} 
            />
            </div>
            <div className="w-full text-red-400 text-xs">
            {errors.insomnia?.message}
            </div>
          </div>
        
          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Stress: </p>
            <RadioInput 
            name="stress" 
            id="stress-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="stress" 
            id="stress-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.stress?.message}
            </div>
          </div>

          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Anemia: </p>
            <RadioInput 
            name="anaemia" 
            id="anaemia-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="anaemia" 
            id="anaemia-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.anaemia?.message}
          </div>
          </div>

          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Gestante: </p>
            <RadioInput 
            name="pregnant" 
            id="pregnant-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="pregnant" 
            id="pregnant-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.pregnant?.message}
          </div>
          </div>

          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Diabético(a): </p>
            <RadioInput 
            name="diabete" 
            id="diabete-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="diabete" 
            id="diabete-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.diabete?.message}
          </div>
          </div>

          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-1">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Doença Circular: </p>
            <RadioInput 
            name="circulatory" 
            id="circulatory-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="circulatory" 
            id="circulatory-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.circulatory?.message}
          </div>
          </div>

          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Dor na Perna: </p>
            <RadioInput 
            name="legPain" 
            id="legPain-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="legPain" 
            id="legPain-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.legPain?.message}
          </div>
          </div>

          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Enxaqueca: </p>
            <RadioInput 
            name="headecha" 
            id="headecha-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="headecha" 
            id="headecha-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.headecha?.message}
          </div>
          </div>

          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Hipertenso(a): </p>
            <RadioInput 
            name="hypertension" 
            id="hypertension-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="hypertension" 
            id="hypertension-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.hypertension?.message}
          </div>
          </div>

          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Alergia: </p>
            <RadioInput 
            name="allergy" 
            id="allergy-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="allergy" 
            id="allergy-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.allergy?.message}
          </div>
          </div>

          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
          <p className='text-sm md:text-base text-blue-400 font-semibold'>Dor na Coluna: </p>
            <RadioInput 
            name="backPain" 
            id="backPain-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="backPain" 
            id="backPain-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.backPain?.message}
          </div>
          </div>
      </div>


          <p className='text-sm mt-4 md:text-base text-blue-600 font-bold'>Pratica atividade física?</p>
          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <RadioInput 
            name="physical" 
            id="physical-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="physical" 
            id="physical-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.physical?.message}
          </div>
          </div>

          <div className="w-full">
          <Input
          id="physicalName"
          name="physicalName"
          label="Se sim, Qual?"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Informe o nome"
          />
          </div>

          <div className="w-full">
          <Input
          id="anotherDisease"
          name="anotherDisease"
          label="Alguma outra doença?"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Informe o nome"
          />
          </div>

          <p className='text-sm mt-4 md:text-base text-blue-600 font-bold'>Fez alguma cirurgia?</p>
          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <RadioInput 
            name="surgery" 
            id="surgery-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="surgery" 
            id="surgery-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.surgery?.message}
          </div>
          </div>

          <div className="w-full">
          <Input
          id="surgeryName"
          name="surgeryName"
          label="Se sim, Qual?"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Informe o nome"
          />
          </div>

          <p className='text-sm mt-4 md:text-base text-blue-600 font-bold'>Faz uso de algum medicamento?</p>
          <div className="flex-1 flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <RadioInput 
            name="medicament" 
            id="medicament-sim" 
            value="Sim" 
            register={register} 
            />

            <RadioInput 
            name="medicament" 
            id="medicament-não" 
            value="Não" 
            register={register} 
            />
          </div>
          <div className="w-full text-red-400 text-xs">
            {errors.medicament?.message}
          </div>
          </div>

          <div className="w-full">
          <Input
          id="medicamentName"
          name="medicamentName"
          label="Se sim, Qual?"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Informe o nome"
          />
          </div>

          <div className="w-full">
          <Textarea
          id="reclamation"
          name="reclamation"
          label="Qual sua queixa principal?"
          required
          register={register}
          errors={errors}
          placeholder="Escreva a queixa em detalhes"
          />
          </div>

          <div className="w-full">
          <Textarea
          id="phrase"
          name="phrase"
          label="Qual sua frase mais usada?"
          required
          register={register}
          errors={errors}
          placeholder="Escreva a frase"
          />
          </div>

          <div className="w-full">
          <Input
          id="project"
          name="project"
          label="Como conheceu o projeto?"
          required
          type="text"
          register={register}
          errors={errors}
          placeholder="Instagram, Indicação..."
          />
          </div>

        <div>
            <Button
            type="submit"
            >
              Cadastrar
            </Button>
        </div>
    </form>
    </>
  )
}

export default FormCreateAnamnese