import { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import { PacientServices } from "../../../services/PacientsService";
import { useParams } from "react-router-dom";

function HeaderMenu() {
  const {id} = useParams()
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    PacientServices.getPacientById(id).then(response => {
      setClients(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log('erro', error);
    }).finally(() => {
      setIsLoading(false);
    })
  },[])
  return (
    <div className="flex justify-center w-full">
       <Loader isLoading={isLoading} />
      {clients.map((client) => (
        <div key={client.id} className="flex justify-between items-center w-full max-w-[800px] h-[50px] mt-8 mx-2">
        <h3 className="text-sm md:text-2xl font-light"><strong className="font-bold">
          Paciente:</strong> {client.name}
          </h3>
      </div>
      ))}
    </div>
  )
}

export default HeaderMenu