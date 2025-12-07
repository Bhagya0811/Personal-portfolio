import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
const MDiv: any = motion.div;
import { siteConfig } from '../config/siteConfig';
const HeroSection: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });
    const translateX = useTransform(smoothX, (v) => `${v * 0.02}px`);
    const translateY = useTransform(smoothY, (v) => `${v * 0.02}px`);
    const { scrollYProgress } = useScroll();
    const bgX = useTransform(scrollYProgress, [0, 1], ['0px', '-60px']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const rect = currentTarget.getBoundingClientRect();
        const cx = clientX - rect.left - rect.width / 2;
        const cy = clientY - rect.top - rect.height / 2;
        mouseX.set(cx);
        mouseY.set(cy);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-24 overflow-hidden bg-black" onMouseMove={handleMouseMove}>
            <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                <MDiv className="absolute inset-0 -z-10 flex items-center justify-center" style={{ x: bgX }}>
                    <div className="text-white/5 font-extrabold tracking-tight text-[14vw] select-none">BHAGYASRI</div>
                </MDiv>
                <div className="absolute inset-0 -z-10 grain-overlay"></div>

                <div className="mb-12 flex justify-center">
                    <motion.div initial={{ opacity: 0, y: 20, rotate: -3 }} animate={{ opacity: 1, y: 0, rotate: -3 }} whileHover={{ rotate: -1, scale: 1.02 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                        <MDiv className="rounded-xl shadow-2xl bg-gradient-to-br from-orange-500 to-orange-700" style={{ translateX, translateY }}>
                            <img src="/assets/profile.jpg" alt={siteConfig.name} className="w-[280px] h-[360px] md:w-[380px] md:h-[520px] object-cover rounded-xl" />
                        </MDiv>
                    </motion.div>
                </div>

                <div className="space-y-2">
                    <p className="text-xl md:text-2xl text-white/90 font-semibold">MSc Data Science & Analytics Student</p>
                    <p className="text-lg md:text-xl text-white/80">Aspiring Data Scientist | ML & Analytics</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all hover:-translate-y-1">View Projects</a>
                    <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer" download className="px-8 py-3 border-2 border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-all">Download Resume</a>
                </div>

                <div className="flex justify-center gap-6 mt-8">
                    <a href="https://github.com/Bhagya0811" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center hover:border-orange-500 hover:bg-orange-200 transition-all">
                        <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/parupudi-bhagyasri/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center hover:border-orange-500 hover:bg-orange-200 transition-all">
                        <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.366c.43-.664 1.195-1.608 2.905-1.608 2.121 0 3.714 1.388 3.714 4.373v5.515zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.959.78-1.708 1.958-1.708 1.178 0 1.915.749 1.938 1.708 0 .947-.76 1.705-1.981 1.705zm1.946 11.597H3.392V9.806h3.891v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                    </a>
                    <a href="mailto:bhagyasriparupudi@gmail.com" className="w-12 h-12 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center hover:border-orange-500 hover:bg-orange-200 transition-all">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
