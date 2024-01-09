import { useEffect, useState } from "react";
import Header from "../../components/Header";
import FormEditPayment from "./components/FormEditPayment";
import { PaymentService } from "../../services/PaymentService";
import Loader from "../../components/Loader";
import { useParams } from "react-router-dom";

function EditPayment() {
  const {id} = useParams();
  const [payments, setPayments] = useState()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadAnamnese() {
      setIsLoading(true);

      try {
        const response = await PaymentService.getPaymentService(id);
        setPayments(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadAnamnese();
  }, [id]);
  
  return (
    <div className="h-screen flex flex-col items-center">
      <Loader isLoading={isLoading} />
      <Header title="Editar Recibo" isBackNav />
      <div className="w-full flex justify-center" >
        
        <FormEditPayment 
        isPayment={payments?.payment}
        isPaymentConfirme={payments?.paymentConfirme}
        isObservation={payments?.observation}
        />
      
      </div>
    </div>
  )
}

export default EditPayment