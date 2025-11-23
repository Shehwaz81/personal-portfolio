

interface CardProps {
    title?: string;
    description?: string;
    img?: string;
    github?: string;
    hasDemo?: boolean;
    demo?: string;
    techStack?: string[];
    className?: string;
    display?: string;
}

const Card = ({
  title = "Signify",
  description = "An ASL sign language translator with an emotion recognition model built in for uniqueness",
  img = "/public/assets/Signify.jpeg",
  github = "https://github.com/Shehwaz81/personal-portfolio/",
  demo = "https://devpost.com/software/919909/joins/efTxB2B2XmK004od6BrN-w",
  techStack = ["React", "TypeScript", "Flask", "TensorFlow", "OpenCV"],
  hasDemo,
  className,
  display,
}: CardProps) => {
  const techElements = techStack.map((tech, index) => (
    <span
      key={index}
      className="text-xs text-slate-300 bg-white/5 border border-white/20 px-3 py-1.5 rounded-full hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-default"
    >
      {tech}
    </span>
  ));

  const style = { display };

  return (
    <div
      style={style}
      className={`group w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-slate-900/70 transform hover:-translate-y-2 rounded-2xl backdrop-blur-md overflow-hidden ring-1 ring-white/10 hover:ring-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] transition-all duration-500 mx-auto flex flex-col relative`}
    >
      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
      
      <div className={`relative overflow-hidden bg-slate-800/30 h-64 ${className}`}>
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"></div>
        <img
          src={img}
          alt={`${title} preview`}
          className={`w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-7 flex flex-col flex-grow relative z-20">
        <h3 className="text-2xl font-bold text-white mb-4 text-center sm:text-left transition-all duration-500">
          {title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 text-center sm:text-left flex-grow group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>

        <div className="flex justify-center sm:justify-start flex-wrap gap-2 mb-6">
          {techElements}
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-3 pt-5 border-t border-slate-600/40 ${
            hasDemo ? "" : "justify-center"
          }`}
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 group/btn transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 text-slate-300 group-hover/btn:text-white group-hover/btn:rotate-12 transition-all duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-sm font-medium text-slate-200 group-hover/btn:text-white transition-colors">
              Code
            </span>
          </a>

          {hasDemo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-xl border border-cyan-400/50 hover:border-cyan-300 text-white font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 group/demo transform hover:scale-105"
            >
              <svg
                className="w-5 h-5 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span className="text-sm font-semibold">
                View Demo
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


export default Card;