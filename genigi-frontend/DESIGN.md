---
name: GenIGI
description: "COLD SIGNAL — a night-terminal cyberpunk HUD for a player-run Project IGI community."
colors:
  signal-red: "#ff2d2d"
  signal-hot: "#ff7066"
  trace-cyan: "#22e8ff"
  noise-magenta: "#ff2ba6"
  void: "#04050a"
  night: "#07080f"
  panel: "#0a0c15"
  panel-raised: "#0e111c"
  sunken: "#04050b"
  ink: "#f2f5fb"
  ink-muted: "#a4aec4"
  ink-faint: "#727d95"
  hairline: "#96afff24"
  on-signal: "#0a0206"
  daylight-ground: "#f1f4fa"
  daylight-ink: "#05070d"
  daylight-muted: "#45516a"
  daylight-faint: "#657089"
  daylight-signal: "#d0120c"
  daylight-cyan: "#00748a"
  daylight-magenta: "#ac0068"
  focus-daylight: "#00626f"
  footer-ink: "#f2f5fb"
  footer-link: "#c7cfdf"
  footer-muted: "#9aa4bb"
  footer-faint: "#78829a"
typography:
  display:
    fontFamily: "Tourney, Barlow Condensed, Impact, sans-serif"
    fontSize: "clamp(2.4rem, 7.2vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.025em"
  page-title:
    fontFamily: "Tourney, Barlow Condensed, Impact, sans-serif"
    fontSize: "clamp(2.4rem, 5.6vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Tourney, Barlow Condensed, Impact, sans-serif"
    fontSize: "clamp(36px, 5.2vw, 68px)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  band:
    fontFamily: "Tourney, Barlow Condensed, Impact, sans-serif"
    fontSize: "clamp(40px, 6vw, 82px)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.015em"
  title-lg:
    fontFamily: "Tourney, Barlow Condensed, Impact, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "0.01em"
  title:
    fontFamily: "Barlow Condensed, Impact, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "0.02em"
  body-lg:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "0em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  body-sm:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.16em"
  micro:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  square: "0px"
  control-cut: "12px"
  panel-cut: "14px"
spacing:
  page-gutter: "clamp(32px, 5vw, 72px)"
  section: "clamp(72px, 9vw, 128px)"
  block: "clamp(36px, 5vw, 64px)"
  card: "32px 28px"
  stack-tight: "14px"
  stack: "26px"
  seam: "1px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.on-signal}"
    typography: "{typography.label}"
    rounded: "{rounded.control-cut}"
    padding: "0 24px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.signal-hot}"
    textColor: "{colors.on-signal}"
    typography: "{typography.label}"
    rounded: "{rounded.control-cut}"
    height: "50px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control-cut}"
    padding: "0 24px"
    height: "50px"
  field:
    backgroundColor: "{colors.sunken}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.square}"
    padding: "0 14px"
    height: "48px"
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "32px 28px"
  tag:
    backgroundColor: "{colors.void}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "3px 7px"
---

# Design System: GenIGI

## Overview

**Creative North Star: "COLD SIGNAL"**

The site behaves like a field terminal left running in a dark room: a perspective grid on the floor, a radar sweeping the corner, one red channel marker, and a thin HUD frame that never quite stops being an instrument. It is not game-marketing chrome and not retro-CRT nostalgia. It is a working console for a community that is honest about being early, so the interface looks live without pretending anything is finished.

The world is built from three planes. **Terrain** is the full-bleed hero canvas: grid, horizon glow, radar ping, scanline. **Instrument** is the panel language: hairline frames, cut corners, status dots, mono labels, a marquee of verified facts. **Dossier** is the readable layer: condensed uppercase display type and a calm sans body, on a surface dark enough that the red reads as light rather than paint.

Light mode is not paper. It is the same instrument under daylight: the ground goes cool white, the ink goes near-black, the accents darken to print weight, and the bloom collapses to a clean rim. Geometry, spacing, and hierarchy are identical in both modes; only the light physics changes.

**Key Characteristics:**
- Night-terminal default with a fully remapped daylight HUD.
- Signal red is an event, not a surface.
- Cyan and magenta appear only as traces: sweeps, rings, secondary glows.
- Cut corners and 1px seams instead of rounded cards and gaps.
- One WebGL canvas carries the hero; CSS carries everything else.
- Mono type is reserved for measurement, status, and controls.
- Every strong effect has a static counterpart under `prefers-reduced-motion`.

## Colors

A near-black ground with one hot signal, two cold traces, and a disciplined gray ink ramp. The palette is small on purpose: the page should read as a dark instrument with red lights, not as a rainbow.

