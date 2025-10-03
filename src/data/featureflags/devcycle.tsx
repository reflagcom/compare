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
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support" },
		multivariateFlags: {
			status: "strong",
			details: "Multi-value variables",
		},
		jsonFlags: {
			status: "strong",
			details: "JSON variables",
		},
		flagDependencies: {
			status: "partial",
			details: "Via targeting rules",
		},
		scheduledRollouts: {
			status: "strong",
			details: "Scheduled changes",
		},
		userTargeting: {
			status: "strong",
			details: "User & custom targeting",
		},
		percentageRollouts: {
			status: "strong",
			details: "Percentage-based distribution",
		},
		customSegments: {
			status: "strong",
			details: "Custom audiences",
		},
		geoTargeting: {
			status: "partial",
			details: "Via custom properties",
		},
		contextualTargeting: {
			status: "strong",
			details: "Custom property targeting",
		},
		abTesting: {
			status: "strong",
			details: "Built-in experimentation",
		},
		multivariateExperiments: {
			status: "strong",
			details: "Multi-variant tests",
		},
		statisticalAnalysis: {
			status: "partial",
			details: "Basic statistics",
		},
		metricsTracking: {
			status: "strong",
			details: "Event tracking",
		},
		experimentGoals: {
			status: "strong",
			details: "Goal metrics",
		},
		sdkLanguages: {
			status: "strong",
			details: "12+ languages (JS, React, Node, Python, Go, etc.)",
		},
		localEvaluation: {
			status: "strong",
			details: "Local bucketing",
		},
		typeSafety: {
			status: "strong",
			details: "Type-safe SDKs",
		},
		documentation: {
			status: "strong",
			details: "Developer-focused docs",
		},
		apiQuality: {
			status: "strong",
			details: "Management API + SDKs",
		},
		rbac: {
			status: "strong",
			details: "Team permissions",
		},
		auditLogs: {
			status: "strong",
			details: "Activity logs",
		},
		environments: {
			status: "strong",
			details: "Multiple environments",
		},
		approvalWorkflows: {
			status: "partial",
			details: "Review process",
		},
		compliance: {
			status: "strong",
			details: "SOC 2, GDPR",
		},
		freeTier: {
			status: "strong",
			details: "Free: 1K client MAUs",
		},
		paidPricing: {
			status: "strong",
			details: "Developer: $10/mo (annual), Business: $500/mo (annual)",
		},
		openSource: {
			status: "partial",
			details: "Open source SDKs",
		},
		selfHosted: {
			status: "none",
			details: "Cloud-only",
		},
		cloudHosted: {
			status: "strong",
			details: "Managed SaaS",
		},
		analytics: {
			status: "strong",
			details: "Analytics integrations",
		},
		dataWarehouses: {
			status: "partial",
			details: "Data export",
		},
		cicd: {
			status: "strong",
			details: "GitHub integration, API",
		},
		webhooks: {
			status: "strong",
			details: "Event webhooks",
		},
	},
};
