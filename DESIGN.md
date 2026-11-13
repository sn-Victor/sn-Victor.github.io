---
name: Victor Curran
description: A quiet, type-led portfolio where shipped production work speaks first.
colors:
  ground: "#fbfbfa"
  ink: "#111110"
  muted: "#63635f"
  faint: "#6c6c67"
  hairline: "#e7e7e3"
  frame: "#eeeeeb"
  link-blue: "#2453c2"
  link-blue-soft: "rgba(36, 83, 194, 0.14)"
  live-green: "#17703d"
  ground-dark: "#0f0f0e"
  ink-dark: "#ededec"
  muted-dark: "#a3a39e"
  faint-dark: "#8a8a84"
  hairline-dark: "#252523"
  frame-dark: "#1a1a19"
  link-blue-dark: "#8eaaff"
  link-blue-soft-dark: "rgba(142, 170, 255, 0.18)"
  live-green-dark: "#4cc07c"
  player-backdrop: "rgba(10, 10, 9, 0.97)"
  player-link: "#c9d6ff"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 1.2rem + 1.6vw, 2.25rem)"
    fontWeight: 560
    lineHeight: 1.18
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 580
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 560
    letterSpacing: "-0.015em"
  section-title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 580
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'ss01', 'cv11'"
  body-small:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
  caption:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
  data:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.86em"
    letterSpacing: "-0.01em"
    fontFeature: "'tnum'"
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  frame: "14px"
  frame-mobile: "10px"
  pill: "999px"
spacing:
  gutter: "20px"
  column: "640px"
  wide: "960px"
  inline-gap: "8px"
  stack-sm: "14px"
  stack-md: "18px"
  stack-lg: "22px"
  section-head: "28px"
  block: "44px"
  case: "72px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "34px"
  button-primary-lg:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "42px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "34px"
  button-ghost-hover:
    backgroundColor: "{colors.frame}"
  watch-pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 12px 0 11px"
    height: "30px"
  watch-pill-hover:
    backgroundColor: "{colors.frame}"
  media-frame:
    backgroundColor: "{colors.frame}"
    rounded: "{rounded.frame}"
    width: "{spacing.wide}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.body-small}"
  nav-link-hover:
    textColor: "{colors.ink}"
  link-read:
    textColor: "{colors.link-blue}"
    typography: "{typography.body-small}"
  player-control:
    backgroundColor: "transparent"
    textColor: "{colors.ground}"
    rounded: "{rounded.sm}"
    size: "28px"
---

# Design System: Victor Curran

## Overview

**Creative North Star: "The Quiet Showreel"**

A narrow column of ink on warm near-white, where the only large, lit objects are the demo videos of shipped systems. Type does the structuring; hairlines do the separating; the footage does the persuading. Everything else steps back in a gray scale so the work and its numbers read first.

Density is low and deliberate: one 640px reading column, with media frames stepping out to 960px so each case study's demo is the widest thing on the page. There are no cards, no tinted panels, no badges. Color is semantic, never decorative: blue means "this goes somewhere," green means "this is live." Dark mode follows the system setting and keeps every role, not just inverted values.

Motion is interface feedback, not spectacle: a custom ease-out under 300ms for presses and hovers, one staggered entrance on load, and one signature morph where a demo grows from its frame into a full-screen player and settles back.

**Key Characteristics:**
- Warm near-white ground, true ink, a stepped gray scale for secondary text.
- One 640px column; 16:9 media frames at 960px are the only boxed objects.
- Hairline separators only; depth is reserved for footage.
- Geist for all text; Geist Mono only for data (dates, runtimes, metrics).
- Pill-shaped buttons, ink-filled for the primary action, hairline-ringed for everything else.
- Automatic light/dark from the system; nothing moves under reduced motion.

## Colors

A near-monochrome warm-gray palette with two strictly semantic accents.