### Primary
- **Signal Red** (`signal-red`): the live channel. Primary buttons, the current page marker, the radar's leading edge, focus-adjacent accents, and one emphasized word in a display line. In light mode it darkens (`daylight-signal`) so it can sit on white without vibrating.
- **Hot Signal** (`signal-hot`): hover and error states only. Never a resting fill.

### Secondary
- **Trace Cyan** (`trace-cyan`): the cool counterpoint. Radar rings, secondary button sheen, focus rings in dark mode, and the second glitch layer on the hero's hot word. Darkens to `daylight-cyan` in daylight.
- **Noise Magenta** (`noise-magenta`): the rarest trace. One end of the animated panel border, one wash in the full-bleed work band. It should feel like a stray signal, not a brand color.

### Tertiary
- **Daylight Signal**, **Daylight Cyan**, **Daylight Magenta**: the light-mode remap of the three accents. They keep the same roles at print weight.

### Neutral
- **Void** (`void`): the ticker, footer, and full-bleed band ground. Deeper than the page so those bands read as hardware.
- **Night** (`night`): the page ground.
- **Panel / Raised Panel / Sunken** (`panel`, `panel-raised`, `sunken`): card faces, nested card faces, and inset wells such as inputs.
- **Ink / Muted / Faint** (`ink`, `ink-muted`, `ink-faint`): body, supporting copy, and metadata. Faint is the floor for readable text; anything smaller or dimmer must be decorative and `aria-hidden`.
- **Hairline** (`hairline`): the 1px structure color. It is allowed to be nearly invisible; structure comes from repetition, not weight.
- **Daylight Ink / Muted / Faint**: the same three roles on the bright ground, retuned for contrast rather than inverted.
- **Footer inks** (`footer-ink`, `footer-link`, `footer-muted`, `footer-faint`): the footer stays dark in both modes, so its inks are fixed rather than themed.

### Named Rules
**The Red Is a Signal Rule.** Red marks one action per view and the live element in a view. If two primary buttons compete in one viewport, one becomes a ghost. Red is never a page background, a paragraph color, or a decorative fill.

**The Daylight Is Not Paper Rule.** Light mode is a bright HUD, not a document. Keep the dark geometry, cut corners, and scanline logic; retune the accents for contrast. Never introduce warm paper, beige, or sepia to signal "light".

## Typography

**Display Font:** Tourney (variable; fallback Barlow Condensed, Impact, sans-serif)
**Body Font:** DM Sans (variable; fallback system-ui)
**Subhead Font:** Barlow Condensed 600
**Label/Mono Font:** IBM Plex Mono (400/500/600)

**Character:** Tourney's squared, instrument-panel letterforms carry the world; DM Sans keeps long copy humane; IBM Plex Mono supplies the readout voice. The pairing is mechanical outside and calm inside, which is exactly the product's promise: loud interface, honest content.

### Hierarchy
- **Display** (700, `clamp(2.4rem, 7.2vw, 6rem)`, 0.86): the hero statement only. Uppercase, tracked to -0.025em, balanced across two authored lines.
- **Page title** (700, `clamp(2.4rem, 5.6vw, 4.6rem)`, 0.9): `/mods`, `/about`, and other interior openers.
- **Headline** (700, `clamp(36px, 5.2vw, 68px)`, 0.9): section headings that pair with a short paragraph in a two-column heading row.
- **Band** (700, `clamp(40px, 6vw, 82px)`, 0.86): the full-bleed statement bands that interrupt the page.
- **Title LG** (700, 30px): card and panel titles inside complex modules.
- **Title** (600, 19–22px): subheads and list-item titles in Barlow Condensed.
- **Body LG** (400, 17px, 1.68): hero and intro paragraphs, max 54ch.
- **Body** (400, 16px, 1.65): default reading copy, 34–62ch depending on column.
- **Body SM** (400, 14–15px, 1.6): card copy and supporting text.
- **Label** (600, 11px, 0.16em, uppercase): buttons, nav utility, status lines, field labels, ticker items. This is the minimum size for functional text.
- **Micro** (500, 10px, 0.2em): radar tags and the art stamp only. Decorative, never required to understand an action.

### Named Rules
**The Two-Voice Rule.** Tourney speaks, DM Sans reads, IBM Plex Mono measures. A sentence is never set in all three, and body copy is never uppercase.

**The Trace Floor Rule.** Functional text never drops below 11px; 10px is reserved for decorative, `aria-hidden` instrumentation. If a label needs to be smaller to fit, the layout is wrong, not the size.

