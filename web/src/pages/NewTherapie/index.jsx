import { useState } from 'react'
import Header from '../../components/Header'
import FormCreateTherapie from './components/FormCreateTherapie'
import Loader from '../../components/Loader';

function NewTerapie() {
  const [isLoading] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center">
      <Loader isLoading={isLoading} />
      <Header title="Cadastrar Terapias" isBackNav />
      <div className="w-full flex justify-center" >
      <FormCreateTherapie/>
      </div>
    </div>
  )
}

export default NewTerapie