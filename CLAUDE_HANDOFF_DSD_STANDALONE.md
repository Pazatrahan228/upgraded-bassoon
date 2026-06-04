# Claude Handoff — Fresh Vibes DSD Studio

## What was built
A standalone Next.js application for a premium dental Digital Smile Design studio with dashboard, cases, patient profile, workspace, comparison, treatment plan, and printable report routes.

## File structure
- `app/` App Router pages and global styles
- `components/layout/` shell/sidebar/topbar
- `components/dsd/` reusable DSD UI components
- `data/mock-dsd.ts` centralized mock doctors, patients, cases, metrics, photos, treatment data
- `types/dsd.ts` TypeScript domain interfaces
- `services/dsd-ai.ts` mock AI/service layer
- `lib/utils.ts` class/status helpers

## Main components
`AppShell`, `DSDWorkspace`, `DSDOverlayCanvas`, `DSDAnalysisPanel`, `DSDMetricCard`, `BeforeAfterSlider`, `TreatmentPlanBuilder`, `PhotoProtocolGrid`, `ThreeDPreview`, `SmileVisual`.

## Routes
`/dashboard`, `/cases`, `/cases/[id]`, `/workspace/[id]`, `/compare/[id]`, `/treatment/[id]`, `/report/[id]`.

## Design system
Ivory background, champagne/gold accents, charcoal text, white glass cards, serif headings, rounded premium surfaces, subtle shadows, DSD grid/blueprint overlays.

## How to continue in Claude Code
Run `npm install`, then `npm run dev`. Start with `data/mock-dsd.ts` and `types/dsd.ts` when wiring backend data. Keep pages thin and move new reusable UI into `components/dsd/`.

## Improvements next
Supabase schema, authenticated doctor/admin sessions, real photo uploads, editable overlay handles, PDF generation, STL viewer, AI detection pipeline, patient approval portal, doctor signatures, pricing integration.
