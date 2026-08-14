# MDJ — Landing Page

Static landing page for the **Méditation du Jour (MDJ)** mobile app, published at [mdjapp.brankoostudio.com](https://mdj.brankoostudio.com).

Developed and maintained by [Brankoo Studio](https://www.brankoostudio.com) for **Eglise du Christ · Mission Harris (ECMHA)**.

---

## Pages

| File           | URL             | Description        |
| -------------- | --------------- | ------------------ |
| `index.html`   | `/`             | Main landing page  |
| `cgu.html`     | `/cgu.html`     | Terms of Use (CGU) |
| `privacy.html` | `/privacy.html` | Privacy Policy     |

---

## Structure

```
landing/
├── index.html          # Main page (hero, features, about, download)
├── cgu.html            # Terms of Use
├── privacy.html        # Privacy Policy
├── style.css           # All styles
├── script.js           # i18n (FR/EN) + dynamic date
├── robots.txt          # Crawler directives
├── sitemap.xml         # Sitemap (homepage only)
├── favicon.png         # Browser tab icon
├── app_logo.png        # Brand logo (dark background)
├── app_logo_white.png  # Brand logo (light background)
├── nginx.conf          # nginx config used inside Docker
└── Dockerfile          # Production image (nginx:alpine)
```

---

## Internationalisation

The page supports **French** (default) and **English**, switched via a toggle button in the navbar. Translations are defined in `script.js` inside the `TRANSLATIONS` object — no build step or external library required.

To add a new translatable string:

1. Add a `data-i18n="your.key"` attribute to the HTML element.
2. Add the key to both `fr` and `en` objects in `TRANSLATIONS`.

---

## SEO

- `<meta name="description">` on all pages
- Open Graph and Twitter Card tags on the homepage
- JSON-LD `MobileApplication` structured data
- Canonical URLs pointing to `https://mdj.brankoostudio.com`
- `robots.txt` and `sitemap.xml`
- CGU and Privacy pages are marked `noindex` (legal pages, not meant to rank)

---

## Running locally

No build step — open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
```

---

## Docker

The landing is served by nginx inside Docker. The `Dockerfile` copies all static files into an `nginx:alpine` image:

```bash
docker build -t mdj-landing .
docker run -p 8081:80 mdj-landing
```

In production the container is orchestrated by the root `docker-compose.yml` and sits behind the shared nginx reverse proxy.
