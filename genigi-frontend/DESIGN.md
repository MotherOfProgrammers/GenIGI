---
name: GenIGI
description: "A tactical field dossier for Project IGI: dark terminal, warm paper, one signal red."
colors:
  tactical-black: "#080807"
  panel-black: "#12110e"
  sunken-black: "#0b0a09"
  footer-black: "#050504"
  warm-white: "#f2efe8"
  ash: "#b7b2a8"
  faint-ash: "#8d887e"
  signal-red: "#ff2f23"
  signal-red-hover: "#ff5a4e"
  on-signal: "#0a0908"
  hairline-dark: "#2b2822"
  hairline-dark-strong: "#4f4a42"
  paper: "#f2efe7"
  panel-paper: "#fbf8f0"
  sunken-paper: "#e9e4d7"
  ink: "#17140f"
  muted-ink: "#5b554b"
  faint-ink: "#6b655b"
  signal-red-light: "#c0140a"
  hairline-paper: "#d0c8b8"
  hairline-paper-strong: "#8f8678"
typography:
  display:
    fontFamily: "Tourney, Barlow Condensed, Impact, sans-serif"
    fontSize: "clamp(2.5rem, 6.6vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Tourney, Barlow Condensed, Impact, sans-serif"
    fontSize: "clamp(2.375rem, 5vw, 4.125rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Barlow Condensed, Impact, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "0.015em"
  nav:
    fontFamily: "Barlow Condensed, Impact, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.08em"
rounded:
  sharp: "0px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  section: "clamp(64px, 8vw, 108px)"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.on-signal}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.signal-red-hover}"
    textColor: "{colors.on-signal}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.warm-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0 20px"
    height: "48px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.warm-white}"
    typography: "{typography.nav}"
    rounded: "{rounded.sharp}"
    height: "44px"
  status-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ash}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "6px 9px"
  panel-card:
    backgroundColor: "{colors.panel-black}"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.sharp}"
    padding: "34px"
---

# Design System: GenIGI

## Overview

**Creative North Star: "The Field Dossier"**

GenIGI looks like a briefing left on the table after a long operation: black terminal surfaces, warm paper, hard rules, and type that behaves like stencilled signage. The interface never pretends to be a game HUD or a sci-fi dashboard. It is an editorial community archive for people who care about Project IGI, with the patience to say what is real and what is still being worked out.

The two modes are one system, not two skins. Dark is the default field-terminal reading of the dossier; light is the same pages printed on warm paper. Both share one layout, one grid, one type hierarchy, one red signal, and the same flat, hairline-driven surfaces. Footer and work-band surfaces stay dark in both modes so the page always has an anchor.

The voice is specific and unsentimental: short headings, plain status copy, no invented release dates, no fake terminal output. The design supports that honesty by keeping decoration to a minimum. One radar drawing, one clipped brand mark, one red signal.

**Key Characteristics:**
- Two honest modes: tactical black by default, warm paper dossiers on request.
- Tourney display type, set only at sign-scale.
- Barlow Condensed for subheads and navigation; DM Sans for reading; IBM Plex Mono for metadata.
- Flat surfaces, 1px hairlines, square corners.
- Signal red reserved for action, status, and wayfinding.
- Status-first content: no dead forms, no fake downloads, no invented dates.
- A restrained motion layer: one hero rise, gated scroll reveals, and small directional cues.

## Colors

The palette is a two-mode neutral field interrupted by one live red. It is deliberately small: paper, ink, ash, hairline, signal.

### Primary
- **Signal Red** (`#ff2f23` dark / `#c0140a` light): The only accent. It marks primary actions, the live status dot, the selected navigation item, the radar core, and the red rule under text links. It is never a background wash or a decorative gradient.
- **On Signal** (`#0a0908` dark / `#ffffff` light): Text and icons placed on Signal Red. The dark-mode value is near-black so red buttons read as a field marking rather than a warning light.

### Neutral
- **Tactical Black** (`#080807`): Default page ground. It is warm-black, not blue-black.
- **Panel Black** (`#12110e`) and **Sunken Black** (`#0b0a09`): Raised panels and the Rampage section ground. Depth comes from these tonal steps, not shadows.
- **Warm White** (`#f2efe8`): Primary text on dark, and the inverted quote-card surface on About.
- **Ash** (`#b7b2a8`) and **Faint Ash** (`#8d887e`): Secondary and metadata text on dark.
- **Hairline Dark** (`#2b2822`) and **Hairline Dark Strong** (`#4f4a42`): Dividers, panel borders, and interactive outlines.
- **Paper** (`#f2efe7`): Light-mode page ground.
- **Panel Paper** (`#fbf8f0`) and **Sunken Paper** (`#e9e4d7`): Light-mode raised and sunken surfaces.
- **Ink** (`#17140f`): Primary text on paper.
- **Muted Ink** (`#5b554b`) and **Faint Ink** (`#6b655b`): Secondary and metadata text on paper.
- **Hairline Paper** (`#d0c8b8`) and **Hairline Paper Strong** (`#8f8678`): Light-mode dividers and interactive outlines.
- **Footer Black** (`#050504`): Footer and work-band ground in both modes.

