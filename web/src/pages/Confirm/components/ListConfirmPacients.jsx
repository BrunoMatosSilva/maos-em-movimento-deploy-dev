import * as Switch from '@radix-ui/react-switch';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { TherapieServices } from '../../../services/TherapieService';
import { ClientService } from '../../../services/ClientService';
import Loader from '../../../components/Loader';
import EmptyList from '../../../components/EmptyList';

function ListConfirmPacients({listTherapies}) {
  const [isLoading, setIsLoading] = useState(true);
  const [,setIsConfirmTherapie] = useState(listTherapies);
  const [therapieService, setTherapieService] = useState([]);
  const [targetTherapie, setTargetTherapie] = useState("");
  const [filteredTherapies, setFilteredTherapies] = useState([]);

  const qtyOfTherapies = filteredTherapies.length;

  const data = dayjs().format('DD/MM/YYYY');

  useEffect(() => {
    setIsLoading(true);

    TherapieServices.getTherapie().then((response) => {
      setTherapieService(response.data)
      setIsLoading(false);
    }).catch((error) => {
      console.log("erro", error);
      setIsLoading(false);
    });
  },[])

  function handleChangeTherapie(event) {
   setTargetTherapie(event.target.value);
  }

  async function handleFilter () {
    setIsLoading(true);

    try {
      const response = await ClientService.getFilterTherapieName(targetTherapie);
      setFilteredTherapies(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
}

  useEffect(() => {
    if (targetTherapie !== "") {
      handleFilter();
    } else {
      setFilteredTherapies(listTherapies);
    }
  }, [targetTherapie, listTherapies]);
    
  async function handleChangeConfirm(therapieId, checked) {
    setIsLoading(true);
    setIsConfirmTherapie((prevListTherapies) =>
      prevListTherapies.map((therapie) =>
        therapie.id === therapieId ? { ...therapie, isConfirm: checked } : therapie
      )
    );

    try {
      const statusIsConfirm = { isConfirm: checked }
      await ClientService.updateTherapieIsConfirm(therapieId, statusIsConfirm);
      setIsLoading(false);
    } catch (error) {
      console.log("Erro ao atualizar o estado da terapia:", error);
    }
  }
  
  return (
    <>
    <Loader isLoading={isLoading} />
    <div className="flex justify-center w-full">
        <div className="flex justify-between items-center w-full max-w-[800px] h-[50px] mt-8 mx-2">
          <div className="flex items-center gap-2">
            <p className="text-base font-bold text-blue-400 mt-2">Terapias:</p>
            <select 
            className='text-sm md:text-base rounded bg-gray-300 px-3 py-2 appearance'
            onChange={handleChangeTherapie}
            >
              <option value="">Terapias -</option>
              {therapieService.map((terapia) => (
                <option key={terapia.id} value={terapia.name}>{terapia.name}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
          <strong>Dia de Hoje: </strong>
          <span>{data}</span>
          </div>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center w-full">
        {qtyOfTherapies >= 1 && 
        <div className="flex flex-col w-full max-w-[800px] border-b-gray-300 px-2">
        <div className="flex justify-between items-center w-full mt-14 border-b border-gray-200">
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Paciente</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Terapia</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Confirmar Terapia</h2>
        </div>
      </div>
      }
      {qtyOfTherapies < 1 && <EmptyList title="terapia" />}
      {filteredTherapies.map((therapie) => (
      <div key={therapie.id} className="w-full max-w-[800px] mt-[20px] flex justify-between items-center px-2">
        <p className="font-semibold text-sm max-w-[100px] md:text-base md:min-w-[300px] whitespace-nowrap overflow-hidden">
          {therapie.Service.patient.name}
        </p>
      
        <span className="text-sm md:text-base"> {therapie.name}</span>
        <div className="flex-col flex items-center md:flex-row">
        <Switch.Root
        value={therapie.isConfirm}
        defaultChecked={therapie.isConfirm}
        onCheckedChange={(checked) => handleChangeConfirm(therapie.id, checked)}
          className="cursor-pointer w-[45px] h-[23px] bg-gray-400 rounded-full relative data-[state=checked]:bg-green-600 outline-none"
        >
        <Switch.Thumb
        className="block w-[19px] h-[19px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[24px]" 
        />
      </Switch.Root>
        </div>
    </div>
      ))}
    </div>
    </>
  )
}

export default ListConfirmPacients