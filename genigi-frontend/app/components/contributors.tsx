import { getContributors } from "../contributors";
import { CONTRIBUTOR_REPOS, GITHUB_OWNER } from "../site-config";
import { ExternalIcon } from "./icons";

export async function Contributors() {
  const contributors = await getContributors();

  return (
    <section className="section section-tight" data-reveal>
      <div className="wrap">
        <div className="section-heading">
          <h2 className="display">Who’s building it.</h2>
          <p>
            Everyone with commits in the website and IGI-Rampage repositories, read from GitHub.
          </p>
        </div>

        {contributors && contributors.length > 0 ? (
          <ul className="contributor-list">
            {contributors.map((person) => (
              <li key={person.login}>
                <a
                  className="contributor"
                  href={person.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="contributor-avatar"
                    src={`${person.avatarUrl}&s=96`}
                    width={48}
                    height={48}
                    alt=""
                    loading="lazy"
                  />
                  <span className="contributor-main">
                    <span className="person-name">{person.login}</span>
                    <span className="person-role">{person.repos.join(" · ")}</span>
                  </span>
                  <span className="contributor-commits">
                    {person.commits} {person.commits === 1 ? "commit" : "commits"}
                  </span>
                  <ExternalIcon />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="people-note">
            Couldn’t reach GitHub just now. See the{" "}
            {CONTRIBUTOR_REPOS.map((repo, index) => (
              <span key={repo.name}>
                {index > 0 ? " and " : ""}
                <a
                  href={`https://github.com/${GITHUB_OWNER}/${repo.name}/graphs/contributors`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {repo.label} contributors <ExternalIcon />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </span>
            ))}
            .
          </p>
        )}
      </div>
    </section>
  );
}
