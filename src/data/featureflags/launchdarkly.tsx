import type { Provider } from "../../types/comparison";

function LaunchDarklyLogo() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LaunchDarkly</title>
      <rect width="24" height="24" rx="4" fill="#405BFF" />
      <path
        d="M7 8L12 5L17 8V16L12 19L7 16V8Z"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M12 5V12" stroke="white" strokeWidth="1.5" />
      <path d="M12 12L17 8" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

export const launchdarkly: Provider = {
  name: "LaunchDarkly",
  logo: <LaunchDarklyLogo />,
  website: "https://launchdarkly.com",
  tagline: {
    status: "strong",
    details:
      "Enterprise-grade feature management platform with advanced targeting",
    reference: "https://launchdarkly.com/feature-management",
  },
  features: {
    booleanFlags: {
      status: "strong",
      details: "Full support",
      reference: "https://docs.launchdarkly.com/home/flags",
    },
    multivariateFlags: {
      status: "strong",
      details: "String, number, JSON variants",
      reference: "https://docs.launchdarkly.com/home/flags/variations",
    },
    jsonFlags: {
      status: "strong",
      details: "Complex JSON configurations",
      reference: "https://docs.launchdarkly.com/home/flags/variations",
    },
    flagDependencies: {
      status: "strong",
      details: "Prerequisites and dependencies",
      reference: "https://docs.launchdarkly.com/home/flags/prerequisites",
    },
    scheduledRollouts: {
      status: "strong",
      details: "Time-based rollout schedules",
      reference: "https://docs.launchdarkly.com/home/flags/scheduled-changes",
    },
    userTargeting: {
      status: "strong",
      details: "Individual user & segment targeting",
      reference: "https://docs.launchdarkly.com/home/flags/targeting",
    },
    percentageRollouts: {
      status: "strong",
      details: "Gradual rollouts with targeting",
      reference: "https://docs.launchdarkly.com/home/flags/rollouts",
    },
    customSegments: {
      status: "strong",
      details: "Advanced segment builder with rules",
      reference: "https://docs.launchdarkly.com/home/contexts/segments",
    },
    geoTargeting: {
      status: "strong",
      details: "Country, region, city targeting",
      reference:
        "https://docs.launchdarkly.com/home/contexts/built-in-attributes",
    },
    contextualTargeting: {
      status: "strong",
      details: "Custom context attributes",
      reference: "https://docs.launchdarkly.com/home/contexts",
    },
    abTesting: {
      status: "strong",
      details: "Built-in experimentation platform",
      reference: "https://docs.launchdarkly.com/home/experimentation",
    },
    multivariateExperiments: {
      status: "strong",
      details: "Multi-armed bandit testing",
      reference: "https://docs.launchdarkly.com/home/experimentation",
    },
    statisticalAnalysis: {
      status: "strong",
      details: "Bayesian statistics engine",
      reference:
        "https://docs.launchdarkly.com/home/experimentation/interpreting",
    },
    metricsTracking: {
      status: "strong",
      details: "Custom metrics & events",
      reference: "https://docs.launchdarkly.com/home/experimentation/metrics",
    },
    experimentGoals: {
      status: "strong",
      details: "Primary & secondary goals",
      reference: "https://docs.launchdarkly.com/home/experimentation/metrics",
    },
    sdkLanguages: {
      status: "strong",
      details: "25+ languages (JS, Python, Go, Java, .NET, etc.)",
      reference: "https://docs.launchdarkly.com/sdk",
    },
    localEvaluation: {
      status: "strong",
      details: "Edge evaluation with streaming updates",
      reference:
        "https://docs.launchdarkly.com/sdk/concepts/client-side-server-side",
    },
    typeSafety: {
      status: "strong",
      details: "TypeScript, strongly typed",
      reference: "https://docs.launchdarkly.com/sdk/client-side/javascript",
    },
    documentation: {
      status: "strong",
      details: "Comprehensive docs",
      reference: "https://docs.launchdarkly.com",
    },
    apiQuality: {
      status: "strong",
      details: "REST API + GraphQL + SDKs",
      reference: "https://apidocs.launchdarkly.com",
    },
    rbac: {
      status: "strong",
      details: "Custom roles & permissions",
      reference:
        "https://docs.launchdarkly.com/home/members/role-based-access-control",
    },
    auditLogs: {
      status: "strong",
      details: "Complete audit trail",
      reference: "https://docs.launchdarkly.com/home/organize/audit-log",
    },
    environments: {
      status: "strong",
      details: "Unlimited environments",
      reference: "https://docs.launchdarkly.com/home/organize/environments",
    },
    approvalWorkflows: {
      status: "strong",
      details: "Change requests & approvals",
      reference:
        "https://docs.launchdarkly.com/home/feature-workflows/approvals",
    },
    compliance: {
      status: "strong",
      details: "SOC 2, GDPR, HIPAA, FedRAMP",
      reference: "https://launchdarkly.com/trust",
    },
    freeTier: {
      status: "strong",
      details:
        "Developer: Free, unlimited seats, 5 service connections, 1K client MAUs",
      reference: "https://launchdarkly.com/pricing",
    },
    paidPricing: {
      status: "strong",
      details: "Foundation: $12/service connection + $10/1K client MAU",
      reference: "https://launchdarkly.com/pricing",
    },
    openSource: {
      status: "partial",
      details: "Open source SDKs, proprietary platform",
      reference: "https://github.com/launchdarkly",
    },
    selfHosted: {
      status: "partial",
      details: "Relay Proxy for on-prem",
      reference: "https://docs.launchdarkly.com/home/relay-proxy",
    },
    cloudHosted: {
      status: "strong",
      details: "Fully managed SaaS",
      reference: "https://launchdarkly.com",
    },
    analytics: {
      status: "strong",
      details: "DataDog, New Relic, Segment, mParticle",
      reference: "https://docs.launchdarkly.com/integrations",
    },
    dataWarehouses: {
      status: "strong",
      details: "Snowflake, BigQuery data export",
      reference: "https://docs.launchdarkly.com/home/data-export",
    },
    cicd: {
      status: "strong",
      details: "GitHub Actions, GitLab CI, Terraform",
      reference: "https://docs.launchdarkly.com/integrations/terraform",
    },
    webhooks: {
      status: "strong",
      details: "Flag change webhooks",
      reference: "https://docs.launchdarkly.com/home/connecting/webhooks",
    },
  },
};
