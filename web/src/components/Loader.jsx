import ReactDOM  from "react-dom"
import Spinner from "../assets/images/spinner.svg"
import ReactPortal from "./ReactPortal";


function Loader({isLoading}) {

  if(!isLoading){
    return null;
  }

  

  return (
   <ReactPortal containerId="loader-root">
    <div
      className="bg-background/[.7] backdrop-blur-sm fixed w-full h-full left-0 top-0 flex items-center justify-center"
    >
      <img src={Spinner} className="h-24 md:h-36" />
    </div>
   </ReactPortal>
  );
}

export default Loader