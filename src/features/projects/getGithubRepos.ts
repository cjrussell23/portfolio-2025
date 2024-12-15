import { reposSchema } from "./schemas";

export async function getGithubRepos() {
  const response = await fetch('https://api.github.com/users/cjrussell23/repos', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  const data = await response.json();
  const repos = reposSchema.parse(data);
  return repos;
}