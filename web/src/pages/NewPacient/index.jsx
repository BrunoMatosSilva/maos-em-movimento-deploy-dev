import { useState } from 'react';
import Header from '../../components/Header'
import Loader from '../../components/Loader';
import NewPacientForm from './components/NewPacientForm';

function NewPacient() {
  const [isLoading] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Loader isLoading={isLoading} />
      <Header title="Novo Paciente" isBackNav />
      <div className="w-full flex justify-center" >
      <NewPacientForm />
      </div>
    </div>
  )
}

export default NewPacient