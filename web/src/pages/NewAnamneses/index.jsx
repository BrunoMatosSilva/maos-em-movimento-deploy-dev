import Header from '../../components/Header'
import FormCreateAnamnese from './components/FormCreateAnamnese'
import Loader from '../../components/Loader';
import { useState } from 'react';


function NewAnamnese() {
  const [isLoading] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center">
      <Loader isLoading={isLoading} />
      <Header title="Ficha de Anamnese" isBackNav />
      <div className="w-full flex justify-center" >
      <FormCreateAnamnese />
      </div>
    </div>
  )
}

export default NewAnamnese