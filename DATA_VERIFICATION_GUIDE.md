# Data Verification Guide

## Overview

This guide outlines the process for maintaining data accuracy in the comparison platform using LLM-powered content analysis of reference URLs to verify provider feature information.

## The Importance of Verification

As a comparison platform, data accuracy is critical to our users' trust and decision-making process. Provider offerings change frequently, and without systematic verification against authoritative sources, our comparison data becomes outdated and unreliable.

## Current State

The `FeatureValue` type includes a `reference` field that points to authoritative documentation:

```typescript
export type FeatureValue = {
  status: Status;
  details: string;
  reference?: string; // URL reference for where the information was found
};
```

Provider data files already include reference URLs that point to official documentation, API references, and feature pages.

## LLM-Powered Verification Process

### Overview

Instead of manual verification, we use LLMs to:

1. Parse content from reference URLs
2. Extract relevant feature information
3. Compare against existing feature details and status
4. Identify discrepancies requiring updates

### Verification Workflow

#### 1. Reference URL Validation & Addition (CRITICAL FIRST STEP)

**🚨 MANDATORY REQUIREMENTS:**

1. **EVERY feature MUST have a reference URL** - No exceptions
2. **Always validate reference URLs before content analysis**
3. **Verify EVERY feature claim with specific web searches**
4. **Add reference URLs for ALL features missing them**

**📋 REFERENCE URL CHECKLIST:**

- [ ] **100% Coverage**: Every single feature has a reference URL
- [ ] **URL Validation**: All reference URLs are accessible (200-299 status)
- [ ] **Content Verification**: URLs point to relevant, authoritative documentation
- [ ] **No Missing References**: Zero features without reference URLs

For each provider feature with a reference URL:

```typescript
// Example feature data
const feature = {
  status: "strong",
  details: "Email + password with verification",
  reference: "https://auth0.com/docs/authenticate/login/password-realm",
};
```

**URL Validation & Content Extraction using MCP Tools:**

Prioritize using available MCP tools to perform website scraping and searching. The `web_search` tool can be used for web search and any MCP tool that allows for fetching a URL and returning the content should be used to directly retrieve the reference URLs for URL validation and content extraction.

If no MCP tool is available for website scraping, use a javascript function to perform the website scraping using `fetch` or `axios` or other HTTP libraries.

**🚨 CRITICAL: You MUST add reference URLs for ALL features - this is not optional!**

**MCP Tool Benefits:**

- **Built-in Error Handling**: Automatically handles network timeouts, SSL errors, and redirects
- **Content Extraction**: Returns structured content ready for LLM analysis
- **No Dependencies**: No need to install axios or other HTTP libraries
- **Consistent Interface**: Same tool used across all verification processes

**URL Validation Results:**

- ✅ **Accessible (200-299)**: Proceed with content analysis
- ⚠️ **Redirect (300-399)**: Update reference URL to final destination
- ❌ **Client Error (400-499)**: URL is broken, needs manual investigation
- ❌ **Server Error (500-599)**: Temporary issue, retry later
- ❌ **Network Error**: DNS/connection issues, verify domain

#### 2. Content Analysis using MCP-Extracted Content

**Content is already extracted during URL validation step**

The LLM will analyze the MCP-extracted content to:

- Parse the documentation structure from the extracted content
- Extract feature-specific information
- Identify relevant sections and capabilities

#### 3. Feature Status Determination

The LLM analyzes the MCP-extracted content to determine:

**Feature Status:**

- `"strong"` - Feature is fully supported as described
- `"partial"` - Feature exists but with limitations
- `"none"` - Feature is not supported
- `"unknown"` - Cannot determine from documentation

**Feature Details:**

- Current capabilities and limitations
- Configuration options
- Integration requirements
- Version compatibility

#### 4. Discrepancy Detection

Compare LLM-extracted information against existing data using MCP-extracted content:

```typescript
// Example LLM analysis using MCP-extracted content
const analysis = {
  extractedStatus: "strong",
  extractedDetails:
    "Email + password authentication with verification and security features",
  currentStatus: "strong",
  currentDetails: "Email + password with verification",
  confidence: 0.95,
  sourceContent: mcpResult.content, // Content from MCP web_search
  extractedAt: mcpResult.extractedAt,
};

const needsUpdate =
  analysis.extractedStatus !== analysis.currentStatus ||
  analysis.extractedDetails !== analysis.currentDetails ||
  analysis.confidence < 0.8;
```

**MCP-Enhanced Analysis Benefits:**

- **Direct Content Access**: No need to re-fetch URLs for analysis
- **Consistent Content**: Same content used for validation and analysis
- **Error Tracking**: Built-in error handling from MCP tools
- **Timestamp Tracking**: Know exactly when content was extracted

## Update Process

### 1. Review LLM Findings

For each discrepancy identified:

```typescript
// Example LLM result
const llmResult = {
  extractedStatus: "partial",
  extractedDetails: "Email + password available but requires premium plan",
  confidence: 0.92,
  changes: [
    "Status: strong → partial",
    "Details: Add premium plan requirement",
  ],
  reasoning: "Documentation shows feature exists but is limited to paid tiers",
};
```

