import { reposSchema } from "./schemas";

export async function getGithubRepos() {
  try {
    const response = await fetch('https://api.github.com/users/cjrussell23/repos', {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error(`GitHub API error: ${response.statusText}`);
      return [];
    }

    const data = await response.json();
    const repos = reposSchema.parse(data);
    return repos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}