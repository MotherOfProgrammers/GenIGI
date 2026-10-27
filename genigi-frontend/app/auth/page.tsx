import type { Metadata } from "next";
import { googleEnabled } from "../auth";
import { AuthForm } from "../components/auth-form";

type AuthPageProps = {
  searchParams: Promise<{ mode?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: AuthPageProps): Promise<Metadata> {
  const { mode } = await searchParams;
  return { title: mode === "signup" ? "Create account" : "Sign in" };
}

export default async function AuthPage({ searchParams }: AuthPageProps) {
  const { mode } = await searchParams;
  const formMode = mode === "signup" ? "register" : "login";
  return <AuthForm key={formMode} mode={formMode} googleEnabled={googleEnabled} />;
}
