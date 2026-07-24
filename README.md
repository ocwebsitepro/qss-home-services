# QSS Home Services

Marketing website for **QSS Home Services** — appliance repair, installations, maintenance, dryer fire prevention, duct cleaning, light plumbing, and light electrical across Orange County, CA.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx --yes serve .
```

## Deploy

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project**.
3. Build settings: leave build command empty; publish directory is `.` (configured in `netlify.toml`).
4. Live site: https://qsshomeservices.com (also https://qss-home-services.netlify.app)

## Contact

- Phone: (714) 884-9112
- Huntington Beach, CA 92648
- Owner: Michael Holder

## Contact form / Resend

The homepage form posts to `/.netlify/functions/contact`, which sends:

1. A notification to the admin (`CONTACT_TO`)
2. A confirmation to the person who submitted the form

Required Netlify environment variables:

- `RESEND_API_KEY` — Resend API key
- `RESEND_FROM` — verified sender, e.g. `QSS Home Services <hello@qsshomeservices.com>`
- `CONTACT_TO` — admin inbox (default: `michaelh1847@gmail.com`)
