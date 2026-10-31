"use client";

import Link from "next/link";
import { authClient } from "../auth-client";

type AccountNavProps = {
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
};

/**
 * Session-aware account controls. Kept in its own component so the static
 * GitHub Pages build can omit it entirely and skip the session request.
 */
export function AccountNav({ variant, onNavigate }: AccountNavProps) {
  const { data: session } = authClient.useSession();
  const signedIn = Boolean(session?.user);

  async function signOut() {
    onNavigate?.();
    await authClient.signOut();
  }

  if (variant === "mobile") {
    if (signedIn) {
      return (
        <button type="button" onClick={signOut}>
          Sign out{session?.user.name ? ` (${session.user.name})` : ""}
        </button>
      );
    }
    return (
      <Link href="/auth?mode=signup" onClick={onNavigate}>
        Register
      </Link>
    );
  }

  if (signedIn) {
    return (
      <>
        <span className="nav-user">{session?.user.name}</span>
        <button className="button secondary nav-button" type="button" onClick={signOut}>
          Sign out
        </button>
      </>
    );
  }

  return (
    <Link className="button nav-button" href="/auth?mode=signup">
      Register
    </Link>
  );
}
