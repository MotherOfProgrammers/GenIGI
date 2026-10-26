import type { Metadata } from "next";
import { GITHUB_ISSUES_URL } from "../site-config";
import { ExternalIcon } from "../components/icons";

export const metadata: Metadata = { title: "Workboard" };

const directions = [
  {
    number: "01",
    title: "A smoother return to the field",
    description:
      "Exploring compatibility and quality-of-life improvements that can help the original game feel at home on current setups. This is a community direction, not a released mod.",
    status: "Direction · early",
  },
  {
    number: "02",
    title: "Clarity without compromise",
    description:
      "Thinking through visual and interface refinements that respect the original atmosphere instead of smoothing away its identity.",
    status: "Work in progress",
  },
  {
    number: "03",
    title: "The campaign, unchanged",
    description:
      "Any future improvements should protect the story, characters, mission order, and grounded tone that make IGI feel like IGI.",
    status: "Community principle",
  },
];

export default function WorkboardPage() {
  return (
    <main id="main" tabIndex={-1}>
      <div className="wrap page-intro animate-in">
        <h1 className="display">
          Ideas in the
          <br />
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
              <br />
              of progress.
            </h2>
            <p>
              Better compatibility and thoughtful quality-of-life changes can make an old favourite
              easier to revisit—while leaving the campaign alone.
            </p>
          </div>

          <div className="mod-list">
            {directions.map((item) => (
              <article className="mod-row" key={item.number}>
                <span className="mod-number">{item.number} / 03</span>
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
