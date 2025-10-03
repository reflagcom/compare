import type { Provider } from "../../types/comparison";

function ReflagLogo() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Reflag</title>
      <rect width="256" height="256" fill="#09090B" />
      <path
        d="M181.333 64C187.224 64 192 68.7756 192 74.6667V181.333C192 187.224 187.224 192 181.333 192H74.6667C68.7756 192 64 187.224 64 181.333V74.6667C64 68.7756 68.7756 64 74.6667 64H181.333ZM74.6667 74.6667V181.333L181.333 74.6667H74.6667Z"
        fill="white"
      />
    </svg>
  );
}

export const reflag: Provider = {
  name: "Reflag",
  logo: <ReflagLogo />,
  website: "https://reflag.com",
  tagline: {
    status: "strong",
    details:
      "Comprehensive feature management platform tailored for modern SaaS companies, particularly TypeScript users",
    reference: "https://docs.reflag.com",
  },
  features: {
    booleanFlags: {
      status: "strong",
      details:
        "Full boolean flag support with TypeScript type safety and auto-generated interfaces",
      reference: "https://docs.reflag.com",
    },
    multivariateFlags: {
      status: "strong",
      details:
        "Multi-value flags with variants and auto-generated TypeScript types",
      reference: "https://docs.reflag.com",
    },
    jsonFlags: {
      status: "strong",
      details:
        "JSON configuration support with schema validation and TypeScript interface generation",
      reference: "https://docs.reflag.com",
    },
    flagDependencies: {
      status: "strong",
      details:
        "Flag prerequisites & dependencies with AI-assisted rule management",
      reference: "https://docs.reflag.com",
    },
    scheduledRollouts: {
      status: "unknown",
      details: "Scheduled rollouts feature not documented in available sources",
      reference: "https://docs.reflag.com",
    },
    userTargeting: {
      status: "strong",
      details:
        "User & attribute targeting with custom properties and company-level targeting",
      reference:
        "https://reflag.com/changelog/introducing-feature-flags-for-b2b",
    },
    percentageRollouts: {
      status: "strong",
      details: "Gradual percentage-based rollouts with release stages",
      reference:
        "https://reflag.com/changelog/introducing-feature-flags-for-b2b",
    },
    customSegments: {
      status: "strong",
      details: "Company-level targeting and user segmentation for B2B SaaS",
      reference:
        "https://reflag.com/changelog/introducing-feature-flags-for-b2b",
    },
    geoTargeting: {
      status: "unknown",
      details: "Geographic targeting capabilities not clearly documented",
      reference: "https://reflag.com",
    },
    contextualTargeting: {
      status: "strong",
      details:
        "Rich context targeting with TypeScript type safety and custom attributes",
      reference: "https://reflag.com",
    },
    abTesting: {
      status: "unknown",
      details: "A/B testing support not documented in available sources",
      reference: "https://docs.reflag.com",
    },
    multivariateExperiments: {
      status: "partial",
      details: "Basic experimentation capabilities with feedback collection",
      reference: "https://reflag.com/changelog/adding-global-feedback-page",
    },
    statisticalAnalysis: {
      status: "partial",
      details: "Adoption metrics and basic analytics",
      reference:
        "https://reflag.com/changelog/introducing-feature-flags-for-b2b",
    },
    metricsTracking: {
      status: "strong",
      details: "Adoption metrics and feature usage tracking",
      reference:
        "https://reflag.com/changelog/introducing-feature-flags-for-b2b",
    },
    experimentGoals: {
      status: "partial",
      details: "Basic goal tracking through feedback collection",
      reference: "https://reflag.com/changelog/adding-global-feedback-page",
    },
    sdkLanguages: {
      status: "strong",
      details:
        "TypeScript-first with React, Vue.js, Next.js, Node.js support and CLI integration",
      reference: "https://docs.reflag.com/api/cli",
    },
    localEvaluation: {
      status: "strong",
      details: "Agent-ready architecture with background processing",
      reference: "https://reflag.com",
    },
    typeSafety: {
      status: "strong",
      details:
        "Strong type-safety with CLI ensuring type safety for feature flag management",
      reference: "https://reflag.com",
    },
    documentation: {
      status: "strong",
      details:
        "Comprehensive documentation with CLI reference and integration guides",
      reference: "https://docs.reflag.com",
    },
    apiQuality: {
      status: "strong",
      details: "CLI-first approach with MCP integration and API support",
      reference: "https://docs.reflag.com/api/cli",
    },
    rbac: {
      status: "strong",
      details: "User permissions and role-based access control",
      reference: "https://reflag.com/pricing",
    },
    auditLogs: {
      status: "strong",
      details: "Event log for feature flag activities and changes",
      reference: "https://reflag.com/pricing",
    },
    environments: {
      status: "strong",
      details: "Multiple environments support across all plans",
      reference: "https://reflag.com/pricing",
    },
    approvalWorkflows: {
      status: "partial",
      details: "Basic workflow support with Linear integration",
      reference: "https://reflag.com",
    },
    compliance: {
      status: "partial",
      details: "SOC2 compliance pending, EU data residency options available",
      reference: "https://reflag.com/pricing",
    },
    freeTier: {
      status: "strong",
      details: "Free tier with unlimited seats and core features",
      reference: "https://reflag.com/pricing",
    },
    paidPricing: {
      status: "strong",
      details: "Transparent pricing with Pro and Enterprise tiers",
      reference: "https://reflag.com/pricing",
    },
    openSource: {
      status: "none",
      details: "Proprietary platform with closed-source architecture",
      reference: "https://reflag.com",
    },
    selfHosted: {
      status: "none",
      details: "No self-hosted option available - cloud-only service",
      reference: "https://docs.reflag.com",
    },
    cloudHosted: {
      status: "strong",
      details: "Fully managed cloud service with EU data residency options",
      reference: "https://reflag.com/pricing",
    },
    analytics: {
      status: "strong",
      details: "Slack integration and data export to analytics platforms",
      reference: "https://reflag.com/integrations",
    },
    dataWarehouses: {
      status: "strong",
      details: "Feature data synced to data warehouse and CRM systems",
      reference: "https://reflag.com/integrations",
    },
    cicd: {
      status: "strong",
      details: "CLI integration for CI/CD pipelines and automated deployments",
      reference: "https://docs.reflag.com/api/cli",
    },
    webhooks: {
      status: "partial",
      details: "Integration capabilities with Slack and other tools",
      reference: "https://reflag.com/integrations",
    },
  },
};
