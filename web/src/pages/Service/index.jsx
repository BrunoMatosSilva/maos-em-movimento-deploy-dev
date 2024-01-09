import Header from "../../components/Header"
import HeaderMenu from "./components/HeaderMenu"
import Loader from "../../components/Loader";
import ListServices from "./components/ListServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClientService } from "../../services/ClientService";
import EmptyList from "../../components/EmptyList";

function Service(){
  const {id} = useParams();
  const [listService, setListService] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [serviceUpdated, setServiceUpdated] = useState(false);

  const qtyOfService = listService.length < 1;

  useEffect(() => {
    setIsLoading(true);
    
    ClientService.getClientServiceId(id).then(response => {
      setListService(response.data)
      setIsLoading(false);
    })
    .catch((error) => {
      console.log('erro', error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  },[serviceUpdated])

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Loader isLoading={isLoading} />
      <Header title="Serviço do Dia" isBackNav/>
      <div className="w-full flex justify-center" >
      </div>
        <HeaderMenu
        setListService={setServiceUpdated}
        />
        {qtyOfService && <EmptyList title="serviço cadastrado" />}
        <ListServices 
        listServices={listService}
        qtyOfService={qtyOfService}
        />
      </div>
  )
  }
  
export default Service