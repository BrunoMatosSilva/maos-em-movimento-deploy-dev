import { Link } from "react-router-dom"

function HeaderMenu() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center items-center w-full max-w-[800px] h-[50px] mt-8 mx-2">
        <Link to="/therapies/new" className="border-[1px] flex items-center text-sm md:text-base h-12 px-2 text-green-700 font-semibold border-green-700 rounded-md shadow-md shadow-gray-300 transition-all hover:bg-green-400 hover:border-green-400 hover:text-white">
          Nova Terapia
        </Link>
      </div>
    </div>
  )
}

export default HeaderMenu