import React from 'react';
import { motion } from 'framer-motion';
const MH2: any = motion.h2;
import useLinkedInData from '../hooks/useLinkedInData';

const EducationSection: React.FC = () => {
    const { data } = useLinkedInData();
    const education = data?.education || [];

    return (
        <section id="education" className="section max-w-3xl mx-auto px-6">
            <MH2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="section-title hover:text-orange-600">Education</MH2>

            <div className="grid grid-cols-1">
                <div className="card mx-auto w-full">
                    <h3 className="text-2xl font-bold mb-4 text-white hover:text-orange-600 transition-all">Master's in Computer Science</h3>
                    <p className="text-orange-400 font-semibold mb-2">EPITA, France</p>
                    <p className="text-gray-300 mb-6">Expected Graduation: 2025</p>

                    <h4 className="text-lg font-bold mb-3 text-white">Key Courses</h4>
                    <ul className="space-y-2">
                        {['Machine Learning', 'Data Mining', 'Databases', 'Distributed Systems', 'Advanced Algorithms'].map((course, idx) => (
                            <li key={idx} className="text-gray-700 flex items-center">
                                <span className="text-orange-400 mr-3">→</span>
                                {course}
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </section>
    );
};

export default EducationSection;
