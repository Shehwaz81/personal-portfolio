import Story from "@/components/common/AboutMe"
import { ParticlesBackground } from "@/components/layout/Particles"


export const About = () => {
    return (
        <div className="h-screen before:backdrop-blur-md after:backdrop-blur-md">
            <ParticlesBackground/>
            <h1 className="text-5xl font-bold text-white m-5 flex shrink-0 justify-center">About me</h1>
            <Story></Story>
        </div>
    )
}

export default About