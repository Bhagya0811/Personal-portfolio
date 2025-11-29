// githubApi.ts
// Fetches public repositories for a given GitHub username or a list of repo full names

export async function fetchGitHubProjects(username = "Bhagya0811", extraRepos: string[] = []) {
  // Fetch user's own repos
  const userRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated`);
  if (!userRes.ok) throw new Error("Failed to fetch GitHub repositories");
  const userRepos = await userRes.json();

  // Fetch extra repos by full name (e.g., owner/repo)
  const extraReposData = await Promise.all(
    extraRepos.map(async (fullName) => {
      const res = await fetch(`https://api.github.com/repos/${fullName}`);
      if (!res.ok) return null;
      return await res.json();
    })
  );

  // Combine and deduplicate by repo id
  const allRepos = [...userRepos, ...extraReposData.filter(Boolean)];
  const uniqueRepos = Array.from(new Map(allRepos.map((repo: any) => [repo.id, repo])).values());

  // Map to project card format
  return uniqueRepos.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    updated_at: repo.updated_at,
    topics: repo.topics || [],
    owner: repo.owner?.login,
  }));
}
