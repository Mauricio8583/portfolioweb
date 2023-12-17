import './profile.scss'
import { motion } from 'framer-motion'

const Profile = () => {

  const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
  }

  
  return (
    <div className='profile'>
        <motion.div className='text-container' variants={textVariants}  initial='initial' animate='animate'>
            <motion.h2 variants={textVariants}>Mauricio Oliveira</motion.h2>
            <motion.h1 variants={textVariants}>Desenvolvedor Web</motion.h1>
            <motion.div className='buttons' variants={textVariants}>
                <motion.button><a href='#Portfolio'>Projetos</a></motion.button>
                <motion.button><a href='#Contato'>Contato</a></motion.button>
            </motion.div>
           </motion.div>        
        
        <div className='image-container'>
            <img src='/perfil.jpg' alt='perfil' />
        </div>
    </div>
  )
}

export default Profile