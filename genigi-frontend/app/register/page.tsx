import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Register" };

export default function RegisterPage() {
  return (
    <main className="account-main">
      <section className="account-panel">
        <div className="eyebrow">Join the community</div>
        <h1 className="display">We’re making<br />room for you.</h1>
        <p>Account creation isn’t live yet. We’re building the community foundations first, and we’ll be clear when registration is actually open.</p>
        <div className="account-alert"><strong>Registration is not available today.</strong><br />No form, no email collection, no pretend sign-up. For now, explore the community and the work taking shape.</div>
        <Link className="button" href="/mods">See community directions</Link>
        <Link className="account-back" href="/">← Back to home</Link>
      </section>
    </main>
  );
}
