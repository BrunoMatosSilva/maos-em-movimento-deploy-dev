import Header from "../../components/Header"
import HeaderMenu from "./components/HeaderMenu"
import ListAnamnesis from "./components/ListAnamnesis"
import EmptyList from "../../components/EmptyList";
import Loader from "../../components/Loader";
import useListAnamneses from "./useListAnamneses";

function ListAnamnese(){
  const {
    isLoading,
    anamnesis,
    qtyOfAnamnesis
  } = useListAnamneses();

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Loader isLoading={isLoading} />
      <Header title="ANamnese" isBackNav/>
      <div className="w-full flex justify-center" >
      </div>
      <HeaderMenu />
      {qtyOfAnamnesis && <EmptyList title="nenhuma ficha" />}
      {anamnesis.map((anamnesi) => (
        <ListAnamnesis
        key={anamnesi.id}
        anamneseId={anamnesi.id}
        dateOfCreated={anamnesi.createdAt}
        qtyOfAnamnesis={qtyOfAnamnesis}
        />
      ))}
      
    </div>
  )
  }
  
export default ListAnamnese