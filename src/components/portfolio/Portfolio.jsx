import { useRef } from 'react'
import './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'

const items = [
    {
        id: 1,
        title: 'E-Commerce Store',
        img: '/store_1.png',
        desc: 'Projeto de um site de compras online, foi feito utilizando ReactJs, Nodejs e Styled-Components'
    },
    {
      id: 2,
      title: 'Pizzaria Online',
      img: '/site_1.png',
      desc: 'Projeto de um site de uma pizzaria online, foi feito utilizando ReactJs, NextJs e SCSS'
    },
    {
      id: 3,
      title: 'Rede Social',
      img: '/social_media2.png',
      desc: 'Projeto de uma rede social utilizando ReactJs e Styled-Components'
    }
]

const Single = ({item}) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({target: ref});

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{y: y}}>
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
        
      </div>
      
    </section>
  )
}

const Portfolio = () => {

  const ref = useRef();

  const {scrollYProgress} = useScroll({target: ref, offset: ['end end', 'start start']});

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Projetos</h1>
        <motion.div className='progressBar' style={{scaleX:scaleX}}></motion.div>
      </div>
        {items.map(item => (
          <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio