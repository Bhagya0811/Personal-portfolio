import { useEffect, useState } from 'react';
import { fetchLinkedInData } from '../lib/linkedinApi';

interface LinkedInData {
    headline?: string;
    summary?: string;
    education?: any[];
    experience?: any[];
    certifications?: any[];
    featured?: any[];
    [key: string]: any;
}

const useLinkedInData = () => {
    const [data, setData] = useState<LinkedInData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const getLinkedInData = async () => {
            try {
                const linkedInData = await fetchLinkedInData();
                setData(linkedInData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getLinkedInData();
    }, []);

    return { data, loading, error };
};

export default useLinkedInData;