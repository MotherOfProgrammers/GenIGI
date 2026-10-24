import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";

export const metadata: Metadata = { title: "About the community" };

export default function AboutPage() {
  return (
    <main>
      <div className="wrap page-intro">
        <div className="eyebrow">Who we are</div>
        <h1 className="display">Old missions.<br />New company.</h1>
        <p>GenIGI is a player-first home for people who still care about Project IGI—and want to see it treated with the respect a classic deserves.</p>
      </div>
      <section className="wrap about-grid">
        <div className="about-copy">
          <h2>We remember the feeling.</h2>
          <p>The quiet before a patrol turns. The satisfaction of planning a route and getting through on your own terms. Project IGI made space for a kind of grounded, deliberate action that stuck with us.</p>
          <p>GenIGI brings longtime fans and new players together around the same idea: improve the experience where it needs care, and protect the original story and feel wherever it doesn’t.</p>
          <p>This is a community in progress. We’ll share what’s real, be open about what’s early, and make room for people who want to help.</p>
        </div>
        <aside className="quote-card">
          <div className="eyebrow">The north star</div>
          <blockquote>“Make the way back feel welcoming. Keep the mission itself intact.”</blockquote>
          <p>GenIGI community principle / 001</p>
        </aside>
      </section>
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="section-heading">
          <div><div className="eyebrow">What we stand for</div><h2 className="display">A steady hand.</h2></div>
          <p>Not every old game needs to become something else. We believe the best improvements know when to stop.</p>
        </div>
        <div className="values-grid">
          <article className="value"><h3>Keep the story</h3><p>Campaign, characters, and tone are part of the point. They’re not obstacles to modernization.</p></article>
          <article className="value"><h3>Be honest</h3><p>Work in progress means work in progress. No imaginary release buttons, downloads, or timelines.</p></article>
          <article className="value"><h3>Welcome in</h3><p>Whether IGI was your first tactical game or you just discovered it, you belong in the conversation.</p></article>
        </div>
      </section>
      <section className="work-band">
        <div className="wrap work-band-inner">
          <div><div className="eyebrow">A community takes people</div><h2 className="display">Come see what’s taking shape.</h2></div>
          <Link className="button" href="/mods">Browse the work <ArrowIcon /></Link>
        </div>
      </section>
    </main>
  );
}