### Primary
- **Signal Blue** (link-blue; link-blue-dark in dark mode): the color of destinations and focus. Used for the "Read the case study" links, the focus-visible ring, and (at 14 to 18% alpha, link-blue-soft) text selection. Its underline is the same blue mixed to 35% opacity.

### Secondary
- **Production Green** (live-green; live-green-dark in dark mode): semantic status only. The 7px availability dot and the "In production" / "Live" status text in each case study's kind line.

### Neutral
- **Warm Paper** (ground / ground-dark): page background, and the text color inside ink-filled buttons. Also the browser theme-color.
- **True Ink** (ink / ink-dark): primary text, headings, the primary pill button's fill.
- **Graphite** (muted / muted-dark): secondary prose. Lede, section descriptions, decisions, row text, nav links at rest, the kind line, fact labels.
- **Pencil** (faint / faint-dark): tertiary data. Dates, runtimes, stack lines, skill group names, the footer, decision dashes.
- **Hairline** (hairline / hairline-dark): every separator and ring. Section top borders, ghost and Watch button rings, link underlines at rest, the media frame's inset edge, kbd outlines, scrollbar.
- **Frame Gray** (frame / frame-dark): the media frame's fill before video paints, and the hover fill of ghost and Watch pills.

### Player palette (always dark)
The full-screen player is a fixed dark surface regardless of scheme: a near-black backdrop (player-backdrop) with 10px blur, Warm Paper text and controls, a translucent ink control bar (rgba(17, 17, 16, 0.62)), and a pale blue link (player-link) that keeps the blue-for-links role legible on black.

### Named Rules
**The Two Semantic Accents Rule.** Blue appears only on links, focus and selection. Green appears only on live status. Neither is ever used for decoration, headings, icons, or fills.

**The Stepped Gray Rule.** Hierarchy below the heading is carried by Ink, Graphite and Pencil, not by size jumps or weight. A new secondary element picks one of those three steps; it never introduces a fourth gray.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui)
**Body Font:** Geist Variable
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, SFMono-Regular, Menlo)

Both faces are self-hosted via fontsource. Body text sets stylistic alternates ss01 and cv11 globally.

**Character:** One neutral, precise grotesque at in-between variable weights (450, 500, 560, 580) with tight negative tracking on headings; the mono is a quiet data voice, set slightly smaller with tabular figures.

### Hierarchy
- **Display** (560, fluid 1.7 to 2.25rem, 1.18, -0.028em): the single intro statement. Balanced wrapping, max 22ch.
- **Headline** (580, 1.35rem, -0.02em): the closing contact heading only.
- **Title** (560, 1.12rem, -0.015em): case study names; drops to 1rem for row titles in Experience, Projects and Education, and to 1.05rem on mobile.
- **Section title** (580, 1.1rem, -0.01em): section headings. Deliberately barely larger than body; sections are announced by hairlines and spacing, not big type.
- **Body** (400, 15.5px, 1.6): base reading text; case lines at max 60ch. Lede is 1.05rem in Graphite at max 52ch.
- **Body small** (400, 14.5px): secondary prose, nav, decisions, row text (max 62ch), skills, status line.
- **Label** (500, 14px; 13.5px on the Watch pill; 15px on the large button): button text.
- **Caption** (400, 13 to 13.5px): stack lines, footer, dates.
- **Data** (Geist Mono, 0.86em of context, tabular figures, -0.01em): dates, runtimes, metric values, kbd. Metric values in the facts list sit at 1.05rem, weight 500.

### Named Rules
**The Mono Is Data Rule.** Geist Mono is reserved for values a reader might compare: dates, durations, counts, metrics, keyboard keys. Never for headings, labels, or decoration.

**The Small-Step Scale Rule.** The whole ramp spans roughly 12px to 36px, and only the intro statement exceeds 1.35rem. Emphasis comes from weight (560/580) and color, not size.

## Layout

