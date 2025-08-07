import { ProfileAvatar } from "@/components/common/AvatarProfile";
import Badge from "@/components/common/badge";
import { ParticlesBackground } from "@/components/layout/Particles";

interface HeroProps {
    education?: string;
    achievement?: string;
    serious?: string;
    hobby?: string;
  }


export const Hero = ({
  education="CS50x Graduate",
  achievement="WRO National 2nd",
  serious="Competitive Programmer",
  hobby="Speed Cuber"
} : HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <ParticlesBackground/>
      <div className="flex flex-col lg:flex-row items-center lg:gap-8 z-10 px-6 max-w-8xl mx-auto ">
        
        <div className="flex-shrink-0 !space-y-0">
          <ProfileAvatar />
        </div>

        <div className="h-100 mr-1 ml-1 hidden lg:block "/>
        
        <div className="flex flex-col space-y-7 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white/70 to-cyan-300 bg-clip-text text-transparent">
            Shehwaz Saini
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-2xl">
            Bulding <span className="text-cyan-300 font-medium">AI-driven solutions</span> for the world to use
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <Badge color="cyan" className="" content={achievement}/>
            <Badge color="cyan" className="" content={serious}/>  
            <Badge color="cyan" className="" content={hobby}/>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center ">
            <button className="relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-blue-500 hover:to-cyan-500 hover:scale-105 transition-transform ease-in-out duration-300">
              View Projects
            </button>
            <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300">
              Connect
            </button>
          </div>

          {/* Status */}
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span>Building SkillForge • Changing how we level up</span>
          </div>
        </div>

      </div>
    </div>
  );
};