### 2. Manual Verification using MCP Tools

**🚨 MANDATORY VERIFICATION CHECKLIST:**

**Reference URL Requirements:**

- [ ] **CRITICAL**: Verify 100% of features have reference URLs - count them!
- [ ] **CRITICAL**: Use MCP `web_search` to verify ALL reference URL accessibility
- [ ] **CRITICAL**: Add reference URLs for ANY features missing them
- [ ] **CRITICAL**: Ensure reference URLs point to authoritative, official documentation

**Content Verification:**

- [ ] Review the MCP-extracted content personally to confirm accuracy
- [ ] Confirm LLM analysis matches the actual MCP-extracted web content
- [ ] Use MCP `codebase_search` to check if multiple reference URLs need updating (batch fix broken URLs)
- [ ] Verify the change doesn't contradict other features using MCP `grep` across provider files

**⚠️ STOP: Do not proceed unless EVERY feature has a reference URL!**

### 3. Apply Updates using MCP Tools

Update the feature data using MCP tools for consistent, reliable changes:

```typescript
// Use MCP search_replace tool to apply verified updates
await search_replace({
  file_path: "src/data/featureflags/provider.tsx",
  old_string: `details: "${currentDetails}"`,
  new_string: `details: "${verifiedDetails}"`,
  explanation: `Update based on MCP-verified content from ${referenceUrl}`,
});
```

**MCP Update Benefits:**

- **Atomic Changes**: Each update is applied consistently
- **Error Prevention**: Built-in validation prevents syntax errors
- **Audit Trail**: Each change includes explanation and source
- **Rollback Capability**: Changes can be easily reverted if needed

### 4. Quality Assurance using MCP Tools

- [ ] Use MCP `read_lints` to verify no TypeScript errors after updates
- [ ] Use MCP `codebase_search` to check cross-provider consistency
- [ ] Test UI with updated data
- [ ] Update comparison config timestamp using MCP `search_replace`

**MCP Quality Assurance Benefits:**

- **Automated Linting**: Catch errors immediately after changes
- **Consistency Checks**: Search across all providers for similar patterns
- **Reliable Updates**: Use same tools for all file modifications

## Reference URL Management

### URL Quality Guidelines

**Preferred Sources:**

- Official documentation pages
- API reference documentation
- Feature-specific guides
- Pricing and compliance pages

**URL Best Practices:**

- Use stable, versioned URLs when possible
- Avoid marketing pages that change frequently
- Prefer deep links to specific sections
- Include anchor links for precise references

### Handling URL Changes

When reference URLs become outdated:

1. **Automatic Detection**: LLM analysis will fail or return low confidence
2. **Manual Investigation**: Find the new URL location
3. **Batch Updates**: Update all affected features
4. **Verification**: Re-run LLM analysis on new URLs

## Verification Schedule

### Automated Weekly Checks

- Run LLM verification on all features with references
- Generate automated reports of discrepancies
- Flag high-confidence changes for manual review

### Monthly Deep Reviews

- Manually review all LLM-flagged discrepancies
- Update feature data based on verified findings
- Investigate and fix broken reference URLs
- Review provider release notes for new features

### Quarterly Comprehensive Audits

- Verify all features across all providers
- Check for newly deprecated features
- Update compliance and certification information
- Review and improve reference URL quality

## Troubleshooting

### Critical URL Issues (Must Fix First)

**Broken Reference URLs (404, 403, DNS errors):**

- **Immediate Action**: Mark feature as requiring URL update
- **Investigation**: Search provider's current documentation structure
- **Common Patterns**:
  - `provider.com/docs/*` → `docs.provider.com/*`
  - `/documentation/*` → `/docs/*`
  - Version-specific URLs that became outdated
- **Batch Fix**: Update all URLs from same provider if pattern identified

**Redirected URLs (301, 302):**

- **Update Required**: Replace with final destination URL
- **Verify Content**: Ensure redirected page has relevant information
- **Pattern Check**: Look for systematic URL structure changes

**Authentication Required (401, 403):**

- **Public Alternative**: Find publicly accessible documentation
- **Contact Provider**: Request public documentation links
- **Alternative Sources**: Use API documentation, GitHub repos, or community docs

### Common LLM Analysis Issues

**Low Confidence Results:**

- **First Check**: Verify reference URL is accessible and contains relevant content
- Review the reference URL content manually
- Check if URL requires authentication or has changed
- Consider finding a better reference source

**Contradictory Information:**

- **URL Verification**: Ensure you're reading from the correct, current documentation
- Cross-reference multiple documentation pages
- Check provider's changelog or release notes
- Contact provider support if documentation seems inconsistent

**Feature Not Found:**

- **URL Check**: Verify the reference URL actually discusses the feature
- Verify the feature still exists in current version
- Check if feature was moved or renamed
- Consider marking as "none" if truly discontinued

### URL Validation Failures

**Network Timeouts:**

