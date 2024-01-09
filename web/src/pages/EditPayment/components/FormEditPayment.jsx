import { useState, useEffect } from "react"
import * as RadioGroup from '@radix-ui/react-radio-group';
import Loader from "../../../components/Loader";
import { useParams } from "react-router-dom";
import { PaymentService } from "../../../services/PaymentService";
import dayjs from "dayjs";
import { toast } from "react-hot-toast";

function FormEditPayment({
  isPayment,
  isPaymentConfirme,
  isObservation
}) {
  const {id} = useParams();
  const [payment, setPaymant] = useState(isPayment);
  const [paymentConfirme, setPaymentConfirm] = useState(isPaymentConfirme || "");
  const [observation, setObservation] = useState(isObservation || "");
  const [payments, setPayments] = useState()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isPayment !== undefined) {
      setPaymant(isPayment);
    }

    if (isPaymentConfirme !== undefined) {
      setPaymentConfirm(isPaymentConfirme);
    }

    if (isObservation !== undefined) {
      setObservation(isObservation);
    }
  }, [isPayment, isPaymentConfirme, isObservation]);

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

  const getTotalTherapies = () => {
    if (!payments || !payments.Service || payments.Service.length === 0) {
      return 0;
    }

    return payments.Service.reduce((total, service) => {
      const therapiesCount = service?.TherapieServices?.length || 0;
      return total + therapiesCount;
    }, 0);
  };

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
        payment,
        paymentConfirme,
        observation,
    });
}

const onSubmit = async (data) => {
  setIsLoading(true);
  try {
    await PaymentService.updatePayment(id, data); 
    toast.success("Dados de pagamento atualizado com sucesso!");
    setIsLoading(false);
  } catch (error) {
    console.error('Erro ao atualizar os dados:', error);
    toast.error("Erro ao atualizar dados de pagamento!")
  } finally {
    setIsLoading(false);
  }
};

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <>
    <form noValidate className='flex flex-col px-2 gap-8 mt-14 w-full max-w-[800px]'>
        
    {payments !== undefined ? (
        <>
          {payments.Service.map((service) => (
            <div className='flex flex-1 justify-between my-8 text-lg' key={service.id}>
              <p className='flex gap-2'>
                <strong>Nome:</strong>{service.patient.name}
              </p>
              <span className='flex gap-2'>
                <strong>Data:</strong>{dayjs(service.createdAt).utcOffset(0).format('DD/MM/YYYY')}
              </span>
            </div>
          ))}
        </>
      ) : (
        <p>Nenhum serviço encontrado.</p>
      )}
        
       
        <h3 className="border-b border-gray-200 text-blue-800 font-semibold">Terapias Confirmadas</h3>
        <div className='flex flex-col w-full'>
          <div className='grid grid-cols-4 gap-2 mt-4'>
          {payments !== undefined ? (
            <>
            {payments.Service.map((services) => 
            services.TherapieServices.map((therapie) =>(
              <span
              key={therapie.id}
              className='flex items-center justify-center hover:text-gray-400 group bg-blue-400 rounded py-2 px-6 transition-colors text-sm overflow-hidden'>
                <p className='text-white  transition-all font-semibold'>
                  {therapie.name}
                </p>
            </span>
            ))
            )}
            </>
            ) : (
        <p>Nenhuma terapia encontrada.</p>
      )}
          </div>   
    </div>

    <div className="flex items-center gap-2">
          <span className="font-semibold text-blue-800">Forma de Pagamento: </span> 

            <div className="flex items-center gap-1">
            {payment !== undefined ? (
            <RadioGroup.Root
            className='flex items-center gap-2'
            name='payment'
            defaultValue={payment}
            onChange={(event) => setPaymant(event.target.value)}
            required
            >
                <RadioGroup.Item id='p1' value="Dinheiro" className='bg-background w-4 h-4 rounded-full border-2 border-blue-400 hover:bg-background'>
                  <RadioGroup.Indicator className='block m-auto h-2 w-2 rounded-[50%] bg-blue-400'/>
                </RadioGroup.Item>
                <label htmlFor='p1' className='text-sm md:text-base'>Dinheiro</label>

                <RadioGroup.Item id='p2' value="Pix" className='bg-background w-4 h-4 rounded-full border-2 border-blue-400 hover:bg-background'>
                  <RadioGroup.Indicator className='block m-auto h-2 w-2 rounded-[50%] bg-blue-400'/>
                </RadioGroup.Item>
                <label htmlFor='p2' className='text-sm md:text-base'>Pix</label>

                <RadioGroup.Item id='p3' value="Débito" className='bg-background w-4 h-4 rounded-full border-2 border-blue-400 hover:bg-background'>
                  <RadioGroup.Indicator className='block m-auto h-2 w-2 rounded-[50%] bg-blue-400'/>
                </RadioGroup.Item>
                <label htmlFor='p3' className='text-sm md:text-base'>Débito</label>

                <RadioGroup.Item id='p4' value="Crédito" className='bg-background w-4 h-4 rounded-full border-2 border-blue-400 hover:bg-background'>
                  <RadioGroup.Indicator className='block m-auto h-2 w-2 rounded-[50%] bg-blue-400'/>
                </RadioGroup.Item>
                <label htmlFor='p4' className='text-sm md:text-base'>Crédito</label>
            </RadioGroup.Root>
             ) : (
              <p>Nenhuma terapia encontrada.</p>
            )}
            </div>
        </div>

        <div className="flex items-center">
          <div className="flex gap-3">
            <p className=" font-semibold text-blue-800">
              Quantidade de terapias realizada: </p> 
              <span>
              {getTotalTherapies() !== null ? getTotalTherapies() : 0}
              </span>
          </div>
        </div>

        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='flex items-start gap-2 w-full'>
            <label 
              htmlFor="paymantConfirme"
              className='text-blue-800 font-bold text-sm md:text-base'
            >Confirmado o pagameto por:</label>
              <input
              type="text"
                className="w-full text-sm resize-none py-4 text-black md:text-base bg-white border-[1px] border-white rounded-[10px] shadow-md shadow-gray-300 outline-none px-4 transition delay-[0.1s] focus:border-[1px] focus:border-violet-900 placeholder:text-gray-400 "
                id="paymantConfirme"
                value={paymentConfirme}
                placeholder="Nome do funcionario."
                onChange={(event) => setPaymentConfirm(event.target.value)}
              />
          </div>
        </div>

        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='flex items-start gap-2 w-full justify-start'>
            <label 
              htmlFor="observation"
              className='text-black font-bold text-sm md:text-base'
            >Observações:</label>
            <textarea
              className="w-full text-sm resize-none py-4 h-[200px] text-black md:text-base bg-white border-[1px] border-white rounded-[10px] shadow-md shadow-gray-300 outline-none px-4 transition delay-[0.1s] focus:border-[1px] focus:border-violet-900 placeholder:text-gray-400 "
              id="observation"
              value={observation}
              placeholder="Escrever detalhe da observação..."
              onChange={(event) => setObservation(event.target.value)}
            />
          </div>
        </div>

        <div className=" flex items-start w-full max-w-sm">
          <button 
          type="submit"
          onClick={handleSubmit}
          
          className="border-[1px] text-xs md:text-base h-12 px-4 mb-4 text-white bg-green-700 font-semibold border-green-700 rounded-md shadow-md shadow-gray-300 transition-all hover:bg-green-400 hover:border-green-400 hover:text-white disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-500"
          >
            Alterar
          </button>
        </div>
    </form>
    </>
  )
}

export default FormEditPayment