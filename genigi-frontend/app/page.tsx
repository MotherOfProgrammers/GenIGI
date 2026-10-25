import Link from "next/link";
import { ArrowIcon } from "./components/icons";

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <div className="eyebrow animate-in">A community for the field</div>
            <h1 className="display animate-in delay-1">The mission<br />isn’t <span>over.</span></h1>
            <p className="animate-in delay-2">Project IGI still has a place in our hearts. We’re a player-first community working on thoughtful modern improvements—without rewriting the story that brought us here.</p>
            <div className="hero-actions animate-in delay-2">
              <Link className="button" href="/mods">Explore the work <ArrowIcon /></Link>
              <Link className="button secondary" href="/about">Meet the community</Link>
            </div>
          </div>
          <div className="radar" aria-hidden="true">
            <span className="radar-ring" /><span className="radar-ring" /><span className="radar-ring" />
            <span className="radar-axis" /><span className="radar-axis horizontal" /><span className="radar-core" />
            <span className="radar-tag one">Field notes 01</span><span className="radar-tag two">Original story</span><span className="radar-tag three">Community built</span>
          </div>
        </div>
      </section>
      <div className="ticker" aria-label="Community values">
        <div className="ticker-track" aria-hidden="true">{Array.from({ length: 4 }, (_, index) => <span key={index}>Keep the mission intact</span>)}</div>
      </div>
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div><div className="eyebrow">Our point of view</div><h2 className="display">Better to play.<br />Still IGI.</h2></div>
            <p>We’re here to make returning to Project IGI feel good on today’s machines, and to give curious new players a place to start.</p>
          </div>
          <div className="principles">
            <div className="principle-art">
              <div className="art-stamp">OPERATION · COMMUNITY</div><div className="contour" />
              <div className="art-caption">Respect the original.<br />Make room for more.</div>
            </div>
            <div className="principle-list">
              <article className="principle-row"><span className="principle-number">01</span><div><h3>Story stays sacred</h3><p>Modern touches should support the campaign—not alter its plot, characters, or spirit.</p></div></article>
              <article className="principle-row"><span className="principle-number">02</span><div><h3>Players come first</h3><p>Useful fixes, clear information, and honest progress matter more than big promises.</p></div></article>
              <article className="principle-row"><span className="principle-number">03</span><div><h3>Built together</h3><p>Fans, modders, and newcomers all have a place in shaping what comes next.</p></div></article>
            </div>
          </div>
        </div>
      </section>
      <section className="upcoming-section section">
        <div className="wrap">
          <div className="section-heading">
            <div><div className="eyebrow">Upcoming · Major Release</div><h2 className="display">IGI Rampage</h2></div>
            <p>The next evolution of Project IGI. Built by the community for the community.</p>
          </div>
          <div className="rampage-grid">
            <div className="rampage-features">
              <div className="eyebrow" style={{ marginBottom: "20px" }}>✨ Features</div>
              <ul className="rampage-list">
                <li><strong>🌐 Modernized Multiplayer</strong> — work toward a more flexible online multiplayer experience.</li>
                <li><strong>🗺️ New Maps</strong> — additional environments for multiplayer matches.</li>
                <li><strong>🔫 New Weapons and Weapon Skins</strong> — expanded weapon variety and visual customization.</li>
                <li><strong>🪖 New Characters and Character Skins</strong> — more options for player appearance.</li>
                <li><strong>🎨 Enhanced Graphics</strong> — visual improvements aimed at multiplayer.</li>
                <li><strong>🏃 New Movements and Combat Tactics</strong> — additional ways to move and engage.</li>
                <li><strong>🧰 Development Tools</strong> — project utilities for inspecting, preparing, and working with game data.</li>
              </ul>
            </div>
            <div className="rampage-visual">
              <div className="rampage-card">
                <div className="rampage-badge">COMING SOON</div>
                <h3>IGI RAMPAGE</h3>
                <p>The mission continues. Redefining tactical stealth for a new generation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work-band">
        <div className="wrap work-band-inner">
          <div><div className="eyebrow">Field status · in progress</div><h2 className="display">Good ideas.<br />No made-up release dates.</h2></div>
          <Link className="button" href="/mods">See community directions <ArrowIcon /></Link>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div><div className="eyebrow">Start here</div><h2 className="display">Pull up a chair.</h2></div>
            <p>Whether you’ve memorized every patrol route or just found IGI, there’s room for you here.</p>
          </div>
          <div className="values-grid">
            <article className="value"><h3>Find the work</h3><p>Browse the ideas being explored and see what’s still taking shape.</p><Link className="account-back" href="/mods">Explore directions →</Link></article>
            <article className="value"><h3>Know the why</h3><p>Get to know the principles behind this player-first community.</p><Link className="account-back" href="/about">About GenIGI →</Link></article>
            <article className="value"><h3>Stay in the loop</h3><p>Community accounts are planned, but not live yet. We’ll be straight with you when that changes.</p><Link className="account-back" href="/register">Account status →</Link></article>
          </div>
        </div>
      </section>
    </main>
  );
}