### Named Rules

**The One Signal Rule.** Red appears only where something is live: a primary action, an active nav item, a status dot, a focused field, or a selected state. It should occupy less than a tenth of any screen. If red is everywhere, it stops being a signal.

**The Paper Swap Rule.** Light mode is a full inversion of the reading surface, not a tint. Paper mode changes the page, ink, panels, hairlines, and red values together. It never leaves a navy, cyan, or purple residue, and it never turns the footer light.

## Typography

**Display Font:** Tourney (with Barlow Condensed and Impact fallbacks)
**Body Font:** DM Sans (with system-ui fallback)
**Subhead Font:** Barlow Condensed (with Impact fallback)
**Label/Mono Font:** IBM Plex Mono (with monospace fallback)

**Character:** Tourney is the system's loudest voice: geometric, hollow, and built for two- or three-word declarations. Barlow Condensed gives subheads a clipped, printed-briefing cadence. DM Sans keeps long copy plain and readable. IBM Plex Mono is the field label: indices, statuses, buttons, and small metadata.

### Hierarchy
- **Display** (Tourney 700, `clamp(2.5rem, 6.6vw, 5.25rem)`, line-height `0.86`): Hero headlines and page titles. Uppercase, max 84px on desktop.
- **Headline** (Tourney 700, `clamp(2.375rem, 5vw, 4.125rem)`, line-height `0.9`): Section headlines and large statements.
- **Title** (Barlow Condensed 600, `1.5rem`, line-height `1.05`): Card titles, principle names, list-item headings, and subheads. Uppercase.
- **Nav** (Barlow Condensed 600, `0.9375rem`, tracking `0.08em`): Header, mobile menu, and footer links. Uppercase.
- **Body** (DM Sans 400, `1rem`, line-height `1.65`): Reading copy. Keep measure between 52ch and 64ch for long passages; sidebar paragraphs can run to 50ch.
- **Label** (IBM Plex Mono 500–600, `0.6875rem`, tracking `0.08em`): Buttons, statuses, indices, eyebrow-free metadata, footer credits. Uppercase. Never use mono for a full sentence.

### Named Rules

**The Stencil Rule.** Tourney is display-only. Do not set it below 38px, and never use it for body copy, navigation, buttons, or form labels. Its hollow geometry needs size to stay legible.

**The Metadata Rule.** Mono type is for machine-shaped information: status, numbering, dates that actually exist, button text, and credits. It never carries a paragraph. Metadata never goes below 11px, even in the footer.

**The Eleven-Pixel Floor.** Any visible text that carries meaning or can be clicked is at least 11px. Micro-labels earn their small size through tracking and case, not through illegibility.

## Layout

The container is `min(1180px, calc(100% - clamp(32px, 5vw, 64px)))`, centered. Pages share a section rhythm of `clamp(64px, 8vw, 108px)` vertical padding, with `.section-tight` used to remove the top half when two editorial sections meet.

The home hero is `min(760px, calc(100svh - 77px))` on desktop and auto-height below 900px, so the primary CTA stays visible at 1366×768 and 1280×720. Hero copy is capped at 660px; the radar is capped at 440px. Most editorial pages use a split heading: headline left, short deck right, stacking at 760px.

Recurring grids:
- Hero: `1.08fr / 0.92fr`, stacked at 900px.
- Principles: `1.06fr / 0.94fr`, stacked at 900px.
- Rampage: `1.2fr / 0.8fr`, stacked at 900px.
- About: `1.15fr / 0.85fr`, stacked at 900px.
- Values: three equal columns, stacked at 760px.
- Workboard rows: `76px / 1fr / auto`, with the status chip dropping below the description at 760px.

The header is 76px of content on desktop and 68px on mobile (77px and 69px with the bottom hairline); every interactive target is at least 44px tall, and primary buttons are 48px. The mobile menu is a disclosure panel under the header, with 56px rows, a theme control, and a status line. Below 350px the brand descriptor hides so the header keeps its margins.

