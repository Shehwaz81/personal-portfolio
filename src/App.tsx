import Divider from './components/layout/divider'
import Navbar from './components/layout/Navbar'
import './index.css'
import About from './sections/About'
import { Hero } from './sections/Hero'

export const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Divider/>
      <About/>
    </>
  )
}

export default App 
