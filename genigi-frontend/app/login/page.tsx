import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <main className="account-main">
      <section className="account-panel">
        <div className="eyebrow">Community accounts</div>
        <h1 className="display">Not quite<br />online yet.</h1>
        <p>We’re still getting the community spaces ready. Login is not live, and there’s no account system to sign into right now.</p>
        <div className="account-alert"><strong>Nothing to enter just yet.</strong><br />We won’t ask you for a password or pretend an account exists. Check back when we announce that accounts are ready.</div>
        <Link className="button" href="/about">Get to know GenIGI</Link>
        <Link className="account-back" href="/">← Back to home</Link>
      </section>
    </main>
  );
}
