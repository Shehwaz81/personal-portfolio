import { Timeline } from '@/components/ui/timeline'
import React from 'react'

const Exp = () => {
  const data = [
    {
      title: "CS50X",
      content: (
        <div>
            <p className="text-xs font-normal md:text-sm text-white max-w-180 mx-auto max-w-180 mx-auto">
                CS50x was what jump started my dev journey. From C fundamentals to full-stack development, I built diverse projects that taught me how to think like a developer, and more importantly, how to problem solve effectively.
            </p>
            <div className="grid grid-cols-2 gap-4 overflow-hidden p-5 scale-90">
            <img
                src="/public/assets/cs50x.webp"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 duration-300 rounded-xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
                src="/public/assets/cs502.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 duration-300 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img 
                src="/public/assets/cs503.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 duration-300 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
                src="https://assets.aceternity.com/templates/startup-4.webp"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 hover:scale-105 duration-300 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            </div>
        </div>
      ),
    },
    {
        title: "Youreka HSI",
        content: (
        <div>
            <p className="text-xs font-normal md:text-sm text-white max-w-180 mx-auto">
                Led team research project on infectious disease and analyzed measles outbreak data using R programming to create statistical models and regression visualizations. Presented research findings at University of Windsor.
            </p>
            <div className="grid grid-cols-2 gap-4 overflow-hidden p-5 scale-90">
                <img
                src="/public/assets/plot1.webp"
                alt="Statistical analysis visualization"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 duration-300 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                src="/public/assets/presentationpic.jpg"
                alt="Research presentation at University of Windsor"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 duration-300 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                src="/public/assets/windsorU.webp"
                alt="University of Windsor campus"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 duration-300 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                src="/public/assets/plot3.webp"
                alt="Data regression model visualization"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 duration-300 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
            </div>
        </div>
        )
    },
    {
        title: "WRO",
        content: (
        <div>
            <p className="text-xs font-normal md:text-sm text-white max-w-180 mx-auto">
                Contributed to robotics team that achieved 2nd place at WRO Nationals. Joined the project in progress and quickly adapted to contribute to the codebase while collaborating under competition pressure.
            </p>
            <div className="grid grid-cols-2 gap-4 overflow-hidden p-5 scale-90">
                <img
                src="/public/assets/WRO3.webp"
                alt="WRO robotics competition"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 transform duration-300 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                src="/public/assets/WRO.jpg"
                alt="WRO team collaboration"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 duration-300 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                src="/public/assets/WRO1.jpg"
                alt="WRO robotics project"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 duration-300 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                src="/public/assets/WRO2.jpg"
                alt="WRO competition setup"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 duration-300 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
            </div>
    </div>
        )
    },
    {
        title: "Startup Intern ",
        content: (
        <div>
            <p className="text-xs font-normal md:text-sm text-white max-w-180 mx-auto">
                Working as a software development intern, implementing AI integrations and server-side functionality. Currently developing OpenAI API integration to enhance the platform's capabilities while collaborating with experienced developers on systems.
            </p>
            <div className="grid grid-cols-2 gap-4 overflow-hidden p-5 scale-90">
                <img
                src="/public/assets/TrueWebPro.png"
                alt="WRO robotics competition"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 transform duration-300 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
                <img
                src="/public/assets/gpt.jpg"
                alt="WRO team collaboration"
                width={500}
                height={500}
                className="h-20 w-full hover:scale-105 duration-300 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
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