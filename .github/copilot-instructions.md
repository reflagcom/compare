# GitHub Copilot Instructions

## Code Quality Workflow

**IMPORTANT**: After editing any files, always run:

`npm run check` to fix any linting and formatting issues (runs both format and lint)

DO NOT suggest deploying to cloudflare for each change made. The developer will do that manually when ready.

These commands use Biome for fast formatting and linting.

## Project Stack

- **Framework**: TanStack Start (SSR with Cloudflare Workers)
- **Router**: TanStack Router (file-based routing)
- **State**: TanStack Query
- **UI**: shadcn/ui components
- **Styling**: Tailwind CSS v4
- **Linting/Formatting**: Biome 2.2.4
- **Build**: Vite 7.1.8
- **Deployment**: Cloudflare Workers

## Code Style Preferences

- Use **function declarations** for components (not arrow functions)
- Export components at the bottom of the file when possible
- Keep **TanStack Table** sorting and filtering logic in route components
- Use **dark mode** by default (applied via `className="dark"` on `<html>`)
- Prefer **server-side data** patterns for SSR compatibility

## File Structure

```
src/
├── routes/          # File-based routes (TanStack Router)
├── components/      # Reusable React components
│   └── ui/          # shadcn/ui components
├── integrations/    # Third-party integrations (TanStack Query, etc.)
├── lib/             # Utility functions
└── data/            # Static data and demo data
```

## Common Commands

- `npm run dev` - Start dev server (port 3000, fallback to 3001)
- `npm run build` - Production build (outputs to `dist/`)
- `npm run deploy` - Deploy to Cloudflare Workers
- `npm run serve` - Preview production build
- `npm test` - Run tests
- `npm run format` - Format all files with Biome
- `npm run lint` - Lint all files with Biome
- `npm run check` - Run both format and lint

## TanStack Router Conventions

- Use `createFileRoute` for route components
- Export route as `export const Route = createFileRoute('/path')({})`
- Use `Route.useLoaderData()` to access loader data
- Use `Route.useRouteContext()` to access route context
- Avoid exporting non-route components from route files (causes bundle size warnings)

## TanStack Query Integration

- QueryClient is available via route context: `queryClient`
- Use `setupRouterSsrQueryIntegration` for SSR (future)
- Current implementation uses singleton pattern for client

## Important Notes

- **SSR Mode**: App runs with full server-side rendering on Cloudflare Workers
- **Cloudflare Workers**: Use `npm run deploy` to deploy (requires wrangler login)
- **Dark Mode**: Always enabled via `dark` class on root `<html>` element
- **Type Safety**: Full TypeScript strict mode enabled
