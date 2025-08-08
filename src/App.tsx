import Divider from './components/layout/divider'
import Navbar from './components/layout/Navbar'
import { ParticlesBackground } from './components/layout/Particles'
import './index.css'
import About from './sections/About'
import { Hero } from './sections/Hero'

export const App = () => {
  return (
    <>
      <ParticlesBackground/>
      <Navbar/>
      <Hero/>
      <Divider/>
      <About/>
    </>
  )
}

export default App 
