import React from 'react';

interface StatBarProps {
    label?: string;
    value?: number;
    maxValue?: number;
    skill?: { name: string; level: string };
}

const StatBar: React.FC<StatBarProps> = ({ label, skill }) => {
    const displayLabel = skill?.name || label || '';
    const starMap: { [key: string]: number } = {
        'Beginner': 1,
        'Novice': 2,
        'Intermediate': 3,
        'Adept': 4,
        'Advanced': 4,
        'Expert': 5,
    };
    const stars = starMap[skill?.level || 'Intermediate'] || 3;
    const totalStars = 5;

    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-white font-medium">{displayLabel}</span>
            <div className="flex items-center gap-1">
                {Array.from({ length: totalStars }).map((_, i) => (
                    <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={i < stars ? "#f59e0b" : "none"}
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.75.75 0 011.04 0l2.332 2.332a.75.75 0 00.564.22l3.297-.225a.75.75 0 01.75.75l-.225 3.297a.75.75 0 00.22.564l2.332 2.332a.75.75 0 010 1.06l-2.332 2.332a.75.75 0 00-.22.564l.225 3.297a.75.75 0 01-.75.75l-3.297-.225a.75.75 0 00-.564.22l-2.332 2.332a.75.75 0 01-1.06 0l-2.332-2.332a.75.75 0 00-.564-.22l-3.297.225a.75.75 0 01-.75-.75l.225-3.297a.75.75 0 00-.22-.564L3.5 14.86a.75.75 0 010-1.06l2.332-2.332a.75.75 0 00.22-.564l-.225-3.297a.75.75 0 01.75-.75l3.297.225a.75.75 0 00.564-.22l2.332-2.332z" />
                    </svg>
                ))}
            </div>
        </div>
    );
};

export default StatBar;
