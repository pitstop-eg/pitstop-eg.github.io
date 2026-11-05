# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Small and medium Egyptian brands that already sell something but have no serious digital presence. The person deciding is typically the owner or founder, comparing a small local agency against a bigger agency or a per-lane freelancer. They work in Arabic, often on a phone, and want to know who they are dealing with and when the work lands.

## Product Purpose

PitStop is a three-person digital solutions agency. The site presents the team, the four service lanes, and the working process, then turns a brand owner into a submitted project brief. Success means a qualified brief from a local brand that becomes a project.

## Positioning

One team of three covers the whole digital presence across four lanes — Web & Systems, Design, Ads, and Video — with equal weight and no single lane leading. A brand gets fixed scope, fixed dates, visible checkpoints, and direct communication in Arabic and English, instead of stitching together a freelancer per lane. Price is not the pitch.

## Operating Context

- The team: Bassam Tarek (web developer), Mohamed Tarek (ads specialist), Mahmoud (graphic designer).
- Arabic is the default and primary language; English is a full second version, not a translation layer.
- A brief arrives through the site form, delivered to `pitstop.agency.eg@gmail.com` via Web3Forms.
- The racing / pit-stop metaphor is the brand's language. It is played literally only in The Pit Stop section, which describes the four-stage process: Diagnose, Plan, Build, Launch.
- Launch URL is `https://pitstop-eg.github.io/` until a custom domain is bought. The site is pre-launch; the live URL still serves an older draft.

## Capabilities and Constraints

- Services are exactly: Web & Systems (landing pages, multi-page websites, custom systems), Design (visual identity, social media design, print design), Ads (Meta ads), Video (short-form videos and reels). Nothing else may be claimed.
- Static GitHub Pages: no build step, no backend, two hand-maintained HTML pages sharing one stylesheet, per ADR-0001. A third page or a shared layout change triggers a move to a static-site generator.
- Cookieless Cloudflare Web Analytics, no consent banner.
- The primary action is the brief form; email is the secondary route. With a WhatsApp business number now available, the primary action is intended to become WhatsApp, with the form kept as secondary.
- No work/portfolio, pricing, FAQ, or testimonials at launch. There is no proof section until real proof exists.
- Deliberately open: the final typeface for Arabic and Latin (Cairo is temporary).
- Team photos, bios, real social profile URLs, and the WhatsApp business number now exist on the team side but are not yet wired into the site.

## Brand Commitments

- The name is written **PitStop**, one word, capital P and S. "Pit Stop" refers only to the process, and "PIT STOP" only to the logo lockup.
- The tagline "Every brand deserves a pit stop." stays in English on both pages as a brand mark. It is never the H1 and is never translated.
- Voice: professional Egyptian colloquial Arabic — direct, confident, approachable. English is written natively with the same personality, never a literal translation of the Arabic.
- The logo comes from the brand stash and must be copied into the served tree when used; the wordmark is never re-typeset.

## Evidence on Hand

- `brand-assets/` (git-ignored) holds the logo versions, the colour palette guide, and the Facebook cover.
- Served assets: `assets/logo-white.png`, `assets/og-cover.png` (1200×630), `assets/favicon.svg` and `.png`.
- One real team link: `https://bassamalaraby.me`.
- Per the team: real team photos, written bios, live social profile URLs, and a WhatsApp business number exist, but are not yet in the site.
- Absent and not to be fabricated: client names, case studies, testimonials, benchmarks, pricing figures, press, and any claim of results.

## Product Principles

1. One primary action per page; every section exists to move the visitor toward it.
2. Show the real breadth of the team honestly — four lanes on equal footing, no lane inflated.
3. Remove the risk of hiring a small, new agency: fixed scope, fixed dates, visible checkpoints, direct communication.
4. Nothing hidden and nothing invented — no proof section, numbers, or logos until the team can back them.
5. Arabic-first and genuinely bilingual; English is written from the offer, not translated from the Arabic.

## Accessibility & Inclusion

- The page must work with JavaScript off: the form degrades to a normal POST, and no in-page-only content is essential.
- Every interactive element is keyboard reachable with a visible focus state, in both text directions.
- Legible at 320px wide, in RTL and LTR, with text that does not clip or force horizontal scroll.
- Text on red and asphalt holds contrast; the yellow accent is used only where it stays readable.
