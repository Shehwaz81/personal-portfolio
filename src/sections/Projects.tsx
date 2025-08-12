import Card from '@/components/ui/card'
import { useState } from 'react'

const Projects = () => {
    const [seeMore, setSeeMore] = useState(false)
    // list of projects
    const allProjects = [
        {
            title: 'SkillForge',
            description: "AI-powered platform that generates personalized skill trees and learning paths for any skill!",
            img: "/assets/Skillforge proto.png",
            techStack: ["React", "Node.js", "PostgreSQL", "OpenAI API", "TypeScript"],
            github: "https://github.com/username/skillforge",
            demo: "https://skillforge-demo.com",
            hasDemo: false
        },
        {
            title: 'CS50 Finance',
            description: "Finance Web App that allows you to buy, sell, and search stock with real time AJAX updates",
            img: "/assets/cs50finance.png",
            techStack: ["HTML", "CSS", "JavaScript", "Flask", "Jinja", "Python"],
            github: "https://github.com/username/cs50-finance",
            demo: "https://cs50.harvard.edu/x/psets/9/finance/",
            hasDemo: true
        },
        {
            title: "Signify",
            description: "An ASL sign language translator with an emotion recognition model built in for uniqueness",
            img: "/assets/Signify.jpeg",
            github: "https://github.com/Shehwaz81/Signify",
            demo: "https://devpost.com/software/919909/joins/efTxB2B2XmK004od6BrN-w",
            techStack: ["React", "TypeScript", "Flask", "TensorFlow", "OpenCV"],
            hasDemo: true
        },
        {
            title: "WRO Robot",
            description: "Helped code a robot which was used to compete in WRO National (Montreal) using OOP",
            img: "/assets/WRO.jpg",
            github: "https://github.com/Shehwaz81/personal-portfolio/",
            demo: "https://wro-association.org/",
            techStack: ["MicroPython", "OOP", "ESP32", "PyBricks"],
            hasDemo: true
        },
        {
            title: "Tic Tac Toe",
            description: "A tic tac toe game with a twist. Jump back in time and alter the future of the game effortlessly",
            img: "/assets/timetic.png",
            github: "https://github.com/Shehwaz81/tic-tac-toe",
            demo: "https://tic-tac-toe-seven-ashen-70.vercel.app/",
            techStack: ["React", "JavaScript", "CSS", "Vite",],    
            hasDemo: true
        }
    ]
    // if user clicked see more, make array all objects, else make the array the first 2 projects
    const visibleProjects = seeMore ? allProjects : allProjects.slice(0, 2)

    const projectList = visibleProjects.map((project, index) => (
        <div 
            key={index}
            className={`w-full transition-all duration-500 ease-in-out ${
                index >= 2 && !seeMore 
                    ? 'hidden' 
                    : 'opacity-100 scale-100 translate-y-0'
            }`}
        >
            <Card
                title={project.title}
                description={project.description}
                img={project.img}
                techStack={project.techStack}
                github={project.github}
                hasDemo={project.hasDemo}
                demo={project.demo}
            />
        </div>
    ))
    return (
        <>
            <h1 id="projects" className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent text-center mb-10 mt-15 p-2">
                Projects
            </h1>
            
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
                    {projectList}
                </div>

                <div className="text-center mt-8">
                    <button 
                        onClick={() => setSeeMore(!seeMore)}
                        className="px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 
                                 rounded-xl border border-cyan-500/40 hover:border-cyan-400/70 text-cyan-300 hover:text-white 
                                 font-medium transition-all duration-300 transform hover:scale-105"
                    >
                        {seeMore ? 'Show Less' : 'See More Projects'}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Projects