---
name: PitStop
description: A three-person Egyptian agency site — asphalt pit lane with red crew signals on paper.
colors:
  primary: "#D81316"
  primary-deep: "#A11F1D"
  accent-signal: "#FDBC07"
  neutral-asphalt: "#0A0F15"
  neutral-paper: "#F1EEEB"
  neutral-track: "#625D5E"
typography:
  display:
    fontFamily: "Cairo, Tahoma, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 6vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.35
  headline:
    fontFamily: "Cairo, Tahoma, Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Cairo, Tahoma, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Cairo, Tahoma, Arial, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.8
  label:
    fontFamily: "Cairo, Tahoma, Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
spacing:
  sm: "0.5rem"
  md: "1.25rem"
  lg: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1.4rem"
---

# Design System: PitStop

## Overview

**Creative North Star: "The Pit Lane"**

PitStop reads as a night paddock: dark asphalt bands (header, hero, pit-stop, contact, footer) alternate with light paper content (lanes, team). Red is the pit crew's signal — the primary action, lane numbers, stage numbers, and the 3px top rule that runs full width on hover. Yellow is the finish-line signal, used only where it stays readable on asphalt: hover and focus states, the email, selection.

The layout is a single 960px column with disciplined section rhythm (3.5rem / 4.5rem bands). Typography is one family — Cairo for Arabic and Latin — set at three scales; supporting copy is dimmed by opacity or track grey, never by shrinking below 1rem. Motion is restrained and structural: lane rules extend, team cards flex-grow, links unclip. The racing metaphor is literal only in The Pit Stop section; everywhere else it is structural suggestion (flag strips, checker dot, numbered stations).

**Key Characteristics:**
- Asphalt / paper alternation as the primary spatial device
- Red as the action signal; yellow as the dark-surface highlight
- One family, three scales; no small supporting text
- Flat tonal layering; no shadows anywhere
- Numbered, ruled rows instead of cards for lanes and stages

## Colors

Racing red and signal yellow on asphalt and paper. Red carries the action; yellow carries only dark-surface highlights.

