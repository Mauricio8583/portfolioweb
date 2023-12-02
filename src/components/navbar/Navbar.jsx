import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <motion.span initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale: 1}}
            transition={{duration:1}} >Mauricio Oliveira</motion.span>
            <div className='social'>
                <a href='https://www.linkedin.com/in/mauricio-oliveira-a1a0aa164/' target='_blank'><img src='/linkedin.png' alt='LinkedIn' /></a>
                <a href='https://github.com/Mauricio8583' target='_blank'><img src='/github.png' alt='Github' /></a>
                <a href='https://www.instagram.com/mauricio8583' target='_blank'><img src='/instagram.png' alt='Instagram' /></a>
                <a href='https://www.facebook.com/mauricio.oliveira.54772728' target='_blank'><img src='/facebook.png' alt='Facebook' /></a>                
            </div>
        </div>
    </div>
  )
}

export default Navbar