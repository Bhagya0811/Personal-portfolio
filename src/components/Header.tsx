import React, { useState } from 'react';
import { motion } from 'framer-motion';
const MButton: any = motion.button;
import { siteConfig } from '../config/siteConfig';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
                <div className="text-white font-semibold tracking-wider uppercase">{siteConfig.name.split(' ')[0]}</div>
                <div className="flex justify-center">
                    <MButton
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setIsMenuOpen((v) => !v)}
                        className="text-white/90 tracking-widest uppercase text-sm border-t border-white/40 px-6 py-1"
                    >
                        Menu
                    </MButton>
                </div>
                <div className="flex justify-end">
                    <a href={siteConfig.links.email} className="text-white font-semibold uppercase tracking-wider">Contact</a>
                </div>
            </div>
            {isMenuOpen && (
                <div className="absolute left-0 right-0 mt-2">
                    <div className="mx-auto max-w-md rounded-lg border border-white/10 bg-black/90 p-4">
                        <div className="grid gap-3 text-center">
                            {[
                                { id: 'about', label: 'About' },
                                { id: 'skills', label: 'Skills' },
                                { id: 'projects', label: 'Projects' },
                                { id: 'experience', label: 'Experience' },
                                { id: 'education', label: 'Education' },
                                { id: 'certifications', label: 'Certifications' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    className="text-white/90 uppercase tracking-wide"
                                    onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
