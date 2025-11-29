import { useEffect, useState } from 'react';
import { fetchGitHubProjects } from '../lib/githubApi';

const useGitHubData = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchGitHubProjects();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return { data, loading, error };
};

export default useGitHubData;