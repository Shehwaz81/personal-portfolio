import { useState } from "react";
import CubeIcon from "../../assets/cube-10018.svg";
import { Download, Mail, Github, Linkedin, Menu, X } from "lucide-react";

interface NavbarProps {
  About?: string;
  Projects?: string;
  Exp?: string;
}

export const Navbar = ({
  About = "About",
  Projects = "Projects",
  Exp = "Experiences",
}: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const element_pos = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: element_pos - offset,
        behavior: "smooth",
      });
    }
    setMobileOpen(false); // close mobile menu on click
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "public/assets/Resume-2.pdf";
    link.download = "Shehwaz_Singh_Saini_Resume.pdf";
    link.click();
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      onClick: () => window.open("mailto:shehwaz.longia@gmail.com"),
    },
    {
      icon: Github,
      label: "GitHub",
      onClick: () => window.open("https://github.com/Shehwaz81", "_blank"),
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/shehwazsaini",
          "_blank"
        ),
    },
  ];

  return (
    <>
      <div className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 items-center space-x-4">
        <nav className="group">
          <div className="bg-black/15 backdrop-blur-md rounded-3xl px-6 py-3 flex items-center text-white transition-all duration-500 hover:bg-black/90 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105 border border-white/5">
            <img
              src={CubeIcon}
              alt="Cube Icon"
              className="scale-120 w-6 h-6 mr-4 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-130"
            />
            <div className="border-l border-white/20 h-6 mr-6" />
            <div className="flex space-x-6">
              <button
                onClick={() => scrollToSection("about", 90)}
                className="nav-link relative group/nav"
              >
                {About}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover/nav:w-full rounded-full"></div>
              </button>
              <button
                onClick={() => scrollToSection("projects", 200)}
                className="nav-link relative group/nav"
              >
                {Projects}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover/nav:w-full rounded-full"></div>
              </button>
              <button
                onClick={() => scrollToSection("exp", 100)}
                className="nav-link relative group/nav"
              >
                {Exp}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover/nav:w-full rounded-full"></div>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Vertical Social Island - Fixed Center Right */}
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-md rounded-full px-2.5 py-4 flex flex-col items-center space-y-3 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <button
            onClick={handleDownloadResume}
            title="Download Resume"
            className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            <Download className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </button>
          <div className="h-px w-4 bg-white/10"></div>
          {contactLinks.map((link, index) => (
            <button
              key={index}
              onClick={link.onClick}
              title={link.label}
              className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <link.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </button>
          ))}
        </div>
      </div>

      <div className={`md:hidden fixed top-0 left-0 backdrop-blur-md w-full ${mobileOpen ? 'bg-black/90' : 'bg-black/50'} backdrop-blur-md border-b border-white/10 z-50 px-4 py-3 flex justify-between items-center`}>
        <img src={CubeIcon} alt="Logo" className="w-8 h-8" />
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed top-12 left-0 w-full bg-black/90 backdrop-blur-lg border-t border-white/10 z-40 p-4 space-y-4">
          <button onClick={() => scrollToSection("about", 70)} className="mobile-link">{About}</button>
          <button onClick={() => scrollToSection("projects", 70)} className="mobile-link">{Projects}</button>
          <button onClick={() => scrollToSection("exp", 70)} className="mobile-link">{Exp}</button>
          <hr className="border-white/10" />
          <button onClick={handleDownloadResume} className="more-btn">
            <Download className="w-4 h-4" /> Resume
          </button>
          <div className="flex space-x-2">
            {contactLinks.map((link, i) => (
              <button key={i} onClick={link.onClick} title={link.label} className="social-btn">
                <link.icon className="w-4 h-4 text-gray-300" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
