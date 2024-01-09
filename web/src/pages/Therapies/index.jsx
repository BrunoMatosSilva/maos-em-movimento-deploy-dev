import { useEffect, useState } from "react";
import Header from "../../components/Header"
import HeaderMenu from "./components/HeaderMenu"
import Loader from '../../components/Loader';
import ListTherapies from "./components/ListTherapies"
import EmptyList from "../../components/EmptyList";
import { TherapieServices } from "../../services/TherapieService";
import { toast } from "react-hot-toast";
import Modal from "../../components/Modal";

function Therapie(){
  const [therapie, setTherapie] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [therapieBeginDelete, setTherapieBeginDelete] = useState(null);

  const qtyOfTherapies = therapie.length;

  useEffect(() => {
    setLoading(true);

      TherapieServices.getTherapie().then(response => {
        setTherapie(response.data);
        setLoading(false);
      }).catch((error) => {
        console.log('erro', error);
      }).finally(() => {
        setLoading(false)
      })
  },[]);

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setTherapieBeginDelete(null);
  }

  async function handleConfirmDeleteTherapie() {
    try{
      await TherapieServices.deleteTherapieById(therapieBeginDelete.id);

      setIsDeleteModalVisible(false);

      setTherapie(prevState => prevState.filter(
        (therapie) => therapie.id !== therapieBeginDelete.id
      ));

      toast.success("Terapia deletada com sucesso!")
    }catch(error){
      toast.error("Erro ao deletar terapia!")
    }
  }
  
  return (
    <>
    <div className="h-screen flex flex-col items-center">
      <Loader isLoading={isLoading} />      
      <Header title="Terapias"/>
      <HeaderMenu />
        {qtyOfTherapies < 1 && <EmptyList />}
        <ListTherapies
        therapies={therapie}
        qtyOfTherapies={qtyOfTherapies}
        setTherapieBeginDelete={setTherapieBeginDelete}
        setIsDeleteModalVisible={setIsDeleteModalVisible}
        />
    </div>
    <Modal 
    title={`Tem certeza que deseja remover a terapia "${therapieBeginDelete?.name}" ?`}
    visible={isDeleteModalVisible}
    onCancel={handleCloseDeleteModal}
    onConfirm={handleConfirmDeleteTherapie}
    />
    </>
  )
  }
  
export default Therapie