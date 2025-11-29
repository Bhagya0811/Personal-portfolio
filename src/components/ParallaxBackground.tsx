import React from 'react';

const ParallaxBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-black"></div>
            <div className="absolute top-1/4 left-1/3 w-[28rem] h-[28rem] bg-orange-500 rounded-full mix-blend-soft-light blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-[28rem] h-[28rem] bg-orange-700 rounded-full mix-blend-soft-light blur-3xl opacity-10 animate-pulse"></div>
        </div>
    );
};

export default ParallaxBackground;
