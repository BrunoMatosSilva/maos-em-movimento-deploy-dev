import { Link } from "react-router-dom"

function HeaderMenu({qtyOfPacients = 0}) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-between items-center w-full max-w-[800px] h-[50px] mt-8 mx-2">
        <h3 className="text-base md:text-2xl font-bold">{qtyOfPacients} Pacientes</h3>
        <Link to="/new" className="border-[1px] flex items-center text-sm md:text-base h-12 px-2 text-green-700 font-semibold border-green-700 rounded-md shadow-md shadow-gray-300 transition-all hover:bg-green-400 hover:border-green-400 hover:text-white">
          Novo Paciente
        </Link>
      </div>
    </div>
  )
}

export default HeaderMenu