import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { RubiksCube } from '@/components/common/RubiksCube';
import { Suspense } from 'react';

export const About = () => {
    return (
    <section className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 bg-transparent py-16">
        <div id="about" className="relative mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-10">
            My Journey
            </h2>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
                {/* 3D Rubik's Cube Section */}
                <div className="order-2 lg:order-1">
                    <div className="sticky top-24">
                        <div className="relative h-[280px] sm:h-[350px] lg:h-[380px] rounded-xl bg-slate-900/50 backdrop-blur-sm border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300">
                            <Canvas className="cursor-grab active:cursor-grabbing">
                                <Suspense fallback={null}>
                                    <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                                    <ambientLight intensity={0.6} />
                                    <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
                                    <directionalLight position={[-10, -10, -5]} intensity={0.6} />
                                    <pointLight position={[0, 0, 10]} intensity={0.3} color="#ffffff" />
                                    <RubiksCube />
                                    <OrbitControls 
                                        enableZoom={false} 
                                        autoRotate={false}
                                        enablePan={false}
                                        enableDamping={true}
                                        dampingFactor={0.05}
                                        rotateSpeed={0.8}
                                    />
                                </Suspense>
                            </Canvas>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-4 grid grid-cols-2 gap-3">
                            {[
                                { icon: '🧩', label: 'Speed Cuber', value: 'Sub-20s' },
                                { icon: '🏆', label: 'Started a cubing initiative', value: 'Club Founder' }
                            ].map((stat, i) => (
                                <div key={i} className="p-3 rounded-lg bg-slate-900/50 border border-white/10 hover:border-white/20 transition-all duration-200 text-center group">
                                    <div className="text-xl sm:text-2xl mb-1">
                                        {stat.icon}
                                    </div>
                                    <div className="text-base sm:text-lg font-bold text-white">
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
                    <div className="p-4 sm:p-5 bg-slate-900/30 rounded-lg border border-white/5">
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                Hi! My name is <span className="text-white font-medium">Shehwaz Singh Saini</span>.
                                I was born in India and moved to Brampton, Ontario when I was two years old.
                                My family left everything behind in pursuit of a better life and education.
                                Through sheer hard work and discipline, my parents broke through the poverty line,
                                moving to a newly built house in Windsor, ON. Seeing them struggle almost everyday while still keeping me happy taught me one valuable lesson;
                                <span className="text-cyan-400 font-semibold"> hard work always beats talent</span>.
                            </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-slate-900/30 rounded-lg border border-white/5">
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                Through the years I've discovered 3 passions of mine: <span className="text-cyan-400 font-medium">cubing, math, and problem solving</span>.
                                But I wasn't initially good at any of them. My first Rubik's Cube took hours, and math concepts were slow to click.
                                My problem-solving skills lagged behind my peers—but remembering my parents' example, I knew the answer was hard work.
                            </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-slate-900/30 rounded-lg border border-white/5">
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                This persistence led me to <span className="text-cyan-400 font-medium">Harvard's CS50x course</span>,
                                spending countless hours debugging code and wrestling with algorithms.
                                It opened doors I never imagined, like the opportunity to compete in <span className="text-white font-medium">WRO robotics</span> where my team of 2 placed <span className="text-cyan-400 font-medium">2nd in Canada</span>,
                                then went on to <span className="text-cyan-400 font-semibold">win the WRO International Invitational Championship in Panama</span>. 
                                I also got the opportunity to intern at a small <span className="text-white font-medium">startup</span>, communicating and building alongside professional developers.
                            </p>
                    </div>

                    <div className="p-4 sm:p-5 bg-slate-900/30 rounded-lg border border-white/5">
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                Recently, I've been working on <span className="text-cyan-400 font-medium">competitive programming and AI</span>. Leveling for the startup world.
                        </p>
                    </div>
                </div>
            </div>

            {/* Current Status */}
            <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/40 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span>Currently building SkillForge • Next: Changing the world</span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About
