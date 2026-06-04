# Fresh Vibes DSD Studio

Standalone premium Digital Smile Design internal application for Fresh Vibes Dental. It is intentionally separate from the CRM so it can be tested locally, deployed as a static Vercel app, and later migrated into the main CRM.

> Note: the environment blocked npm registry access during implementation, so this version is dependency-free and uses a custom static app shell instead of installing Next.js packages. It still runs with the requested `npm install` / `npm run dev` workflow and preserves a clean route/component/data/service architecture for later Next.js migration.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/dashboard`.

## Build

```bash
npm run lint
npm run build
```

The static build is emitted to `dist/`.

## Routes

- `/` redirects in-app to `/dashboard`
- `/dashboard` — premium DSD overview
- `/cases` — DSD case list
- `/cases/[id]` — patient DSD case profile
- `/workspace/[id]` — DSD editor workspace with blueprint overlay
- `/compare/[id]` — before/after comparison view
- `/treatment/[id]` — treatment plan builder and 3D placeholder
- `/report/[id]` — printable premium DSD report

## Features

- Luxury Fresh Vibes visual system: ivory background, champagne gold accents, glass cards, serif display headings, charcoal typography.
- 8 mock DSD cases, 5 doctors, 10 analysis metrics, 10 photo protocol items, and structured treatment plans.
- Professional SVG Digital Smile Design overlay with midline, high smile line, incisal edge, lower lip line, smile curve, tooth guides, golden ratio markers, and facial grid.
- Mock AI service layer for smile analysis, midline detection, tooth proportions, treatment suggestions, patient-friendly explanations, and report generation.
- Premium dashboard, cases, patient profile, workspace, comparison, treatment builder, 3D placeholder, photo protocol, and printable report.

## Important files

- `src/main.js` — app router and screen rendering.
- `src/data.js` — centralized mock data.
- `src/styles.css` — premium visual system and responsive/print styles.
- `src/services/dsd-ai.js` — mock AI service functions.
- `types/dsd.ts` — future TypeScript interfaces for migration.

## Future backend integration plan

1. Replace `src/data.js` with Supabase queries.
2. Store real photo assets in Supabase Storage or Vercel Blob.
3. Connect service functions in `src/services/dsd-ai.js` to real AI/computer vision providers.
4. Add authenticated doctor/admin sessions.
5. Replace PDF placeholders with browser print or server-generated PDF export.
6. Add patient approval flow, e-signature, pricing integration, and audit trail.
