# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at localhost:3000 (auto-opens browser)
pnpm build      # Production build
pnpm lint       # ESLint
pnpm preview    # Preview production build
```

No test suite is configured.

## Architecture

This is a single-page React landing site for a French woodworking/plumbing artisan, built with Vite + React 19 + Tailwind CSS v4.

**Page structure** (`src/App.jsx`): sections render top-to-bottom as a single scroll — `Header` → `Services` → `CustomerReview` → `About` → `Contact`. Each section has an `id` attribute used for anchor navigation.

**Section layout** (`src/sections/`): each section is a self-contained directory with its own `.jsx` file. Sections use `bg-[#16191F]` / `bg-[#222630]` as their dark background colors and `px-[120px]` for horizontal padding.

**UI components** (`src/components/ui/`): shadcn/ui-style components (Button, Card, NavigationMenu) built on Radix UI primitives. Use `cn()` from `src/lib/utils.js` (clsx + tailwind-merge) for conditional class merging.

**Path alias**: `@` maps to `src/`. Use `@/components/...`, `@/sections/...`, `@/images/...` etc.

**Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin (no `tailwind.config.js`). CSS variables for theming are defined in `src/index.css` under `:root` and `.dark`. The accent color used for CTAs is `#FF7607`.

**Images** live in `src/images/` and are imported directly as ES module assets.

**Content language**: French — all user-facing text is in French.
