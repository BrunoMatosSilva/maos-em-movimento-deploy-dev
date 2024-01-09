import {Link} from "react-router-dom";

function Menu() {
  return (
    <div className="w-full flex items-center justify-center bg-blue-900 text-white text-base p-2">
      <div className="flex gap-4">
        <Link
        className="transition-all hover:text-gray-400 "
        to="/">
          Pacientes
        </Link> |
        <Link 
        className="transition-all hover:text-gray-400 "
        to="/therapie">
          Terapias
        </Link> |
        <Link 
        className="transition-all hover:text-gray-400 "
        to="/confirm">
          Confirmar
        </Link> |
        <Link 
        className="transition-all hover:text-gray-400 "
        to="/report">
          Relatório
        </Link>
      </div>
    </div>
  )
}

export default Menu