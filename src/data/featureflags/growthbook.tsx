import type { Provider } from "../../types/comparison";

function GrowthBookLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>GrowthBook</title>
			<rect width="24" height="24" rx="4" fill="#6B46C1" />
			<path
				d="M8 9H16V11H8V9ZM8 13H14V15H8V13Z"
				fill="white"
				fillOpacity="0.9"
			/>
		</svg>
	);
}

export const growthbook: Provider = {
	name: "GrowthBook",
	logo: <GrowthBookLogo />,
	website: "https://www.growthbook.io",
	tagline: {
		status: "strong",
		details: "Open source feature flagging & A/B testing platform",
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support" },
		multivariateFlags: {
			status: "strong",
			details: "Multi-value features",
		},
		jsonFlags: {
			status: "strong",
			details: "JSON feature values",
		},
		flagDependencies: {
			status: "partial",
			details: "Via targeting conditions",
		},
		scheduledRollouts: {
			status: "partial",
			details: "Manual scheduling",
		},
		userTargeting: {
			status: "strong",
			details: "Attribute-based targeting",
		},
		percentageRollouts: {
			status: "strong",
			details: "Gradual rollouts",
		},
		customSegments: {
			status: "strong",
			details: "Saved audiences",
		},
		geoTargeting: {
			status: "partial",
			details: "Via custom attributes",
		},
		contextualTargeting: {
			status: "strong",
			details: "Custom attribute targeting",
		},
		abTesting: {
			status: "strong",
			details: "Visual A/B test builder",
		},
		multivariateExperiments: {
			status: "strong",
			details: "Multi-variant experiments",
		},
		statisticalAnalysis: {
			status: "strong",
			details: "Bayesian & Frequentist engines",
		},
		metricsTracking: {
			status: "strong",
			details: "Metrics from data warehouses",
		},
		experimentGoals: {
			status: "strong",
			details: "Primary & secondary metrics",
		},
		sdkLanguages: {
			status: "strong",
			details: "15+ languages (JS, Python, Go, Ruby, PHP, etc.)",
		},
		localEvaluation: {
			status: "strong",
			details: "Edge-optimized evaluation",
		},
		typeSafety: {
			status: "strong",
			details: "TypeScript support",
		},
		documentation: {
			status: "strong",
			details: "Good documentation",
		},
		apiQuality: {
			status: "strong",
			details: "REST API + SDKs",
		},
		rbac: {
			status: "strong",
			details: "Role-based permissions (Pro)",
		},
		auditLogs: {
			status: "strong",
			details: "Audit log",
		},
		environments: {
			status: "strong",
			details: "Multiple environments",
		},
		approvalWorkflows: {
			status: "partial",
			details: "Via external process",
		},
		compliance: {
			status: "strong",
			details: "SOC 2, GDPR",
		},
		freeTier: {
			status: "strong",
			details: "Unlimited (self-hosted), Cloud free tier",
		},
		paidPricing: {
			status: "strong",
			details: "$20/seat/mo Pro, custom Enterprise",
		},
		openSource: {
			status: "strong",
			details: "MIT license",
		},
		selfHosted: {
			status: "strong",
			details: "Docker self-host",
		},
		cloudHosted: {
			status: "strong",
			details: "Managed cloud",
		},
		analytics: {
			status: "strong",
			details: "Connects to data warehouses",
		},
		dataWarehouses: {
			status: "strong",
			details: "Snowflake, BigQuery, Redshift, Mixpanel, GA",
		},
		cicd: {
			status: "strong",
			details: "API-based automation",
		},
		webhooks: {
			status: "strong",
			details: "Feature change webhooks",
		},
	},
};
