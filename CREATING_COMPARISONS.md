# Creating New Comparison Sites

This template supports creating multiple comparison sites (auth, feature flags, analytics, etc.) with reusable components.

## Architecture

The system consists of three main parts:

1. **Type Definitions** (`/src/types/comparison.ts`)
   - Shared TypeScript types for all comparison sites
   - `Provider`, `Category`, `ComparisonConfig`, `FeatureValue`, `Status`

2. **Data Files** (`/src/data/*.tsx`)
   - Site-specific provider data and configurations
   - Example: `/src/data/auth-comparison.tsx`

3. **Reusable Component** (`/src/components/ComparisonTable.tsx`)
   - Generic table component that works with any `ComparisonConfig`
   - Handles all UI logic: sticky columns, expand/collapse, scroll borders

## Creating a New Comparison Site

### 1. Create a Data File

Create `/src/data/[your-topic]-comparison.tsx`:

```tsx
import type { Category, ComparisonConfig, Provider } from "../types/comparison";
import RemixIcon from "remixicon-react/YourIconLine";

// Provider Logo Components
function ProviderOneLogo() {
  return <svg>...</svg>;
}

// Categories with features
const categories: Category[] = [
  {
    id: "categoryOne",
    label: "Category Label",
    icon: <RemixIcon className="w-4 h-4 text-blue-500" />,
    features: {
      featureKey1: "Feature Display Name",
      featureKey2: "Another Feature",
    },
  },
  // ... more categories
];

// Provider data
const providers: Provider[] = [
  {
    name: "Provider Name",
    logo: <ProviderOneLogo />,
    tagline: {
      status: "strong", // or "partial" or "none"
      details: "Brief description",
    },
    features: {
      featureKey1: {
        status: "strong",
        details: "Detailed explanation",
      },
      featureKey2: {
        status: "partial",
        details: "What's supported",
      },
    },
  },
  // ... more providers
];

// Export the config
export const yourTopicComparisonConfig: ComparisonConfig = {
  title: "your-topic.compare",
  subtitle: "⋅ Brief tagline",
  icon: <RemixIcon className="w-4 h-4 mt-0.5" />,
  providers,
  categories,
  lastUpdated: "2025-10-02",
};
```

### 2. Create a Route

Create `/src/routes/[your-topic].tsx`:

```tsx
"use client";

import { createFileRoute } from "@tanstack/react-router";
import { ComparisonTable } from "../components/ComparisonTable";
import { yourTopicComparisonConfig } from "../data/your-topic-comparison";

export const Route = createFileRoute("/your-topic")({
  component: YourTopicComparison,
});

function YourTopicComparison() {
  return <ComparisonTable config={yourTopicComparisonConfig} />;
}
```

### 3. That's It!

The `ComparisonTable` component handles all the UI automatically:
- ✅ Sticky headers and columns
- ✅ Scroll-based borders
- ✅ Expand/collapse details
- ✅ Category grouping
- ✅ Status icons (✓ strong, ⚠ partial, ✗ none)
- ✅ Responsive column widths
- ✅ Last updated footer

## Status Values

- `"strong"`: Full support (green checkmark)
- `"partial"`: Partial support (yellow warning)
- `"none"`: No support (gray X)

## Tips

- Use unique `id` values for categories
- Keep feature keys consistent with feature definitions
- Use Remix Icons for category icons (import from `remixicon-react`)
- Apply unique colors to category icons for visual differentiation
- Include logos as inline SVG components for best performance

## Examples

See `/src/data/auth-comparison.tsx` for a complete reference implementation with:
- 8 providers (Clerk, Auth0, Supabase, etc.)
- 7 categories (Authentication, User Management, etc.)
- 24 features across all categories