**The Line-Break Rule.** Display lines are authored, not auto-wrapped: use an explicit break or two block lines so the headline never orphans a word. Keep a real space in the accessible text across the break.

## Layout

The page sits on a **1280px content plane** (`width: min(1280px, 100% - clamp(32px, 5vw, 72px))`) centered on the ground. Hero terrain, ticker, work band, and footer run full-bleed behind or outside that plane; everything readable stays inside it.

The dominant composition is a **two-plane split**: copy on the left, an instrument on the right (hero copy + radar, principles text + contour plate, form + side panel). On narrow screens the split collapses to one column, instrument after copy. Section rhythm is `clamp(72px, 9vw, 128px)` of vertical padding, with headings separated from their body by `clamp(36px, 5vw, 64px)`.

**Matrices over gaps.** Groups of equal items (values, contributors, feature lists) are drawn as a single 1px-seam matrix: an outer hairline border, a hairline ground, and 1px gaps that reveal the ground. This is the system's alternative to floating cards. Nested cards are not allowed.

Breakpoints are content-led: `1080px` shrinks the radar, `900px` collapses the hero and hides the desktop nav, `860px` stacks heading rows, `760px` collapses the remaining splits, `560px` stacks footer and CTA rows, `360px` is the last squeeze. Interactive targets stay at 44px or taller at every width.

The ticker is a single horizontal marquee of verified status items; under reduced motion it wraps into a static list and the duplicate copy is removed. The hero HUD line is decorative and `aria-hidden`; it never carries information that exists nowhere else.

## Elevation & Depth

Depth is **rim light plus bloom**, not ambient shadow. Panels are flat faces separated from the ground by a 1px signal-tinted rim, a soft offset shadow, and a wide colored bloom. The offset shadow does the physical work; the bloom is the world's light physics. On light mode the bloom collapses to a thin, low-opacity halo so the interface reads as a clean daylight display rather than a glowing toy.

The hero canvas is the only true depth layer: a perspective grid recedes to a horizon, glow fields sit behind it, and a radar ping and sweep animate in screen space. Everything else is composited flat. Do not add parallax layers, blur stacks, or a second canvas to fake depth.

### Shadow Vocabulary
- **Rim + panel** (`--glow-panel`: 1px signal ring, `0 18px 50px rgb(0 0 0 / 0.55)`, 60px signal bloom): modules that must read as physical hardware.
- **Signal bloom** (`--glow-signal`: 1px ring, 22px and 70px red bloom): the primary button at rest and current-page markers.
- **Cyan trace** (`--glow-cyan`: 18px and 54px cyan bloom): secondary traces and hover on cool elements.
- **Text glow** (`--text-glow`: 18px and 60px red bloom): one hot word in a display line. Never body copy.
- **Card shadow** (`--card-shadow`: `0 24px 60px rgb(0 0 0 / 0.55)`): the offset layer under panels; pair with a rim.

### Named Rules
**The Rim Light Rule.** Depth is declared once: a 1px rim plus an offset shadow. Do not stack a hairline border under a wide shadow and call it two systems.

**The Motion Budget Rule.** One canvas, one marquee, one sweep. If a new effect needs a render loop, it replaces one of these rather than joining them. CSS handles hover, reveal, and state transitions; the canvas is paused offscreen and under reduced motion.

## Shapes

The form language is **cut, not curved**. Interactive controls and framed panels have their top-left and bottom-right corners cut at 12–14px via `clip-path`; cards and matrices are square. Circles are reserved for the radar, status dots, and rings. Borders are 1px and hairline; the only thicker line is a 2px animated gradient on a live panel edge.

Contour geometry (nested ellipses, dashed rings, crosshair axes) stands in for imagery. The product has no build to screenshot, so the system draws instruments instead of inventing screenshots. No rounded-rectangle card grids, no pills, no glassmorphism, no soft "SaaS" blobs.

**The Cut Corner Rule.** Corners are cut at 12px for controls and 14px for panels. A rounded corner is a different world; do not mix the two in one view.

**The No-Pill Rule.** Tags and status chips are square with a cut or hairline edge. A fully rounded pill is reserved for nothing.

## Components

### Buttons
- **Shape:** cut-corner rectangle (12px cuts at top-left and bottom-right), 1px transparent border, 50px min height.
- **Primary:** signal-red fill, void text, 11px mono uppercase at 0.16em, 0 24px padding, a 105° white sheen that travels across on hover.
- **Hover / Focus:** hover lifts 1px, warms to hot signal, and adds a 16px red bloom; active presses 1px down. Focus-visible removes the clip-path and shows the global 2px ring with 3px offset.
- **Secondary:** transparent face with a hairline border; on hover the border warms and a 8% red wash appears. It never competes with the primary for attention.
- **Disabled:** 55% opacity, no bloom, no translation.

