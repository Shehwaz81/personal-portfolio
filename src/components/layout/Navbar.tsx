import '/src/index.css'
import CubeIcon from '../../assets/cube-10018.svg'

interface NavbarProps {
  About?: string;
  Projects?: string;
  Exp?: string;
}

export const Navbar = ({
  About="About",
  Projects="Projects",
  Exp="Experiences"
}: NavbarProps) => {

  const scrollToSection = (sectionId: string, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const element_pos = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: element_pos - offset,
        behavior: 'smooth'
      });
    }
  };
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">      
      <div className="island z-10 bg-black/15 backdrop-blur-md rounded-3xl px-6 py-2 flex items-center text-white transition-all duration-500 hover:bg-black/90 hover:drop-shadow-[0_0_0.8rem_cyan] scale-110 hover:scale-115 group">


        <img src={CubeIcon} alt="Cube Icon" className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-500 group-hover:rotate-360 group-hover:scale-105" />
        
        <div className=" border-l border-white/100 h-6 ml-3 mr-4"/>
        
        <div className="flex space-x-6">
          <button onClick={() => scrollToSection("about", 90)} className="text-white/70 hover:text-cyan-400 duration-300 hover:scale-102">{About}</button>
          <button onClick={() => scrollToSection("projects", 200)} className="text-white/70 hover:text-cyan-400 duration-300 hover:scale-102">{Projects}</button>
          <button onClick={() => scrollToSection("exp", 30)} className="text-white/70 hover:text-cyan-400  duration-300 hover:scale-102 mr-2">{Exp}</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar