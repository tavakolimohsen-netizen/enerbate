# EnerBate Solutions — enerbate.ca

Static marketing site for EnerBate Solutions Inc. Built with **Astro 7** and
**Tailwind CSS 4**, deployed as static files (no server runtime required).

---

## Running it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serve the built ./dist
```

Node 20 or newer.

---

## Where the content lives

**Almost everything is in one file: `src/data/site.ts`.**

Services, regions, projects, company details, differentiators and project types
are all typed data in that file. The pages read from it, so adding a service
means adding an object to the `services` array — a new page at
`/services/<slug>/` is generated automatically, and it appears in the nav, the
footer, the services index and the contact form's dropdown without touching
any markup.

The same is true for `regions` and `projects`.

| What you want to change | File |
| --- | --- |
| Phone, email, turnaround, company name | `src/data/site.ts` → `company` |
| Add or edit a service | `src/data/site.ts` → `services` |
| Add or edit a province page | `src/data/site.ts` → `regions` |
| Add or edit a project | `src/data/site.ts` → `projects` |
| Homepage headline and hero | `src/pages/index.astro` |
| Brand colours, spacing, buttons | `src/styles/global.css` |

---

## Brand palette

Sampled directly from the logo artwork, then checked for WCAG AA contrast.
Contrast ratios are against white.

| Token | Hex | Ratio | Use |
| --- | --- | --- | --- |
| `navy-800` | `#203459` | 12.4:1 | Headings, nav, footer, dark bands |
| `navy-600` | `#384975` | 8.8:1 | Secondary headings |
| `teal-600` | `#09768A` | 5.3:1 | CTAs, links, active states |
| `teal-500` | `#0F8390` | 4.5:1 | Large text and UI only |
| `body` | `#475569` | 7.6:1 | Body copy |
| `spark-300` | `#97D099` | 1.8:1 | **Decorative only — never text** |

`spark-300` is the light green from the logo gradient. It fails contrast at any
text size. Use it for gradients, icon strokes on dark backgrounds, and rules —
never for words a visitor has to read.

---

## Logo files

Rebuilt as clean vector from the deck artwork, which was a compression-damaged
raster with a solid white background.

- `public/images/enerbate-logo.svg` — full lockup, for light backgrounds
- `public/images/enerbate-logo-light.svg` — full lockup, for dark backgrounds
- `public/images/enerbate-mark.svg` — mark only; used as the favicon

---

## Before going live

1. **Contact form — done.** `src/pages/contact.astro` posts to
   `https://formspree.io/f/xjyvaqek`, which delivers to energy@enerbate.ca.
   It submits over `fetch` so the visitor stays on enerbate.ca and sees an
   inline confirmation; with JavaScript off the form posts normally to the same
   endpoint, so it never stops working. A `_gotcha` honeypot field catches the
   simplest bots. Formspree's free plan allows 50 submissions a month — watch
   that ceiling once outreach starts.
2. **Email address.** `site.ts` uses `energy@enerbate.ca`. Set up the mailbox
   before publishing, or the form's reply-to goes nowhere.
3. **Hero video — done.** 8.5 s, silent, 1280x720, looping seamlessly: the
   last 1.5 s crossfades back onto the opening frame, so there is no visible cut
   at the wrap. Shipped in two encodes — `hero.webm` (VP9, 322 KB) is offered
   first and taken by Chrome, Edge, Firefox and Android; `hero.mp4` (H.264,
   506 KB) is the fallback Safari and older Android use.

   It plays at **every width, phones included**. `hero-poster.webp` sits
   underneath as the first paint and as the permanent fallback, so nothing is
   ever blank. An inline script in `index.astro` calls `play()` and retries on
   `loadeddata`/`canplay`, because mobile browsers do not always start an
   autoplaying video on their own; if the browser still refuses, the poster
   simply stays. That same script removes the `<video>` element outright — so it
   is never downloaded — when the visitor has Data Saver on, is on a 2G
   connection, or asks for `prefers-reduced-motion`.

   The veil over the video is `.hero-veil` in `global.css`, not an inline
   style: left-to-right on desktop where the copy sits on the left, and
   top-to-bottom below 768 px where the copy stacks and fills the frame.

   A second clip, `thermal.mp4` / `thermal.webm` (194 KB / 73 KB), is prepared
   the same way and not yet placed.

   Both clips were cropped before encoding to remove the generator's watermark,
   a 48x48 px mark measured at x 1136-1183, y 576-623 in the original 1280x720
   frame. The crop takes 160 px off the right edge (16 px clear of the mark) and
   90 px of height to restore 16:9, then rescales to 1280x720. Re-cutting from
   fresh source footage means repeating that crop.
4. **The "150+ units" figure** on the homepage is carried over from the deck and
   appears to understate the portfolio. Confirm it before launch — the projects
   page alone lists more than that.

---

## Deploying to Cloudflare Pages

Push this directory to a Git repository, then in the Cloudflare dashboard:

- **Workers & Pages → Create → Pages → Connect to Git**
- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`

Add `enerbate.ca` and `www.enerbate.ca` as custom domains once the build is
green. SSL is issued automatically.

**One caution:** MX and any mail-related DNS records must stay unproxied — grey
cloud, not orange. Proxying them breaks mail delivery.

---

## Accessibility

The site passes axe-core with **zero WCAG 2.1 A/AA violations** across all six
page templates. This is a deliberate requirement rather than a nice-to-have: the
business sells code-compliance services, and an inaccessible site would
undercut that.

Maintained by:

- A visible focus ring on every interactive element (never remove it)
- A skip link to `#main`
- `prefers-reduced-motion` honoured globally
- 44×44px minimum touch targets on all buttons
- Real `<label>` elements on every form field — no placeholder-only labels
- Alt text on every image

Re-check after changes:

```bash
npm run build
npx serve dist          # or any static server
# then run axe against http://localhost:3000
```

---

## Structure

```
src/
  data/site.ts          all site content
  layouts/Base.astro    <head>, JSON-LD, header + footer
  components/           Header, Footer, PageHero
  pages/
    index.astro         homepage
    services/           index + [slug] template
    regions/            index + [slug] template
    projects.astro      about.astro  contact.astro  404.astro
  styles/global.css     design tokens and component classes
public/
  images/               logo variants + project images
  videos/               hero.mp4 goes here
```
