import { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar'

var options = {
  damping: 0.07
}

const Scroll = ({ children }) => {
  useEffect(() => {
    Scrollbar.init(document.body, options)
  }, [])

  return null
}

export default Scroll
