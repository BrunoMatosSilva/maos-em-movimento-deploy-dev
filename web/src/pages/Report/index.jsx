import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ListReport from "./components/ListReport";
import { useState } from "react";


function Report(){
  const [isLoading] = useState(false);

  return (
    <>
      <div className="w-full h-full flex flex-col mb-4 items-center relative">
      <Loader isLoading={isLoading} />
        <Header title="Relatório Diario de Recibo" />
        <ListReport />
      </div>
      </>
  )
  }
  
export default Report