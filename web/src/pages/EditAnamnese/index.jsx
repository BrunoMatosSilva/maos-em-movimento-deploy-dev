import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header'
import Loader from '../../components/Loader';
import FormEditAnamnese from './components/FormEditAnamnese';
import { useEffect, useState } from 'react';
import { AnamneseServices } from '../../services/AnamneseService';


function EditAnamnese() {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [anamneses, setAnamneses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    async function loadAnamnese(){
      await AnamneseServices.getAnamneseById(id).then(response => {
        setAnamneses(response.data)
        setIsLoading(false);
      })
      .catch(() => {
        navigate("/", {replace: true})
        toast.error("Paciente não encontrado!")
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  loadAnamnese();
  },[id])

  return (
    <div className="h-screen flex flex-col items-center">
      <Loader isLoading={isLoading} />
      <Header title="Editar Anamnese" isBackNav />
      <div className="w-full flex justify-center" >
        {anamneses.map((anamnese) => (
          <FormEditAnamnese
          key={anamnese.id}
          isSmoker={anamnese.smoker}
          isPregnant={anamnese.pregnant}
          isHeadecha={anamnese.headecha}
          isInsomnia={anamnese.insomnia}
          isDiabete={anamnese.diabete}
          isHypertension={anamnese.hypertension}
          isStress={anamnese.stress}
          isCirculatory={anamnese.circulatory}
          isAllergy={anamnese.allergy}
          isAnaemia={anamnese.anaemia}
          isLegPain={anamnese.legPain}
          isBackPain={anamnese.backPain}
          isPhysical={anamnese.physical}
          isPhysicalName={anamnese.physicalName}
          isAnotherDisease={anamnese.anotherDisease}
          isSurgery={anamnese.surgery}
          isSurgeryName={anamnese.surgeryName}
          isMedicament={anamnese.medicament}
          isMedicamentName={anamnese.medicamentName}
          isReclamation={anamnese.reclamation}
          isPhrase={anamnese.phrase}
          isProject={anamnese.project}
         />
        ))}
      </div>
    </div>
  )
}

export default EditAnamnese