### Navigation
- **Style:** sticky 73px header on a translucent ground with a 1px bottom hairline and a signal-to-cyan light bar that runs along the seam. Brand mark is a cut-square glyph, 44px target.
- **Desktop links:** 15px DM Sans in ink, 11px mono for utility links, an animated underline that grows from the left. Current page carries a red underline and a red dot.
- **Mobile:** below 900px the desktop nav is replaced by a 44px menu button that opens a full-height scrim; menu items are 19px condensed display type with 44px rows.

### Inputs / Fields
- **Style:** square, 48px min height, 1px hairline border, sunken ground, 14px mono text. Labels are 11px mono uppercase above the field.
- **Focus:** border shifts to signal red with a 1px red ring and a 24px bloom; the native outline is suppressed only because the visible treatment is stronger.
- **Error:** 11px mono in hot signal, reserved height so the form does not jump. Hints stay in faint mono at 11px.

### Cards / Panels
- **Corner style:** square (0px) with a 1px signal-tinted hairline.
- **Background:** panel or panel-raised, often with a radial signal wash in one corner and a 160° tonal gradient.
- **Depth:** rim + offset shadow + bloom (`--glow-panel`). No border-left accent bars.
- **Internal padding:** 32px 28px for standalone cards; 24–30px for list cells; 18–20px for status notes.
- **Live edge:** the rampage card carries a 2px animated red→magenta gradient on its top edge. Use this once per page at most.

### Tags and Status
- **Tag:** square, hairline border, void ground, 11px mono uppercase, 3px 7px padding.
- **Status line:** 11px mono uppercase in faint, with a 7px red dot that carries a 3px ring and a 12px bloom. The dot pulses at 2.4s in normal motion and is static under reduced motion.

### Neon Stage (signature)
The hero's full-bleed WebGL plane: a perspective floor grid, horizon glow fields, a radar ping and sweep, scanlines, grain, and a vignette, all in one fragment shader. It caps device pixel ratio at 1.5 and total pixels at ~2.4M, pauses when offscreen or hidden, and renders a single static frame under `prefers-reduced-motion`. Light mode swaps the uniform palette to the daylight HUD rather than adding a CSS overlay. The canvas is decorative (`aria-hidden`), never the only carrier of meaning.

### Radar (signature)
A circular instrument with bracket corners, three inset rings, crosshair axes, three blips at different radii, and three 10px labels. The sweep is a masked conic gradient; the blips pulse on offset delays. It tilts a few degrees toward the pointer via CSS custom properties set by the pointer handler. Under reduced motion the sweep and blips stop; the geometry remains.

### Ticker
A full-bleed, 1px-bordered marquee of verified status items (`No public build yet`, `Accounts open`, `Mods in progress`, `Keep the mission intact`). The track holds two identical groups for a seamless loop; the second is `aria-hidden` and removed from the tab order. Under reduced motion the duplicate is hidden and the track wraps into a static list.

## Do's and Don'ts

### Do:
- **Do** keep red for one primary action and live signals; use ink, hairline, and faint for everything else.
- **Do** author display line breaks and keep a real space in the accessible text across the break.
- **Do** use the 1px-seam matrix for groups of equal items instead of separate floating cards.
- **Do** pair every panel with a rim and an offset shadow; pair every strong animation with a static reduced-motion state.
- **Do** keep functional text at 11px or larger, targets at 44px or larger, and the focus ring at 2px with 3px offset.
- **Do** let the hero canvas be the only render loop; pause it offscreen and under reduced motion.
- **Do** theme browser surfaces: red selection, red caret, signal scrollbar, styled placeholders.

### Don't:
- **Don't** use red as a page background, paragraph color, or decorative fill.
- **Don't** warm light mode into paper, beige, or sepia; it is a daylight HUD, not a document.
- **Don't** add a second canvas, parallax stack, or blur-heavy glass layer for depth.
- **Don't** use gradient-filled text; emphasis comes from weight, size, and the single red word.
- **Don't** round corners, build pill tags, or nest cards inside cards.
- **Don't** put a color bar on the left edge of a card as an accent; use the rim and the seam.
- **Don't** invent screenshots, fake terminal output, release dates, or stats to fill a composition; draw an instrument instead.
- **Don't** set body copy in mono or uppercase; mono is a readout voice, not a costume.
