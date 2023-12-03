
const Links = () => {

  const itens = ['Home','Habilidades','Portfolio','Contato','Sobre']

  return (
    <div className='links'>
        {itens.map(item => (
            <a href={`#${item}`} key={item}>{item}</a>
        ))}
    </div>
  )
}

export default Links