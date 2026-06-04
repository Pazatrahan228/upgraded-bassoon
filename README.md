# Fresh Vibes DSD Studio

Standalone premium Digital Smile Design internal application for Fresh Vibes Dental. Built as a deployment-ready Next.js prototype that can later be moved into the main CRM.

## Run locally

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Routes

- `/` redirects to `/dashboard`
- `/dashboard` premium DSD overview
- `/cases` all DSD cases
- `/cases/[id]` patient DSD profile
- `/workspace/[id]` DSD editor workspace with overlay blueprint
- `/compare/[id]` before/after slider
- `/treatment/[id]` treatment plan builder
- `/report/[id]` printable premium report

## Tech stack

Next.js App Router, TypeScript, Tailwind CSS, Lucide icons, custom premium components, mock service layer.

## Features

Dashboard, case management, DSD workspace, SVG overlay canvas, analysis metrics, photo protocol, 3D placeholder, treatment builder, before/after comparison, printable report, mock AI services.

## Future backend integration

Connect Supabase for patients/cases/photos, replace mock AI services with computer vision, add real file uploads, generate PDFs server-side, add STL viewer, approval flow, signatures, and treatment pricing.
