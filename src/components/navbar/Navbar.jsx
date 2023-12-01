import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <span>Mauricio Oliveira</span>
            <div className='social'>
                <a href='https://www.linkedin.com/in/mauricio-oliveira-a1a0aa164/'><img src='/linkedin.png' alt='LinkedIn' /></a>
                <a href='https://github.com/Mauricio8583'><img src='/github.png' alt='Github' /></a>
                <a href='https://www.instagram.com/mauricio8583'><img src='/instagram.png' alt='Instagram' /></a>
                <a href='https://www.facebook.com/mauricio.oliveira.54772728'><img src='/facebook.png' alt='Facebook' /></a>                
            </div>
        </div>
    </div>
  )
}

export default Navbar