import { useEffect, useMemo, useState } from "react";
import { PacientServices } from "../../services/PacientsService";
import { toast } from "react-hot-toast";

export default function useHome() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [clientBeingDeleted, setClientBeingDeleted] = useState(null);

  const filteredPacients = useMemo(() => {
    return clients.filter((client) => client.name.toLowerCase().includes(searchTerm.toLowerCase()));
  },[clients, searchTerm]);

  const qtyOfPacients = filteredPacients.length;

  useEffect(() => {
    setIsLoading(true);

    PacientServices.getPacient().then(response => {
      setClients(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log('erro', error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  },[])

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setClientBeingDeleted(null);
  }

  async function handleConfirmDeletePacient() {

    try{
      await PacientServices.deletePacientById(clientBeingDeleted.id);

      setIsDeleteModalVisible(false);
      
      setClients(prevState => prevState.filter(
        (client) => client.id !== clientBeingDeleted.id))

      toast.success("Paciente deletado com sucesso!")
    }
    catch(error){
      
      toast.error("Erro ao deletar paciente!")
      
    }
  }

  return {
    searchTerm,
    filteredPacients,
    isLoading,
    isDeleteModalVisible,
    setIsDeleteModalVisible,
    clientBeingDeleted,
    setClientBeingDeleted,
    qtyOfPacients,
    handleChangeSearchTerm,
    handleCloseDeleteModal,
    handleConfirmDeletePacient
  };
}
