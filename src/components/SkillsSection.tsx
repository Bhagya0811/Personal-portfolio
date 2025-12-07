import React from 'react';
import { motion } from 'framer-motion';
const MH2: any = motion.h2;
import useScrollAnimation from '../hooks/useScrollAnimation';
import StatBar from './StatBar';

const skillsData = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'Python', level: 'Adept' },
            { name: 'SQL', level: 'Adept' },
        ],
    },
    {
        category: 'Machine Learning / AI',
        skills: [
            { name: 'scikit-learn', level: 'Adept' },
            { name: 'TensorFlow', level: 'Adept' },
            { name: 'PyTorch', level: 'Novice' },
        ],
    },
    {
        category: 'Data Engineering',
        skills: [
            { name: 'ETL', level: 'Adept' },
            { name: 'Big Data Tools', level: 'Intermediate' },
            { name: 'Cloud Services', level: 'Adept' },
        ],
    },
    {
        category: 'DevOps / Tools',
        skills: [
            { name: 'Git', level: 'Adept' },
            { name: 'Docker', level: 'Adept' },
            { name: 'CI/CD', level: 'Adept' },
        ],
    },
];

const SkillsSection = () => {
    const { ref, inView } = useScrollAnimation();
    return (
        <section id="skills" ref={ref as any} className={`section max-w-6xl mx-auto px-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <MH2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="section-title hover:text-orange-600">Technical Skills</MH2>
            <div className="grid md:grid-cols-2 gap-8">
                {skillsData.map((skillCategory, index) => (
                    <div key={index} className="card">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-6 h-6 text-orange-400">
                                {skillCategory.category.includes('Programming') && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 3H5a2 2 0 00-2 2v4h2V5h4V3zm6 0h4a2 2 0 012 2v4h-2V5h-4V3zM3 15v4a2 2 0 002 2h4v-2H5v-4H3zm18 4v-4h-2v4h-4v2h4a2 2 0 002-2z"/></svg>
                                )}
                                {skillCategory.category.includes('Machine Learning') && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5a1 1 0 00-2 0v3H8a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 000-2h-3V7z"/></svg>
                                )}
                                {skillCategory.category.includes('Data Engineering') && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 5h16v4H4V5zm0 6h16v8H4v-8zm2 2v4h12v-4H6z"/></svg>
                                )}
                                {skillCategory.category.includes('DevOps') && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z"/></svg>
                                )}
                            </span>
                            <h3 className="text-lg font-bold text-white hover:text-orange-600 transition-all">{skillCategory.category}</h3>
                        </div>
                        <div className="space-y-4">
                            {skillCategory.skills.map((skill, idx) => (
                                <StatBar key={idx} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
