import { NotePencil, Trash, X } from "@phosphor-icons/react";
import {Link, useParams} from "react-router-dom";
import Modal from "../../../components/Modal";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Loader from "../../../components/Loader";
import { PaymentService } from "../../../services/PaymentService";
import EmptyList from "../../../components/EmptyList";

function ListPayment() {
  
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [payments, setPayments] = useState();
  const [paymentBeingDeleted, setPaymentBeingDeleted] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    
    async function loadPacient(){
      await PaymentService.getAllPayment(id).then(response => {
        setPayments(response.data)
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


  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  function handleDeletePacient(paymantId) {
    setPaymentBeingDeleted(paymantId)
    setIsDeleteModalVisible(true);
  }

  async function handleConfirmDeletePayment() {
    setIsLoading(true);

    try{
      await PaymentService.deletePayment(paymentBeingDeleted);

      setIsDeleteModalVisible(false);
      setPayments(prevState => prevState.filter(
        (payment) => payment.id !== paymentBeingDeleted))
        
      setIsLoading(false);
     

    toast.success("Recibo deletado com sucesso!")

    }
    catch(error){
      toast.error("Erro ao deletar recibo!")
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Loader isLoading={isLoading} />
       <Modal
      title={`Tem certeza que deseja remover a ficha de pagamento?`}
      visible={isDeleteModalVisible}
      onCancel={handleCloseDeleteModal}
      onConfirm={handleConfirmDeletePayment}
      />

        {payments?.length >= 1 && 
        <div className="flex flex-col w-full max-w-[800px] border-b-gray-300 px-2">
        <div className="flex justify-between items-center w-full mt-14 border-b border-gray-200">
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Qtd. Terapias</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Data realizada</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Forma de pagamento</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3"></h2>
        </div>
      </div>}

      {payments?.length < 1 &&
          <EmptyList title="recibo" />
         }

      {payments !== undefined ? (
        payments.map((payment) => (
        <div key={payment.id} className="w-full max-w-[800px] mt-[20px] flex justify-between items-center px-2">
             
             <p className="font-semibold text-sm max-w-[100px] md:text-base md:min-w-[100px] whitespace-nowrap overflow-hidden">
             {payment.Service[0].TherapieServices.length}
             </p>
            
              <p>
              {dayjs(payment.createdAt).utcOffset(0).format('DD/MM/YYYY')}
              </p>
            
            <span className="font-semibold text-sm max-w-[100px] md:text-base md:min-w-[80px] whitespace-nowrap overflow-hidden">
            {payment.payment ? payment.payment : "A definir"}
            </span>
          <div className="flex-col flex items-center md:flex-row">
          <Link to={`/payment/edit/${payment.id}`} className="md:ml-2 md:mt-0 mt-2 transition-all hover:opacity-70">
            <NotePencil size={24} color="#283460" />
          </Link>
          <button className="md:ml-2 transition-all hover:opacity-70"
          onClick={() => handleDeletePacient(payment.id)}
          >
            <Trash size={24} color="red" />
          </button>
          </div>
        </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
     
      
    </div>
  )
}

export default ListPayment