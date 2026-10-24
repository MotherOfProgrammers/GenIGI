import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function MarkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 4h16v11l-5 5H4V4Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 8h8M8 12h5M8 16h3" stroke="currentColor" strokeWidth="1.7" />
      <path d="m15 16 2 2 3-4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function DiscordIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M19.3 5.1A17 17 0 0 0 15 3.8l-.5 1a15.8 15.8 0 0 0-5 0l-.5-1a17 17 0 0 0-4.3 1.3C2 9.1 1.3 13 1.7 16.9a17.3 17.3 0 0 0 5.3 2.7l1.1-1.8-1.7-.8.4-.3a12.3 12.3 0 0 0 10.4 0l.4.3-1.7.8 1.1 1.8a17.3 17.3 0 0 0 5.3-2.7c.5-4.5-.8-8.4-3-11.8ZM8.8 14.4c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.4 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" fill="currentColor" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3.3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M3 10h13M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
    </svg>
  );
}
