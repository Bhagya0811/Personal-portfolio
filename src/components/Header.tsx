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
                <div className="text-white font-semibold tracking-wider uppercase">{siteConfig.name}</div>
                <div className="flex justify-center">
                    <MButton
                        whileHover={{ scale: 1.04 }}
                        onClick={() => setIsMenuOpen((v) => !v)}
                        className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold shadow hover:shadow-orange-500/30"
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
                    <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-black/90 p-4">
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
                                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700"
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
