import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Loader from '../../components/Loader';
import { toast } from 'react-hot-toast';
import { TherapieServices } from '../../services/TherapieService';
import FormEditTherapie from './components/FormEditTherapie';
import { useNavigate, useParams } from 'react-router-dom';

function EditTherapie() {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [therapies, setTherapies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadTherapie() {
      TherapieServices.getTherapieById(id).then((response) => {
        setTherapies(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        navigate("/therapie", {replace: true})
        toast.error("Therapie não encontrada!")
      })
      .finally(() => {
        setIsLoading(false);
      })
    }

    loadTherapie();
  },[id])

  return (
    <div className="h-screen flex flex-col items-center">
      <Loader isLoading={isLoading} />
      <Header title="Editar Terapias" isBackNav />
      <div className="w-full flex justify-center" >
      {therapies.map((therapie) => (
        <FormEditTherapie
        key={therapie.id}
        isName={therapie.name}
        isTherapist={therapie.therapist}
        />
      ))}
      </div>
    </div>
  )
}

export default EditTherapie