A single centered column, `min(640px, 100% - 2 * 20px)`, holds all text. Media frames use the same centering at `min(960px, 100% - 40px)`, so on wide screens footage steps out of the text column symmetrically and on phones both collapse to the 20px gutter.

Vertical rhythm: header 28px from the top; intro padded fluidly (clamp 56px to 96px above, 52px below); 28px under section heads; 14px between a case title row and its frame; 20px from frame to case body; 72px between case studies; 44px block padding for secondary sections, each opened by a hairline top border; 56px above the contact section. Inside content, gaps step 4 / 8 / 14 / 18 / 22px.

Rows (experience, projects, education) are a 22px-gap grid; each head is a baseline-aligned flex row with the title left and a mono date right, wrapping on narrow widths. Skills use a two-column definition grid (136px label column) that stacks below 520px.

At 560px and below: header and intro tighten (18px top, 28px/26px intro padding), section descriptions and secondary nav links hide (Email stays), the Watch label collapses to icon plus runtime, frames take a 10px radius, and case spacing drops to 56px.

## Elevation & Depth

The page is flat. Depth exists only on the media frames, because footage is the one thing that should feel like an object.

### Shadow Vocabulary
- **Frame rest** (`box-shadow: 0 1px 2px rgba(17,17,16,0.06), 0 8px 24px -8px rgba(17,17,16,0.12)` in light; `0 1px 2px rgba(0,0,0,0.4), 0 10px 30px -10px rgba(0,0,0,0.6)` in dark), always paired with an inset 1px hairline ring.
- **Frame hover** (`0 2px 4px rgba(17,17,16,0.06), 0 18px 40px -12px rgba(17,17,16,0.22)` plus the inset hairline): fine pointers only, 240ms.
- **Inset rings** (`inset 0 0 0 1px` hairline): the border language for ghost buttons, Watch pills and kbd. Rings, not borders.

### Named Rules
**The Only Lifted Thing Rule.** Soft ambient shadow belongs to media frames alone. Buttons, rows, sections and text never cast shadows; they separate with hairlines.

**The Dimmed Footage Rule.** In dark mode, inline previews sit at 86% brightness and come to full brightness on hover or focus, so video never glares off a dark page.

## Shapes

Two silhouettes: the pill (999px) for every inline action (primary, ghost, Watch), and the softly rounded rectangle (14px, 10px on phones) for 16:9 media frames and the player. Small controls use 8px (player buttons, skip link) and 12px (player control bar); kbd uses 4px, as does the focus ring. The only circles are the 7px availability dot and the scrubber thumb. List markers are 6px by 1px hairline dashes, not bullets.

## Components

### Buttons
Tactile, quiet pills that press back.
- **Shape:** full pill (999px), 34px tall; large variant 42px.
- **Primary:** True Ink fill, Warm Paper text, 500 weight. One per context: Email in the header, the email address in contact.
- **Ghost:** transparent with a 1px inset Hairline ring, Ink text. Copy email, and the player's Close (with a mono Esc kbd).
- **Hover / Focus:** hover only on fine pointers (primary fades to 0.86 opacity; ghost fills Frame Gray). Focus-visible is a 2px Signal Blue outline at 3px offset with 4px radius.
- **Press:** scale(0.97) over 160ms on the custom ease-out.

### Watch pill
The play affordance for each case study, set in the title row above the frame, right-aligned against the name. Ringed pill (30px), inline SVG play triangle at 11px, "Watch with sound" label, mono runtime in Pencil. On phones the label hides and it shrinks to 28px. Opens the same player as clicking the frame.

### Media frame
A 16:9 button wrapping a muted, looping, inline preview that plays only while 35% on screen and never under reduced motion. Frame Gray fill, 14px radius, rest shadow plus inset hairline, `zoom-in` cursor, press scale(0.99). Carries a unique view-transition name so it can morph into the player.

