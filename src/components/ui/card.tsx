

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
      className="text-xs text-cyan-200 bg-cyan-400/15 border border-cyan-400/40 px-3 py-1.5 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-200"
    >
      {tech}
    </span>
  ));

  const style = { display };

  return (
    <div
      style={style}
      className={`w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 transform hover:-translate-y-1 rounded-2xl backdrop-blur-sm overflow-hidden ring-1 ring-slate-600/40 hover:drop-shadow-[0_0_0.3rem_cyan] hover:ring-cyan-500/50 hover:shadow-[0_8px_32px_rgba(6,182,212,0.15)] transition-all duration-300 mx-auto flex flex-col`}
    >
      <div className={`relative overflow-hidden bg-slate-800/30 h-64 duration-450 hover:scale-105 ${className}`}>
        <img
          src={img}
          alt={`${title} preview`}
          className={`w-full h-full object-cover transition-transform duration-500 transform`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4 text-center sm:text-left">
          {title}
        </h3>

        <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 text-center sm:text-left flex-grow">
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
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-800/60 hover:bg-slate-700/60 rounded-xl border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-slate-300 group-hover:text-cyan-300 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
              Code
            </span>
          </a>

          {hasDemo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 hover:from-cyan-500/35 hover:to-blue-500/35 rounded-xl border border-cyan-500/40 hover:border-cyan-400/70 transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-cyan-300 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span className="text-sm font-medium text-cyan-300 group-hover:text-white transition-colors">
                Demo
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


export default Card;