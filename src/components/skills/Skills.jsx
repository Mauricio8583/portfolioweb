import { useRef } from 'react'
import './skills.scss'
import { motion } from 'framer-motion'

const Skills = () => {

   const ref = useRef();

   const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
   }

  return (
    <motion.div className='skills' variants={variants} initial='initial' animate='animate' ref={ref}>
        <motion.div className='textContainer' variants={variants}>
            <p>Desenvolvedor Júnior <br />
            Estudante de Tecnologia</p>
            <hr />
        </motion.div>
        <motion.div className='titleContainer' variants={variants}>
            <div className='title'>
                <h1><motion.b whileHover={{color: 'orange'}}>Algumas</motion.b> das</h1>
            </div>
            <div className='title'>
                <h1><motion.b whileHover={{color: 'orange'}}>Tecnologias</motion.b> que uso</h1>
                <button>O que faço</button>
            </div>
        </motion.div>
        <motion.div className='listContainer' variants={variants}>
            <motion.div className='box' whileHover={{background: 'lightgray', color: 'black'}}>
                <h2>Javascript</h2>
                <p>Já trabalhei profissionalmente com essa linguagem, tenho contato com Javascript desde de 2014, 
                também já desenenvolvi projetos pessoais com ela.
                </p>
            </motion.div>
            <motion.div className='box' whileHover={{background: 'lightgray', color: 'black'}}>
                <h2>ReactJs</h2>
                <p>Já desenvolvi projetos complexos com este framework, ReactJs é usado neste portfolio, 
                    possuo contato com React desde 2020.
                </p>
            </motion.div>
            <motion.div className='box' whileHover={{background: 'lightgray', color: 'black'}}>
                <h2>Python</h2>
                <p>Tenho contato com Python desde 2019, já desenvolvi projetos complexos integrado com React no frontEnd, 
                    utilizei Python em meu TCC.
                </p>
            </motion.div>
            <motion.div className='box' whileHover={{background: 'lightgray', color: 'black'}}>
                <h2>SQL</h2>
                <p>Utilizei SQL para trabalhar com banco de dados em projetos complexos sendo a tecnologia de 
                    banco de dados relacional que mais tenho familiaridade, tenho contato com esta tecnologia desde 2014
                </p>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Skills