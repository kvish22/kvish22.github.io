# kvish22.github.io

Personal academic portfolio for **Dr. Kanchan Vishwakarma** — Plant Biotechnology & Microbial Bioinformatics researcher at Umeå Plant Science Centre, SLU.

Live at: **[https://kvish22.github.io](https://kvish22.github.io)**

## About

A single-page site covering background, research interests, education, professional experience, skills, publications, conferences, editorial/peer-review activities, awards, and contact details.

## Tech stack

Plain HTML and CSS — no framework, build step, or dependencies. Kept intentionally simple so it's easy to edit directly and cheap to host.

- `index.html` — all page content and structure
- `style.css` — styling (CSS custom properties for the color theme, responsive layout via media queries)
- `assets/` — images (profile photo)

## Local development

Serve the site with any static file server, for example:

```sh
python -m http.server 5500
```

Then open `http://localhost:5500`.

A ready-made config for this is in `.claude/launch.json`.

## Deployment

Deployed automatically to GitHub Pages via GitHub Actions (`.github/workflows/pages.yml`) on every push to `main`. The workflow packages the repository contents and publishes them with `actions/deploy-pages` — no Jekyll build step. Pages source is set to **GitHub Actions** in the repo settings.

## Updating content

All page content lives directly in `index.html` — edit the relevant section, commit, and push to `main` to publish. Colors and spacing are controlled by the CSS custom properties at the top of `style.css` (`:root` block).

## Contact

kan.vish22@gmail.com
