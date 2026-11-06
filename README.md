# EduConnect website

Static marketing site for EduConnect (React + Vite + Tailwind). No backend required.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The finished site is in `dist/`. Upload that folder to any static host
(Netlify, Vercel, Cloudflare Pages: build command `npm run build`, output `dist`).

**Google Cloud Run** — the `Dockerfile` builds the site and serves it with nginx on port 8080:

```bash
gcloud run deploy educonnect-website --source . --region europe-west9 --allow-unauthenticated
```

## Background photography

Section photos live in `src/assets/photos/` (WebP, 960px and 1920px).
`src/components/educonnect/PhotoBackdrop.jsx` renders one behind a section.
Styles are in `src/index.css`: `.glass-panel` (the frosted text card) and the `scrim-*` gradients.

| Section          | Photo        | Treatment                                  |
| ---------------- | ------------ | ------------------------------------------ |
| Hero             | campus-group | sharp, glass strip along the bottom        |
| Student's day    | study-table  | sharp, glass panel on the right            |
| Matching engine  | laptop-hands | navy, 4px blur                             |
| For Students     | phone-huddle | near-sharp (2px), copy on a glass panel    |
| For Tutors       | tutor-help   | near-sharp (2px), copy on a glass panel    |
| Final CTA card   | campus-group | navy, 3px blur                             |

`position` on each `<PhotoBackdrop>` is the photo's focal point; adjust it if a face ends up behind a panel.
Photos: Pexels (RDNE Stock, Charlotte May, Yan Krukov, George Pak).
