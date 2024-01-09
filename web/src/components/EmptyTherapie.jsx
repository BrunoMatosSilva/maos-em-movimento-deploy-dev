import { FileSearch } from '@phosphor-icons/react'
import React from 'react'

function EmptyTherapie() {
  return (
    <div className="md:w-[800px] mt-4">
      <div className="w-full flex flex-col items-center rounded border-2 border-blue-200 border-dashed">
        <FileSearch size={54} className="mt-8 text-red-300" />
        <span className=" mb-8 text-danger-400 text-sm">Não foi adicionado nenhuma tarepia ao serviço.</span>
      </div>
    </div>
  )
}

export default EmptyTherapie