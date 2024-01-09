import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import { PacientServices } from "../../services/PacientsService";
import { toast } from "react-hot-toast";
import { FilePdf } from "@phosphor-icons/react";
import dayjs from "dayjs";
import anamnesePDF from "../../utils/Anamnese/anamnesePDF";

function Anamnese() {
  const [pacients, setPacients] = useState([]);
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    
    async function loadPacient(){
      await PacientServices.getPacientById(id).then(response => {
        setPacients(response.data)
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
      <Header title="Anamnese" isBackNav />
      <div className="w-full px-2 flex flex-col justify-center items-center" >
        <header className="w-full max-w-3xl flex justify-end mt-4">
          <button
          onClick={() => anamnesePDF(pacients)} 
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
                    <p>{dayjs(pacient.dateOfBirth).format('DD/MM/YYYY')}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-6">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Fumante:</span> 
                    <p>{pacient.Anamnese.smoker}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                  <span className="font-semibold md:text-lg">Diabético(a):</span> 
                    <p>{pacient.Anamnese.diabete}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                  <span className="font-semibold md:text-lg">Alergia:</span> 
                    <p>{pacient.Anamnese.allergy}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 w-full md:mt-2">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Gestante:</span> 
                    <p>{pacient.Anamnese.pregnant}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                  <span className="font-semibold md:text-lg">Hipertenso(a):</span> 
                    <p>{pacient.Anamnese.hypertension}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                  <span className="font-semibold md:text-lg">Anemia:</span> 
                    <p>{pacient.Anamnese.anaemia}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 w-full md:mt-2">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Enxaqueca:</span> 
                    <p>{pacient.Anamnese.headecha}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                  <span className="font-semibold md:text-lg">Stress:</span> 
                    <p>{pacient.Anamnese.stress}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                  <span className="font-semibold md:text-lg">Dor na Perna:</span> 
                    <p>{pacient.Anamnese.legPain}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 w-full md:mt-2">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Insônia:</span> 
                    <p>{pacient.Anamnese.insomnia}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                  <span className="font-semibold md:text-lg">Doença circulatória:</span> 
                    <p>{pacient.Anamnese.circulatory}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                  <span className="font-semibold md:text-lg">Dor na Coluna:</span> 
                    <p>{pacient.Anamnese.backPain}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full md:gap-8 mt-6">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Pratica atividade fisica ?</span> 
                    <p>{pacient.Anamnese.physical}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                  <span className="font-semibold md:text-lg">Qual ?</span> 
                    <p>{pacient.Anamnese.physicalName}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full md:gap-8 mt-6">
                  <div className="flex gap-2 items-center">
                      <span className="font-semibold md:text-lg">Alguma outra doença?</span>
                      <p>{pacient.Anamnese.anotherDisease}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full md:gap-8 mt-6">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Fez alguma cirurgia?</span> 
                    <p>{pacient.Anamnese.surgery}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                  <span className="font-semibold md:text-lg">Qual ?</span> 
                    <p>{pacient.Anamnese.surgeryName}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full md:gap-8 mt-6">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold md:text-lg">Faz uso de algum medicamento?</span> 
                    <p>{pacient.Anamnese.medicament}</p>
                  </div>

                  <div className="flex gap-2 items-center">
                  <span className="font-semibold md:text-lg">Qual ?</span> 
                    <p>{pacient.Anamnese.medicamentName}</p>
                  </div>
                </div>

                <div className="flex w-full gap-8 mt-6">
                  <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
                      <span className="font-semibold md:text-lg">Qual sua queixa principal?</span>
                      <p>{pacient.Anamnese.reclamation}</p>
                  </div>
                </div>

                <div className="flex w-full gap-8 mt-6">
                  <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
                      <span className="font-semibold md:text-lg">Qual sua frase mais usada?</span>
                      <p>{pacient.Anamnese.phrase}</p>
                  </div>
                </div>

                <div className="flex w-full gap-8 mt-6">
                  <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
                      <span className="font-semibold md:text-lg">Como conheceu o projeto?</span>
                      <p>{pacient.Anamnese.project}</p>
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

export default Anamnese