# Claude Handoff — Fresh Vibes DSD Studio Standalone

## What was built

A complete standalone, dependency-free web application for a premium Digital Smile Design internal studio. It is desktop-first, luxury dental SaaS styled, and prepared for future CRM/Supabase/Next.js integration.

## File structure

- `index.html` — root HTML shell.
- `src/main.js` — app-level client router and all screen composition.
- `src/data.js` — centralized mock doctors, DSD cases, metrics, photo protocol, treatment steps, timeline, and exports.
- `src/styles.css` — premium design system, layout, DSD overlay, responsive rules, and print styles.
- `src/services/dsd-ai.js` — mock AI/planning service functions.
- `types/dsd.ts` — TypeScript domain interfaces for future migration.
- `scripts/dev.mjs` — local history-fallback development server.
- `scripts/build.mjs` — static build output to `dist/`.
- `scripts/lint.mjs` — lightweight sanity check.

## Main screens/components

Because this dependency-free prototype avoids a build-time framework, reusable UI is organized as rendering functions in `src/main.js`:

- `shell()` — sidebar, top bar, route layout.
- `overlay()` — SVG dental blueprint overlay.
- `smile()` — mock smile image area with overlay.
- `metricCards()` — metric scoring and recommendations.
- `photoGrid()` — upload-state cards and checklist.
- `workspace()` — main DSD editor with toolbar and analysis panel.
- `compare()` — before/after visual comparison.
- `treatmentPage()` — structured treatment plan and total estimate.
- `threeD()` — future STL/3D viewer placeholder.
- `report()` — printable DSD report.

## Routes

- `/dashboard`
- `/cases`
- `/cases/[id]`
- `/workspace/[id]`
- `/compare/[id]`
- `/treatment/[id]`
- `/report/[id]`

## Mock data location

All current demo data is in `src/data.js`. Use `getCase(id)` for route-level case lookup.

## Services

`src/services/dsd-ai.js` contains placeholders:

- `analyzeSmilePhoto()`
- `detectDentalMidline()`
- `calculateToothProportions()`
- `generateTreatmentSuggestions()`
- `createPatientFriendlyExplanation()`
- `generateDSDReport()`

These return realistic mock data and should later connect to real AI/computer vision and backend records.

## Design system

Global tokens and premium styles are in `src/styles.css`:

- Ivory/cream background
- Champagne gold accents
- Charcoal text
- Soft beige borders
- White translucent glass cards
- Success/warning/critical status pills
- Responsive desktop/tablet/mobile layouts
- Print styles for reports

## How to continue in Claude Code

1. Run `npm install`.
2. Run `npm run dev` and inspect all routes.
3. Use `/workspace/case-1` as the flagship demo screen.
4. If package registry access is available, migrate the static routes into Next.js App Router components.
5. Replace mock data gradually with typed backend calls while preserving domain interfaces in `types/dsd.ts`.
6. Keep the app standalone until the CRM integration plan is confirmed.

## What should be improved next

- Supabase schema and row-level security.
- Real photo upload workflow and image calibration.
- Editable DSD overlay points.
- Real PDF export.
- Patient approval and e-signature.
- STL/3D viewer integration.
- Treatment pricing and financing tools.
