import React from "react";
import signify from "../../assets/Signify.jpeg"
import Badge from "../common/badge";
interface cardProps {
    title?: string;
    description?: string;
    img?: string;
    github?: string;
    demo?: string;
    techStack?: string[];
    className?: string;
}


const Card = ({
    title="Signify",
    description="An ASL sign language translator with an emotion recognition model built in for uniqueness",
    img="/src/assets/Signify.jpeg",
    github="https://github.com/Shehwaz81/Signify",
    demo="https://devpost.com/software/919909/joins/efTxB2B2XmK004od6BrN-w",
    techStack=["React", "Typescript", "Flask", "Tensorflow", "OpenCV"],
    className
}: cardProps) => {
    const Tech = techStack.map((tech, index) => (
        <div key={index} className="text-xs text-cyan-300 bg-cyan-300/10 border border-cyan-400/30 px-3 py-1 rounded-full">
            {tech}
        </div>
    )) // map all items passed and just plug in var in return statement
    return (
    <div className='flex flex-col justify-start max-w-full h-auto bg-gradient-to-br from-slate-900/50 to-slate-900/30 transform hover:-translate-y-2 rounded-2xl backdrop-blur-sm p-6 ring-1 ring-cyan-500/30 hover:ring-cyan-500/60 hover:shadow-[0_0_2rem_rgba(0,255,255,0.3)] transition-all duration-300'>
        
        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent mb-4 text-center">
        {title}
        </h3>

        <div className="mb-4 rounded-lg overflow-hidden">
        <img 
            src={img} 
            alt={`${title} preview`}
            className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
        />
        </div>
        
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-center flex-grow">
        {description}
        </p>

        <div className="flex justify-center  flex-wrap gap-2 mb-4 mt-4">
            {Tech}
        </div>


        <div className=" flex gap-3 pt-4 border-t border-slate-700/50">
            <a 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 group"
            >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    Code
                </span>
            </a>
            
            <a 
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group"
            >
                <svg className="w-5 h-5 text-cyan-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="text-sm font-medium text-cyan-300 group-hover:text-white transition-colors">
                    Demo
                </span>
            </a>
        </div>
    </div>
    )
}

export default Card