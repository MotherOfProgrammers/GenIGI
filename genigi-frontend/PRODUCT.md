# PRODUCT.md — GenIGI

## What it is

GenIGI is a player-run community site for **Project IGI** and its community continuation, **IGI-Rampage**. It is not a game download page and not an official publisher site. It is the public front door for a small group of players and modders: what they care about, what they are exploring, and who is doing the work.

## Who it is for

- **Returning players** who remember Project IGI and want to know whether anything real is happening.
- **Curious newcomers** who found the game through streamers, videos, or friends.
- **Contributors** — modders, developers, artists — who want to know how to get involved.

The visitor's first question is "is this real, or is it vapourware?" Every surface should answer that with honesty before it tries to look impressive.

## Surfaces and modes

| Surface | Mode | Job |
|---|---|---|
| `/` home | Persuade | Convince a returning player the community is real, active, and worth joining. |
| `/mods` | Read + Persuade | State exactly which directions are being explored and at what stage. |
| `/about` | Read | Explain the principles and the people behind the project. |
| `/auth` | Operate | Create or use an account with as little friction as possible. |
| `404` | Recover | Get the visitor back to something real in one click. |

## Product truth (do not contradict)

- **There is no public build and no release date.** Nothing is downloadable, installable, or playable yet.
- **Accounts are open.** Email + password and Google sign-in are live, backed by Better Auth and SQLite. An account stores only name, email, and sign-in.
- **Work is real but early.** Multiplayer restoration has been through network tests; weapon-data and texture tooling exists in the repo; a new game interface is in progress in C++.
- **The campaign is out of scope.** Story, characters, and mission order are not being changed.
- **Contributors are read from GitHub** at request time; if the API fails, the page degrades to plain repo links.
- **No Discord invite exists yet.** Never link to the Discord home page as if it were an invite.
- **The only real off-site destinations** are the GitHub repository, its issues, and contributor profiles.

## Content rules

- Never invent release dates, downloads, player counts, system specs, changelogs, owners, or terminal output.
- Status copy says what is true today, in plain language.
- No forms or account CTAs for features that do not exist.
- Keep existing factual copy unless the user explicitly asks to change it. Visual language may change; claims may not.

## Technical constraints

- Next.js 16 App Router, React 19, TypeScript, `next/font` (Tourney, Barlow Condensed, DM Sans, IBM Plex Mono).
- Better Auth + better-sqlite3 on the server; no other runtime services.
- Package manager: **Bun**.
- Deployable as a standard Next server; no CDN-only assumptions.
- Must stay usable without JavaScript for reading content, and must honour `prefers-reduced-motion`.
- Accessibility floor: 44px interactive targets, visible 2px focus rings, 11px minimum functional text, semantic landmarks, no motion-gated content.
