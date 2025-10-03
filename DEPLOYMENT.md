# Multi-Site Deployment Guide

## Quick Start

You can now run and deploy different comparison sites from this single repository!

## Available Sites

- **auth** - Authentication providers comparison (auth.compare)
- **featureflags** - Feature flags comparison (featureflags.compare) - _Coming soon_
- **analytics** - Analytics platforms comparison (analytics.compare) - _Coming soon_

## Development

Run a specific site locally:

```bash
# Auth site (default - port 3000)
npm run dev:auth

# Feature flags site (port 3001)
npm run dev:featureflags

# Analytics site (port 3002)
npm run dev:analytics

# Default (auth site)
npm run dev
```

## Building

Build a specific site:

```bash
# Build auth site
npm run build:auth

# Build feature flags site
npm run build:featureflags

# Build analytics site
npm run build:analytics
```

## Deployment

Deploy to Cloudflare Workers:

```bash
# Deploy auth site to auth-compare worker
npm run deploy:auth

# Deploy feature flags site to featureflags-compare worker
npm run deploy:featureflags

# Deploy analytics site to analytics-compare worker
npm run deploy:analytics

# Deploy all sites at once
npm run deploy:all
```

## Adding a New Comparison Site

1. **Create the data file** in `/src/data/[site]-comparison.tsx`:

   ```tsx
   import type { ComparisonConfig } from "../types/comparison";
   // ... create providers and categories
   export const yourSiteComparisonConfig: ComparisonConfig = { ... };
   ```

2. **Import it in `/src/routes/index.tsx`**:

   ```tsx
   import { yourSiteComparisonConfig } from "../data/yoursite-comparison";

   const siteConfigs = {
     // ... existing sites
     yoursite: yourSiteComparisonConfig,
   };
   ```

3. **Add the site to `/src/config/site.ts`**:

   ```tsx
   export type SiteType = "auth" | "featureflags" | "analytics" | "yoursite";

   export const siteConfigs = {
     // ... existing configs
     yoursite: {
       domain: "yoursite.compare",
       title: "YourSite Compare",
       description: "Compare your thing",
     },
   };
   ```

4. **Create wrangler config** `wrangler.yoursite.json`:

   ```json
   {
     "name": "yoursite-compare",
     "compatibility_date": "2025-10-01",
     "compatibility_flags": ["nodejs_compat"],
     "main": "dist/server/server.js",
     "assets": { "directory": "dist/client" }
   }
   ```

5. **Add npm scripts** to `package.json`:
   ```json
   {
     "dev:yoursite": "SITE=yoursite vite dev --port 3003",
     "build:yoursite": "SITE=yoursite vite build",
     "deploy:yoursite": "npm run build:yoursite && wrangler deploy --config wrangler.yoursite.json"
   }
   ```

## How It Works

- The `SITE` environment variable determines which comparison site to build
- Each site has its own wrangler config for independent deployment
- All sites share the same `ComparisonTable` component and types
- Only the data file for the current site is loaded

## File Structure

```
compare/
├── src/
│   ├── config/
│   │   └── site.ts              # Site configuration
│   ├── data/
│   │   ├── auth-comparison.tsx  # Auth data
│   │   ├── featureflags-comparison.tsx  # Feature flags data (TODO)
│   │   └── analytics-comparison.tsx     # Analytics data (TODO)
│   ├── components/
│   │   └── ComparisonTable.tsx  # Reusable component
│   └── routes/
│       └── index.tsx            # Environment-aware route
├── wrangler.auth.json           # Auth site worker config
├── wrangler.featureflags.json   # Feature flags worker config
└── wrangler.analytics.json      # Analytics worker config
```

## Benefits

✅ Single codebase for all comparison sites  
✅ Shared components and types  
✅ Independent deployments to separate workers  
✅ Easy to add new comparison sites  
✅ Type-safe configuration
