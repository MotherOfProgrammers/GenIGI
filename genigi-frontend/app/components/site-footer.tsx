import { developers, GITHUB_URL } from "../site-config";
import { GitHubIcon, MarkIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-mark"><MarkIcon /></span>
            <p>For the people who never really left the field.</p>
          </div>
          <a className="footer-github" href={GITHUB_URL} target="_blank" rel="noreferrer">
            <GitHubIcon /> Project IGI source on GitHub
          </a>
        </div>
        <div className="footer-bottom">
          <span>GENIGI COMMUNITY · BUILT AROUND THE ORIGINAL</span>
          <div className="credits" aria-label="Developer credits">
            <span>Made by</span>{developers.map((name) => <span key={name}>{name}</span>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
