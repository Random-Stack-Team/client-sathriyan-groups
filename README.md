# Sathriyan Group Corporate Website

Initial dependency and tooling setup for the Sathriyan Group corporate website.

This repo is intentionally only a project foundation. No website pages, UI, business content, Payload collections, CMS admin setup, forms, integrations, or service/blog logic are implemented yet.

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Payload CMS 3 dependencies
- PostgreSQL dependencies
- Framer Motion
- Lucide React
- React Hook Form
- Zod
- Resend

## Getting Started

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Project Structure

```txt
app/          Next.js App Router shell only
components/   Shared UI components
features/     Feature-specific modules
payload/      Payload CMS preparation folders
collections/  Future Payload collections
globals/      Future Payload globals
hooks/        Shared hooks and Payload hooks
lib/          Shared utilities
types/        Shared TypeScript types
styles/       Shared style entry points
public/       Static assets
```

## Notes For The Team

- Create actual routes/pages during the UI implementation phase.
- Keep Server Components as the default.
- Add Client Components only where browser interactivity is required.
- Do not hardcode business content into components.
- Use the `@/*` path alias for project imports.
- Use only the finalized project fonts:
  - `font-sans` / Manrope for body text, navigation, labels, cards, and general UI.
  - `font-display` / Alexandria for hero titles and major section headings.
  - `font-serif` / Times New Roman for footer headings and serif accent text only.
- Payload CMS is not implemented yet; only dependencies and placeholder folders are prepared.
- Copy `.env.example` to `.env.local` when database, CMS, or email work begins.
