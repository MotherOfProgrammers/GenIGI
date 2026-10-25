import Link from "next/link";
import { ArrowIcon } from "./components/icons";

export default function NotFound() {
  return (
    <main className="not-found">
      <section className="error-panel animate-in" aria-labelledby="error-title">
        <div className="eyebrow">System alert · 404</div>
        <h1 className="display" id="error-title">ERROR<span>_</span>404</h1>
        <p>Route calibration failure. The requested endpoint does not exist in the GenIGI tactical grid. Error has been logged for system diagnostics.</p>
        <div className="error-code" role="status">
          <span className="status-dot" aria-hidden="true" />
          <span>ROUTE_NOT_FOUND</span>
          <span>ERR_CODE: 0x404</span>
          <span>SEVERITY: LOW</span>
        </div>
        <div className="error-details">
          <div className="error-detail-line">[SYS] Path resolution failed</div>
          <div className="error-detail-line">[SEC] No security breach detected</div>
          <div className="error-detail-line">[CAL] Attempting fallback route...</div>
        </div>
        <div className="error-actions">
          <Link className="button" href="/">Return to base <ArrowIcon /></Link>
          <Link className="button secondary" href="/mods">Access field data</Link>
        </div>
      </section>
    </main>
  );
}
