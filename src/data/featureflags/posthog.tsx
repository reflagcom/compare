import type { Provider } from "../../types/comparison";

function PostHogLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>PostHog</title>
			<rect width="24" height="24" rx="4" fill="#F9BD2B" />
			<path
				d="M8 16L10 12L12 14L14 10L16 12"
				stroke="black"
				strokeWidth="1.5"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export const posthog: Provider = {
	name: "PostHog",
	logo: <PostHogLogo />,
	website: "https://posthog.com",
	tagline: {
		status: "strong",
		details: "All-in-one product OS with feature flags built-in",
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support" },
		multivariateFlags: {
			status: "strong",
			details: "Multivariate flags",
		},
		jsonFlags: {
			status: "strong",
			details: "JSON payloads",
		},
		flagDependencies: {
			status: "partial",
			details: "Via property filters",
		},
		scheduledRollouts: {
			status: "partial",
			details: "Manual scheduling",
		},
		userTargeting: {
			status: "strong",
			details: "Person & group targeting",
		},
		percentageRollouts: {
			status: "strong",
			details: "Percentage-based rollouts",
		},
		customSegments: {
			status: "strong",
			details: "Cohorts & property filters",
		},
		geoTargeting: {
			status: "strong",
			details: "GeoIP person properties",
		},
		contextualTargeting: {
			status: "strong",
			details: "Custom properties",
		},
		abTesting: {
			status: "strong",
			details: "Native experimentation platform",
		},
		multivariateExperiments: {
			status: "strong",
			details: "Multi-variant experiments",
		},
		statisticalAnalysis: {
			status: "strong",
			details: "Bayesian & Frequentist stats",
		},
		metricsTracking: {
			status: "strong",
			details: "Full product analytics built-in",
		},
		experimentGoals: {
			status: "strong",
			details: "Primary & secondary metrics",
		},
		sdkLanguages: {
			status: "strong",
			details: "15+ languages (JS, Python, Go, PHP, Ruby, etc.)",
		},
		localEvaluation: {
			status: "strong",
			details: "Local evaluation mode",
		},
		typeSafety: {
			status: "strong",
			details: "TypeScript support",
		},
		documentation: {
			status: "strong",
			details: "Great docs & tutorials",
		},
		apiQuality: {
			status: "strong",
			details: "REST API + client SDKs",
		},
		rbac: {
			status: "strong",
			details: "Organizations & permissions",
		},
		auditLogs: {
			status: "strong",
			details: "Activity log",
		},
		environments: {
			status: "strong",
			details: "Multiple projects",
		},
		approvalWorkflows: {
			status: "none",
			details: "Not currently available",
		},
		compliance: {
			status: "strong",
			details: "SOC 2, GDPR-compliant",
		},
		freeTier: {
			status: "strong",
			details: "1M events/mo free",
		},
		paidPricing: {
			status: "strong",
			details: "Pay-as-you-go: $0.00005/request after 1M",
		},
		openSource: {
			status: "strong",
			details: "MIT license",
		},
		selfHosted: {
			status: "strong",
			details: "Docker, Kubernetes self-host",
		},
		cloudHosted: {
			status: "strong",
			details: "PostHog Cloud (US & EU)",
		},
		analytics: {
			status: "strong",
			details: "Built-in product analytics",
		},
		dataWarehouses: {
			status: "strong",
			details: "Snowflake, BigQuery export",
		},
		cicd: {
			status: "strong",
			details: "API-based, Terraform provider",
		},
		webhooks: {
			status: "strong",
			details: "Action webhooks",
		},
	},
};
