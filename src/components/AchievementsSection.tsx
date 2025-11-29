import React from "react";

const AchievementsSection = () => {
    const achievements = [
        {
            title: "Hackathon Champion",
            description: "Won first place in a national hackathon, developing a machine learning model for predictive analytics.",
            icon: ""
        },
        {
            title: "Kaggle Competitions",
            description: "Achieved top 10% in multiple Kaggle competitions, focusing on data cleaning and model optimization.",
            icon: ""
        },
        {
            title: "Research Publication",
            description: "Co-authored a research paper on deep learning techniques for image classification, published in a peer-reviewed journal.",
            icon: ""
        },
        {
            title: "Dean's List",
            description: "Recognized on the Dean's List for academic excellence during my Master's program at EPITA.",
            icon: ""
        },
        {
            title: "Data Pipeline Automation",
            description: "Successfully automated data pipelines for a major project, reducing processing time by 30%.",
            icon: ""
        }
    ];

    return (
        <section className="section max-w-6xl mx-auto px-6 bg-white">
            <h2 className="section-title text-gray-900 hover:text-orange-600 mb-8">Boss Fights & Milestones</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                    <div key={index} className="card hover:border-orange-400 transition-all">
                        <div className="text-4xl mb-3 transition-transform hover:scale-110">{achievement.icon}</div>
                        <h3 className="text-lg font-bold text-gray-900 hover:text-orange-600 transition-all mb-2">{achievement.title}</h3>
                        <p className="text-gray-700">{achievement.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AchievementsSection;
