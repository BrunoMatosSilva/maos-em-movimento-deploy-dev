import InputSearch from "./components/InputSearch";
import ListPacients from "./components/ListPacients";
import Header from "../../components/Header";
import HeaderMenu from "./components/HeaderMenu";
import Loader from "../../components/Loader";
import EmptyList from "../../components/EmptyList";
import Modal from "../../components/Modal";
import useHome from "./useHome";

function Home(){
  const {
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
  } = useHome()
  

  return (
    <>
      <div className="w-full h-full flex flex-col mb-4 items-center relative">
      <Loader isLoading={isLoading} />
        <Header title="Lista de Pacientes" />
        <div className="w-full flex justify-center" >
          <div className="w-full max-w-[500px] h-[50px] mt-[20px] px-2">
            <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
          </div>
        </div>
        <HeaderMenu qtyOfPacients={qtyOfPacients}  />
        {qtyOfPacients < 1 && <EmptyList title="paciente" />}
        <ListPacients 
        clients={filteredPacients}
        qtyOfPacients={qtyOfPacients} 
        setIsDeleteModalVisible={setIsDeleteModalVisible}
        setClientBeingDeleted={setClientBeingDeleted} 
        />
      </div>
      <Modal
      title={`Tem certeza que deseja remover o contato "${clientBeingDeleted?.name}" ?`}
      visible={isDeleteModalVisible}
      onCancel={handleCloseDeleteModal}
      onConfirm={handleConfirmDeletePacient}
      />
      </>
  )
  }
  
export default Home