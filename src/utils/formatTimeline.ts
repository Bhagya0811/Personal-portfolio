export function formatTimeline(experiences: any[] = []) {
    return experiences.map((experience) => ({
        title: experience.jobTitle || experience.title || '',
        company: experience.company || '',
        location: experience.location || '',
        dateRange: `${experience.startDate || ''} - ${experience.endDate || ''}`,
        achievements: (experience.achievements || []).map((achievement: any) => achievement || ''),
        certificatePath: experience.certificatePath
    }));
}

export default formatTimeline;
