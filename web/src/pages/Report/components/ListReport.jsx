import { useState } from "react";
import { useForm } from 'react-hook-form';
import Loader from "../../../components/Loader";
import dayjs from "dayjs";
import { ReportService } from "../../../services/ReportService";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import EmptyList from "../../../components/EmptyList";

function ListReport() {
  const [isLoading, setIsLoading] = useState(false);
  const [reportList, setReportList] = useState([]);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm()

  async function onSubmit(formData){
    setIsLoading(true);

    const newDate = dayjs(formData.date).startOf('day').utc(true).toDate();
    const date = newDate.toISOString();

    try {
      const response = await ReportService.getReportDay(date);
      setReportList(response?.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar relatório:", error);
      setIsLoading(false);
    }
  }

  return (
    <>
    <Loader isLoading={isLoading} />  
    <div className="flex flex-col items-center justify-center w-full">
    <div className="w-full flex justify-center" >
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[500px] h-[50px] mt-[20px] px-2">
            <div className="flex flex-1 gap-4 items-center justify-center">
            <Input 
            id="date"
            name="date"
            label="Data:"
            type="date"
            register={register}
            errors={errors}
            required={true}
            placeholder=""
            />

            <Button type="submit">Aplicar</Button>
            </div>
          </form>
      </div>

      {reportList?.length >= 1 && 
        <div className="flex flex-col w-full max-w-[800px] border-b-gray-300 px-2">
        <div className="flex justify-between items-center w-full mt-14 border-b border-gray-200">
          <h2 className="text-blue-800 md:min-w-[300px] md:text-base text-bold mb-3 font-[barrio]">Nome</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Qtd.Terapias</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Forma de pagamento</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Observação</h2>
        </div>
      </div>
}

        {reportList?.length < 1 &&
          <EmptyList title="recibo" />
         }

        {reportList !== undefined ? (
          reportList.map((report) => (
          <div key={report.id}  className="w-full max-w-[800px] mt-[20px] flex justify-between items-center px-2">
          <p className="font-semibold text-sm max-w-[100px] md:text-base md:min-w-[300px] whitespace-nowrap overflow-hidden">
          {report.Service[0].patient.name}
          </p>
         
         <p>
           {report.Service[0].TherapieServices.length}
         </p>

         <p>
           {report.payment}
         </p>
         
         <span className="font-semibold text-sm max-w-[100px] md:text-base md:min-w-[80px] whitespace-nowrap overflow-hidden">
         {report.observation ? "Sim" : "Não"}
         </span>
     </div>
          ))
        ): (
          <p>Carregando...</p>
        )}
    </div>
    </>
  )
}

export default ListReport