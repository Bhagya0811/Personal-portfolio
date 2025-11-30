import React from 'react';

interface ProjectCardProps {
    project: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    // Map GitHub repo fields to card UI fields with safe defaults
    const projectName = project.name || project.projectName || 'Untitled Project';
    const description = project.summary || project.description || '';
    const role = project.role || 'Contributor';
    const techStack = project.topics || (project.techStack || []);
    const achievements = project.achievements || [];
    const stars = project.stargazers_count ?? project.stars ?? 0;
    const forks = project.forks_count ?? project.forks ?? 0;
    const lastUpdated = project.updated_at || project.lastUpdated || '';
    const githubLink = project.html_url || project.githubLink || '#';
    const demoLink = project.homepage || project.demoLink || null;
    return (
        <div className="card group">
            <div className="mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-all duration-300">{projectName}</h3>
            </div>
            
            {description && <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>}
            
            {(techStack || []).length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {(techStack || []).slice(0, 4).map((tech: string, index: number) => (
                        <span key={index} className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full transition-all hover:bg-orange-200">{tech}</span>
                    ))}
                </div>
            )}
            
            <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                <span>⭐ {stars}</span>
                <span>🍴 {forks}</span>
            </div>
            
            <div className="flex gap-3 mt-6">
                <a 
                    href={githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 px-4 py-3 text-sm font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg text-center transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 active:scale-95"
                >
                    GitHub
                </a>
                {demoLink && (
                    <a 
                        href={demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 px-4 py-3 text-sm font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg text-center transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-105 active:scale-95"
                    >
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
