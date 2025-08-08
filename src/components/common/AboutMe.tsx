import React from 'react'

export const Story = () => {
    return (
    <>
        <div id="about" className="transition-all relative mx-auto mt-25 max-w-4xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-900/50 to-slate-900/30 rounded-xl backdrop-blur-sm space-y-6 sm:space-y-8 ring-1 ring-cyan-500/30 ring-opacity-20 hover:ring-cyan-500/60 hover:ring-2 hover:scale-102 hover:shadow-[0_0_5rem_rgba(0,255,255,0.3)] duration-400 ease-in-out">
            
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent text-center mb-10">
                My Journey
            </h2>
            
            <div className="space-y-10">
                <div className="relative">
                <div className="absolute w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-8 pl-6">
                    Hi! My name Is <span className="text-cyan-300 font-medium">Shehwaz Singh Saini</span>. I was born in India and moved to Brampton, Ontario when I was two years old. 
                    My family left everything behind in pursuit of a better life and education. Through sheer hard work and discipline
                    my parents were able to break through the poverty line, moving to a newly built house in Windsor, ON. This experience of seeing them
                    struggle as a child, but still keeping me happy taught me a lot about how valuable hard work is, and how <span className="text-cyan-300 font-medium">hard work always beats talent, always</span>.
                </p>
                </div>

                <div className="relative">
                <div className="absolute inset-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-8 pl-6">
                    Through the years I've discovered 3 passions of mine: <span className="text-cyan-300 font-medium">cubing, math, and problem solving</span>.
                    However, I wasn't initially talented at any of these. It took me hours to solve my first Rubik's Cube
                    and even longer to understand math concepts. My problem solving skills were also nowhere near
                    what my peers had in the beginning. But, remembering how my parents worked hard to get what they had,
                    I knew what I had to do. Work hard.
                </p>
                </div>

                <div className="relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-8 pl-6">
                    This persistence led me to tackle <span className="text-cyan-300 font-medium">Harvard's CS50x course</span>, spending countless hours debugging code 
                    and wrestling with algorithms. Completing CS50x wasn't just about learning programming—it opened doors 
                    I never imagined. The problem-solving skills I developed allowed me the opportunity to compete nationally in <span className="text-cyan-300 font-medium">WRO robotics</span> with a friend, 
                    placing <span className="text-cyan-300 font-medium">2nd in Canada</span>. Now I'm advancing in competitive programming and building my own projects, 
                    proving once again that consistent effort beats raw talent every time.
                </p>
                </div>
            </div>

            {/* Call to action that matches hero */}
            <div className="flex justify-center pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Currently building SkillForge • Next: Changing the world</span>
                </div>
            </div>
        </div>
        </>
    )
}


export default Story