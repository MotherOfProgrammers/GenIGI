import type { Metadata } from "next";
import { GITHUB_ISSUES_URL } from "../site-config";
import { ExternalIcon } from "../components/icons";

export const metadata: Metadata = { title: "Mods" };

const directions = [
  {
    title: "Multiplayer, restored",
    description:
      "A restored multiplayer layer for Project IGI 2 is in the IGI-Rampage repository and has been put through network tests. It is development work, not a player build.",
    status: "Early testing · repo only",
  },
  {
    title: "Weapon data and textures",
    description:
      "Parsers that read the game’s weapon data and textures, with decoded output and higher-quality weapon silhouettes kept in the repository’s out directory.",
    status: "Tooling · in the repo",
  },
  {
    title: "A new game interface",
    description:
      "Interface work written in C++, under way and not yet something you can install.",
    status: "Work in progress",
  },
  {
    title: "The campaign, unchanged",
    description:
      "The single-player story, characters, and mission order are not the target. IGI-Rampage is about multiplayer.",
    status: "Project principle",
  },
];

export default function ModsPage() {
  return (
    <main id="main" tabIndex={-1}>
      <div className="wrap page-intro animate-in">
        <h1 className="display">
          Ideas in the
          <br />{" "}
          works.
        </h1>
        <p>
          These are directions the community cares about—not a catalogue of released downloads.
          We’ll label real builds clearly when there’s something ready to share.
        </p>
      </div>

      <div className="wrap" data-reveal>
        <div className="status-note">
          <span className="status-dot" aria-hidden="true" />
          <p>
            Nothing listed here is currently presented as released or downloadable. We’d rather be
            clear about the stage than promise more than we can deliver.
          </p>
        </div>
      </div>

      <section className="section section-tight" data-reveal>
        <div className="wrap">
          <div className="section-heading">
            <h2 className="display">
              A careful kind
              <br />{" "}
              of progress.
            </h2>
            <p>
              Better compatibility and thoughtful quality-of-life changes can make an old favourite
              easier to revisit—while leaving the campaign alone.
            </p>
          </div>

          <div className="mod-list">
            {directions.map((item, index) => (
              <article className="mod-row" key={item.title}>
                <span className="mod-number">
                  {String(index + 1).padStart(2, "0")} / {String(directions.length).padStart(2, "0")}
                </span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <a
                    className="text-link"
                    href={GITHUB_ISSUES_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discuss this direction <ExternalIcon />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
                <span className="mod-state">{item.status}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-band">
        <div className="wrap work-band-inner" data-reveal>
          <h2 className="display">The best work starts with players.</h2>
          <a
            className="button"
            href={GITHUB_ISSUES_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open an issue <ExternalIcon />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
