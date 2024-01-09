import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import { PacientServices } from "../../services/PacientsService";
import { toast } from "react-hot-toast";
import { FilePdf } from "@phosphor-icons/react";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import pacientPDF from "../../utils/Pacient/pacientPDF";

dayjs.extend(utc);

function Pacient() {
  const [pacients, setPacients] = useState([]);
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPacient(){
      await PacientServices.getPacientById(id).then(response => {
        setPacients(response.data);
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

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Loader isLoading={isLoading} />
      <Header title="Paciente" isBackNav />
      <div className="w-full px-2 flex flex-col justify-center items-center" >
        <header className="w-full max-w-3xl flex justify-end mt-4">
          <button
          onClick={() => pacientPDF(pacients)}
          className="flex items-center gap-2 rounded bg-red-600 p-2 text-white transition-colors hover:bg-red-400">
            <span><FilePdf size={32} /></span>
            <p>Gerar PDF</p>
          </button>
        </header>

        <main className="w-full flex justify-center mt-12">
          <div className="flex justify-center w-full">
            {pacients.map((pacient) => (
              <div key={pacient.id} className="flex flex-col w-full max-w-3xl">

                <div className="flex flex-col gap-6 md:flex-row w-full justify-between">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Nome:</span> 
                    <p>{pacient.name}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Data de Nascimento:</span>
                    <p>{dayjs(pacient.dateOfBirth).utcOffset(0).format('DD/MM/YYYY')}</p>
                  </div>
                </div>

                <div className="flex w-full justify-between mt-6">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">CEP:</span> 
                    <p>{pacient.addressCep}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Telefone:</span>
                    <p>{pacient.fone}</p>
                  </div>
                </div>

                <div className="flex w-full gap-8 mt-6">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Rua:</span> 
                    <p>{pacient.addressRoad}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Número:</span>
                    <p>{pacient.addressNumber}</p>
                  </div>
                </div>

                <div className="flex w-full gap-8 mt-6">
                  <div className="flex gap-2 items-center">
                      <span className="font-semibold md:text-lg">Complemento:</span>
                      <p>{pacient.addressComplement}</p>
                  </div>
                </div>

                <div className="flex w-full justify-between gap-8 mt-6">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Bairro:</span> 
                    <p>{pacient.addressDistrict}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Cidade:</span>
                    <p>{pacient.addressCity}</p>
                  </div>
                </div>

              </div>
            ))}
        </div>
        </main>
      </div>
    </div>
  )
}

export default Pacient