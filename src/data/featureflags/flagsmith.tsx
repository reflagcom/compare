import type { Provider } from "../../types/comparison";

function FlagsmithLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Flagsmith</title>
			<rect width="24" height="24" rx="4" fill="#27AB83" />
			<path d="M8 6H10V18H8V6Z" fill="white" stroke="white" strokeWidth="0.5" />
			<path d="M10 6L16 10L10 14V6Z" fill="white" />
		</svg>
	);
}

export const flagsmith: Provider = {
	name: "Flagsmith",
	logo: <FlagsmithLogo />,
	website: "https://flagsmith.com",
	tagline: {

		status: "strong",

		details: "Open source feature flag and remote config service",

		reference: "https://flagsmith.com/pricing",
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support", reference: "https://flagsmith.com/pricing" },
		multivariateFlags: {

			status: "strong",

			details: "String, number, boolean variants",

			reference: "https://flagsmith.com/pricing",
		},
		jsonFlags: { status: "strong", details: "JSON remote config", reference: "https://flagsmith.com/pricing" },
		flagDependencies: {

			status: "partial",

			details: "Via segment rules",

			reference: "https://flagsmith.com/pricing",
		},
		scheduledRollouts: {

			status: "strong",

			details: "Scheduled flag changes",

			reference: "https://flagsmith.com/pricing",
		},
		userTargeting: {

			status: "strong",

			details: "Identity-based targeting",

			reference: "https://flagsmith.com/pricing",
		},
		percentageRollouts: {

			status: "strong",

			details: "Percentage-based splits",

			reference: "https://flagsmith.com/pricing",
		},
		customSegments: {

			status: "strong",

			details: "Segment rules & conditions",

			reference: "https://flagsmith.com/pricing",
		},
		geoTargeting: {

			status: "partial",

			details: "Via custom traits",

			reference: "https://flagsmith.com/pricing",
		},
		contextualTargeting: {

			status: "strong",

			details: "Custom trait targeting",

			reference: "https://flagsmith.com/pricing",
		},
		abTesting: {

			status: "partial",

			details: "Basic A/B via integrations",

			reference: "https://flagsmith.com/pricing",
		},
		multivariateExperiments: {

			status: "partial",

			details: "Via integrations",

			reference: "https://flagsmith.com/pricing",
		},
		statisticalAnalysis: {

			status: "partial",

			details: "Via analytics integrations",

			reference: "https://flagsmith.com/pricing",
		},
		metricsTracking: {

			status: "partial",

			details: "Via integrations (Mixpanel, Heap)",

			reference: "https://flagsmith.com/pricing",
		},
		experimentGoals: {

			status: "partial",

			details: "External analytics required",

			reference: "https://flagsmith.com/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "15+ languages (JS, Python, Java, .NET, Go, etc.)",

			reference: "https://docs.flagsmith.com",
		},
		localEvaluation: {

			status: "strong",

			details: "Local evaluation mode",

			reference: "https://flagsmith.com/pricing",
		},
		typeSafety: {

			status: "strong",

			details: "TypeScript support",

			reference: "https://flagsmith.com/pricing",
		},
		documentation: {

			status: "strong",

			details: "Good docs with examples",

			reference: "https://docs.flagsmith.com",
		},
		apiQuality: {

			status: "strong",

			details: "REST API + client SDKs",

			reference: "https://docs.flagsmith.com",
		},
		rbac: {

			status: "strong",

			details: "Roles & permissions (paid)",

			reference: "https://flagsmith.com/pricing",
		},
		auditLogs: {

			status: "strong",

			details: "Audit log (paid)",

			reference: "https://flagsmith.com/pricing",
		},
		environments: {

			status: "strong",

			details: "Multiple environments",

			reference: "https://flagsmith.com/pricing",
		},
		approvalWorkflows: {

			status: "partial",

			details: "4-eyes via external process",

			reference: "https://flagsmith.com/pricing",
		},
		compliance: {

			status: "strong",

			details: "SOC 2 Type II, GDPR",

			reference: "https://flagsmith.com/privacy-policy",
		},
		freeTier: {

			status: "strong",

			details: "Free: 50K requests/month, 1 team member",

			reference: "https://flagsmith.com/pricing",
		},
		paidPricing: {

			status: "strong",

			details: "Start-Up: $45/mo, 1M requests, 3 team members",

			reference: "https://flagsmith.com/pricing",
		},
		openSource: {

			status: "strong",

			details: "MIT & BSD licenses",

			reference: "https://flagsmith.com/pricing",
		},
		selfHosted: {

			status: "strong",

			details: "Docker, Kubernetes, full self-host",

			reference: "https://flagsmith.com/pricing",
		},
		cloudHosted: {

			status: "strong",

			details: "SaaS available",

			reference: "https://flagsmith.com/pricing",
		},
		analytics: {

			status: "strong",

			details: "Mixpanel, Heap, Amplitude, Segment",

			reference: "https://flagsmith.com/pricing",
		},
		dataWarehouses: {

			status: "partial",

			details: "Via data export API",

			reference: "https://flagsmith.com/pricing",
		},
		cicd: {

			status: "strong",

			details: "GitHub Actions, API-based",

			reference: "https://flagsmith.com/pricing",
		},
		webhooks: {

			status: "strong",

			details: "Change webhooks",

			reference: "https://flagsmith.com/pricing",
		},
	},
};
