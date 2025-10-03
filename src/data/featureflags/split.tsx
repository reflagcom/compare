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
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support" },
		multivariateFlags: {
			status: "strong",
			details: "Multi-treatment splits",
		},
		jsonFlags: {
			status: "strong",
			details: "Dynamic configurations",
		},
		flagDependencies: {
			status: "strong",
			details: "Split dependencies",
		},
		scheduledRollouts: {
			status: "strong",
			details: "Scheduled rollout plans",
		},
		userTargeting: {
			status: "strong",
			details: "Targeting rules & allow lists",
		},
		percentageRollouts: {
			status: "strong",
			details: "Traffic allocation",
		},
		customSegments: {
			status: "strong",
			details: "Segment definitions",
		},
		geoTargeting: {
			status: "strong",
			details: "Geo-based targeting",
		},
		contextualTargeting: {
			status: "strong",
			details: "Attribute-based targeting",
		},
		abTesting: {
			status: "strong",
			details: "Built-in experimentation",
		},
		multivariateExperiments: {
			status: "strong",
			details: "Multi-treatment tests",
		},
		statisticalAnalysis: {
			status: "strong",
			details: "Statistical engine",
		},
		metricsTracking: {
			status: "strong",
			details: "Impact metrics & tracking",
		},
		experimentGoals: {
			status: "strong",
			details: "Guardrail & primary metrics",
		},
		sdkLanguages: {
			status: "strong",
			details: "12+ languages (JS, Java, Python, .NET, Go, etc.)",
		},
		localEvaluation: {
			status: "strong",
			details: "In-memory evaluation",
		},
		typeSafety: {
			status: "strong",
			details: "TypeScript definitions",
		},
		documentation: {
			status: "strong",
			details: "Comprehensive documentation",
		},
		apiQuality: {
			status: "strong",
			details: "REST API + Admin API",
		},
		rbac: {
			status: "strong",
			details: "Team-based permissions",
		},
		auditLogs: {
			status: "strong",
			details: "Complete audit trail",
		},
		environments: {
			status: "strong",
			details: "Multiple environments",
		},
		approvalWorkflows: {
			status: "strong",
			details: "Approval workflows",
		},
		compliance: {
			status: "strong",
			details: "SOC 2, GDPR",
		},
		freeTier: {
			status: "partial",
			details: "14-day trial, no free tier",
		},
		paidPricing: {
			status: "strong",
			details: "Custom pricing (Team & Enterprise)",
		},
		openSource: {
			status: "none",
			details: "Proprietary",
		},
		selfHosted: {
			status: "none",
			details: "Cloud-only",
		},
		cloudHosted: {
			status: "strong",
			details: "Fully managed SaaS",
		},
		analytics: {
			status: "strong",
			details: "DataDog, New Relic, Segment integrations",
		},
		dataWarehouses: {
			status: "strong",
			details: "Data pipeline to warehouses",
		},
		cicd: {
			status: "strong",
			details: "CI/CD integrations",
		},
		webhooks: {
			status: "strong",
			details: "Webhook notifications",
		},
	},
};
