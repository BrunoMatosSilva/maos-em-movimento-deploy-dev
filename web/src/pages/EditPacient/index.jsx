import { useEffect, useState } from 'react';
import Header from '../../components/Header'
import Loader from '../../components/Loader';
import EditPacientForm from './components/EditPacientForm';
import { useNavigate, useParams } from 'react-router-dom';
import { PacientServices } from '../../services/PacientsService';

function EditPacient() {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pacients, setPacients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPacient(){
     await PacientServices.getPacientById(id).then(response => {
        setPacients(response.data)
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

  loadPacient();
  },[id])

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Loader isLoading={isLoading} />
      <Header title="Editar Paciente" isBackNav/>
      <div className="w-full flex justify-center" >
      {pacients.map((pacient) => (
        <EditPacientForm
        key={pacient.id}
        isName={pacient.name}
        isDateOfBirth={pacient.dateOfBirth}
        isFone={pacient.fone}
        isAddressCep={pacient.addressCep}
        isAddressRoad={pacient.addressRoad}
        isAddressNumber={pacient.addressNumber}
        isAddressComplement={pacient.addressComplement}
        isAddressDistrict={pacient.addressDistrict}
        isAddressCity={pacient.addressCity}
        />
      ))}
      </div>
    </div>
  )
}

export default EditPacient