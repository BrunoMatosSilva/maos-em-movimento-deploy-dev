import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react"
import { TbArrowNarrowUp } from 'react-icons/tb'

export function BackToTop () {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 200) setShow(true);
    if (show && window.scrollY <= 200) setShow(false);
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[handleScroll])

  return (
    <AnimatePresence>
    {show && (
      <motion.div 
      className="fixed right-4 bottom-4 z-20"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
      >
      <button
      className="rounded-lg flex items-center justify-center bg-blue-900 h-12 w-12 text-white shadow-lg shadow-blue-400/20"
      onClick={scrollToTop}
      >
        <TbArrowNarrowUp size={20} />
      </button>
    </motion.div>    
    )}
    </AnimatePresence>
  )
}