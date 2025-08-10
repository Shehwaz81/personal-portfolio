import Divider from './components/layout/divider'
import Navbar from './components/layout/Navbar'
import { ParticlesBackground } from './components/layout/Particles'
import './index.css'
import About from './sections/About'
import { Hero } from './sections/Hero'
import Projects from './sections/Projects'

export const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Divider/>
      <About/>
      <Divider/>
      <Projects/>
      <Divider/>
    </>
  )
}

export default App 
