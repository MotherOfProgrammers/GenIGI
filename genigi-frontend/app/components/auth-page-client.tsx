"use client";

import { useSearchParams } from "next/navigation";
import { AuthForm } from "./auth-form";

type AuthPageClientProps = {
  googleEnabled: boolean;
};

/**
 * The form mode lives in `?mode=`, so it is read on the client. This keeps the
 * route prerenderable for the static GitHub Pages export.
 */
export function AuthPageClient({ googleEnabled }: AuthPageClientProps) {
  const params = useSearchParams();
  const mode = params.get("mode") === "signup" ? "register" : "login";
  return <AuthForm key={mode} mode={mode} googleEnabled={googleEnabled} />;
}
