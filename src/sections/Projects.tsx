import Card from '@/components/ui/card'
import React from 'react'

const Projects = () => {
    return (
    <>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent text-center mb-10 mt-15 p-2">
            Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto justify-items-center">
            <Card
                title='SkillForge'
                description="AI-powered platform that generates personalized skill trees and learning paths for any skill!"
                img="/src/assets/Skillforge proto.png"
                techStack={["React", "Node.js", "PostgreSQL", "OpenAI API", "TypeScript"]}
            />
            <Card
                title='CS50 Finance'
                description="Finance Web App that allows you to buy, sell, and search stock with real time AJAX updates"
                img="/src/assets/cs50finance.png"
                techStack={["HTML", "CSS", "JavaScript", "Flask", "Jinja", "Python"]}
            />
            <Card></Card>
        </div>
    </>
    )
}

export default Projects