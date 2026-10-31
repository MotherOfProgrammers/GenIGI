"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { authClient } from "../auth-client";
import { ArrowIcon, GoogleIcon } from "./icons";

type AuthFormProps = {
  mode: "login" | "register";
  googleEnabled: boolean;
};

const copy = {
  login: {
    title: "Sign in.",
    intro: "Use your GenIGI account to pick up where you left off.",
    submit: "Sign in",
    pending: "Signing in…",
    google: "Sign in with Google",
    switchText: "New here?",
    switchLabel: "Create an account",
    switchHref: "/auth?mode=signup",
  },
  register: {
    title: "Join GenIGI.",
    intro: "Create an account with an email and password, or continue with Google.",
    submit: "Create account",
    pending: "Creating account…",
    google: "Sign up with Google",
    switchText: "Already registered?",
    switchLabel: "Sign in",
    switchHref: "/auth?mode=signin",
  },
} as const;

export function AuthForm({ mode, googleEnabled }: AuthFormProps) {
  const router = useRouter();
  const text = copy[mode];
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    const password = String(data.get("password") ?? "");

    const result =
      mode === "register"
        ? await authClient.signUp.email({
            name: String(data.get("name") ?? ""),
            email,
            password,
          })
        : await authClient.signIn.email({ email, password });

    if (result.error) {
      setError(result.error.message ?? "Something went wrong. Please try again.");
      setPending(false);
      return;
    }
    router.push("/");
    router.refresh();
  }

  async function onGoogle() {
    setError(null);
    if (!googleEnabled) {
      setError("Google sign-in isn’t configured on this server yet. Use email for now.");
      return;
    }
    setPending(true);
    const result = await authClient.signIn.social({ provider: "google", callbackURL: "/" });
    if (result?.error) {
      setError(result.error.message ?? "Google sign-in failed. Please try again.");
      setPending(false);
    }
  }

  return (
    <main id="main" className="account-main" tabIndex={-1}>
      <div className="wrap">
        <div className="account-panel animate-in">
          <div className="account-body">
            <h1 className="display">{text.title}</h1>
            <p className="account-intro">{text.intro}</p>

            <form className="auth-form" onSubmit={onSubmit}>
              {mode === "register" ? (
                <div className="field">
                  <label htmlFor="auth-name">Name</label>
                  <input id="auth-name" name="name" type="text" autoComplete="name" required />
                </div>
              ) : null}
              <div className="field">
                <label htmlFor="auth-email">Email</label>
                <input id="auth-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="auth-password">Password</label>
                <input
                  id="auth-password"
                  name="password"
                  type="password"
                  autoComplete={mode === "register" ? "new-password" : "current-password"}
                  minLength={8}
                  required
                />
                {mode === "register" ? <p className="field-hint">At least 8 characters.</p> : null}
              </div>

              <p className="form-error" role="alert" aria-live="polite">
                {error}
              </p>

              <div className="account-actions">
                <button className="button" type="submit" disabled={pending}>
                  {pending ? text.pending : text.submit}
                  {pending ? null : <ArrowIcon />}
                </button>
                <button className="button secondary" type="button" onClick={onGoogle} disabled={pending}>
                  <GoogleIcon />
                  {text.google}
                </button>
              </div>
            </form>

            <p className="auth-switch">
              {text.switchText} <Link href={text.switchHref}>{text.switchLabel}</Link>
            </p>
          </div>

          <aside className="account-side" aria-label="About accounts">
            <p className="panel-status">
              <span className="status-dot" aria-hidden="true" />
              Email and Google
            </p>
            <p className="account-side-note">
              An account only holds your name, email, and sign-in. There is no public build to
              download yet.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
