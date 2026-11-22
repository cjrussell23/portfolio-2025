import { ProjectCards } from "./components/ProjectCards";
import { getGithubRepoReadme } from "./getGithubRepoReadme";
import { getGithubRepos } from "./getGithubRepos";
import { Readme, Repo } from "./schemas";

export type GithubRepo = {
  repo: Repo;
  readme: Readme;
};

// The strongest work first; anything else follows, newest first.
const pinned = ["job-ai", "woodworking-blog", "portfolio-2025"];
const rank = (name: string) => {
  const i = pinned.indexOf(name);
  return i === -1 ? pinned.length : i;
};

export default async function Projects() {
  const repos = (await getGithubRepos())
    .filter((repo) => !repo.name.includes("cjrussell23"))
    .sort(
      (a, b) =>
        rank(a.name) - rank(b.name) || (a.created_at > b.created_at ? -1 : 1),
    );
  const reposWithReadme = await Promise.all(
    repos.map(async (repo) => {
      const readme = await getGithubRepoReadme(repo.name);
      return { repo, readme };
    }),
  );
  // Filter out repos without READMEs
  const validRepos = reposWithReadme.filter(
    (item): item is GithubRepo => item.readme !== null,
  );
  return <ProjectCards repos={validRepos} />;
}
