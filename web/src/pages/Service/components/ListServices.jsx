import { NotePencil, Trash, X } from "@phosphor-icons/react";
import {Link} from "react-router-dom";
import dayjs from "dayjs";
import Button from "../../../components/Button";

function ListServices({
  listServices,
  qtyOfService
}) {

  return (
    <div className="flex flex-col items-center justify-center w-full">

      {qtyOfService < 1 && (
        <div className="flex flex-col w-full max-w-[800px] border-b-gray-300 px-2">
        <div className="flex justify-between items-center w-full mt-14 border-b border-gray-200">
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3 font-[barrio]">Data</h2>
          <h2 className="text-blue-800 text-sm md:text-base text-bold mb-3"></h2>
        </div>
      </div>
      )}
        {listServices.map((listService) => (
          <div key={listService.id} className="w-full max-w-[800px] mt-[20px] flex justify-between items-center px-2">
          <span className="decoration-0">
            <p className="text-sm md:text-base font-semibold">
            {dayjs(listService.createdAt).utcOffset(0).format('DD/MM/YYYY')}
            </p>
          </span>
          <div className="flex-col flex items-center md:flex-row">
          <Link to={`/service/edit/${listService.patient.id}`} className="md:ml-2 md:mt-0 mt-2 transition-all hover:opacity-70">
            <Button>Adicionar Terapia</Button>
          </Link>
          </div>
        </div>
        ))}  
    </div>
  )
}

export default ListServices