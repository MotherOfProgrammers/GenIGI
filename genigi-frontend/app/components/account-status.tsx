import Link from "next/link";
import { GITHUB_ISSUES_URL } from "../site-config";
import { ArrowIcon, ExternalIcon } from "./icons";

type AccountStatusProps = {
  title: string;
  intro: string;
};

export function AccountStatus({ title, intro }: AccountStatusProps) {
  return (
    <main id="main" className="account-main" tabIndex={-1}>
      <div className="wrap">
        <div className="account-panel animate-in">
          <div className="account-body">
            <h1 className="display">{title}</h1>
            <p className="account-intro">{intro}</p>

            <h2>What’s true today</h2>
            <ul className="account-list">
              <li>There is no account system running yet.</li>
              <li>No usernames, emails, or passwords are being collected.</li>
              <li>When accounts open, we’ll post the news on GitHub and the workboard.</li>
            </ul>

            <div className="account-actions">
              <Link className="button" href="/mods">
                Explore the workboard <ArrowIcon />
              </Link>
              <a
                className="button secondary"
                href={GITHUB_ISSUES_URL}
                target="_blank"
                rel="noreferrer"
              >
                Read updates on GitHub
                <ExternalIcon />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <Link className="account-back" href="/">
              ← Back to home
            </Link>
          </div>

          <aside className="account-side" aria-label="Account status">
            <p className="panel-status">
              <span className="status-dot" aria-hidden="true" />
              Accounts are not open
            </p>
            <p className="account-side-note">
              No form, no fields, no waitlist. We’ll say when that changes.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
