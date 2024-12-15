import { ProjectCards } from "./components/ProjectCards";
import { getGithubRepoReadme } from "./getGithubRepoReadme";
import { getGithubRepos } from "./getGithubRepos";
import { Readme, Repo } from "./schemas";

export type GithubRepo = {
  repo: Repo;
  readme: Readme;
};

export default async function Projects() {
  const repos = (await getGithubRepos())
    .filter((repo) => !repo.name.includes("cjrussell23"))
    .sort((a, b) => (a.created_at > b.created_at ? -1 : 1));
  const reposWithReadme: GithubRepo[] = await Promise.all(
    repos.map(async (repo) => {
      const readme = await getGithubRepoReadme(repo.name);
      return { repo: repo, readme: readme };
    }),
  );
  return <ProjectCards repos={reposWithReadme} />;
}
