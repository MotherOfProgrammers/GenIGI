import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";

export const metadata: Metadata = { title: "Mods & directions" };

const directions = [
  {
    number: "01",
    title: "A smoother return to the field",
    description: "Exploring compatibility and quality-of-life improvements that can help the original game feel at home on current setups. This is a community direction, not a released mod.",
    status: "Direction · early",
  },
  {
    number: "02",
    title: "Clarity without compromise",
    description: "Thinking through visual and interface refinements that respect the original atmosphere instead of smoothing away its identity.",
    status: "Work in progress",
  },
  {
    number: "03",
    title: "The campaign, unchanged",
    description: "Any future improvements should protect the story, characters, mission order, and grounded tone that make IGI feel like IGI.",
    status: "Community principle",
  },
];

export default function ModsPage() {
  return (
    <main>
      <div className="wrap page-intro">
        <div className="eyebrow">Community workboard · 2025/26</div>
        <h1 className="display">Ideas in the<br />works.</h1>
        <p>These are directions the community cares about—not a catalogue of released downloads. We’ll label real builds clearly when there’s something ready to share.</p>
      </div>
      <div className="wrap"><div className="status-note">Nothing listed here is currently presented as released or downloadable. We’d rather be clear about the stage than promise more than we can deliver.</div></div>
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div><div className="eyebrow">Where attention is going</div><h2 className="display">A careful kind<br />of progress.</h2></div>
            <p>Better compatibility and thoughtful quality-of-life changes can make an old favourite easier to revisit—while leaving the campaign alone.</p>
          </div>
          <div className="mod-list">
            {directions.map((item) => (
              <article className="mod-row" key={item.number}>
                <span className="mod-number">{item.number} / 03</span>
                <div><h2>{item.title}</h2><p>{item.description}</p></div>
                <span className="mod-state">{item.status}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="work-band">
        <div className="wrap work-band-inner">
          <div><div className="eyebrow">Have a useful idea?</div><h2 className="display">The best work starts with players.</h2></div>
          <Link className="button" href="/about">What we’re about <ArrowIcon /></Link>
        </div>
      </section>
    </main>
  );
}
