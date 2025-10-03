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

		details: "Enterprise-grade feature management platform with advanced targeting",

		reference: "https://launchdarkly.com/pricing",
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support", reference: "https://launchdarkly.com/pricing" },
		multivariateFlags: {

			status: "strong",

			details: "String, number, JSON variants",

			reference: "https://launchdarkly.com/pricing",
		},
		jsonFlags: {

			status: "strong",

			details: "Complex JSON configurations",

			reference: "https://launchdarkly.com/pricing",
		},
		flagDependencies: {

			status: "strong",

			details: "Prerequisites and dependencies",

			reference: "https://launchdarkly.com/pricing",
		},
		scheduledRollouts: {

			status: "strong",

			details: "Time-based rollout schedules",

			reference: "https://launchdarkly.com/pricing",
		},
		userTargeting: {

			status: "strong",

			details: "Individual user & segment targeting",

			reference: "https://launchdarkly.com/pricing",
		},
		percentageRollouts: {

			status: "strong",

			details: "Gradual rollouts with targeting",

			reference: "https://launchdarkly.com/pricing",
		},
		customSegments: {

			status: "strong",

			details: "Advanced segment builder with rules",

			reference: "https://launchdarkly.com/pricing",
		},
		geoTargeting: {

			status: "strong",

			details: "Country, region, city targeting",

			reference: "https://launchdarkly.com/pricing",
		},
		contextualTargeting: {

			status: "strong",

			details: "Custom context attributes",

			reference: "https://launchdarkly.com/pricing",
		},
		abTesting: {

			status: "strong",

			details: "Built-in experimentation platform",

			reference: "https://launchdarkly.com/pricing",
		},
		multivariateExperiments: {

			status: "strong",

			details: "Multi-armed bandit testing",

			reference: "https://launchdarkly.com/pricing",
		},
		statisticalAnalysis: {

			status: "strong",

			details: "Bayesian statistics engine",

			reference: "https://launchdarkly.com/pricing",
		},
		metricsTracking: { status: "strong", details: "Custom metrics & events", reference: "https://launchdarkly.com/pricing" },
		experimentGoals: {

			status: "strong",

			details: "Primary & secondary goals",

			reference: "https://launchdarkly.com/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "25+ languages (JS, Python, Go, Java, .NET, etc.)",

			reference: "https://docs.launchdarkly.com",
		},
		localEvaluation: {

			status: "strong",

			details: "Edge evaluation with streaming updates",

			reference: "https://launchdarkly.com/pricing",
		},
		typeSafety: { status: "strong", details: "TypeScript, strongly typed", reference: "https://launchdarkly.com/pricing" },
		documentation: { status: "strong", details: "Comprehensive docs", reference: "https://docs.launchdarkly.com" },
		apiQuality: {

			status: "strong",

			details: "REST API + GraphQL + SDKs",

			reference: "https://docs.launchdarkly.com",
		},
		rbac: {

			status: "strong",

			details: "Custom roles & permissions",

			reference: "https://launchdarkly.com/pricing",
		},
		auditLogs: {

			status: "strong",

			details: "Complete audit trail",

			reference: "https://launchdarkly.com/pricing",
		},
		environments: {

			status: "strong",

			details: "Unlimited environments",

			reference: "https://launchdarkly.com/pricing",
		},
		approvalWorkflows: {

			status: "strong",

			details: "Change requests & approvals",

			reference: "https://launchdarkly.com/pricing",
		},
		compliance: {

			status: "strong",

			details: "SOC 2, GDPR, HIPAA, FedRAMP",

			reference: "https://launchdarkly.com/policies/privacy",
		},
		freeTier: {

			status: "strong",

			details: "Developer: Free, unlimited seats, 5 service connections, 1K client MAUs",

			reference: "https://launchdarkly.com/pricing",
		},
		paidPricing: {

			status: "strong",

			details: "Foundation: $12/service connection + $10/1K client MAU",

			reference: "https://launchdarkly.com/pricing",
		},
		openSource: { status: "none", details: "Proprietary", reference: "https://launchdarkly.com/pricing" },
		selfHosted: {

			status: "partial",

			details: "Relay Proxy for on-prem",

			reference: "https://launchdarkly.com/pricing",
		},
		cloudHosted: { status: "strong", details: "Fully managed SaaS", reference: "https://launchdarkly.com/pricing" },
		analytics: {

			status: "strong",

			details: "DataDog, New Relic, Segment, mParticle",

			reference: "https://launchdarkly.com/pricing",
		},
		dataWarehouses: {

			status: "strong",

			details: "Snowflake, BigQuery data export",

			reference: "https://launchdarkly.com/pricing",
		},
		cicd: {

			status: "strong",

			details: "GitHub Actions, GitLab CI, Terraform",

			reference: "https://launchdarkly.com/pricing",
		},
		webhooks: { status: "strong", details: "Flag change webhooks", reference: "https://launchdarkly.com/pricing" },
	},
};
