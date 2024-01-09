import { useState, useEffect } from "react"
import ModalTerapie from './ModalTerapie'
import EmptyTherapie from '../../../components/EmptyTherapie';
import { XCircle } from "@phosphor-icons/react";
import { ClientService } from "../../../services/ClientService";
import dayjs from "dayjs";
import Loader from "../../../components/Loader";

function FormEditService({services, updateServiceWithTherapies}) {
  const [isLoading, setIsLoading] = useState()
  const [isTherapieModalVisible, setIsTherapieModalVisible] = useState(false);

  const qtyTherapies = services.length;

  function handleCloseModalTherapie() {
    setIsTherapieModalVisible(false);
  }

  function handleOpenModalTherapie(event) {
    event.preventDefault();
    setIsTherapieModalVisible(true);
  }

  async function handleRemoveTherapie(therapieId){
    setIsLoading(true);

   try{
    await ClientService.deletedTherapieService(therapieId);
    setIsLoading(false);

    const updatedTherapies = services.TherapieServices.filter(
        (therapie) => therapie.id !== therapieId
      );

      updateServiceWithTherapies(services.id, updatedTherapies);

   }catch(error){
    console.log(error);
   }
  }
  
  return (
    <>
    <Loader isLoading={isLoading} />
    <form noValidate className='flex flex-col px-2 gap-8 mt-14 w-full max-w-[800px]'>
        <div className='flex flex-1 justify-between my-8 text-lg'>
          <p className='flex gap-2'>
            <strong>Nome:</strong>{services.patient.name}
          </p>
          <span className='flex gap-2'>
            <strong>Data:</strong>{dayjs(services.createdAt).utcOffset(0).format('DD/MM/YYYY')}
          </span>
        </div>
        <h3 className="border-b border-gray-200 text-blue-800 font-semibold">Terapias</h3>
        <div className='flex flex-col w-full'>
          <div className='flex w-full justify-end'>
            <button
            onClick={handleOpenModalTherapie}
            className='bg-green-600 text-white rounded px-4 py-1 transition-colors hover:bg-green-800'>
              + Terapia
            </button>
          </div>
      {qtyTherapies < 1 && <EmptyTherapie />}
          <div className='grid grid-cols-4 gap-2 mt-4'>
          {services.TherapieServices.map((therapie) => (
          <span 
            key={therapie.id} 
            value={therapie.id} 
            className='flex items-center justify-center hover:text-gray-400 group bg-red-400 rounded py-2 px-6 transition-colors text-sm overflow-hidden hover:bg-gray-600'>
              <p className='text-white  transition-all group-hover:text-opacity-0 font-semibold'>
                {therapie.name}
              </p>
              <button className="flex absolute invisible transition-all group-hover:visible"
              onClick={() => handleRemoveTherapie(therapie.id)}
              type="button"
              >
                <XCircle
                className="text-red-600 transition-colors hover:text-red-400" 
                size={24} />
              </button>
            </span>
            ))}
      </div>   
    </div>
    <ModalTerapie 
    title="Qual é a terapia que pretende realizar?"
    visible={isTherapieModalVisible}
    onCancel={handleCloseModalTherapie}
    serviceId={services.id}
    services={services}
    updateServiceWithTherapies={updateServiceWithTherapies}
    />
    </form>
    </>
  )
}

export default FormEditService