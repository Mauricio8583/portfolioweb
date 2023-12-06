import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Parallax from "./components/parallax/Parallax"
import Profile from "./components/profile/Profile"
import Skills from "./components/skills/Skills"

function App() {
  
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Profile />
      </section>
      <section><Parallax type='skills' /></section>
      <section id="Habilidades"><Skills /></section>
      <section><Parallax type='portfolio' /></section>
      <section id="Portfolio"><a href="">Portfolio</a></section>
      <section id="Contato"><a href="">Contato</a></section>
      <section id="Sobre"><a href="">Sobre</a></section>                    
    </div>
  )
}

export default App
