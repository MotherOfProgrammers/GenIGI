import Link from "next/link";
import { ArrowIcon } from "./components/icons";

export default function NotFound() {
  return (
    <main className="not-found">
      <section className="error-panel animate-in" aria-labelledby="error-title">
        <div className="eyebrow">Navigation error · 404</div>
        <h1 className="display" id="error-title">Signal lost<span>.</span></h1>
        <p>Looks like this page didn’t make it to the landing zone. The link may have taken a wrong turn, but you’re not stuck out here.</p>
        <div className="error-code" role="status">
          <span className="status-dot" aria-hidden="true" />
          <span>ROUTE NOT FOUND</span>
          <span>RECOVERABLE</span>
        </div>
        <div className="error-actions">
          <Link className="button" href="/">Back to base <ArrowIcon /></Link>
          <Link className="button secondary" href="/mods">Browse the field</Link>
        </div>
      </section>
    </main>
  );
}