- Retry with longer timeout (30s)
- Check if provider website is experiencing issues
- Use alternative documentation sources

**SSL/TLS Errors:**

- Verify certificate validity
- Check if provider changed domains
- Use HTTP if HTTPS fails (document security implications)

## Success Metrics

- **Reference Coverage**: **100%** of features MUST have reference URLs (Zero tolerance)
- **URL Health**: >95% of reference URLs must be accessible (200-299 status)
- **Verification Coverage**: >95% of features with valid references successfully analyzed
- **Accuracy Rate**: >90% of high-confidence LLM results verified as correct
- **Update Frequency**: All providers reviewed at least quarterly
- **Reference Quality**: <2% of reference URLs broken or inaccessible

**🚨 CRITICAL SUCCESS METRIC: 100% Reference URL Coverage - No Exceptions**

## Contributing

When contributing to the verification process using MCP tools:

1. **Reference URLs MANDATORY**: EVERY feature MUST have a reference URL - count them to verify 100% coverage
2. **URL Validation First**: ALWAYS use MCP `web_search` to validate reference URLs before content analysis
3. **Add Missing References**: Use web search to find and add reference URLs for ANY features missing them
4. **Review LLM Results**: Manually verify against MCP-extracted web content before updating data
5. **Document Changes**: Include reference URLs, MCP validation results, and reasoning for updates
6. **Batch URL Fixes**: Use MCP `codebase_search` and `grep` to find patterns across providers
7. **Test Thoroughly**: Use MCP `read_lints` to ensure changes don't break existing functionality
8. **Monitor Impact**: Track how updates affect user experience

**🚨 MANDATORY MCP Tool Workflow:**

```typescript
// 1. COUNT FEATURES - Ensure 100% reference coverage
const featureCount = Object.keys(provider.features).length;
const referenceCount = Object.values(provider.features).filter(
  (f) => f.reference
).length;
if (featureCount !== referenceCount) {
  throw new Error(
    `Missing references: ${featureCount - referenceCount} features need reference URLs`
  );
}

// 2. Validate & Extract Content
const content = await web_search({ search_term: referenceUrl });

// 3. Add Missing References
for (const [featureName, feature] of Object.entries(provider.features)) {
  if (!feature.reference) {
    const referenceUrl = await findOfficialDocumentation(
      providerName,
      featureName
    );
    feature.reference = referenceUrl;
  }
}

// 4. Apply Updates
await search_replace({ file_path, old_string, new_string });

// 5. Verify Changes
await read_lints({ paths: [file_path] });
```

**⚠️ VERIFICATION FAILURE = Missing Reference URLs**

## Lessons Learned

### Case Study: Reflag URL Issue (October 2025)

**Problem**: Reference URLs pointed to `https://reflag.com/docs/flags` (broken)
**Root Cause**: URLs not validated before content analysis
**Solution**: Updated to correct URLs at `https://docs.reflag.com`
**Prevention**: Mandatory URL validation as first step in verification workflow

### Case Study: Reflag Self-Hosted Inaccuracy (October 2025)

**Problem**: Feature marked as `"strong"` - "Self-hosted option available" when Reflag is cloud-only
**Root Cause**: Insufficient feature-specific verification - relied on assumptions rather than targeted searches
**Discovery**: Later web search revealed "Reflag does not appear to offer a self-hosted option"
**Solution**: Changed status to `"none"` - "No self-hosted option available - cloud-only service"
**Prevention**: MANDATORY feature-specific web searches for every claim, especially "strong" status features

### Case Study: LaunchDarkly Reference URL Oversight (October 2025)

**Problem**: Performed comprehensive verification but failed to add reference URLs to 33 out of 34 features
**Root Cause**: Incomplete process following - did research but didn't implement reference URL additions
**Discovery**: User pointed out that instructions explicitly require adding reference URLs for all features
**Solution**: Added reference URLs to all 34 features with proper documentation links
**Prevention**: MANDATORY reference URL checklist and counting verification - 100% coverage required

**Key Takeaway**: URL validation using MCP tools is not optional - it's the foundation of reliable verification. **Feature-specific verification AND reference URL addition are equally critical - never assume, always verify AND document with reference URLs.**

**MCP Implementation Benefits:**

- **No Dependencies**: No need to install axios, cheerio, or other HTTP libraries
- **Built-in Error Handling**: Automatic timeout, SSL, and redirect handling
- **Consistent Interface**: Same tools used across all verification processes
- **Integrated Workflow**: URL validation, content extraction, file updates, and linting all use MCP tools

This MCP-powered verification process ensures our comparison platform maintains high data accuracy while scaling across hundreds of provider features efficiently.

**🚨 CRITICAL REQUIREMENTS - NEVER SKIP:**

1. **URL validation using MCP web_search is absolutely critical**
2. **100% reference URL coverage is mandatory - every feature needs a reference**
3. **Count features vs references to verify complete coverage**
4. **Add reference URLs for ANY features missing them**

**Verification is NOT complete until EVERY feature has a reference URL!**
