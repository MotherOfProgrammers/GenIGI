import type { Metadata } from "next";
import { Suspense } from "react";
import { googleEnabled } from "../auth-flags";
import { AuthForm } from "../components/auth-form";
import { AuthPageClient } from "../components/auth-page-client";
import { StaticAccountsNotice } from "../components/static-accounts-notice";

export const metadata: Metadata = { title: "Account" };

const STATIC_HOSTING = process.env.NEXT_PUBLIC_STATIC_HOSTING === "1";

export default function AuthPage() {
  if (STATIC_HOSTING) return <StaticAccountsNotice />;

  return (
    <Suspense fallback={<AuthForm mode="login" googleEnabled={googleEnabled} />}>
      <AuthPageClient googleEnabled={googleEnabled} />
    </Suspense>
  );
}