**The First Screen Rule.** At 1366×768 and 1280×720, the hero's primary CTA must remain visible without scrolling. A full-bleed hero is not a reason to hide the way in.

**The Body Measure Rule.** Long-form copy stays between 52ch and 64ch, which lands under 80 rendered characters per line. Decks and sidebar paragraphs can be narrower; they should never run the full 1180px container.

## Elevation & Depth

The system is flat by default. Depth is carried by tonal panels, 1px hairlines, and the contrast between paper and ink, not by glows or stacked shadows. The quote card on About is a flat inverted surface. The Rampage card is the one lifted element: it carries a soft, offset shadow and a hairline border so it reads as a card placed on the section, not a floating app widget.

### Shadow Vocabulary
- **Card lift** (`0 20px 50px rgba(0, 0, 0, 0.32)` dark / `0 20px 45px rgba(23, 20, 15, 0.1)` light): The Rampage card only. Always paired with a 1px border.
- **Menu edge** (`0 24px 40px rgba(0, 0, 0, 0.18)`): The open mobile menu, to separate it from the page beneath.

**The Flat-By-Default Rule.** Surfaces are flat at rest. If a new component needs depth, give it a tonal surface or a hairline first. A shadow must have an offset and a soft blur; a zero-offset colored halo is decoration and is not allowed.

## Shapes

The form language is square, printed, and clipped. Cards, buttons, panels, and chips have 0 radius. Circles appear only where they carry meaning: radar rings, the signal dot, and the radar core. The brand mark is a square with a clipped bottom-right corner, like a field stamp. Rules are 1px; the only heavier line is the 2px red underline on the active navigation item and the red rule under text links.

The radar is the signature geometry: concentric rings, two axes, a red core, and one slow sweeping sector. It is line art, not a glowing sci-fi prop. The About art panel uses the same contour language with offset oval lines.

**The No-Soft-Card Rule.** Panels stay square. A rounded card, pill button, or soft app surface is off-system.

**The One-Pixel Rule.** Borders, dividers, and panel edges are 1px. Do not reintroduce the old 3px side-tab or thick left-border callout.

## Motion

Motion is arrival and comprehension, never ambience. The page settles once, reveals sections as they enter the viewport, and gives small cues on interaction. Nothing loops in the reading surface except the radar.

- **Entrance:** hero and page-intro copy rises 12px over `0.6s` on `cubic-bezier(0.16, 1, 0.3, 1)`, with `0.09s` and `0.18s` delays for the paragraph and actions.
- **Reveal:** sections below the fold move 16px and fade over `0.62s` when they first intersect. Above-fold and already-passed sections are revealed before paint, including after client-side navigation. Content is only hidden while JavaScript is running (`html.has-js`); without JavaScript, or with reduced motion, everything is visible from the start. The hidden state uses opacity only, so assistive technology can still read the full page before sections are revealed.
- **Theme change:** the theme toggle adds a temporary class for `0.32s`, crossfading background, border, text, fill, stroke, and shadow colors instead of hard-switching the page.
- **Cues:** the active nav underline draws from the left over `0.22s`; text-link and footer rules draw the same way on hover and `:focus-visible`; internal arrows advance `3px`; external icons nudge up-right `2px`; the theme icon rotates and scales in over `0.34s`; the mobile menu drops `8px` over `0.22s`.
- **Orientation:** a 2px signal line in the sticky header hairline tracks reading progress. It is hidden at the top of the page and has no transition, so it follows scroll directly.
- **404:** a single 1px signal line scans the outlined `404` once over `0.9s`, then disappears.
- **Radar:** the sector sweeps once every `6s`; the core stays still so the drawing never pretends to be live data.

**The Reduced-Motion Rule.** Under `prefers-reduced-motion: reduce`, all animations and transitions collapse to `0.01ms`, smooth scrolling is disabled, and every reveal is forced visible. Motion is an enhancement, never a requirement for reading the page.

## Components

### Buttons
- **Shape:** square (0 radius), 48px minimum height, 20px horizontal padding.
- **Primary:** Signal Red ground with On Signal text, mono 10.5px uppercase, 0.08em tracking. Hover shifts to Signal Red Hover. Active moves down 1px. Focus uses a 2px signal outline with a 3px offset.
- **Secondary:** transparent ground, 1px Hairline Strong border, Warm White/Ink text. Hover fills with the local panel tone and strengthens the border.
- **Text links:** mono 10px uppercase with a 1px red bottom rule; the arrow sits 8px from the label. Minimum target height is 44px.

