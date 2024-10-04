import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { About } from "../src/components/About"
import { Projects } from "./components/Projects"
import { Socials } from "./components/Socials"
import { Contact } from "./components/Contact"
import { Rights } from "./components/Rights"
import { Experience } from "./components/Experience"
import '../src/styles/Portfolio.scss'

function App() {
  return (
    <div className="root" id="home">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Socials/>
      <Contact/>
      <Rights/>
    </div>
  )
}

export default App
