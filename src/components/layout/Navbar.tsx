import React, { useState } from 'react';
import CubeIcon from '../../assets/cube-10018.svg'
import { Download, Mail, Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  About?: string;
  Projects?: string;
  Exp?: string;
}

export const Navbar = ({
  About = "About",
  Projects = "Projects",
  Exp = "Experiences"
}: NavbarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [navHover, setNavHover] = useState(false);

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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'public/assets/Resume-1.pdf';
    link.download = 'Shehwaz_Singh_Saini_Resume.pdf';
    link.click();
  };
  // make list of dicts for later
  const contactLinks = [
    { 
      icon: Mail,
      label: 'Email',
      onClick: () => window.open('mailto:shehwazlongia@gmail.com')
    },
    { 
      icon: Github,
      label: 'GitHub',
      onClick: () => window.open('https://github.com/Shehwaz81', '_blank')
    },
    { 
      icon: Linkedin,
      label: 'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/shehwaz-saini-566494318/', '_blank')
    },
  ];

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center space-x-4">
      
      <nav 
        className="group"
        onMouseEnter={() => setNavHover(true)}
        onMouseLeave={() => setNavHover(false)}
      >
        <div className="bg-black/15 backdrop-blur-md rounded-3xl px-6 py-3 flex items-center text-white transition-all duration-500 hover:bg-black/90 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105 border border-white/5">
          <img 
            src={CubeIcon} 
            alt="Cube Icon" 
            className="scale-120 w-6 h-6 mr-4 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-130" 
          />
          <div className="border-l border-white/20 h-6 mr-6"/>
          <div className="flex space-x-6">
            <button 
              onClick={() => scrollToSection("about", 90)} 
              className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:scale-105 relative group/nav"
            >
              {About}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover/nav:w-full rounded-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection("projects", 200)} 
              className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:scale-105 relative group/nav"
            >
              {Projects}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover/nav:w-full rounded-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection("exp", 100)} 
              className="text-white/70 hover:text-cyan-400 transition-all duration-300 hover:scale-105 relative group/nav"
            >
              {Exp}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover/nav:w-full rounded-full"></div>
            </button>
          </div>
        </div>
      </nav>

      
      <div 
        className={`bg-black/90 backdrop-blur-md rounded-full transition-all duration-500 ease-out overflow-hidden cursor-pointer border border-gray-700/50 hover:border-cyan-400/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] ${
          isExpanded ? 'w-72 h-12' : 'w-24 h-10'
        } ${navHover ? 'transform translate-x-3' : ''}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {!isExpanded ? (
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center space-x-2 px-3">
              <Download className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-sm text-cyan-400 font-medium">More</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between h-full px-4 animate-in slide-in-from-left-3 duration-300">
            <button
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full px-3 py-2 transition-all duration-200 hover:scale-105 border border-cyan-400/20 hover:border-cyan-400/40 group/btn"
            >
              <Download className="w-3 h-3 text-cyan-400 group-hover/btn:animate-bounce" />
              <span className="text-xs text-cyan-400 font-medium">Resume</span>
            </button>

            <div className="flex items-center space-x-2">
              {contactLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={link.onClick}
                  title={link.label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg border border-white/5 hover:border-white/20 group/social"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <link.icon className="w-3 h-3 text-gray-300 group-hover/social:text-white transition-colors duration-200" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;