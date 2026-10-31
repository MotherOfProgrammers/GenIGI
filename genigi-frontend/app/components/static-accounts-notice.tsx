import Link from "next/link";
import { GITHUB_URL } from "../site-config";
import { ArrowIcon, ExternalIcon } from "./icons";

/**
 * Shown when the site is exported to a static host (GitHub Pages). Accounts
 * require the Better Auth/SQLite server, so the static build says so instead
 * of rendering a form that cannot work.
 */
export function StaticAccountsNotice() {
  return (
    <main id="main" className="account-main" tabIndex={-1}>
      <div className="wrap">
        <div className="account-panel animate-in">
          <div className="account-body">
            <h1 className="display">Accounts need the server build.</h1>
            <p className="account-intro">
              This is the static GitHub Pages preview. Sign-in with email or Google runs on the
              full Next.js build; nothing is stored on this deployment.
            </p>

            <div className="account-actions">
              <Link className="button" href="/mods">
                Browse the mods <ArrowIcon />
              </Link>
              <a className="button secondary" href={GITHUB_URL} target="_blank" rel="noreferrer">
                Source on GitHub <ExternalIcon />
              </a>
            </div>
          </div>

          <aside className="account-side" aria-label="About accounts">
            <p className="panel-status">
              <span className="status-dot" aria-hidden="true" />
              Static preview
            </p>
            <p className="account-side-note">
              No account is created and no account data is collected on this deployment.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