### Navigation
- **Header:** sticky, 76px desktop / 68px mobile of content, plus a 1px bottom hairline. Brand mark, wordmark, and small "Project IGI community" line; the line hides below 350px.
- **Desktop links:** Barlow Condensed 15px uppercase. Default Ash; hover/in-current Ink. The 2px Signal Red underline draws from the left on hover and stays drawn for the active page.
- **Actions:** 44px square GitHub icon link and a 44px theme toggle. The theme toggle names the destination theme ("Light" while dark, "Dark" while light).
- **Mobile:** below 900px the desktop links are replaced by a 44px Menu button. The menu is a focus-contained disclosure under the header with 56px rows, a GitHub row, the theme toggle, and a status line. Opening it locks background scroll, dims the page behind it, and makes that page inert; Tab stays inside the header and menu, Escape closes it, and focus returns to the Menu button. Outside taps and viewport changes also close it.
- **Route changes:** client-side navigation moves focus to `#main` and announces the new page heading through a polite status region. The announcement is silent on first load.

### Cards / Containers
- **Rampage card:** Panel Black/Paper ground, 1px hairline, 34px padding, square corners, one soft offset shadow. Title, one-line description, a status line below the copy, and one GitHub link. No label above the title and no nested cards.
- **Workboard status note:** Panel ground, 1px border, 16×18px padding, 7px red dot, 13.5px ash copy. It is a flat note, not an alert banner.
- **Quote card:** flat inverted surface (Ink ground with Paper text on light; Warm White ground with Black text on dark). No border, no shadow, no quotation-mark decoration.

### Chips
- **Status chip:** transparent ground, 1px Hairline Strong border, 6px signal dot, mono 9.5px uppercase. Used for "Direction · early", "Work in progress", and "Community principle".
- **Section status:** no border. A 7px signal dot plus mono 9.5px uppercase text, used for "In development · no release date".

### Status Strip
The strip under the hero is static, not a marquee. Signal Red ground, On Signal text, mono 11px uppercase, one set of four community statuses, each with a small signal dot. "Accounts planned" links to the account status page and "Workboard open" links to `/mods`; the other two remain plain text. Items wrap as whole units with no dangling separators, and each item holds a 44px touch height. Focus rings switch to On Signal so they stay visible on the red ground.

### Account Status
Login and registration are status pages, not forms. Each page leads with a plain-language headline, an intro, a three-item "What's true today" list, and two actions (Workboard, GitHub). A right-hand status rail repeats "Accounts are not open." There are no input styles in the system because there are no public forms until accounts exist.

### Footer
The footer is Footer Black in both modes. Brand mark, one-line community note, GitHub/Workboard/Account status links at 44px height, and a 10px mono bottom row with the community line and developer credits. It is the dark anchor under both modes.

## Do's and Don'ts

### Do:
- **Do** keep Signal Red for primary actions, active navigation, status dots, and the one live signal per surface.
- **Do** use 1px hairlines, tonal panels, and generous section rhythm to create structure.
- **Do** keep every interactive target at least 44px tall, and use a 2px visible focus outline.
- **Do** keep all visible functional text at 11px or larger.
- **Do** write status copy that says what is true today: no build, no accounts, no release date, no download.
- **Do** keep body copy between 52ch and 64ch and display type at or below 84px.
- **Do** keep the footer and work band dark in both modes.
- **Do** use the inline line icons and the clipped brand mark rather than decorative iconography.
- **Do** keep motion to arrival, reveal, and interaction cues; respect `prefers-reduced-motion`.
- **Do** give keyboard focus the same rule draw, arrow cue, and container response that hover gets.
- **Do** mark external links with the diagonal icon and an "opens in a new tab" cue.

### Don't:
- **Don't** use gradient text, zero-offset glows, neon halos, or colored text shadows.
- **Don't** put eyebrow or kicker labels above headings.
- **Don't** use emoji as icons.
- **Don't** use 3px left-border callouts or nested cards.
- **Don't** invent system logs, error codes, fake terminal output, release dates, owners, or downloads.
- **Don't** build forms or account CTAs for features that do not exist.
- **Don't** link to `discord.com` or the Discord home page without a real invite URL.
- **Don't** round cards, use pill buttons, or apply shadows as decoration.
- **Don't** bring back the navy/cyan/purple skin or the animated gradient theme.
- **Don't** turn the status strip into a repeating marquee.
- **Don't** animate reading copy, add looping decorative motion beyond the radar, or hide content behind motion when JavaScript or motion is unavailable.
