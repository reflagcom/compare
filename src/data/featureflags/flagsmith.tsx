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
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support" },
		multivariateFlags: {
			status: "strong",
			details: "String, number, boolean variants",
		},
		jsonFlags: { status: "strong", details: "JSON remote config" },
		flagDependencies: {
			status: "partial",
			details: "Via segment rules",
		},
		scheduledRollouts: {
			status: "strong",
			details: "Scheduled flag changes",
		},
		userTargeting: {
			status: "strong",
			details: "Identity-based targeting",
		},
		percentageRollouts: {
			status: "strong",
			details: "Percentage-based splits",
		},
		customSegments: {
			status: "strong",
			details: "Segment rules & conditions",
		},
		geoTargeting: {
			status: "partial",
			details: "Via custom traits",
		},
		contextualTargeting: {
			status: "strong",
			details: "Custom trait targeting",
		},
		abTesting: {
			status: "partial",
			details: "Basic A/B via integrations",
		},
		multivariateExperiments: {
			status: "partial",
			details: "Via integrations",
		},
		statisticalAnalysis: {
			status: "partial",
			details: "Via analytics integrations",
		},
		metricsTracking: {
			status: "partial",
			details: "Via integrations (Mixpanel, Heap)",
		},
		experimentGoals: {
			status: "partial",
			details: "External analytics required",
		},
		sdkLanguages: {
			status: "strong",
			details: "15+ languages (JS, Python, Java, .NET, Go, etc.)",
		},
		localEvaluation: {
			status: "strong",
			details: "Local evaluation mode",
		},
		typeSafety: {
			status: "strong",
			details: "TypeScript support",
		},
		documentation: {
			status: "strong",
			details: "Good docs with examples",
		},
		apiQuality: {
			status: "strong",
			details: "REST API + client SDKs",
		},
		rbac: {
			status: "strong",
			details: "Roles & permissions (paid)",
		},
		auditLogs: {
			status: "strong",
			details: "Audit log (paid)",
		},
		environments: {
			status: "strong",
			details: "Multiple environments",
		},
		approvalWorkflows: {
			status: "partial",
			details: "4-eyes via external process",
		},
		compliance: {
			status: "strong",
			details: "SOC 2 Type II, GDPR",
		},
		freeTier: {
			status: "strong",
			details: "Free: 50K requests/month, 1 team member",
		},
		paidPricing: {
			status: "strong",
			details: "Start-Up: $45/mo, 1M requests, 3 team members",
		},
		openSource: {
			status: "strong",
			details: "MIT & BSD licenses",
		},
		selfHosted: {
			status: "strong",
			details: "Docker, Kubernetes, full self-host",
		},
		cloudHosted: {
			status: "strong",
			details: "SaaS available",
		},
		analytics: {
			status: "strong",
			details: "Mixpanel, Heap, Amplitude, Segment",
		},
		dataWarehouses: {
			status: "partial",
			details: "Via data export API",
		},
		cicd: {
			status: "strong",
			details: "GitHub Actions, API-based",
		},
		webhooks: {
			status: "strong",
			details: "Change webhooks",
		},
	},
};
