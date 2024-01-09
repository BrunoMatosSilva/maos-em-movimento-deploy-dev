import { NotePencil, Trash, X } from "@phosphor-icons/react";
import {Link} from "react-router-dom";

function ListTherapies({
  therapies, 
  qtyOfTherapies, 
  setTherapieBeginDelete, 
  setIsDeleteModalVisible
}) {

  function handleDeleteTherapie(therapie){
    setTherapieBeginDelete(therapie);
    setIsDeleteModalVisible(true);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {qtyOfTherapies > 0 && (
        <div className="flex flex-col w-full max-w-[800px] border-b-gray-300 px-2">
        <div className="flex justify-between items-center w-full mt-14 border-b border-gray-200">
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Nome da Terapia</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Profissional que realiza</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]" />
        </div>
      </div>
      )}
        {therapies.map((therapie) => (
        <div key={therapie.id} className="w-full max-w-[800px] mt-[20px] flex justify-between items-center px-2">
          <p className="font-semibold text-sm max-w-[100px] md:text-base md:min-w-[300px] whitespace-nowrap overflow-hidden">
            {therapie.name}
          </p>
        <span className="text-sm md:text-base">
          {therapie.therapist}
        </span>

        <div className="flex-col flex items-center md:flex-row">
        <Link to={`/therapies/edit/${therapie.id}`} className="md:ml-2 md:mt-0 mt-2 transition-all hover:opacity-70">
          <NotePencil size={24} color="#283460" />
        </Link>
        <button className="md:ml-2 transition-all hover:opacity-70"
        onClick={() => handleDeleteTherapie(therapie)}
        >
          <Trash size={24} color="red" />
        </button>
        </div>
      </div>
        ))}
    </div>
  )
}

export default ListTherapies