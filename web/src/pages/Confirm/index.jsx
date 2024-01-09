import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ListConfirmPacients from "./components/ListConfirmPacients";
import { ClientService } from "../../services/ClientService";
import EmptyList from "../../components/EmptyList";

function Confirm(){
   const [isLoading, setIsLoading] = useState(false);
   const [listTherapie, setListTherapie] = useState([])

   useEffect(() => {
    setIsLoading(true);

    ClientService.getAllTherapieService().then(response => {
      setListTherapie(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log('erro', error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  },[])

  return (
    <>
      <div className="w-full h-full flex flex-col mb-4 items-center relative">
      <Loader isLoading={isLoading} />
        <Header title="Pacientes Aguardando" />
        <div className="w-full flex justify-center" >
        </div>

        <div className="w-full items-center justify-center">
          <ListConfirmPacients 
          listTherapies={listTherapie}
          />
        </div>
      </div>
      </>
  )
  }
  
export default Confirm