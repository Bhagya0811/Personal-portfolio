import React from 'react';
import { motion } from 'framer-motion';
const MH2: any = motion.h2;
import useLinkedInData from '../hooks/useLinkedInData';

const CertificationsSection: React.FC = () => {
  const { data } = useLinkedInData();
  const certifications = data?.certifications || [];

  return (
    <section className="section max-w-6xl mx-auto px-6" id="certifications">
      <MH2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="section-title hover:text-orange-600">Certifications</MH2>
      <div className="card">
        <div className="space-y-4">
          {certifications.length === 0 ? (
            <p className="text-gray-600">No certifications data available.</p>
          ) : (
            certifications.map((cert: any, index: number) => (
              <div key={index} className="pb-4 border-b border-gray-300 last:border-b-0">
                <p className="text-white font-semibold hover:text-orange-500 transition-all">{cert.name || cert}</p>
                {cert.issuer && <p className="text-orange-400 text-sm">{cert.issuer}</p>}
                {cert.date && <p className="text-gray-400 text-xs mb-2">{cert.date}</p>}
                {cert.certificatePath && (
                  <a
                    href={cert.certificatePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-all hover:scale-105 active:scale-95"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
