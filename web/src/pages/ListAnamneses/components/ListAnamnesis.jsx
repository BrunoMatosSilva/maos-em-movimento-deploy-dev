import { NotePencil, Trash, X } from "@phosphor-icons/react";
import dayjs from "dayjs";
import {Link} from "react-router-dom";
import Modal from "../../../components/Modal";
import useListAnamnesis from "./useListAnamnesis";
import { AnamneseServices } from "../../../services/AnamneseService";
import { toast } from "react-hot-toast";

function ListAnamnesis({
  anamneseId,
  dateOfCreated,
  qtyOfAnamnesis
}) {

  const {
    id,
    newDate,
    navigate,
    isDeleteModalVisible,
    setIsDeleteModalVisible,
    handleCloseDeleteModal,
    handleDeletePacient,
  } = useListAnamnesis(dateOfCreated)

  async function handleConfirmDeletePacient() {

    try{
      await AnamneseServices.deleteAnamneseById(anamneseId);

      setIsDeleteModalVisible(false);

      navigate("/");

      toast.success("Ficha deletada com sucesso!")

    }
    catch(error){
      
      toast.error("Erro ao deletar ficha!")
      
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
       <Modal
      title={`Tem certeza que deseja remover a ficha?`}
      visible={isDeleteModalVisible}
      onCancel={handleCloseDeleteModal}
      onConfirm={handleConfirmDeletePacient}
      />

      {qtyOfAnamnesis < 1 && (
        <div className="flex flex-col w-full max-w-[800px] border-b-gray-300 px-2">
        <div className="flex justify-between items-center w-full mt-14 border-b border-gray-200">
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Data</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3"></h2>
        </div>
      </div>
      )}
        
          <div className="w-full max-w-[800px] mt-[20px] flex justify-between items-center px-2">
          <Link to={`/anamnesis/pdf/${id}`} className="decoration-0 transition-all hover:opacity-70">
            <p className="text-sm md:text-base font-semibold">
              {newDate}
            </p>
          </Link>
          <div className="flex-col flex items-center md:flex-row">
          <Link to={`/anamnesis/edit/${id}`} className="md:ml-2 md:mt-0 mt-2 transition-all hover:opacity-70">
            <NotePencil size={24} color="#283460" />
          </Link>
          <button className="md:ml-2 transition-all hover:opacity-70"
          onClick={() => handleDeletePacient(anamneseId)}
          >
            <Trash size={24} color="red" />
          </button>
          </div>
        </div>
      
    </div>
  )
}

export default ListAnamnesis