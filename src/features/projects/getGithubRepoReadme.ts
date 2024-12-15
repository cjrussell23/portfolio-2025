import { readmeSchema } from "./schemas";


export async function getGithubRepoReadme(name: string) {
  const response = await fetch(`https://api.github.com/repos/cjrussell23/${name}/readme`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  const data = await response.json();
  const readme = readmeSchema.passthrough().parse(data);
  return readme;
}