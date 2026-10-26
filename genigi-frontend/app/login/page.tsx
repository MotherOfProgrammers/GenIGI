import type { Metadata } from "next";
import { AccountStatus } from "../components/account-status";

export const metadata: Metadata = { title: "Accounts" };

export default function LoginPage() {
  return (
    <AccountStatus
      title="Sign-in isn’t open yet."
      intro="GenIGI accounts are planned, but there is no sign-in to offer today. When accounts arrive, this is where you’ll manage yours."
    />
  );
}
