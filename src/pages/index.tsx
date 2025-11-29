import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import ParallaxBackground from '../components/ParallaxBackground';

const HomePage = () => {
    return (
        <div className="bg-black min-h-screen">
            <Header />
            <div className="pt-20">
                <ParallaxBackground />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <EducationSection />
                <CertificationsSection />
                <ContactSection />
            </div>
        </div>
    );
};

export default HomePage;
