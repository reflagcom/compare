import type { Provider } from "../../types/comparison";

function SplitLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Split</title>
			<rect width="24" height="24" rx="4" fill="#00BFA5" />
			<path d="M12 6V18M6 12H18" stroke="white" strokeWidth="2" />
		</svg>
	);
}

export const split: Provider = {
	name: "Split",
	logo: <SplitLogo />,
	website: "https://www.split.io",
	tagline: {

		status: "strong",

		details: "Feature delivery platform with built-in impact monitoring",

		reference: "https://www.split.io/pricing",
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support", reference: "https://www.split.io/pricing" },
		multivariateFlags: {

			status: "strong",

			details: "Multi-treatment splits",

			reference: "https://www.split.io/pricing",
		},
		jsonFlags: {

			status: "strong",

			details: "Dynamic configurations",

			reference: "https://www.split.io/pricing",
		},
		flagDependencies: {

			status: "strong",

			details: "Split dependencies",

			reference: "https://www.split.io/pricing",
		},
		scheduledRollouts: {

			status: "strong",

			details: "Scheduled rollout plans",

			reference: "https://www.split.io/pricing",
		},
		userTargeting: {

			status: "strong",

			details: "Targeting rules & allow lists",

			reference: "https://www.split.io/pricing",
		},
		percentageRollouts: {

			status: "strong",

			details: "Traffic allocation",

			reference: "https://www.split.io/pricing",
		},
		customSegments: {

			status: "strong",

			details: "Segment definitions",

			reference: "https://www.split.io/pricing",
		},
		geoTargeting: {

			status: "strong",

			details: "Geo-based targeting",

			reference: "https://www.split.io/pricing",
		},
		contextualTargeting: {

			status: "strong",

			details: "Attribute-based targeting",

			reference: "https://www.split.io/pricing",
		},
		abTesting: {

			status: "strong",

			details: "Built-in experimentation",

			reference: "https://www.split.io/pricing",
		},
		multivariateExperiments: {

			status: "strong",

			details: "Multi-treatment tests",

			reference: "https://www.split.io/pricing",
		},
		statisticalAnalysis: {

			status: "strong",

			details: "Statistical engine",

			reference: "https://www.split.io/pricing",
		},
		metricsTracking: {

			status: "strong",

			details: "Impact metrics & tracking",

			reference: "https://www.split.io/pricing",
		},
		experimentGoals: {

			status: "strong",

			details: "Guardrail & primary metrics",

			reference: "https://www.split.io/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "12+ languages (JS, Java, Python, .NET, Go, etc.)",

			reference: "https://help.split.io/hc/en-us",
		},
		localEvaluation: {

			status: "strong",

			details: "In-memory evaluation",

			reference: "https://www.split.io/pricing",
		},
		typeSafety: {

			status: "strong",

			details: "TypeScript definitions",

			reference: "https://www.split.io/pricing",
		},
		documentation: {

			status: "strong",

			details: "Comprehensive documentation",

			reference: "https://help.split.io/hc/en-us",
		},
		apiQuality: {

			status: "strong",

			details: "REST API + Admin API",

			reference: "https://help.split.io/hc/en-us",
		},
		rbac: {

			status: "strong",

			details: "Team-based permissions",

			reference: "https://www.split.io/pricing",
		},
		auditLogs: {

			status: "strong",

			details: "Complete audit trail",

			reference: "https://www.split.io/pricing",
		},
		environments: {

			status: "strong",

			details: "Multiple environments",

			reference: "https://www.split.io/pricing",
		},
		approvalWorkflows: {

			status: "strong",

			details: "Approval workflows",

			reference: "https://www.split.io/pricing",
		},
		compliance: {

			status: "strong",

			details: "SOC 2, GDPR",

			reference: "https://www.split.io/privacy-policy",
		},
		freeTier: {

			status: "partial",

			details: "14-day trial, no free tier",

			reference: "https://www.split.io/pricing",
		},
		paidPricing: {

			status: "strong",

			details: "Custom pricing (Team & Enterprise)",

			reference: "https://www.split.io/pricing",
		},
		openSource: {

			status: "none",

			details: "Proprietary",

			reference: "https://www.split.io/pricing",
		},
		selfHosted: {

			status: "none",

			details: "Cloud-only",

			reference: "https://www.split.io/pricing",
		},
		cloudHosted: {

			status: "strong",

			details: "Fully managed SaaS",

			reference: "https://www.split.io/pricing",
		},
		analytics: {

			status: "strong",

			details: "DataDog, New Relic, Segment integrations",

			reference: "https://www.split.io/pricing",
		},
		dataWarehouses: {

			status: "strong",

			details: "Data pipeline to warehouses",

			reference: "https://www.split.io/pricing",
		},
		cicd: {

			status: "strong",

			details: "CI/CD integrations",

			reference: "https://www.split.io/pricing",
		},
		webhooks: {

			status: "strong",

			details: "Webhook notifications",

			reference: "https://www.split.io/pricing",
		},
	},
};
