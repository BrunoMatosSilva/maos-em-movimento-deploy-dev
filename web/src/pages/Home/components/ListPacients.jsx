import { NotePencil, Trash, X } from "@phosphor-icons/react";
import {Link} from "react-router-dom";


function ListPacients({
  clients, 
  qtyOfPacients, 
  setIsDeleteModalVisible,
  setClientBeingDeleted
}) {

  function handleDeletePacient(client) {
    setClientBeingDeleted(client);
    setIsDeleteModalVisible(true);
  }
  
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {qtyOfPacients > 0 && (
        <div className="flex flex-col w-full max-w-[800px] border-b-gray-300 px-2">
        <div className="flex justify-between items-center w-full mt-14 border-b border-gray-200">
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Nome</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Telefone</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Fichas</h2>
        </div>
      </div>
      )}
      
        {clients.map(client => {
          return (
            <div key={client.id} className="w-full max-w-[800px] mt-[20px] flex justify-between items-center px-2">
          <Link to={`/pacient/${client.id}`} className="decoration-0 transition-all hover:opacity-70">
            <p className="font-semibold text-sm max-w-[100px] md:text-base md:min-w-[300px] whitespace-nowrap overflow-hidden">
              {client.name}
            </p>
          </Link>
          <span className="text-sm md:text-base">{client.fone}</span>
          <div className="flex-col flex items-center md:flex-row">
          <Link className="bg-blue-900 text-white font-semibold rounded-md p-[10px] transition-all hover:bg-blue-800 text-sm md:text-base" 
          to={`/anamnesis/${client.id}`}>Anamnese</Link>
          <Link className="mt-2 md:ml-2 md:mt-0 bg-blue-900 text-white font-semibold rounded-md p-[10px] transition-all hover:bg-blue-800 text-sm md:text-base" 
          to={`/service/${client.id}`}>Serviço</Link>
          <Link className="mt-2 md:ml-2 md:mt-0 bg-blue-900 text-white font-semibold rounded-md p-[10px] transition-all hover:bg-blue-800 text-sm md:text-base" 
          to={`/payment/client/${client.id}`}>Recibo</Link>
          <Link to={`/client/edit/${client.id}`} className="md:ml-2 md:mt-0 mt-2 transition-all hover:opacity-70">
            <NotePencil size={24} color="#283460" />
          </Link>
          <button 
          className="md:ml-2 transition-all hover:opacity-70"
          onClick={() => handleDeletePacient(client)}
          >
            <Trash size={24} color="red" />
          </button>
          </div>
        </div>
          )
        })}
    </div>
  )
}

export default ListPacients