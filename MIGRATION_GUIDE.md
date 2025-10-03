# Data Reorganization Migration Guide

## Goal
Reorganize data from 3 large files into individual provider files within category subfolders.

## Current Structure
```
src/data/
├── featureflags-comparison.tsx (1578 lines, 9 providers)
├── analytics-comparison.tsx (943 lines, 8 providers)
└── auth-comparison.tsx (984 lines, 8 providers)
```

## Target Structure
```
src/data/
├── featureflags/
│   ├── index.tsx                    # Exports providers array + config
│   ├── reflag.tsx                   # ✅ DONE
│   ├── launchdarkly.tsx             # ✅ DONE
│   ├── flagsmith.tsx                # ✅ DONE
│   ├── unleash.tsx                  # ✅ DONE
│   ├── posthog.tsx                  # TODO
│   ├── split.tsx                    # TODO
│   ├── growthbook.tsx               # TODO
│   ├── devcycle.tsx                 # TODO
│   └── configcat.tsx                # TODO
├── analytics/
│   ├── index.tsx                    # TODO
│   ├── posthog.tsx                  # TODO
│   ├── mixpanel.tsx                 # TODO
│   ├── amplitude.tsx                # TODO
│   ├── heap.tsx                     # TODO
│   ├── ga4.tsx                      # TODO
│   ├── pendo.tsx                    # TODO
│   ├── plausible.tsx                # TODO
│   └── segment.tsx                  # TODO
└── auth/
    ├── index.tsx                    # TODO
    ├── clerk.tsx                    # TODO
    ├── auth0.tsx                    # TODO
    ├── supabase.tsx                 # TODO
    ├── authjs.tsx                   # TODO
    ├── firebase.tsx                 # TODO
    ├── lucia.tsx                    # TODO
    ├── workos.tsx                   # TODO
    └── keycloak.tsx                 # TODO
```

## Provider File Template

Each provider file should follow this pattern:

```tsx
import type { Provider } from "../../types/comparison";

// Logo component
function ProviderNameLogo() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>ProviderName</title>
      {/* SVG content */}
    </svg>
  );
}

// Provider data export
export const providerName: Provider = {
  name: "ProviderName",
  logo: <ProviderNameLogo />,
  website: "https://example.com",
  tagline: {
    status: "strong",
    details: "Provider description",
  },
  features: {
    // ... feature data
  },
};
```

## Index File Template

Each category's `index.tsx` should aggregate providers and export the config:

```tsx
import RiFlag2Line from "remixicon-react/Flag2LineIcon";
// ... other icon imports

import type { Category, ComparisonConfig } from "../../types/comparison";

// Import all providers
import { reflag } from "./reflag";
import { launchdarkly } from "./launchdarkly";
// ... other provider imports

// Categories definition
export const categories: Category[] = [
  {
    id: "categoryId",
    label: "Category Label",
    icon: <RiFlag2Line className="w-4 h-4 text-blue-500" />,
    features: {
      featureKey: "Feature Display Name",
      // ... more features
    },
  },
  // ... more categories
];

// Providers array
export const providers = [
  reflag,
  launchdarkly,
  // ... other providers
];

// Config export
export const featureFlagsComparisonConfig: ComparisonConfig = {
  title: "featureflags.compare",
  subtitle: "⋅ Easily compare different feature flag providers and platforms",
  icon: <RiFlag2Line className="w-4 h-4 mt-0.5" />,
  providers,
  categories,
  lastUpdated: "2025-10-03",
};
```

## Migration Steps

### 1. Extract Remaining Feature Flags Providers

For each provider in `featureflags-comparison.tsx`:
1. Find the provider data (starts with `{ name: "ProviderName"`)
2. Find the logo component (`function ProviderNameLogo()`)
3. Create new file: `src/data/featureflags/providername.tsx`
4. Export as: `export const providername: Provider = { ... }`

**Remaining providers:**
- posthog (lines ~849-991)
- split (lines ~993-1135)
- growthbook (lines ~1137-1279)
- devcycle (lines ~1281-1423)
- configcat (lines ~1425-1567)

### 2. Create Feature Flags Index

Create `src/data/featureflags/index.tsx`:
1. Copy categories array from old file (lines ~187-279)
2. Import all 9 provider files
3. Create providers array with all imports
4. Export the comparison config

### 3. Extract Analytics Providers

For each provider in `analytics-comparison.tsx`:
- PostHog
- Mixpanel
- Amplitude
- Heap
- GA4
- Pendo
- Plausible
- Segment

### 4. Create Analytics Index

Follow same pattern as feature flags index.

### 5. Extract Auth Providers

For each provider in `auth-comparison.tsx`:
- Clerk
- Auth0
- Supabase
- Auth.js
- Firebase
- Lucia
- WorkOS
- Keycloak

### 6. Create Auth Index

Follow same pattern.

### 7. Update Route Files

Update imports in route files:

**Before:**
```tsx
import { featureFlagsComparisonConfig } from "../data/featureflags-comparison";
```

**After:**
```tsx
import { featureFlagsComparisonConfig } from "../data/featureflags";
```

Files to update:
- `src/routes/index.tsx`
- Any other files importing the comparison configs

### 8. Delete Old Files

Once all imports are updated and working:
```bash
rm src/data/featureflags-comparison.tsx
rm src/data/analytics-comparison.tsx
rm src/data/auth-comparison.tsx
```

### 9. Format and Lint

```bash
npm run check
```

## Benefits

1. **Easier to manage**: Each provider in its own file
2. **Better git diffs**: Changes to one provider don't affect others
3. **Easier collaboration**: Multiple people can work on different providers
4. **Clearer organization**: Category-based folder structure
5. **Smaller files**: No more 1500+ line files
6. **Better IDE performance**: Faster syntax highlighting and IntelliSense

## Notes

- Export names should be lowercase (e.g., `export const reflag`)
- File names should be lowercase (e.g., `reflag.tsx`)
- Logo component names should be PascalCase (e.g., `ReflagLogo`)
- All provider files use the same type: `Provider` from `../../types/comparison`
