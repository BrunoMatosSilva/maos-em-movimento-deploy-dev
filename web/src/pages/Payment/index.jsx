import Header from "../../components/Header"
import ListPayment from "./components/ListPayment";
import HeaderMenu from "./components/HeaderMenu"

function Payment(){
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Header title="Recibos" isBackNav/>
      <div className="w-full flex justify-center" >
      </div>
      <HeaderMenu/>
      <ListPayment/> 
    </div>
  )
  }
  
export default Payment