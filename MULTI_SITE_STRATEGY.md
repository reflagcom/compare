# Multi-Site Deployment Strategy

## Option 1: Environment-Based Site Selection (Recommended)

### Architecture

- Single build system with environment variable controlling which site to build
- Multiple wrangler config files (one per site)
- Deploy each site independently with different commands

### Setup Steps

#### 1. Create site-specific wrangler configs

**`wrangler.auth.json`**:

```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "auth-compare",
  "compatibility_date": "2025-10-02",
  "compatibility_flags": ["nodejs_compat"],
  "main": "dist/server/server.js",
  "assets": {
    "directory": "dist/client"
  }
}
```

**`wrangler.featureflags.json`**:

```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "featureflags-compare",
  "compatibility_date": "2025-10-02",
  "compatibility_flags": ["nodejs_compat"],
  "main": "dist/server/server.js",
  "assets": {
    "directory": "dist/client"
  }
}
```

#### 2. Update package.json scripts

```json
{
  "scripts": {
    "dev": "vite dev --port 3000",
    "dev:auth": "SITE=auth vite dev --port 3000",
    "dev:featureflags": "SITE=featureflags vite dev --port 3001",
    "build": "vite build",
    "build:auth": "SITE=auth vite build",
    "build:featureflags": "SITE=featureflags vite build",
    "deploy:auth": "npm run build:auth && wrangler deploy --config wrangler.auth.json",
    "deploy:featureflags": "npm run build:featureflags && wrangler deploy --config wrangler.featureflags.json",
    "deploy:all": "npm run deploy:auth && npm run deploy:featureflags"
  }
}
```

#### 3. Create a site configuration file

**`src/config/site.ts`**:

```typescript
export type SiteType = "auth" | "featureflags" | "analytics";

export const SITE: SiteType = (import.meta.env.VITE_SITE || "auth") as SiteType;

export const siteConfigs = {
  auth: {
    domain: "auth.compare",
    title: "Auth Compare",
    description: "Compare authentication providers",
  },
  featureflags: {
    domain: "featureflags.compare",
    title: "Feature Flags Compare",
    description: "Compare feature flag providers",
  },
  analytics: {
    domain: "analytics.compare",
    title: "Analytics Compare",
    description: "Compare analytics providers",
  },
} as const;

export const currentSite = siteConfigs[SITE];
```

#### 4. Update vite.config.ts to pass env vars

```typescript
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  define: {
    "import.meta.env.VITE_SITE": JSON.stringify(process.env.SITE || "auth"),
  },
  plugins: [
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart(),
    viteReact(),
    cloudflare(),
    tailwindcss(),
  ],
});

export default config;
```

#### 5. Update index.tsx to use site config

```typescript
"use client";

import { createFileRoute } from "@tanstack/react-router";
import { ComparisonTable } from "../components/ComparisonTable";
import { SITE } from "../config/site";

// Import all site configs
import { authComparisonConfig } from "../data/auth-comparison";
// import { featureFlagsComparisonConfig } from "../data/featureflags-comparison";
// import { analyticsComparisonConfig } from "../data/analytics-comparison";

const siteConfigs = {
  auth: authComparisonConfig,
  // featureflags: featureFlagsComparisonConfig,
  // analytics: analyticsComparisonConfig,
};

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return <ComparisonTable config={siteConfigs[SITE]} />;
}
```

### Pros

✅ Single codebase, single build system
✅ Easy to add new sites
✅ Shared components and types
✅ Simple deployment with different commands

### Cons

❌ All site data bundled in every build (can be mitigated with dynamic imports)
❌ Requires environment variable management

---

## Option 2: Workspace/Monorepo with TurboRepo

### Architecture

- Monorepo with packages for shared code and separate apps per site
- Each site is its own mini-app that imports shared components
- Independent builds and deployments

### Structure

```
compare/
├── package.json (root)
├── turbo.json
├── packages/
│   ├── shared/          # Shared types, components
│   │   ├── ComparisonTable.tsx
│   │   └── types/
│   └── ui/              # Shared UI components
└── apps/
    ├── auth/            # auth.compare
    │   ├── src/
    │   ├── wrangler.json
    │   └── package.json
    ├── featureflags/    # featureflags.compare
    │   ├── src/
    │   ├── wrangler.json
    │   └── package.json
    └── analytics/       # analytics.compare
        ├── src/
        ├── wrangler.json
        └── package.json
```

### Pros

✅ True separation of concerns
✅ Each site only bundles its own data
✅ Can have site-specific customizations
✅ Scales to many sites

### Cons

❌ More complex setup
❌ More files and configuration
❌ Requires TurboRepo or similar

---

## Option 3: Dynamic Route-Based Sites

### Architecture

- Use TanStack Router's file-based routing to create separate routes
- Each route serves a different comparison site
- Single deployment, multiple domains point to different routes

### Structure

```
src/routes/
├── index.tsx              # Redirect or default site
├── auth/
│   └── index.tsx          # auth.compare → /auth
├── featureflags/
│   └── index.tsx          # featureflags.compare → /featureflags
└── analytics/
    └── index.tsx          # analytics.compare → /analytics
```

### Cloudflare Workers routing

Use `_routes.json` or wrangler routing to map domains to paths:

- `auth.compare` → `/auth`
- `featureflags.compare` → `/featureflags`

### Pros

✅ Simplest setup
✅ Single deployment
✅ All sites available instantly

### Cons

❌ All data in one bundle
❌ Less flexible for site-specific customization
❌ Domains need to route to subdirectories

---

## Recommendation

For your use case, I recommend **Option 1** because:

1. ✅ **Clean separation**: Each site gets its own worker and domain
2. ✅ **Simple to implement**: Minimal changes to existing setup
3. ✅ **Easy to deploy**: `npm run deploy:auth` or `npm run deploy:all`
4. ✅ **Scalable**: Add new sites by creating new data files and wrangler configs
5. ✅ **Flexible**: Can customize build process per site if needed

Would you like me to implement Option 1 for you?
