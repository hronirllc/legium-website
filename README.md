# legium.app

The website for **Legium**, an iOS app by [Hronir LLC](https://hronir.dev).
Built with [Zola](https://www.getzola.org) and published to GitHub Pages.

## Running it locally

```sh
brew install zola      # once
zola serve             # http://127.0.0.1:1111, live-reloads on save
```

`zola build` writes the finished site to `public/`, which is gitignored — the
site is built in CI, never committed.

## Writing a post

Add a Markdown file to `content/blog/`. The filename becomes the URL, so
`content/blog/gutter-segmentation.md` is published at `/blog/gutter-segmentation/`.

```md
+++
title = "Gutter segmentation"
description = "One sentence. It appears in the post list, the feed, and the search-result card."
date = 2026-09-14

[taxonomies]
tags = ["ocr", "capture"]
+++

The body, in Markdown.
```

Notes on the front matter, which is TOML between `+++` fences:

- `date` is unquoted and `YYYY-MM-DD`. Posts sort newest first.
- `tags` are free-form. A new tag gets its own page at `/tags/<tag>/`
  automatically; no need to register it anywhere.
- While every post is a draft, the Journal link in the menu, the journal
  section of the homepage and the RSS links are all left out. They return with
  the first published post.
- Add `draft = true` to keep a post out of the site. `zola serve --drafts`
  renders drafts locally so you can read them before publishing.

Everything else — the post list, the tag pages, `/rss.xml`, `sitemap.xml` — is
regenerated from that file. There is nothing else to update.

### Footnotes

Zola supports them. Reference with `[^label]` and define with `[^label]:` — the
label is an anchor name, not a number; numbering is automatic and in order of
first reference.

```md
Vision reports no font information[^style], which is a hard limit.

A second reference to the same note[^style] reuses its number.

[^style]: The information is discarded before you ever see the results.
    Indent a continuation line by four spaces.
```

Two things to know:

- **Definitions render where you write them**, not collected at the end. Put
  them all at the bottom of the file, or one will appear mid-article.
- There is no return arrow back to the reference. The stylesheet gives the
  group a rule above it and a hanging gold number, and sets `scroll-margin-top`
  so the sticky masthead does not cover a note you have just jumped to.

## Editing the homepage

- Copy that is prose lives in `templates/index.html`.
- The two groups of cards are `[[extra.sections]]` entries in `zola.toml`, each
  with its own `[[extra.sections.cards]]`; add, remove or reorder them freely.
- The logo is the app's icon. `static/img/` holds the sizes the site uses and
  `static/favicon.png` the browser-tab one; remake them all when the icon changes.
- The tagline is `extra.tagline` in `zola.toml`.

## Layout of the repo

```
zola.toml              site config, and the homepage cards
content/               Markdown. _index.md files configure a section
sass/main.scss         the whole stylesheet, compiled to /main.css
templates/
  base.html            the shell every page extends
  components.html      the mark, the <head> metadata, a post row
  index.html           homepage
  plain.html           a standing page: /privacy/ and /support/
  section.html         /blog/
  page.html            a single post
  taxonomy_*.html      /tags/ and /tags/<tag>/
  404.html
static/                copied to the site root verbatim (logo, fonts, CNAME)
.github/workflows/     build and publish on push to main
```

Templates are [Tera v2](https://keats.github.io/tera/), which Zola adopted in
0.23. It is Jinja-like but **not** Tera v1: macros were replaced by components,
`{% import %}` is gone, and array access is `items[0]` rather than `items.0`.
Guides written before 2026 will be wrong about all three.

## Publishing

Pushing to `main` runs `.github/workflows/deploy.yml`, which installs the pinned
Zola version, builds, and deploys to Pages. In the repository settings, under
**Pages**, set **Source** to **GitHub Actions** (not "Deploy from a branch").

### The domain

The site is configured for a custom domain in exactly two places, which must
agree:

- `base_url` in `zola.toml`
- `static/CNAME`

Both currently say `legium.app`. Change them together, then point the domain at
GitHub with a `CNAME` record for a subdomain, or `A` records to GitHub's four
Pages addresses for an apex domain.

To publish at `hronirllc.github.io/legium-website` instead, delete
`static/CNAME` and set `base_url = "https://hronirllc.github.io/legium-website"`.
Every internal link goes through `get_url`, so nothing else needs touching.
