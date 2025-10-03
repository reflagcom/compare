# Feature Verification Guide

## Overview

To ensure accuracy and transparency, the comparison sites now support verifiable feature information with source references.

## New Features

### 1. "Unknown" Status

Use the `"unknown"` status when information cannot be verified or is uncertain.

**Status Types:**

- `"strong"` - Feature is fully supported and verified
- `"partial"` - Feature is partially supported or has limitations
- `"none"` - Feature is not available
- `"unknown"` - **NEW** - Information is uncertain or cannot be verified

**Visual Indicators:**

- ✅ Strong: Green checkmark
- ⚠️ Partial: Yellow warning
- ❌ None: Gray X
- ❓ Unknown: **Gray question mark**

### 2. Reference URLs

Add a `reference` field to any feature to link to the source documentation.

## Usage Examples

### Basic Feature with Reference

```tsx
booleanFlags: {
  status: "strong",
  details: "Full boolean flag support",
  reference: "https://example.com/docs/boolean-flags"
}
```

### Unknown Feature

```tsx
geoTargeting: {
  status: "unknown",
  details: "Geographic targeting availability not confirmed",
  reference: "https://example.com/docs" // optional
}
```

### Feature Without Reference

```tsx
customSegments: {
  status: "strong",
  details: "Advanced segment builder"
  // No reference field - will work fine but no source link shown
}
```

## Best Practices

### 1. When to Use "Unknown"

Use `"unknown"` status when:

- Documentation is unclear or contradictory
- Feature exists but details are uncertain
- Pricing/availability information cannot be confirmed
- Feature is in beta without clear documentation

### 2. Adding References

**DO:**

- ✅ Link to official documentation pages
- ✅ Link to pricing pages for pricing features
- ✅ Link to feature-specific docs when available
- ✅ Use the most specific URL possible

**DON'T:**

- ❌ Link to blog posts (use official docs)
- ❌ Link to homepage (too general)
- ❌ Link to third-party sites (use official sources)

### 3. Reference URL Guidelines

**Good Examples:**

```tsx
// Specific feature documentation
reference: "https://launchdarkly.com/docs/home/flags/boolean";

// Pricing page for pricing features
reference: "https://mixpanel.com/pricing";

// API reference for technical features
reference: "https://posthog.com/docs/api/feature-flags";
```

**Bad Examples:**

```tsx
// Too general
reference: "https://example.com";

// Blog post (unstable)
reference: "https://example.com/blog/new-feature";

// Third-party site
reference: "https://reddit.com/r/featureflags";
```

## Implementation Checklist

When updating provider information:

- [ ] Verify each feature against official documentation
- [ ] Mark unverifiable features as `"unknown"`
- [ ] Add `reference` URLs to all verified features
- [ ] Use the most specific documentation URL available
- [ ] Test that reference links open correctly
- [ ] Ensure reference URLs use HTTPS

## Example: Complete Provider Entry

```tsx
{
  name: "ExampleProvider",
  logo: <ExampleLogo />,
  website: "https://example.com",
  tagline: {
    status: "strong",
    details: "Feature flag platform for teams",
    reference: "https://example.com"
  },
  features: {
    // Verified with reference
    booleanFlags: {
      status: "strong",
      details: "Full boolean flag support",
      reference: "https://example.com/docs/flags/boolean"
    },

    // Partially supported with reference
    geoTargeting: {
      status: "partial",
      details: "Via custom attributes only",
      reference: "https://example.com/docs/targeting#geo"
    },

    // Not available (no reference needed)
    aiRecommendations: {
      status: "none",
      details: "AI features not available"
    },

    // Uncertain - marked as unknown
    scheduledRollouts: {
      status: "unknown",
      details: "Scheduling feature mentioned but not documented",
      reference: "https://example.com/docs"
    }
  }
}
```

## User Experience

When references are added:

1. **Collapsed View**: Shows only status icons
2. **Expanded View**: Shows details + "Source" link (if reference exists)
3. **Click Source**: Opens reference URL in new tab

## Migration Strategy

### Phase 1: Add Unknown Status

- Update type definitions ✅
- Update UI components ✅
- Update comparison tables ✅

### Phase 2: Mark Uncertain Features

- Review all providers
- Mark unverified features as "unknown"
- Add references where possible

### Phase 3: Add References

- Add references to all verified features
- Prioritize high-impact features
- Focus on pricing and core features first

## Status Color Guide

```
strong  → 🟢 Green  (Fully supported and verified)
partial → 🟡 Yellow (Partial support or limitations)
none    → ⚪ Gray   (Not available)
unknown → ⚪ Gray   (Uncertain/unverified) - slightly faded
```

## Questions?

When uncertain about a feature:

1. Check official documentation
2. If unclear → use `"unknown"` status
3. Add reference to best available docs
4. Document uncertainty in details

Better to mark as "unknown" than to show incorrect information.
