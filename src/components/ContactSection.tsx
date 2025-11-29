import React, { useState } from 'react';
import { motion } from 'framer-motion';
const MH2: any = motion.h2;

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="section max-w-3xl mx-auto px-6">
            <MH2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="section-title hover:text-orange-600">Contact</MH2>
            <div className="card">
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-300 font-medium mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-white border-2 border-gray-300 rounded text-gray-900 focus:border-orange-500 focus:outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-300 font-medium mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-white border-2 border-gray-300 rounded text-gray-900 focus:border-orange-500 focus:outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-300 font-medium mb-1" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-white border-2 border-gray-300 rounded text-gray-900 h-32 focus:border-orange-500 focus:outline-none transition-all"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 active:scale-95">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
