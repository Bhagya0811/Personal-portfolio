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
                { key: "Bhagya0811/Employee-performance-prediction", name: "Employee-performance-prediction", url: "https://github.com/Bhagya0811/Employee-performance-prediction.git", summary: "A machine learning project to predict employee performance using Python, Pandas, and Scikit-learn. Involves data preprocessing, model training, and evaluation." },
                { key: "Bhagya0811/Evaluating-YOLOv10-for-Precision-Fruit-Counting", name: "Evaluating-YOLOv10-for-Precision-Fruit-Counting", url: "https://github.com/Bhagya0811/Evaluating-YOLOv10-for-Precision-Fruit-Counting.git", summary: "A computer vision project using YOLOv10 to count fruits in images. Utilizes Python and OpenCV for image processing and model evaluation." },
                { key: "Bhagya0811/AWS-Project", name: "AWS-Project", url: "https://github.com/Bhagya0811/AWS-Project.git", summary: "An AWS cloud computing project demonstrating the use of various AWS services such as EC2, S3, and Lambda for scalable application deployment." },
                { key: "Bhagya0811/VAT-Algorithm", name: "VAT-Algorithm", url: "https://github.com/Bhagya0811/VAT-Algorithm.git", summary: "Implementation of the VAT (Visual Assessment of cluster Tendency) algorithm in Python. Used for determining the clustering tendency of a dataset before applying clustering algorithms." },
                { key: "Bhagya0811/Employee_Burnout_Analysis", name: "Employee_Burnout_Analysis", url: "https://github.com/Bhagya0811/Employee_Burnout_Analysis.git", summary: "A data analysis project focused on identifying factors contributing to employee burnout using Python, Pandas, and Matplotlib for data visualization." },
                { key: "Bhagya0811/dsp_bhagyasri_parupudi", name: "Data Science Portfolio", url: "https://github.com/Bhagya0811/dsp_bhagyasri_parupudi.git", summary: "A comprehensive data science portfolio showcasing various projects involving data analysis, machine learning, and statistical modeling using Python and R." },
                
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
