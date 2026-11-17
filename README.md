# PitStop — Landing Page

Static, bilingual landing page for **PitStop**, a digital-presence agency for local brands in Egypt. Hosted on GitHub Pages at `pitstop-eg.github.io`.

- `/` — Arabic (`index.html`)
- `/en/` — English (`en/index.html`)

## Stack

Plain HTML, CSS, and vanilla JavaScript. No build step, no framework.

- **Fonts & icons**: Google Fonts (Cairo) + Remixicon via CDN.
- **Contact form**: posts to [Web3Forms](https://web3forms.com) (`assets/js/form.js` handles the JSON fetch and status message).
- **Mobile menu**: `assets/js/menu.js`.
- **Analytics**: cookieless Cloudflare Web Analytics beacon (one per page, no consent prompt).

## Editing

Edit the files and push — GitHub Pages serves the repo root as-is.

```sh
# local preview (any static server works)
python3 -m http.server 8000
```

Both language pages must stay in sync: same structure, same section IDs (`#lanes`, `#pit-stop`, `#team`, `#contact`), so anchors resolve in either language.

## Repo conventions

- **Issues**: local markdown under `.scratch/<feature-slug>/` (gitignored — they don't show in the repo). See `docs/agents/issue-tracker.md`.
- **Domain language**: `GLOSSARY.md`; architecture decisions in `docs/adr/`.
- **Design rules** (color, type, layout): `DESIGN.md`.