### Primary
- **Pit Red** (#D81316): Primary buttons, lane and stage numbers, 3px rules, team avatar and top rules.
- **Pit Red Deep** (#A11F1D): Button hover, link hover on light surfaces, focus outlines.

### Secondary
- **Signal Yellow** (#FDBC07): Hover/focus on dark surfaces, email link, text selection. Never as text on paper.

### Neutral
- **Asphalt** (#0A0F15): Dark surfaces — header, hero, pit-stop, contact, footer.
- **Paper** (#F1EEEB): Light surfaces — body background, flags on asphalt, dark-surface text.
- **Track Grey** (#625D5E): Secondary text on paper — lane services, team roles/bios.
- **White** (#FFFFFF): Button text on Pit Red.

### Named Rules
**The Committed Red Rule.** Pit Red is the primary action and the numbered-station voice; keep it prominent on 8–12% of any screen — buttons, numbers, top rules — not as decoration elsewhere.
**The Dark-Only Yellow Rule.** Signal Yellow appears only on Asphalt (hover, focus, email, selection); never set yellow text on Paper.

## Typography

**Display Font:** Cairo (with Tahoma, Arial, sans-serif)
**Body Font:** Cairo (with Tahoma, Arial, sans-serif)
**Label/Mono Font:** Cairo (same family; tracking distinguishes labels)

**Character:** A single geometric-humanist sans, direct and confident in Egyptian colloquial Arabic. Generous line-height (1.8) keeps Arabic rhythm readable; bold display at tight measure (18ch Arabic / 24ch Latin) balances headlines.

### Hierarchy
- **Display** (700, clamp(2.1rem, 6vw, 3.6rem), 1.35): Hero H1. Max 18ch Arabic, 24ch English.
- **Headline** (700, clamp(2rem, 4vw, 2.6rem), 1.25): Section H2. Contact band runs 2.2–3.2rem.
- **Title** (700, clamp(1.6rem, 3.4vw, 2.4rem), 1.3, -0.015em): Lane titles. Subheads at 1.2rem.
- **Body** (400, 1rem, 1.8): All supporting copy. Max measure 46–60ch via opacity-dimmed ledes.
- **Label** (600–700, 0.85–0.9rem, 0.12–0.16em): Nav, numbers, form labels, tagline small-caps.

### Named Rules
**The One-Family Rule.** Cairo only — never add a second display face until the typeface decision lands; tone, not size, separates supporting copy.
**The No-Shrink Rule.** Supporting text never goes below 1rem; use opacity (0.75–0.8) or Track Grey instead.

## Layout

Single constrained column: `.wrap` max-width 960px, centered, 1.25rem horizontal padding. Sections pad 3.5rem vertically; dark bands use 4.5rem. Lanes switch from 2-col grid (number | title + services stacked) to 3-col at ≥48rem (number | title 18rem | services). Pit stages: 1 col → 2 col at ≥48rem → 4 col at ≥64rem. Team is flex-wrap row (flex 1 1 15rem) that expands on hover/focus-within (flex-grow 1.7). Form aligns to 34rem max, 1 col → 2 col at ≥48rem. Legible at 320px in RTL/LTR with no horizontal scroll; all rows use `overflow-wrap: anywhere`.

Breakpoints: 48rem (768px), 64rem (1024px). No other breakpoints.

## Elevation & Depth

Flat by default. This system uses no shadows at all — depth is conveyed by tonal layering (asphalt vs paper bands, 6–12% red tints on team cards, 7% paper fills on dark fields), ruled dividers (1px at 18% asphalt / 30% paper), and 3px top rules. Hover/focus deepens a tint or extends a rule rather than lifting a surface.

### Shadow Vocabulary
- None. Do not add `box-shadow` to any component.

### Named Rules
**The Flat-By-Default Rule.** Surfaces stay flat at rest; state deepens a tint or extends a rule. Never add a shadow.

## Shapes

Mostly flat edges: buttons and fields at 4px radius; team cards, lanes, and stages at 0. The silhouette is square — borders and rules, not corners, structure the page. Recurring motifs: 3px red top rule (lanes, team cards), 28px checkered flag strips (hero bottom, footer top), 1.4rem checker dot in the tagline.

## Components

Direct, tactile, and restrained. Everything is ruled and numbered, not boxed.

### Buttons
- **Shape:** Slightly rounded (4px radius)
- **Primary:** Pit Red (#D81316) background, white 700 text, padding 0.5rem 1.4rem. Hover shifts to Pit Red Deep (#A11F1D). Focus shows 3px outline (Pit Red Deep on paper, Signal Yellow on asphalt) with 2–3px offset.
- **Secondary / Ghost:** Hero quiet link — paper text, underlined; hover Signal Yellow on dark.

### Cards / Containers
- **Lane rows:** 0 radius, bottom 1px divider at 18% asphalt; top 3px Pit Red rule at 35% scale, full on hover/focus-within. Hovered lane at full strength, siblings at 50% opacity.
- **Team cards:** 0 radius, 3px Pit Red top rule, 6% Pit Red tint background (12% on hover/focus-within). Flex-grow expansion opens links.
- **Pit stages:** 0 radius, 1px top rule at 30% paper; numbers in Pit Red at 2.1rem.

### Inputs / Fields
- **Style:** Translucent paper fill (7%), 1px border at 40% paper, 4px radius, paper text at 1–1.15rem.
- **Focus:** 3px outline — Pit Red Deep at 1px offset on light; Signal Yellow at 2px offset in the contact band.
- **Error / Disabled:** Form status text — paper on success, Signal Yellow on error.

### Navigation
- **Style:** Asphalt sticky bar, paper 600 text; hover Signal Yellow; focus outline Signal Yellow. Brand logo 26px (header) / 30px (footer). Mobile wraps to two rows; CTA pinned inline-end.

### Signature Motifs
- **Flag strips:** 28px conic-gradient checkers, paper on asphalt.
- **Numbered stations:** `decimal-leading-zero` in Pit Red for lanes and stages.

## Do's and Don'ts

### Do:
- **Do** alternate asphalt and paper bands as the main spatial device at 3.5–4.5rem section rhythm.
- **Do** keep Cairo at 1rem minimum for supporting copy; dim with opacity or Track Grey.
- **Do** use Pit Red for the single primary action and numbered stations; yellow only on asphalt.
- **Do** preserve 3px focus outlines and keyboard reachability in both directions.

### Don't:
- **Don't** add shadows, large radii, or card boxes to lanes/stages — ruled rows are the structure.
- **Don't** set yellow text on paper, or red text below contrast on asphalt.
- **Don't** shrink supporting copy below 1rem to create hierarchy.
- **Don't** invent proof, pricing, or extra lanes — the four lanes carry equal weight as implemented.
