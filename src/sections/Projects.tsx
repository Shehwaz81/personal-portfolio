import Card from '@/components/ui/card'
import { useState } from 'react'

const Projects = () => {
    const [seeMore, setSeeMore] = useState(false)
    // list of projects
    const allProjects = [
        {
            title: 'SEO Content Generator',
            description: "AI-powered tool that instantly generates SEO-friendly product descriptions, FAQs, and marketing content for TrueWebPro clients",
            img: "/assets/truewebpro_logo.jpg",
            techStack: ["React", "Node.js", "OpenAI API", "Express", "Tailwind CSS"],
            github: "",
            demo: "https://truewebproai.onrender.com/",
            hasDemo: true
        },
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
            description: "Stock trading web app with real-time AJAX updates for buying, selling, and portfolio management",
            img: "/assets/cs50finance.jpg",
            techStack: ["HTML/CSS", "JavaScript", "Flask", "SQLite", "Python"],
            github: "https://github.com/username/cs50-finance",
            demo: "https://cs50.harvard.edu/x/psets/9/finance/",
            hasDemo: true
        },
        {
            title: "Signify",
            description: "ASL sign language translator with emotion recognition using computer vision and deep learning",
            img: "/assets/Signify.jpeg",
            github: "https://github.com/Shehwaz81/Signify",
            demo: "https://devpost.com/software/919909/joins/efTxB2B2XmK004od6BrN-w",
            techStack: ["React", "TypeScript", "Flask", "TensorFlow", "OpenCV"],
            hasDemo: true
        },
        {
            title: "WRO Robot 🏆",
            description: "Coded an autonomous robot that won WRO International Championship in Panama after placing 2nd at Nationals",
            img: "/assets/WRO.jpg",
            github: "https://github.com/Shehwaz81/personal-portfolio/",
            demo: "https://wro-association.org/",
            techStack: ["MicroPython", "OOP", "ESP32", "PyBricks"],
            hasDemo: true
        },
        {
            title: "Tic Tac Toe",
            description: "Interactive Tic Tac Toe with time travel - jump back to any move and explore alternate game outcomes",
            img: "/assets/timetic.png",
            github: "https://github.com/Shehwaz81/tic-tac-toe",
            demo: "https://tic-tac-toe-seven-ashen-70.vercel.app/",
            techStack: ["React", "JavaScript", "CSS", "Vite"],    
            hasDemo: true
        }
    ]
    // if user clicked see more, make array all objects, else make the array the first 3 projects
    const visibleProjects = seeMore ? allProjects : allProjects.slice(0, 3)

    const projectList = visibleProjects.map((project, index) => (
        <div 
            key={index}
            className={`w-full transition-all duration-500 ease-in-out ${
                index >= 3 && !seeMore 
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
            <h1 id="projects" className="text-4xl font-bold text-white text-center mb-10 mt-15 p-2">
                Projects
            </h1>
            
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {projectList}
                </div>

                <div className="text-center mt-8">
                    <button 
                        onClick={() => setSeeMore(!seeMore)}
                        className="px-8 py-3 bg-white/5 hover:bg-white/10 
                                 rounded-xl border border-white/20 hover:border-white/40 text-white 
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