import { CONTRIBUTOR_REPOS, GITHUB_OWNER } from "./site-config";

export type Contributor = {
  login: string;
  profileUrl: string;
  avatarUrl: string;
  commits: number;
  repos: string[];
};

type ApiContributor = {
  login: string;
  html_url: string;
  avatar_url: string;
  contributions: number;
  type: string;
};

async function fetchRepo(name: string): Promise<ApiContributor[] | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${name}/contributors?per_page=100`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );
    if (!response.ok) return null;
    return (await response.json()) as ApiContributor[];
  } catch {
    return null;
  }
}

/** Merges contributors across repos; returns null when GitHub could not be reached for any repo. */
export async function getContributors(): Promise<Contributor[] | null> {
  const results = await Promise.all(CONTRIBUTOR_REPOS.map((repo) => fetchRepo(repo.name)));
  if (results.every((result) => result === null)) return null;

  const merged = new Map<string, Contributor>();
  results.forEach((list, index) => {
    for (const person of list ?? []) {
      if (person.type !== "User") continue;
      const existing = merged.get(person.login);
      const label = CONTRIBUTOR_REPOS[index].label;
      if (existing) {
        existing.commits += person.contributions;
        existing.repos.push(label);
      } else {
        merged.set(person.login, {
          login: person.login,
          profileUrl: person.html_url,
          avatarUrl: person.avatar_url,
          commits: person.contributions,
          repos: [label],
        });
      }
    }
  });

  return [...merged.values()].sort((a, b) => b.commits - a.commits);
}
