# decksmith-site

The DeckSmith one-page brand, product-story and support site.

- Live: <https://decksmithhq.com>
- Pages preview: <https://decksmith-site.pages.dev>
- Hosting: GitHub → Cloudflare Pages

The site is deliberately plain HTML, CSS and images. There is no framework, no
build tooling and no dependencies, which keeps the page fast and means the repo
will still build in two years without an npm install.

## Structure

```
public/            everything that ships
  index.html       the whole page
  styles.css       the whole design system
  favicon.svg      DeckSmith mark
  robots.txt
  sitemap.xml
  _headers         Cloudflare Pages caching and security headers
  images/          optimised WebP renders and extracted key icons
    icons/         the 12 key and dial glyphs used by the control map
assets-source/     original full-resolution marketplace artwork (not deployed)
scripts/build.mjs  copies public/ to dist/client (see Deployment)
```

`assets-source/` holds the original 1920px marketplace banners the site imagery
was cut from. Keep them: they are the masters if the renders ever need recutting.
They are not served.

## Local development

```bash
npm run dev      # serves public/ on http://localhost:3000
```

Or open `public/index.html` directly — nothing needs compiling.

## Deployment

Cloudflare Pages, either configuration works:

| Setting          | Simplest        | Compatible with the old project settings |
| ---------------- | --------------- | ---------------------------------------- |
| Build command    | *(leave empty)* | `npm run build`                          |
| Output directory | `public`        | `dist/client`                            |

`scripts/build.mjs` only copies `public/` into `dist/client`, so the second row
exists purely so an existing Pages project keeps deploying without being
reconfigured. The first row is preferable — it skips the build container.

## Editing the page

Everything lives in two files.

- **Copy and structure**: `public/index.html`
- **Design**: `public/styles.css`, driven by custom properties in `:root`

### Design tokens

| Token           | Value     | Use                                             |
| --------------- | --------- | ----------------------------------------------- |
| `--ink`         | `#05080e` | page base                                       |
| `--ink-2`       | `#070b13` | header and footer; matches the logo artwork      |
| `--blue`        | `#0b59de` | primary action — sampled from the DeckSmith logo |
| `--blue-lift`   | `#3d82f5` | hover and highlight                             |
| `--blue-deep`   | `#1e3a8a` | brand book Twilight Blue, used on light sections |
| `--toffee`      | `#d97706` | brand book Toffee Brown, list markers only       |
| `--onyx`        | `#1f2937` | brand book Onyx Black, body text on light        |
| `--mist`        | `#eef2f8` | light section base                              |

Type is Space Grotesk with IBM Plex Mono for labels, per the brand book. All
sizes are fluid `clamp()` values, so there are no fixed font sizes to maintain.

### The control map

The "Your control surface" section is not an image. The keys, touch strip and
dials are real HTML and CSS, using the 12 glyphs in `public/images/icons/`, which
were extracted from the marketplace key-mapping artwork. To change a key, edit
its `<li class="key">` in `index.html` — label text is real text, so it stays
crisp, translatable and searchable at any screen size.

## Before launch

1. Replace the placeholder Elgato Marketplace URL in `index.html` — search for
   `TODO` in the CTA section. It currently points at the marketplace home page.
2. Confirm the "Tested with the ChatGPT app for macOS on 26 July 2026" date in
   the fine-print section is still accurate.

## Wording

Avoid implying affiliation with OpenAI or Elgato. Use "built for ChatGPT work"
and "available on Elgato Marketplace". The footer disclaimer must stay.
