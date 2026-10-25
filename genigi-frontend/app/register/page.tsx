"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="account-main">
      <section className="account-panel">
        <div className="eyebrow">Join the community</div>
        <h1 className="display">Create Account</h1>
        <p>Join the GenIGI community and become part of the Project IGI legacy.</p>
        <form className="auth-form" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="register-username" className="form-label">Username</label>
            <input 
              type="text" 
              id="register-username" 
              name="username" 
              className="form-input" 
              required 
              placeholder="Choose a username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-email" className="form-label">Email</label>
            <input 
              type="email" 
              id="register-email" 
              name="email" 
              className="form-input" 
              required 
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-password" className="form-label">Password</label>
            <input 
              type="password" 
              id="register-password" 
              name="password" 
              className="form-input" 
              required 
              placeholder="Create a password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-confirm-password" className="form-label">Confirm Password</label>
            <input 
              type="password" 
              id="register-confirm-password" 
              name="confirmPassword" 
              className="form-input" 
              required 
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="button auth-button">Register</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link href="/login">Login here</Link>
        </p>
        <Link className="account-back" href="/">← Back to home</Link>
      </section>
    </main>
  );
}
