import { FileSearch } from "@phosphor-icons/react"

function EmptyList({title}) {
  return (
    <div className="w-[800px] mt-4">
      <div className="w-full flex flex-col items-center border-t">
        <FileSearch size={54} className="mt-8 text-gray-400" />
        <p className="text-gray-500 mt-4">Não foi encontrado nenhum <strong>{title}</strong>.</p>
        <span className="text-danger-400 text-sm">Pode ser que não foi feito o cadastro.</span>
      </div>
    </div>
  )
}

export default EmptyList