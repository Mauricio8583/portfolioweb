import "./app.scss"
import Contact from "./components/contact/Contact"
import Navbar from "./components/navbar/Navbar"
import Parallax from "./components/parallax/Parallax"
import Portfolio from "./components/portfolio/Portfolio"
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
      <section id="Portfolio"><Parallax type='portfolio' /></section>
      <Portfolio />
      <section id="Contato">
        <Contact />
      </section>
                         
    </div>
  )
}

export default App
