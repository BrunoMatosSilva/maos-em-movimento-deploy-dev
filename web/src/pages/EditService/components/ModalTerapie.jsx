import React, { useEffect, useState } from 'react'
import {motion, AnimatePresence } from 'framer-motion'
import ReactPortal from '../../../components/ReactPortal';
import { TherapieServices } from '../../../services/TherapieService';
import { ClientService } from '../../../services/ClientService';
import Loader from '../../../components/Loader';

function ModalTerapie({title, visible, onCancel, serviceId, services, updateServiceWithTherapies}) {
  const [isLoading, setIsLoading] = useState(false);
  const [therapieService, setTherapieService] = useState([]);
  const [selectedTherapie, setSelectedTherapie] = useState({});
  
  useEffect(() => {
    TherapieServices.getTherapie().then((response) => {
      setTherapieService(response.data)
    });
  },[])

  function handleChangeTherapie(event) {
    const selectedTherapie = therapieService.find(
      (therapie) => therapie.name === event.target.value
    );
  
   setSelectedTherapie(selectedTherapie);
  }

  async function handleAddTherapie(serviceId, selectedTherapie) {
    setIsLoading(true);

    try{
      await ClientService.createdTherapieService(serviceId, selectedTherapie);
      setIsLoading(false);

      updateServiceWithTherapies(serviceId, [...services.TherapieServices, selectedTherapie]);
      onCancel();

    }catch(error){
      console.log(error.message);
    }
    
  }

  if (!visible) {
    return null;
  }

  return (
    <>
    <Loader isLoading={isLoading} />
    <ReactPortal containerId="modal-therapie">
      <AnimatePresence>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}

      className="bg-black/[.7] backdrop-blur-sm fixed w-full h-full left-0 top-0 flex items-center justify-center">
        <motion.div 
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y:0}}

        className="rounded bg-background shadow-md max-w-[280px] md:max-w-[450px] w-full p-4 md:p-6">
          <h1 className="text-base md:text-2xl font-semibold text-gray-700">
            {title}
          </h1>
          <form className='mt-8'>
            <select 
            className='text-sm md:text-base w-full rounded bg-gray-300 h-12 px-2 appearance-none'
            onChange={handleChangeTherapie}
            >
              <option value="Nenhuma">Terapias -</option>
              {therapieService.map((therapie) => (
                <option key={therapie.id} value={therapie.name}>{therapie.name}</option>
              ))}
            </select>
          </form>
          <footer className="mt-8 w-full flex justify-end gap-4">
            <button 
            onClick={onCancel} 
            type="button" 
            className="text-sm md:text-base rounded p-4 text-gray-400 transition-all hover:text-gray-600 font-semibold"
            >
              Cancelar
            </button>

            <button 
            onClick={() => handleAddTherapie(serviceId, selectedTherapie)}
            type="button" 
            className="text-sm md:text-base rounded bg-green-400 transition-all hover:bg-green-900 p-4 text-white font-semibold"
            >
              Adicionar
            </button>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
    </ReactPortal>
    </>
  )
}

export default ModalTerapie