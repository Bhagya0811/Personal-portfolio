import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const MH2: any = motion.h2;
import ProjectCard from './ProjectCard';
import { fetchGitHubProjects } from '../lib/githubApi';

const ProjectsSection = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const data = await fetchGitHubProjects(
                  "Bhagya0811",
                  [
                    "huongta-fr/DSA_G7",
                    "navaraja20/Employee-performance-prediction",
                    "navaraja20/VAT_Algorithm",
                    "navaraja20/AWS-project1",
                    "huongta-fr/DSA07_MVP"
                  ]
                );
                setProjects(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getProjects();
    }, []);

    if (loading) {
        return (
            <section id="projects" className="section max-w-6xl mx-auto px-6">
                <MH2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="section-title">Featured Projects</MH2>
                <div className="text-center text-gray-400">Loading projects...</div>
            </section>
        );
    }

    const fallback = [
        { id: 'fallback-1', name: 'Portfolio', description: 'Personal site and components', homepage: '/', stargazers_count: 0, language: 'TypeScript' },
        { id: 'fallback-2', name: 'Data Pipelines', description: 'ETL examples', homepage: '#', stargazers_count: 0, language: 'Python' }
    ];
    const items = error ? fallback : (projects.length ? projects : fallback);

    return (
        <section className="section max-w-6xl mx-auto px-6" id="projects">
            <MH2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="section-title hover:text-orange-600">Featured Projects</MH2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
