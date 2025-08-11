

export const About = () => {
    return (
        <section className="min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-10 bg-transparent">
            <div
                id="about"
                className="relative mx-auto max-w-4xl p-6 sm:p-8 lg:p-10 
                bg-gradient-to-br from-slate-900/50 to-slate-900/30 
                rounded-xl backdrop-blur-sm space-y-6 sm:space-y-8 
                ring-1 ring-cyan-500/30 transition-all 
                hover:ring-cyan-500/60 hover:ring-2 
                hover:shadow-[0_0_5rem_rgba(0,255,255,0.3)] duration-400 ease-in-out"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent text-center mb-8 sm:mb-10">
                    My Journey
                </h2>

                <div className="space-y-8 sm:space-y-10">
                    <div className="relative pl-6 flex">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full hidden md:block"></div>
                        <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                            Hi! My name is <span className="text-cyan-300 font-medium">Shehwaz Singh Saini</span>.
                            I was born in India and moved to Brampton, Ontario when I was two years old.
                            My family left everything behind in pursuit of a better life and education.
                            Through sheer hard work and discipline, my parents broke through the poverty line,
                            moving to a newly built house in Windsor, ON. Seeing them struggle almost everyday while still keeping me happy taught me one valuable lesson;
                            <span className="text-cyan-300 font-medium"> hard work always beats talent</span>.
                        </p>
                    </div>

                    <div className="relative pl-6">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full hidden md:block"></div>
                        <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                            Through the years I've discovered 3 passions of mine: <span className="text-cyan-300 font-medium">cubing, math, and problem solving</span>.
                            But I wasn’t initially good at any of them. My first Rubik’s Cube took hours, and math concepts were slow to click.
                            My problem-solving skills lagged behind my peers—but remembering my parents’ example, I knew the answer was hard work.
                        </p>
                    </div>

                    <div className="relative pl-6">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full hidden md:block"></div>
                        <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                            This persistence led me to <span className="text-cyan-300 font-medium">Harvard's CS50x course</span>,
                            spending countless hours debugging code and wrestling with algorithms.
                            It opened doors I never imagined, like the opportunity to compete nationally in <span className="text-cyan-300 font-medium">WRO robotics</span> where me and my friend placed <span className="text-cyan-300 font-medium">2nd in Canada</span>, 
                            and the opporuntiy to intern at a small <span className="text-cyan-300 font-medium">Startup</span>, communicating and building along side professional devs.
                        </p>
                    </div>
                    <div className="relative pl-6">
                        <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                            Now, I’m advancing in competitive programming and building projects, proving again that effort beats raw talent every time.
                        </p>
                    </div>
                </div>


                <div className="flex justify-center pt-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span>Currently building SkillForge • Next: Changing the world</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About