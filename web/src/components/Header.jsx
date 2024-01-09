import { ArrowCircleLeft } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

import logoImage from "../assets/images/logo.svg";
import Menu from "./Menu";

function Header({title, isBackNav}) {
  const navigate = useNavigate();

  return (
  <>
    <Menu />
    <div className="w-full mt-6 flex justify-center">
      <div className="w-full mx-2 h-150px max-w-[500px] flex items-center justify-between border-b-[1px] border-gray-200">
        {isBackNav ? (<button onClick={() => navigate(-1)}>
          <ArrowCircleLeft size={34} color="283460" />
        </button>) : ""}

        <img src={logoImage} alt="Duas mãos e um coração" className="w-[65px] md:w-[100px]" />
        <h1 className="text-xl md:text-3xl text-blue-900 font-semibold font-[barrio]">{title}</h1>
      </div>
    </div>
  </>
  )
}

export default Header