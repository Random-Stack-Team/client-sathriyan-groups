# Sathriyan Group Corporate Website

A Next.js multi-page corporate website for Sathriyan Group — a diversified business conglomerate with divisions in construction, real estate, events, branding, trade, advisory, and hospitality.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

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
app/          Next.js App Router pages and layouts
components/   Shared UI components (Header, Footer, form controls)
features/     Feature-specific page modules (Home, About, Contact)
lib/          Shared data, utilities, and barrel exports
styles/       Global styles and design tokens
public/       Static assets (images, fonts, icons)
```

## Notes For The Team

- Keep Server Components as the default.
- Add Client Components only where browser interactivity is required.
- Do not hardcode business content into components — use `lib/content/`.
- Use the `@/*` path alias for project imports.
- Fonts: `font-sans` / Manrope for body, `font-display` / Alexandria for headings.
