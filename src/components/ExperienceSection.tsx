import React from 'react';
import { motion } from 'framer-motion';
const MH2: any = motion.h2;
import useLinkedInData from '../hooks/useLinkedInData';
import formatTimeline from '../utils/formatTimeline';

const ExperienceSection = () => {
    const { data } = useLinkedInData();
    const experience = data?.experience || [];
    const formattedExperience = formatTimeline(experience);

    return (
        <section id="experience" className="section max-w-4xl mx-auto px-6">
            <MH2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="section-title hover:text-orange-600">Experience</MH2>
            <div className="space-y-6">
                {formattedExperience.map((item, index) => (
                    <div key={index} className="timeline-node">
                        <h3 className="text-xl font-bold text-white hover:text-orange-600 transition-all mb-2">{item.title}</h3>
                        <p className="text-orange-400 font-semibold mb-1">{item.company}</p>
                        <p className="text-gray-400 text-sm mb-3">{item.location} • {item.dateRange}</p>
                        <ul className="space-y-2 ml-4 mb-4">
                            {item.achievements.map((achievement: string, idx: number) => (
                                <li key={idx} className="text-gray-700 flex items-start">
                                    <span className="text-orange-500 mr-3">▹</span>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                        {item.certificatePath && (
                            <a
                                href={item.certificatePath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-all hover:scale-105 active:scale-95"
                            >
                                View Certificate
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
