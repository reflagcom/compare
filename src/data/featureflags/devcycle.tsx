import type { Provider } from "../../types/comparison";

function DevCycleLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>DevCycle</title>
			<rect width="24" height="24" rx="4" fill="#FF6B00" />
			<circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1.5" />
			<path
				d="M12 9V15M9 12H15"
				stroke="white"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export const devcycle: Provider = {
	name: "DevCycle",
	logo: <DevCycleLogo />,
	website: "https://devcycle.com",
	tagline: {

		status: "strong",

		details: "Developer-first feature flag management platform",

		reference: "https://devcycle.com/pricing",
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support", reference: "https://devcycle.com/pricing" },
		multivariateFlags: {

			status: "strong",

			details: "Multi-value variables",

			reference: "https://devcycle.com/pricing",
		},
		jsonFlags: {

			status: "strong",

			details: "JSON variables",

			reference: "https://devcycle.com/pricing",
		},
		flagDependencies: {

			status: "partial",

			details: "Via targeting rules",

			reference: "https://devcycle.com/pricing",
		},
		scheduledRollouts: {

			status: "strong",

			details: "Scheduled changes",

			reference: "https://devcycle.com/pricing",
		},
		userTargeting: {

			status: "strong",

			details: "User & custom targeting",

			reference: "https://devcycle.com/pricing",
		},
		percentageRollouts: {

			status: "strong",

			details: "Percentage-based distribution",

			reference: "https://devcycle.com/pricing",
		},
		customSegments: {

			status: "strong",

			details: "Custom audiences",

			reference: "https://devcycle.com/pricing",
		},
		geoTargeting: {

			status: "partial",

			details: "Via custom properties",

			reference: "https://devcycle.com/pricing",
		},
		contextualTargeting: {

			status: "strong",

			details: "Custom property targeting",

			reference: "https://devcycle.com/pricing",
		},
		abTesting: {

			status: "strong",

			details: "Built-in experimentation",

			reference: "https://devcycle.com/pricing",
		},
		multivariateExperiments: {

			status: "strong",

			details: "Multi-variant tests",

			reference: "https://devcycle.com/pricing",
		},
		statisticalAnalysis: {

			status: "partial",

			details: "Basic statistics",

			reference: "https://devcycle.com/pricing",
		},
		metricsTracking: {

			status: "strong",

			details: "Event tracking",

			reference: "https://devcycle.com/pricing",
		},
		experimentGoals: {

			status: "strong",

			details: "Goal metrics",

			reference: "https://devcycle.com/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "12+ languages (JS, React, Node, Python, Go, etc.)",

			reference: "https://docs.devcycle.com",
		},
		localEvaluation: {

			status: "strong",

			details: "Local bucketing",

			reference: "https://devcycle.com/pricing",
		},
		typeSafety: {

			status: "strong",

			details: "Type-safe SDKs",

			reference: "https://devcycle.com/pricing",
		},
		documentation: {

			status: "strong",

			details: "Developer-focused docs",

			reference: "https://docs.devcycle.com",
		},
		apiQuality: {

			status: "strong",

			details: "Management API + SDKs",

			reference: "https://docs.devcycle.com",
		},
		rbac: {

			status: "strong",

			details: "Team permissions",

			reference: "https://devcycle.com/pricing",
		},
		auditLogs: {

			status: "strong",

			details: "Activity logs",

			reference: "https://devcycle.com/pricing",
		},
		environments: {

			status: "strong",

			details: "Multiple environments",

			reference: "https://devcycle.com/pricing",
		},
		approvalWorkflows: {

			status: "partial",

			details: "Review process",

			reference: "https://devcycle.com/pricing",
		},
		compliance: {

			status: "strong",

			details: "SOC 2, GDPR",

			reference: "https://devcycle.com/privacy-policy",
		},
		freeTier: {

			status: "strong",

			details: "Free: 1K client MAUs",

			reference: "https://devcycle.com/pricing",
		},
		paidPricing: {

			status: "strong",

			details: "Developer: $10/mo (annual), Business: $500/mo (annual)",

			reference: "https://devcycle.com/pricing",
		},
		openSource: {

			status: "partial",

			details: "Open source SDKs",

			reference: "https://devcycle.com/pricing",
		},
		selfHosted: {

			status: "none",

			details: "Cloud-only",

			reference: "https://devcycle.com/pricing",
		},
		cloudHosted: {

			status: "strong",

			details: "Managed SaaS",

			reference: "https://devcycle.com/pricing",
		},
		analytics: {

			status: "strong",

			details: "Analytics integrations",

			reference: "https://devcycle.com/pricing",
		},
		dataWarehouses: {

			status: "partial",

			details: "Data export",

			reference: "https://devcycle.com/pricing",
		},
		cicd: {

			status: "strong",

			details: "GitHub integration, API",

			reference: "https://devcycle.com/pricing",
		},
		webhooks: {

			status: "strong",

			details: "Event webhooks",

			reference: "https://devcycle.com/pricing",
		},
	},
};
