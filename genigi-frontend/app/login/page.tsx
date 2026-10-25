"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="account-main">
      <section className="account-panel">
        <div className="eyebrow">Community accounts</div>
        <h1 className="display">Sign In</h1>
        <p>Access your GenIGI community account.</p>
        <form className="auth-form" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="login-username" className="form-label">Username</label>
            <input 
              type="text" 
              id="login-username" 
              name="username" 
              className="form-input" 
              required 
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password" className="form-label">Password</label>
            <input 
              type="password" 
              id="login-password" 
              name="password" 
              className="form-input" 
              required 
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="button auth-button">Login</button>
        </form>
        <p className="auth-switch">
          Don't have an account? <Link href="/register">Register here</Link>
        </p>
        <Link className="account-back" href="/">← Back to home</Link>
      </section>
    </main>
  );
}
