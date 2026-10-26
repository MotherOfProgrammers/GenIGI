import Link from "next/link";
import { GITHUB_ISSUES_URL } from "./site-config";
import { ArrowIcon, ExternalIcon } from "./components/icons";

const rampageFeatures = [
  {
    title: "Modernized multiplayer",
    body: "Work toward a more flexible online multiplayer experience.",
  },
  {
    title: "New maps",
    body: "Additional environments for multiplayer matches.",
  },
  {
    title: "Weapons and skins",
    body: "Expanded weapon variety and visual customization.",
  },
  {
    title: "Enhanced graphics",
    body: "Visual improvements aimed at multiplayer.",
  },
];

export default function HomePage() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="home-hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <h1 className="display animate-in">
              The mission
              <br />
              isn’t <span>over.</span>
            </h1>
            <p className="animate-in delay-1">
              Project IGI still has a place in our hearts. We’re a player-first community working on
              thoughtful modern improvements—without rewriting the story that brought us here.
            </p>
            <div className="hero-actions animate-in delay-2">
              <Link className="button" href="/mods">
                Explore the work <ArrowIcon />
              </Link>
              <Link className="button secondary" href="/about">
                Meet the community
              </Link>
            </div>
          </div>
          <div className="radar" aria-hidden="true">
            <span className="radar-ring" />
            <span className="radar-ring" />
            <span className="radar-ring" />
            <span className="radar-axis" />
            <span className="radar-axis horizontal" />
            <span className="radar-core" />
            <span className="radar-tag one">Workboard open</span>
            <span className="radar-tag two">Original story</span>
            <span className="radar-tag three">Community built</span>
          </div>
        </div>
      </section>

      <div className="ticker" role="group" aria-label="Community status">
        <div className="ticker-track">
          <span>No public build yet</span>
          <Link href="/login">Accounts planned</Link>
          <Link href="/mods">Workboard open</Link>
          <span>Keep the mission intact</span>
        </div>
      </div>

      <section className="section">
        <div className="wrap" data-reveal>
          <div className="section-heading">
            <h2 className="display">
              Better to play.
              <br />
              Still IGI.
            </h2>
            <p>
              We’re here to make returning to Project IGI feel good on today’s machines, and to give
              curious new players a place to start.
            </p>
          </div>
          <div className="principles">
            <div className="principle-art">
              <div className="art-stamp">OPERATION · COMMUNITY</div>
              <div className="contour" />
              <div className="art-caption">
                Respect the original.
                <br />
                Make room for more.
              </div>
            </div>
            <div className="principle-list">
              <article className="principle-row">
                <span className="principle-number">01</span>
                <div>
                  <h3>Story stays sacred</h3>
                  <p>
                    Modern touches should support the campaign—not alter its plot, characters, or
                    spirit.
                  </p>
                </div>
              </article>
              <article className="principle-row">
                <span className="principle-number">02</span>
                <div>
                  <h3>Players come first</h3>
                  <p>
                    Useful fixes, clear information, and honest progress matter more than big
                    promises.
                  </p>
                </div>
              </article>
              <article className="principle-row">
                <span className="principle-number">03</span>
                <div>
                  <h3>Built together</h3>
                  <p>
                    Fans, modders, and newcomers all have a place in shaping what comes next.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-section section">
        <div className="wrap" data-reveal>
          <div className="section-heading">
            <h2 className="display">IGI Rampage</h2>
            <p>
              A community-built direction for Project IGI. Still early, still open, and not a
              release.
            </p>
          </div>
          <div className="rampage-grid">
            <div className="rampage-features">
              <div className="rampage-features-head">
                <h3>What’s being explored</h3>
                <p className="section-status">
                  <span className="status-dot" aria-hidden="true" />
                  In development · no release date
                </p>
              </div>
              <ol className="rampage-list">
                {rampageFeatures.map((feature, index) => (
                  <li key={feature.title}>
                    <span className="rampage-index">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{feature.title}</strong>
                      <p>{feature.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="rampage-note">
                Characters, movement, and development tools are also on the list. We’ll share more
                when there is something real to show.
              </p>
            </div>
            <div className="rampage-visual">
              <div className="rampage-card">
                <h3>IGI Rampage</h3>
                <p>Early work, shared openly. Nothing to download yet.</p>
                <p className="rampage-meta">
                  <span className="status-dot" aria-hidden="true" />
                  In development · no release date
                </p>
                <a
                  className="rampage-link"
                  href={GITHUB_ISSUES_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Discuss on GitHub <ExternalIcon />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-band">
        <div className="wrap work-band-inner" data-reveal>
          <h2 className="display">
            Good ideas.
            <br />
            No made-up release dates.
          </h2>
          <Link className="button" href="/mods">
            See community directions <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap" data-reveal>
          <div className="section-heading">
            <h2 className="display">Pull up a chair.</h2>
            <p>
              Whether you’ve memorized every patrol route or just found IGI, there’s room for you
              here.
            </p>
          </div>
          <div className="values-grid">
            <article className="value">
              <h3>Find the work</h3>
              <p>Browse the ideas being explored and see what’s still taking shape.</p>
              <Link className="text-link" href="/mods">
                Explore directions <ArrowIcon />
              </Link>
            </article>
            <article className="value">
              <h3>Know the why</h3>
              <p>Get to know the principles behind this player-first community.</p>
              <Link className="text-link" href="/about">
                About GenIGI <ArrowIcon />
              </Link>
            </article>
            <article className="value">
              <h3>Stay in the loop</h3>
              <p>
                Community accounts are planned, but not live yet. We’ll be straight with you when
                that changes.
              </p>
              <Link className="text-link" href="/login">
                Account status <ArrowIcon />
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
