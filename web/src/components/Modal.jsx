import { motion, AnimatePresence } from "framer-motion"
import ReactPortal from "./ReactPortal";

function Modal({title, visible, onCancel, onConfirm}) {

  if (!visible) {
    return null;
  }

  return(
   <ReactPortal containerId="modal-root">
    <AnimatePresence>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}

      className="bg-black/[.7] backdrop-blur-sm fixed w-full h-full left-0 top-0 flex items-center justify-center">
        <motion.div 
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y:0}}

        className="rounded bg-background shadow-md max-w-[280px] md:max-w-[450px] w-full p-4 md:p-6">
          <h1 className="text-base md:text-2xl font-semibold text-danger-400">
            {title}
          </h1>
          <p className="text-sm md:text-base mt-2">
            Esta ação não poderá ser desfeita.
          </p>
          <footer className="mt-8 w-full flex justify-end gap-4">
            <button 
            onClick={onCancel} 
            type="button" 
            className="text-sm md:text-base rounded p-4 text-gray-400 transition-all hover:text-gray-600 font-semibold"
            >
              Cancelar
            </button>

            <button 
            onClick={onConfirm}
            type="button" 
            className="text-sm md:text-base rounded bg-danger-400 transition-all hover:bg-danger-900 p-4 text-white font-semibold"
            >
              Deletar
            </button>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
   </ReactPortal>
  );
}

export default Modal