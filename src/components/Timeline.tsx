import React from 'react';
import useLinkedInData from '../hooks/useLinkedInData';

const Timeline: React.FC = () => {
    const { data } = useLinkedInData();
    const experiences = data?.experience || [];

    return (
        <section className="timeline-section">
            <h2 className="section-title">Journey Through the Lands Between</h2>
            <div className="timeline">
                {experiences.map((experience, index) => (
                    <div key={index} className="timeline-node">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="job-title">{experience.title}</h3>
                            <p className="company">{experience.company} - {experience.location}</p>
                            <p className="date-range">{experience.dateRange}</p>
                            <ul className="achievements">
                                {experience.achievements.map((achievement: string, idx: number) => (
                                    <li key={idx}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;