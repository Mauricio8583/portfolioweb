import { motion } from 'framer-motion'


const ToggleButton = ({setOpen}) => {

  return (
    <button onClick={() => setOpen((prev) => !prev)}>
        <motion.span className="line_1" variants={{open: { transform: 'rotate(90deg)'}}}></motion.span>
        <motion.span className="line_2" variants={{open: { opacity: 0 }}}></motion.span>
        <motion.span className="line_3" variants={{open: { transform: 'rotate(-90deg)' }}}></motion.span>
    </button>
  )
}

export default ToggleButton