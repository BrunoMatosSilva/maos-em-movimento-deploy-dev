import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import { toast } from "react-hot-toast";
import FormEditService from "./components/FormEditService";
import { ClientService } from "../../services/ClientService";

function EditService() {
  const {id} = useParams();
  const [services, setServices] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ClientService.getClientServiceId(id).then((response) => {
      setServices(response.data)
    });
  },[])

 async function handleSubmit(){
    setIsLoading(true);

    try {
      
      setIsLoading(false);
      toast.success("Ordem de serviço cadastrada com sucesso!")

    }catch(error){
      setIsLoading(false)
      toast.error("Erro ao cadastra Ordem de serviço!")
    }

  }

  function updateServiceWithTherapies(serviceId, updatedTherapies) {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === serviceId ? { ...service, TherapieServices: updatedTherapies } : service
      )
    );
  }

  return (
    <div className="h-screen flex flex-col items-center">
      <Loader isLoading={isLoading} />
      <Header title="Adicionar as Terapias" isBackNav />
      <div className="w-full flex justify-center" >
      {services.map((service) => (
        <FormEditService
        key={service.id}
        onSubmit={handleSubmit}
        services={service}
        updateServiceWithTherapies={updateServiceWithTherapies}
        />
      ))}
      </div>
    </div>
  )
}

export default EditService