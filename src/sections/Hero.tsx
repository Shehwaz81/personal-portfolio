import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { ProfileAvatar } from "@/components/common/AvatarProfile";

export const Hero = () => {

  const [text] = useTypewriter({
    words: [
      "Building the future...",
      "Solving real problems",
      "Creating impact",
      "Turning ideas into reality"
    ],
    loop: true,
    delaySpeed: 2000,
  });

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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <div className="flex flex-col items-center z-10 px-6 max-w-5xl mx-auto text-center space-y-12">
        
        <div className="flex-shrink-0">
          <ProfileAvatar />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white">
            Shehwaz Saini
          </h1>
          
          {/* Founder Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-slate-300">Aspiring Founder & Builder</span>
          </div>
        </div>

        <div className="space-y-3 max-w-3xl">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed">
            {text}
            <Cursor cursorStyle="|" />
          </p>
          <p className="text-base sm:text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            16-year-old developer. CS50 Graduate. 
            <br className="hidden sm:block" />
            Competitive Programmer.
          </p>
        </div>

        {/* Minimal Achievements */}
        <div className="flex flex-wrap justify-center gap-6 text-center pt-4">
          <div className="group">
            <div className="text-3xl sm:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">10+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Projects</div>
          </div>
          <div className="w-px h-12 bg-white/10"></div>
          <div className="group">
            <div className="text-3xl sm:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">2nd</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">WRO Int'l</div>
          </div>
          <div className="w-px h-12 bg-white/10"></div>
          <div className="group">
            <div className="text-3xl sm:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">∞</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Drive</div>
          </div>
        </div>

        {/* Minimal CTA - Apple Style */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            onClick={() => scrollToSection("projects", 200)} 
            className="group px-8 py-3.5 bg-white text-slate-900 font-medium rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
          >
            <span className="flex items-center gap-2">
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <button 
            onClick={() => window.open("https://www.linkedin.com/in/shehwazsaini/")} 
            className="px-8 py-3.5 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            Let's Connect
          </button>
        </div>

        {/* Current Focus - Minimal Status */}
        <div className="pt-8">
          <p className="text-sm text-slate-500 font-light">
            Currently building <span className="text-cyan-400 font-medium">SkillForge</span> • Transforming skill acquisition
          </p>
        </div>

      </div>
    </div>
  );
};