### Case entry (signature)
Title row (Title-style name, kind line with green status, Watch pill) on the 640px column; frame at 960px; then body back on the column: one-sentence case line, a facts list (mono metric value plus Graphite label, wrapping inline with 36px gaps), a decisions list with hairline dashes, a Pencil stack line joined by middots, and a Signal Blue "Read the case study" link whose arrow nudges 2px up-right on hover.

### Rows
Plain ordered lists separated by spacing, not rules: baseline title row with a mono date right, Graphite text beneath, optional Pencil stack line. Org names inside titles drop to Graphite at weight 450.

### Navigation
Text name mark at 560 weight on the left; Work and Experience as Graphite links that go Ink on hover (no underline), then the primary Email pill. On phones only the mark and Email remain. A skip link appears top-left on focus as an ink chip.

### Contact
Headline, one line of Graphite text, then the large primary pill (the address itself) beside the ghost Copy email button. Copying morphs the label: the idle text blurs out upward (4px blur, 4px travel) while "Copied" resolves in from below over 200ms, announced through a polite status region, and reverts after 1.6s.

### Player dialog
A modal dialog at up to 1280px over a 97% black, blurred backdrop. The video sits in a 14px-radius black 16:9 frame; below it, the title, a pale-blue case study link, and the ghost Close. Custom controls float inside the frame bottom on a translucent blurred bar (40px, 12px radius): play/pause, a 3px scrub track with an 11px thumb that grows on press, a mono timestamp, and mute. Controls fade after 2.2s of untouched playback and return on pointer movement or keys (space/k, m, arrows). Opening and closing morph the inline frame into the player and back through View Transitions (380ms, ease-in-out curve), resuming from the same timestamp; without View Transitions it falls back to a 260ms fade-and-scale from 0.96.

### Motion vocabulary
- **Ease-out** `cubic-bezier(0.23, 1, 0.32, 1)`: all interface feedback (presses, arrow nudge, entrance, copy morph).
- **Ease-in-out** `cubic-bezier(0.77, 0, 0.175, 1)`: the frame-to-player morph only.
- **Durations:** 160ms presses, hovers and link underlines; 200ms copy morph and control fade; 240ms frame hover; 520ms entrance; 380ms morph.
- **Entrance:** once on load, header, intro lines, the work heading and the first case fade up 8px from a 4px blur, staggered 60ms.
- **Reduced motion:** the entrance, morph, fallback animation, all transitions and the copy blur are removed; previews do not autoplay.

## Do's and Don'ts

### Do:
- **Do** keep all text on the 640px column and let only 16:9 media frames step out to 960px.
- **Do** separate sections with a single 1px Hairline top border and spacing (44px block padding).
- **Do** use Signal Blue only for links, focus and selection, and Production Green only for live status.
- **Do** set dates, runtimes and metrics in Geist Mono with tabular figures, and nothing else.
- **Do** make every inline action a pill: ink-filled for the one primary action, hairline-ringed for the rest.
- **Do** gate hover effects behind `(hover: hover) and (pointer: fine)` and give pressable controls a scale press (0.97; 0.99 for frames; 0.94 for player controls).
- **Do** keep interface feedback under 300ms on the custom ease-out, and remove motion entirely under reduced motion.
- **Do** keep titles, labels and play affordances outside the inline frames; the player's auto-hiding controls are the one overlay allowed on footage.

### Don't:
- **Don't** put content in cards, tinted panels or bordered boxes; the media frame is the only box.
- **Don't** cast shadows on anything but media frames.
- **Don't** draw text, badges, gradients or play buttons over inline video.
- **Don't** introduce a new accent hue or use blue or green decoratively.
- **Don't** use Geist Mono for headings or labels, or add a second display face.
- **Don't** use skill-pill clouds, a dark gradient hero, or equal project cards.
- **Don't** add a second entrance animation or scroll-triggered reveals; the load stagger is the only one.
