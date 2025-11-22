import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { RubiksCube } from '@/components/common/RubiksCube';
import { Suspense } from 'react';

export const About = () => {
    return (
    <section className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 bg-transparent py-16">
        <div id="about" className="relative mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold
            bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent
            text-center mb-8 sm:mb-10">
            My Journey
            </h2>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
                {/* 3D Rubik's Cube Section */}
                <div className="order-2 lg:order-1">
                    <div className="sticky top-24">
                        <div className="relative h-[280px] sm:h-[350px] lg:h-[380px] rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm border border-cyan-500/30 overflow-hidden group hover:border-cyan-400/60 transition-all duration-500 hover:shadow-[0_0_2rem_rgba(0,255,255,0.15)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Canvas className="cursor-grab active:cursor-grabbing">
                                <Suspense fallback={null}>
                                    <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                                    <ambientLight intensity={0.6} />
                                    <directionalLight position={[10, 10, 5]} intensity={1.2} />
                                    <directionalLight position={[-10, -10, -5]} intensity={0.6} />
                                    <pointLight position={[0, 0, 10]} intensity={0.5} color="#00ffff" />
                                    <RubiksCube />
                                    <OrbitControls 
                                        enableZoom={false} 
                                        autoRotate={false}
                                        enablePan={false}
                                    />
                                </Suspense>
                            </Canvas>
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-xs text-cyan-300/60 pointer-events-none flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                                Drag to rotate • Speed cuber's passion visualized
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-4 grid grid-cols-2 gap-3">
                            {[
                                { icon: '🧩', label: 'Speed Cuber', value: 'Sub-20s' },
                                { icon: '🏆', label: 'Started a cubing initiative', value: 'Founder' }
                            ].map((stat, i) => (
                                <div key={i} className="p-3 rounded-lg bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 text-center group backdrop-blur-sm">
                                    <div className="text-xl sm:text-2xl mb-1 group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <div className="text-base sm:text-lg font-bold text-cyan-300">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Story Content */}
                <div className="order-1 lg:order-2 space-y-4 sm:space-y-5">
                    <div className="p-4 sm:p-5 bg-gradient-to-br from-slate-900/50 to-slate-900/30 rounded-lg backdrop-blur-sm ring-1 ring-cyan-500/30 hover:ring-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_1.5rem_rgba(0,255,255,0.12)]">
                        <div className="relative pl-5">
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed break-words">
                                Hi! My name is <span className="text-cyan-300 font-medium">Shehwaz Singh Saini</span>.
                                I was born in India and moved to Brampton, Ontario when I was two years old.
                                My family left everything behind in pursuit of a better life and education.
                                Through sheer hard work and discipline, my parents broke through the poverty line,
                                moving to a newly built house in Windsor, ON. Seeing them struggle almost everyday while still keeping me happy taught me one valuable lesson;
                                <span className="text-cyan-300 font-medium"> hard work always beats talent</span>.
                            </p>
                        </div>
                    </div>

                    <div className="p-4 sm:p-5 bg-gradient-to-br from-slate-900/50 to-slate-900/30 rounded-lg backdrop-blur-sm ring-1 ring-cyan-500/30 hover:ring-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_1.5rem_rgba(0,255,255,0.12)]">
                        <div className="relative pl-5">
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                            <p className="text-slate-200 text-sm sm:text-base leading-relaxed break-words">
                                Through the years I've discovered 3 passions of mine: <span className="text-cyan-300 font-medium">cubing, math, and problem solving</span>.
                                But I wasn't initially good at any of them. My first Rubik's Cube took hours, and math concepts were slow to click.
                                My problem-solving skills lagged behind my peers—but remembering my parents' example, I knew the answer was hard work.
                            </p>
                        </div>
                    </div>

                    <div className="p-4 sm:p-5 bg-gradient-to-br from-slate-900/50 to-slate-900/30 rounded-lg backdrop-blur-sm ring-1 ring-cyan-500/30 hover:ring-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_1.5rem_rgba(0,255,255,0.12)]">
                        <div className="relative pl-5">
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                            <p className="text-slate-200 text-sm sm:text-base leading-relaxed break-words">
                                This persistence led me to <span className="text-cyan-300 font-medium">Harvard's CS50x course</span>,
                                spending countless hours debugging code and wrestling with algorithms.
                                It opened doors I never imagined, like the opportunity to compete in <span className="text-cyan-300 font-medium">WRO robotics</span> where my team of 2 placed <span className="text-cyan-300 font-medium">2nd in Canada</span>,
                                then went on to <span className="text-cyan-300 font-semibold">win the WRO International Invitational Championship in Panama</span>. 
                                I also got the opportunity to intern at a small <span className="text-cyan-300 font-medium">startup</span>, communicating and building alongside professional developers.
                            </p>
                        </div>
                    </div>

                    <div className="p-4 sm:p-5 bg-gradient-to-br from-slate-900/50 to-slate-900/30 rounded-lg backdrop-blur-sm ring-1 ring-cyan-500/30 hover:ring-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_1.5rem_rgba(0,255,255,0.12)]">
                        <div className="relative pl-5">
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                            <p className="text-slate-200 text-sm sm:text-base leading-relaxed break-words">
                                Now, I'm advancing in competitive programming and building projects, proving again that effort beats raw talent every time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Current Status */}
            <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/40 px-5 py-2.5 rounded-full border border-cyan-500/20 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span>Currently building SkillForge • Next: Changing the world</span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About
