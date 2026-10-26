import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "./components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main" className="not-found" tabIndex={-1}>
      <div className="wrap not-found-grid animate-in">
        <section aria-labelledby="not-found-title">
          <h1 className="display" id="not-found-title">
            Wrong turn.
          </h1>
          <p>
            That page doesn’t exist. It may have moved, or the link might be out of date. The
            workboard and the front page are both still here.
          </p>
          <div className="not-found-actions">
            <Link className="button" href="/">
              Back to home <ArrowIcon />
            </Link>
            <Link className="button secondary" href="/mods">
              See the workboard
            </Link>
          </div>
        </section>
        <div className="not-found-mark" aria-hidden="true">
          404
        </div>
      </div>
    </main>
  );
}
