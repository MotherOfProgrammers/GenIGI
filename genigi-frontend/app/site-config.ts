export const GITHUB_URL = "https://github.com/MotherOfProgrammers/IGI-II";
export const GITHUB_ISSUES_URL = `${GITHUB_URL}/issues`;

/**
 * Set this to a real Discord invite (https://discord.gg/...) when the server
 * is ready to be public. While it is null the site does not render a Discord
 * link, so we never send anyone to the Discord home page by mistake.
 */
export const DISCORD_INVITE_URL: string | null = null;

export const developers = [
  "MotherOfProgrammers",
  "Tenuka22",
  "NadilaXD",
  "PasinduKavishka",
];

export const GITHUB_OWNER = "MotherOfProgrammers";

/** Repositories whose contributors are shown on the home page. */
export const CONTRIBUTOR_REPOS = [
  { name: "GenIGI", label: "Website" },
  { name: "IGI-II", label: "IGI-Rampage" },
] as const;
