import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { fetchGitHubProjects } from '../lib/githubApi';

const ProjectsSection = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const getProjects = async () => {
            const curated = [
                { key: "Bhagya0811/Personal-portfolio", name: "Personal-portfolio", url: "https://github.com/Bhagya0811/Personal-portfolio", summary: "Portfolio built with Next.js, Tailwind, and Framer Motion. Dark theme, animations, and API-backed sections." },
                
            ];

            try {
                const data = await fetchGitHubProjects(
                    "Bhagya0811",
                    curated.map(c => c.key)
                );

                const byKey = new Map<string, any>();
                (data || []).forEach((p: any) => {
                    if (p.name) byKey.set(p.name, p);
                    if (p.owner && p.name) byKey.set(`${p.owner}/${p.name}`, p);
                });

                const merged = curated.map((c, idx) => {
                    const found = byKey.get(c.key) || byKey.get(c.name);
                    return found ? { ...found, summary: c.summary } : {
                        id: `curated-${idx}`,
                        name: c.name,
                        html_url: c.url,
                        language: "",
                        stargazers_count: 0,
                        forks_count: 0,
                        updated_at: new Date().toISOString(),
                        topics: [],
                        summary: c.summary,
                    };
                });

                setProjects(merged);
            } catch (err) {
                setError(err);
                // Fallback to curated placeholders when API fails
                setProjects(curated.map((c, idx) => ({
                    id: `curated-${idx}`,
                    name: c.name,
                    html_url: c.url,
                    language: "",
                    stargazers_count: 0,
                    forks_count: 0,
                    updated_at: new Date().toISOString(),
                    topics: [],
                    summary: c.summary,
                })));
            } finally {
                setLoading(false);
            }
        };

        getProjects();
    }, []);

    if (loading) {
        return <div className="section text-center text-gray-400">Loading projects...</div>;
    }

    const errorBanner = error ? (
        <div className="text-center text-red-400 mb-4">Error loading projects: {error.message}. Showing curated projects.</div>
    ) : null;

    return (
        <section className="section max-w-6xl mx-auto px-6" id="projects">
            <h2 className="section-title hover:text-orange-600">Featured Projects</h2>
            {errorBanner}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
