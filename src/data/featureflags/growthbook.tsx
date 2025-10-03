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

		reference: "https://www.growthbook.io/pricing",
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support", reference: "https://www.growthbook.io/pricing" },
		multivariateFlags: {

			status: "strong",

			details: "Multi-value features",

			reference: "https://www.growthbook.io/pricing",
		},
		jsonFlags: {

			status: "strong",

			details: "JSON feature values",

			reference: "https://www.growthbook.io/pricing",
		},
		flagDependencies: {

			status: "partial",

			details: "Via targeting conditions",

			reference: "https://www.growthbook.io/pricing",
		},
		scheduledRollouts: {

			status: "partial",

			details: "Manual scheduling",

			reference: "https://www.growthbook.io/pricing",
		},
		userTargeting: {

			status: "strong",

			details: "Attribute-based targeting",

			reference: "https://www.growthbook.io/pricing",
		},
		percentageRollouts: {

			status: "strong",

			details: "Gradual rollouts",

			reference: "https://www.growthbook.io/pricing",
		},
		customSegments: {

			status: "strong",

			details: "Saved audiences",

			reference: "https://www.growthbook.io/pricing",
		},
		geoTargeting: {

			status: "partial",

			details: "Via custom attributes",

			reference: "https://www.growthbook.io/pricing",
		},
		contextualTargeting: {

			status: "strong",

			details: "Custom attribute targeting",

			reference: "https://www.growthbook.io/pricing",
		},
		abTesting: {

			status: "strong",

			details: "Visual A/B test builder",

			reference: "https://www.growthbook.io/pricing",
		},
		multivariateExperiments: {

			status: "strong",

			details: "Multi-variant experiments",

			reference: "https://www.growthbook.io/pricing",
		},
		statisticalAnalysis: {

			status: "strong",

			details: "Bayesian & Frequentist engines",

			reference: "https://www.growthbook.io/pricing",
		},
		metricsTracking: {

			status: "strong",

			details: "Metrics from data warehouses",

			reference: "https://www.growthbook.io/pricing",
		},
		experimentGoals: {

			status: "strong",

			details: "Primary & secondary metrics",

			reference: "https://www.growthbook.io/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "15+ languages (JS, Python, Go, Ruby, PHP, etc.)",

			reference: "https://docs.growthbook.io",
		},
		localEvaluation: {

			status: "strong",

			details: "Edge-optimized evaluation",

			reference: "https://www.growthbook.io/pricing",
		},
		typeSafety: {

			status: "strong",

			details: "TypeScript support",

			reference: "https://www.growthbook.io/pricing",
		},
		documentation: {

			status: "strong",

			details: "Good documentation",

			reference: "https://docs.growthbook.io",
		},
		apiQuality: {

			status: "strong",

			details: "REST API + SDKs",

			reference: "https://docs.growthbook.io",
		},
		rbac: {

			status: "strong",

			details: "Role-based permissions (Pro)",

			reference: "https://www.growthbook.io/pricing",
		},
		auditLogs: {

			status: "strong",

			details: "Audit log",

			reference: "https://www.growthbook.io/pricing",
		},
		environments: {

			status: "strong",

			details: "Multiple environments",

			reference: "https://www.growthbook.io/pricing",
		},
		approvalWorkflows: {

			status: "partial",

			details: "Via external process",

			reference: "https://www.growthbook.io/pricing",
		},
		compliance: {

			status: "strong",

			details: "SOC 2, GDPR",

			reference: "https://www.growthbook.io/privacy",
		},
		freeTier: {

			status: "strong",

			details: "Unlimited (self-hosted), Cloud free tier",

			reference: "https://www.growthbook.io/pricing",
		},
		paidPricing: {

			status: "strong",

			details: "$20/seat/mo Pro, custom Enterprise",

			reference: "https://www.growthbook.io/pricing",
		},
		openSource: {

			status: "strong",

			details: "MIT license",

			reference: "https://www.growthbook.io/pricing",
		},
		selfHosted: {

			status: "strong",

			details: "Docker self-host",

			reference: "https://www.growthbook.io/pricing",
		},
		cloudHosted: {

			status: "strong",

			details: "Managed cloud",

			reference: "https://www.growthbook.io/pricing",
		},
		analytics: {

			status: "strong",

			details: "Connects to data warehouses",

			reference: "https://www.growthbook.io/pricing",
		},
		dataWarehouses: {

			status: "strong",

			details: "Snowflake, BigQuery, Redshift, Mixpanel, GA",

			reference: "https://www.growthbook.io/pricing",
		},
		cicd: {

			status: "strong",

			details: "API-based automation",

			reference: "https://www.growthbook.io/pricing",
		},
		webhooks: {

			status: "strong",

			details: "Feature change webhooks",

			reference: "https://www.growthbook.io/pricing",
		},
	},
};
