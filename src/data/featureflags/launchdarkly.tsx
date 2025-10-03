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
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support" },
		multivariateFlags: {
			status: "strong",
			details: "String, number, JSON variants",
		},
		jsonFlags: {
			status: "strong",
			details: "Complex JSON configurations",
		},
		flagDependencies: {
			status: "strong",
			details: "Prerequisites and dependencies",
		},
		scheduledRollouts: {
			status: "strong",
			details: "Time-based rollout schedules",
		},
		userTargeting: {
			status: "strong",
			details: "Individual user & segment targeting",
		},
		percentageRollouts: {
			status: "strong",
			details: "Gradual rollouts with targeting",
		},
		customSegments: {
			status: "strong",
			details: "Advanced segment builder with rules",
		},
		geoTargeting: {
			status: "strong",
			details: "Country, region, city targeting",
		},
		contextualTargeting: {
			status: "strong",
			details: "Custom context attributes",
		},
		abTesting: {
			status: "strong",
			details: "Built-in experimentation platform",
		},
		multivariateExperiments: {
			status: "strong",
			details: "Multi-armed bandit testing",
		},
		statisticalAnalysis: {
			status: "strong",
			details: "Bayesian statistics engine",
		},
		metricsTracking: { status: "strong", details: "Custom metrics & events" },
		experimentGoals: {
			status: "strong",
			details: "Primary & secondary goals",
		},
		sdkLanguages: {
			status: "strong",
			details: "25+ languages (JS, Python, Go, Java, .NET, etc.)",
		},
		localEvaluation: {
			status: "strong",
			details: "Edge evaluation with streaming updates",
		},
		typeSafety: { status: "strong", details: "TypeScript, strongly typed" },
		documentation: { status: "strong", details: "Comprehensive docs" },
		apiQuality: {
			status: "strong",
			details: "REST API + GraphQL + SDKs",
		},
		rbac: {
			status: "strong",
			details: "Custom roles & permissions",
		},
		auditLogs: {
			status: "strong",
			details: "Complete audit trail",
		},
		environments: {
			status: "strong",
			details: "Unlimited environments",
		},
		approvalWorkflows: {
			status: "strong",
			details: "Change requests & approvals",
		},
		compliance: {
			status: "strong",
			details: "SOC 2, GDPR, HIPAA, FedRAMP",
		},
		freeTier: {
			status: "strong",
			details:
				"Developer: Free, unlimited seats, 5 service connections, 1K client MAUs",
		},
		paidPricing: {
			status: "strong",
			details: "Foundation: $12/service connection + $10/1K client MAU",
		},
		openSource: { status: "none", details: "Proprietary" },
		selfHosted: {
			status: "partial",
			details: "Relay Proxy for on-prem",
		},
		cloudHosted: { status: "strong", details: "Fully managed SaaS" },
		analytics: {
			status: "strong",
			details: "DataDog, New Relic, Segment, mParticle",
		},
		dataWarehouses: {
			status: "strong",
			details: "Snowflake, BigQuery data export",
		},
		cicd: {
			status: "strong",
			details: "GitHub Actions, GitLab CI, Terraform",
		},
		webhooks: { status: "strong", details: "Flag change webhooks" },
	},
};
