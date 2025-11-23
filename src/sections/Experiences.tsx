import { Timeline } from '@/components/ui/timeline'


const Exp = () => {
  const data = [
    {
      title: "CS50X",
      content: (
        <div className="space-y-4">
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                <span className="text-cyan-400 font-medium">CS50X jump started my dev journey</span>. From C fundamentals to full-stack development, I built diverse projects that taught me how to think like a developer and <span className="text-cyan-400 font-medium">problem solve effectively</span>.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
                <img
                    src="/assets/cs50x.webp"
                    alt="CS50X Certificate"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
                <img
                    src="/assets/cs502.png"
                    alt="CS50 Project"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
                <img 
                    src="/assets/cs503.png"
                    alt="CS50 Project"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
                <img
                    src="https://assets.aceternity.com/templates/startup-4.webp"
                    alt="CS50 Project"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
            </div>
        </div>
      ),
    },
    {
        title: "Youreka HSI",
        content: (
        <div className="space-y-4">
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Led team research project on infectious disease. <span className="text-cyan-400 font-medium">Analyzed measles outbreak data using R programming</span> to create statistical models and regression visualizations. Presented findings at <span className="text-cyan-400 font-medium">University of Windsor</span>.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
                <img
                    src="/assets/plot1.webp"
                    alt="Statistical analysis"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
                <img
                    src="/assets/presentationpic.jpg"
                    alt="Presentation at Windsor"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
                <img
                    src="/assets/windsorU.webp"
                    alt="University of Windsor"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
                <img
                    src="/assets/plot3.webp"
                    alt="Regression model"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
            </div>
        </div>
        )
    },
    {
        title: "WRO Panama",
        content: (
        <div className="space-y-4">
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                After placing <span className="text-cyan-400 font-medium">2nd at WRO Nationals in Montreal</span>, our team advanced to represent Canada at the <span className="text-cyan-400 font-medium">WRO International Invitational Championship in Panama</span>. Competing against teams from around the world, we <span className="text-cyan-400 font-semibold">won the championship</span>.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
                <img
                    src="/assets/WRO3.webp"
                    alt="WRO Competition"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
                <img
                    src="/assets/WRO.jpg"
                    alt="WRO Team"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
                <img
                    src="/assets/WRO1.jpg"
                    alt="WRO Robot"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
                <img
                    src="/assets/WRO2.jpg"
                    alt="WRO Setup"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
            </div>
        </div>
        )
    },
    {
        title: "Startup Intern",
        content: (
        <div className="space-y-4">
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Implemented <span className="text-cyan-400 font-medium">AI system that generates SEO-optimized product descriptions and FAQs</span> from database content, <span className="text-cyan-400 font-medium">reducing projected costs by 50%</span> and saving hours of manual content creation.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
                <img
                    src="/assets/TrueWebPro.png"
                    alt="TrueWebPro"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
                <img
                    src="/assets/gpt.jpg"
                    alt="AI Integration"
                    className="w-full h-32 md:h-48 rounded-lg object-cover hover:scale-[1.02] transition-transform duration-300 ring-1 ring-white/10"
                />
            </div>
        </div>
        )
    }

    ];

    return (
        <div id="exp" className='max-w-10xl mt-30'>
            <Timeline data={data}></Timeline>
        </div>
    )
}

export default Exp