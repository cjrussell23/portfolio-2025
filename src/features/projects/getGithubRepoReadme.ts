import { readmeSchema } from "./schemas";

export async function getGithubRepoReadme(name: string) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/cjrussell23/${name}/readme`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    );

    if (!response.ok) {
      // Return null if README not found (404) or other errors
      console.warn(`README not found for ${name}: ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    const readme = readmeSchema.passthrough().parse(data);
    return readme;
  } catch (error) {
    console.error(`Error fetching README for ${name}:`, error);
    return null;
  }
}
