import React from "react";
import { motion } from "framer-motion";
const MH2: any = motion.h2;
import useScrollAnimation from "../hooks/useScrollAnimation";

const AboutSection: React.FC = () => {
    const { ref, inView } = useScrollAnimation();
    return (
        <section id="about" ref={ref as any} className={`section max-w-6xl mx-auto px-6 py-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <MH2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="section-title hover:text-orange-600 transition-all mb-8">About Me</MH2>
            <div className="card">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Currently pursuing a Master's in Computer Science at EPITA, France, I am focused on the realms of machine learning, data engineering, and data science. My journey through the lands of data has equipped me with key strengths in Python, various ML frameworks, and the construction of robust data pipelines.
                </p>
                <div className="card">
                    <h3 className="text-xl font-bold mb-4 text-white hover:text-orange-600">Key Strengths:</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center"><span className="text-orange-400 mr-3">•</span>Python</li>
                        <li className="flex items-center"><span className="text-orange-400 mr-3">•</span>Machine Learning Frameworks (TensorFlow, PyTorch)</li>
                        <li className="flex items-center"><span className="text-orange-400 mr-3">•</span>Data Engineering Tools (SQL, ETL, Cloud Services)</li>
                        <li className="flex items-center"><span className="text-orange-400 mr-3">•</span>Data Visualization</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
