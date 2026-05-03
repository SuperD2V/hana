# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # Start development server (http://localhost:3000)
yarn build      # Production build
yarn lint       # ESLint check
```

Package manager: **yarn** (not npm).

## Architecture Overview

This is a Next.js 15 (App Router) website for **하나비전교회** (Hana Vision Church), a Korean church located in Gwanggyo, Yongin.

### Route Groups

Two route groups define the two main experiences:

- `src/app/(nav)/` — Public-facing site. Layout wraps pages with `<Navigation>` and `<Footer>`.
  - `/` (home), `/introduce`, `/worship`, `/notice`, `/school`, `/philosophy`, `/story`, `/terms`
- `src/app/(admin)/admin/` — Admin dashboard (no shared layout wrapper). Requires login via `/admin/signin`.

### Component Organization

`src/component/` mirrors the route structure:
- `shared/` — Reusable primitives: `Navigation`, `Footer`, `Typography`, `ArrowButton`, `Line`, `LogDialog`, `Slider`, `adminHeader`, `subMenu`, `hamberger`
- `main/`, `notice/`, `introduce/`, `worship/`, `school/`, `philosophy/`, `story/` — Feature components
- `admin/` — Admin UI: `Banner`, `Bulletin`, `Notice`, `Class`, `ClassRegister`, `Gallery`, `NoticeBulletineRegister`, `PasswordReset`, `dashboard`
- `signin/` — Admin sign-in form

`src/components/ui/` — shadcn/ui components (button, dialog).

### Styling

**vanilla-extract** (`.css.ts` files) is the primary styling system — all style files are co-located with their components. Tailwind CSS is also available but used sparingly. Global styles in `src/app/globals.css`.

Design tokens live in `src/component/shared/designed/`:
- `color.ts` — Brand colors (blue `brand.*`, yellow `brand_yellow.*`, gray scale)
- `typography.css.ts` — Korean (Pretendard) and English (Poppins) type scales exported as `text` and `textEn` aliases
- `shared.css.ts` — Shared style utilities

Use the `<Typography>` component (`src/component/shared/ui/Typography/`) for text rather than raw HTML elements. Pass `variant` prop using the alias names from `text`/`textEn` (e.g. `variant="headlineMedium"`).

### State Management

**Zustand** stores in `hooks/store/`:
- `useAdminStore` — Admin panel: selected category (1–10), selected item ID, type (bulletin/notice)
- `useIntroduceStore`, `usePhilosophyStore` — Page-level UI state

All stores use the `immer` middleware and a generic `setState(path, value)` method backed by lodash `set` for deep path updates.

### Data Fetching

**TanStack Query v5** for server state. Provider in `src/app/_provider/QueryProvider.tsx`.

API calls go through the singleton `apiClient` from `src/component/shared/api/axiosInstance.ts`:
- Base URL: `NEXT_PUBLIC_API_BASE_URL` (env) — defaults to `http://localhost:3000/api`
- In development, Next.js rewrites `/api/*` → `https://52.79.145.244.sslip.io/*`
- Handles JWT: reads/writes `accessToken` from localStorage; retries on 401 with refresh token via `withCredentials`
- Usage: `api.request<T>({ url, method, data })`

### Path Aliases

`@/` maps to `src/` (configured in both `tsconfig.json` and `next.config.ts` webpack alias).

### SVG Handling

SVGs are loaded as React components via `@svgr/webpack`. Import SVG files directly: `import Logo from "@/component/shared/assets/logo.svg"`.

### Rich Text Editor

The admin `NoticeBulletineRegister` feature uses `react-quill-new` with custom hooks in `src/component/admin/NoticeBulletineRegister/hooks/` for drag-and-drop, form data, image upload, and editor management.
