import type { Metadata } from "next";
import { AccountStatus } from "../components/account-status";

export const metadata: Metadata = { title: "Registration" };

export default function RegisterPage() {
  return (
    <AccountStatus
      title="Registration isn’t open yet."
      intro="There’s no account to create yet. We’d rather say that plainly than collect a username for a system that isn’t running."
    />
  );
}
