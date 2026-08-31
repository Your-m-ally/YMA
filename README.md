# YMA — Your Marketing Ally

V1 landing page for Your Marketing Ally.

## Files

- `index.html` — page structure, copy, links and section content.
- `style.css` — visual system, layout, responsive behaviour and animation styling.
- `script.js` — interactions, mobile menu, scroll reveals and Paystack configuration.
- `assets/yma-logo.svg` — vector master logo used in the navigation.
- `assets/yma-mark.svg` — symbol-only mark used for the favicon and CTA.

## Editing the site

Most edits should be possible without changing the architecture.

### Change contact details
Edit `YMA_WHATSAPP` and `YMA_EMAIL` near the top of `script.js`, then update any visible `mailto:` or WhatsApp links in `index.html` if the destination changes.

### Add the Practical AI 101 Paystack checkout
Open `script.js` and replace the empty `PAYSTACK_CHECKOUT_URL` with the live Paystack checkout URL. The product button automatically switches from WhatsApp fallback mode to direct Paystack checkout.

### Change brand colours
The main palette is defined at the top of `style.css` in `:root`. Current brand colours include `#EE0E39`, `#050505` and `#00AEEF`.

### Add real case-study imagery
The selected-work panels are deliberately CSS-built for V1. They can later be replaced with optimized WebP/JPG images without changing the page structure.

## Deployment

This is a static site designed for GitHub Pages. Enable Pages from repository settings using the `main` branch and `/` root once ready. The custom domain can then be configured for `yma.co.ke`.
