// linkedinApi.ts
// Minimal LinkedIn data loader for the portfolio.
// Tries to fetch `public/linkedinData.json` (if you exported your profile),
// otherwise returns a safe fallback object so the app can build.

export type LinkedInExperience = {
  title: string;
  company: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
};

export type LinkedInData = {
  headline?: string;
  summary?: string;
  education?: { school: string; degree?: string; field?: string; startYear?: string; endYear?: string }[];
  experience?: LinkedInExperience[];
  certifications?: { name: string; issuer?: string; date?: string }[];
  featured?: { title?: string; url?: string }[];
};

export async function fetchLinkedInData(): Promise<LinkedInData> {
  // Try to load a local JSON exported from LinkedIn (placed in public/linkedinData.json)
  try {
    const res = await fetch('/linkedinData.json');
    if (res.ok) {
      const data = await res.json();
      return data as LinkedInData;
    }
  } catch (err) {
    // ignore and fall back
  }

  // Fallback data (non-sensitive placeholder) — replace or export your LinkedIn JSON to `public/linkedinData.json`
  return {
    headline: "Master's student in Computer Science at EPITA — Aspiring ML / Data Engineer / Data Scientist",
    summary:
      "I am Bhagyasri Parupudi, currently pursuing my Master's at EPITA (France). I focus on machine learning, data engineering, and building scalable data-driven systems. I have experience with Python, ML frameworks, SQL, and cloud platforms.",
    education: [
      { school: 'EPITA', degree: "Master's in Computer Science", field: 'Machine Learning / Data Science', startYear: '2023', endYear: '2025' }
    ],
    experience: [
      { title: 'Data Science Intern', company: 'Example Company', location: 'Remote', startDate: '2024-06', endDate: '2024-09', description: 'Worked on model development and deployment.' }
    ],
    certifications: [
      { name: 'Google Cloud Ready Facilitator Program', issuer: 'Google', date: '2022' }
    ],
    featured: []
  };
}
