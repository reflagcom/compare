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
		details: "Modern feature flag platform built for developer experience",
		reference: "https://reflag.com",
	},
	features: {
		booleanFlags: {
			status: "strong",
			details: "Full support",
			reference: "https://reflag.com/docs/flags",
		},
		multivariateFlags: {
			status: "strong",
			details: "Multi-value flags with variants",
			reference: "https://reflag.com/docs/flags",
		},
		jsonFlags: {
			status: "strong",
			details: "JSON configuration support",
			reference: "https://reflag.com/docs/flags",
		},
		flagDependencies: {
			status: "strong",
			details: "Flag prerequisites & dependencies",
			reference: "https://reflag.com/docs/flags",
		},
		scheduledRollouts: {
			status: "strong",
			details: "Time-based scheduled rollouts",
			reference: "https://reflag.com/docs/rollouts",
		},
		userTargeting: {

			status: "strong",

			details: "User & attribute targeting",

			reference: "https://reflag.com/pricing",
		},
		percentageRollouts: {

			status: "strong",

			details: "Gradual percentage-based rollouts",

			reference: "https://reflag.com/pricing",
		},
		customSegments: {

			status: "strong",

			details: "Advanced segment builder",

			reference: "https://reflag.com/pricing",
		},
		geoTargeting: {

			status: "strong",

			details: "Geographic targeting built-in",

			reference: "https://reflag.com/pricing",
		},
		contextualTargeting: {

			status: "strong",

			details: "Rich context targeting",

			reference: "https://reflag.com/pricing",
		},
		abTesting: {

			status: "strong",

			details: "Native A/B testing",

			reference: "https://reflag.com/pricing",
		},
		multivariateExperiments: {

			status: "strong",

			details: "Multi-variant experiments",

			reference: "https://reflag.com/pricing",
		},
		statisticalAnalysis: {

			status: "strong",

			details: "Built-in statistical analysis",

			reference: "https://reflag.com/pricing",
		},
		metricsTracking: {

			status: "strong",

			details: "Custom metrics & goals",

			reference: "https://reflag.com/pricing",
		},
		experimentGoals: {

			status: "strong",

			details: "Multiple goal tracking",

			reference: "https://reflag.com/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "JavaScript, TypeScript, React, Node.js, Python, Go (expanding)",

			reference: "https://reflag.com/docs",
		},
		localEvaluation: {

			status: "strong",

			details: "Edge-optimized local evaluation",

			reference: "https://reflag.com/pricing",
		},
		typeSafety: {

			status: "strong",

			details: "Full TypeScript support, auto-generated types",

			reference: "https://reflag.com/pricing",
		},
		documentation: {

			status: "strong",

			details: "Comprehensive docs with examples",

			reference: "https://reflag.com/docs",
		},
		apiQuality: {

			status: "strong",

			details: "Modern REST API + GraphQL + SDKs",

			reference: "https://reflag.com/docs",
		},
		rbac: {

			status: "strong",

			details: "Granular role-based permissions",

			reference: "https://reflag.com/pricing",
		},
		auditLogs: {

			status: "strong",

			details: "Complete audit trail",

			reference: "https://reflag.com/pricing",
		},
		environments: {

			status: "strong",

			details: "Unlimited environments",

			reference: "https://reflag.com/pricing",
		},
		approvalWorkflows: {

			status: "strong",

			details: "Multi-stage approval workflows",

			reference: "https://reflag.com/pricing",
		},
		compliance: {

			status: "strong",

			details: "SOC 2, GDPR, CCPA compliant",

			reference: "https://reflag.com/privacy",
		},
		freeTier: {

			status: "strong",

			details: "Generous free tier for developers",

			reference: "https://reflag.com/pricing",
		},
		paidPricing: {

			status: "strong",

			details: "Competitive pricing, transparent tiers",

			reference: "https://reflag.com/pricing",
		},
		openSource: {

			status: "partial",

			details: "Open source SDKs",

			reference: "https://reflag.com/pricing",
		},
		selfHosted: {

			status: "strong",

			details: "Self-hosted option available",

			reference: "https://reflag.com/pricing",
		},
		cloudHosted: {

			status: "strong",

			details: "Fully managed cloud",

			reference: "https://reflag.com/pricing",
		},
		analytics: {

			status: "strong",

			details: "Native integrations with major analytics platforms",

			reference: "https://reflag.com/pricing",
		},
		dataWarehouses: {

			status: "strong",

			details: "Direct data warehouse connections",

			reference: "https://reflag.com/pricing",
		},
		cicd: {

			status: "strong",

			details: "GitHub Actions, GitLab CI, API automation",

			reference: "https://reflag.com/pricing",
		},
		webhooks: {

			status: "strong",

			details: "Real-time webhooks for all events",

			reference: "https://reflag.com/pricing",
		},
	},
};
