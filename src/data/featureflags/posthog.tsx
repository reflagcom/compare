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

		reference: "https://posthog.com/pricing",
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support", reference: "https://posthog.com/pricing" },
		multivariateFlags: {

			status: "strong",

			details: "Multivariate flags",

			reference: "https://posthog.com/pricing",
		},
		jsonFlags: {

			status: "strong",

			details: "JSON payloads",

			reference: "https://posthog.com/pricing",
		},
		flagDependencies: {

			status: "partial",

			details: "Via property filters",

			reference: "https://posthog.com/pricing",
		},
		scheduledRollouts: {

			status: "partial",

			details: "Manual scheduling",

			reference: "https://posthog.com/pricing",
		},
		userTargeting: {

			status: "strong",

			details: "Person & group targeting",

			reference: "https://posthog.com/pricing",
		},
		percentageRollouts: {

			status: "strong",

			details: "Percentage-based rollouts",

			reference: "https://posthog.com/pricing",
		},
		customSegments: {

			status: "strong",

			details: "Cohorts & property filters",

			reference: "https://posthog.com/pricing",
		},
		geoTargeting: {

			status: "strong",

			details: "GeoIP person properties",

			reference: "https://posthog.com/pricing",
		},
		contextualTargeting: {

			status: "strong",

			details: "Custom properties",

			reference: "https://posthog.com/pricing",
		},
		abTesting: {

			status: "strong",

			details: "Native experimentation platform",

			reference: "https://posthog.com/pricing",
		},
		multivariateExperiments: {

			status: "strong",

			details: "Multi-variant experiments",

			reference: "https://posthog.com/pricing",
		},
		statisticalAnalysis: {

			status: "strong",

			details: "Bayesian & Frequentist stats",

			reference: "https://posthog.com/pricing",
		},
		metricsTracking: {

			status: "strong",

			details: "Full product analytics built-in",

			reference: "https://posthog.com/pricing",
		},
		experimentGoals: {

			status: "strong",

			details: "Primary & secondary metrics",

			reference: "https://posthog.com/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "15+ languages (JS, Python, Go, PHP, Ruby, etc.)",

			reference: "https://posthog.com/docs",
		},
		localEvaluation: {

			status: "strong",

			details: "Local evaluation mode",

			reference: "https://posthog.com/pricing",
		},
		typeSafety: {

			status: "strong",

			details: "TypeScript support",

			reference: "https://posthog.com/pricing",
		},
		documentation: {

			status: "strong",

			details: "Great docs & tutorials",

			reference: "https://posthog.com/docs",
		},
		apiQuality: {

			status: "strong",

			details: "REST API + client SDKs",

			reference: "https://posthog.com/docs",
		},
		rbac: {

			status: "strong",

			details: "Organizations & permissions",

			reference: "https://posthog.com/pricing",
		},
		auditLogs: {

			status: "strong",

			details: "Activity log",

			reference: "https://posthog.com/pricing",
		},
		environments: {

			status: "strong",

			details: "Multiple projects",

			reference: "https://posthog.com/pricing",
		},
		approvalWorkflows: {

			status: "none",

			details: "Not currently available",

			reference: "https://posthog.com/pricing",
		},
		compliance: {

			status: "strong",

			details: "SOC 2, GDPR-compliant",

			reference: "https://posthog.com/privacy",
		},
		freeTier: {

			status: "strong",

			details: "1M events/mo free",

			reference: "https://posthog.com/pricing",
		},
		paidPricing: {

			status: "strong",

			details: "Pay-as-you-go: $0.00005/request after 1M",

			reference: "https://posthog.com/pricing",
		},
		openSource: {

			status: "strong",

			details: "MIT license",

			reference: "https://posthog.com/pricing",
		},
		selfHosted: {

			status: "strong",

			details: "Docker, Kubernetes self-host",

			reference: "https://posthog.com/pricing",
		},
		cloudHosted: {

			status: "strong",

			details: "PostHog Cloud (US & EU)",

			reference: "https://posthog.com/pricing",
		},
		analytics: {

			status: "strong",

			details: "Built-in product analytics",

			reference: "https://posthog.com/pricing",
		},
		dataWarehouses: {

			status: "strong",

			details: "Snowflake, BigQuery export",

			reference: "https://posthog.com/pricing",
		},
		cicd: {

			status: "strong",

			details: "API-based, Terraform provider",

			reference: "https://posthog.com/pricing",
		},
		webhooks: {

			status: "strong",

			details: "Action webhooks",

			reference: "https://posthog.com/pricing",
		},
	},
};
