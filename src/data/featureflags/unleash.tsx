import type { Provider } from "../../types/comparison";

function UnleashLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Unleash</title>
			<rect width="24" height="24" rx="4" fill="#635BFF" />
			<circle cx="12" cy="8" r="2" fill="white" />
			<path
				d="M12 10V16M9 16H15"
				stroke="white"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export const unleash: Provider = {
	name: "Unleash",
	logo: <UnleashLogo />,
	website: "https://www.getunleash.io",
	tagline: {
		status: "strong",
		details: "Privacy-first open source feature toggle system",
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support" },
		multivariateFlags: {
			status: "strong",
			details: "Variants with payloads",
		},
		jsonFlags: {
			status: "strong",
			details: "JSON payloads in variants",
		},
		flagDependencies: {
			status: "partial",
			details: "Via strategy constraints",
		},
		scheduledRollouts: {
			status: "partial",
			details: "Via external scheduling",
		},
		userTargeting: {
			status: "strong",
			details: "User ID targeting",
		},
		percentageRollouts: {
			status: "strong",
			details: "Gradual rollout strategy",
		},
		customSegments: {
			status: "strong",
			details: "Constraint-based segments",
		},
		geoTargeting: {
			status: "partial",
			details: "Via custom constraints",
		},
		contextualTargeting: {
			status: "strong",
			details: "Context fields & constraints",
		},
		abTesting: {
			status: "partial",
			details: "Basic via variant weights",
		},
		multivariateExperiments: {
			status: "partial",
			details: "Variants, no built-in analysis",
		},
		statisticalAnalysis: {
			status: "none",
			details: "External tools required",
		},
		metricsTracking: {
			status: "partial",
			details: "Impression data, no analysis",
		},
		experimentGoals: {
			status: "none",
			details: "Not built-in",
		},
		sdkLanguages: {
			status: "strong",
			details: "20+ languages (JS, Java, Go, Python, .NET, etc.)",
		},
		localEvaluation: {
			status: "strong",
			details: "Edge SDK for local eval",
		},
		typeSafety: {
			status: "strong",
			details: "TypeScript, strongly typed SDKs",
		},
		documentation: {
			status: "strong",
			details: "Excellent documentation",
		},
		apiQuality: {
			status: "strong",
			details: "REST API + Admin API",
		},
		rbac: {
			status: "strong",
			details: "RBAC (Enterprise)",
		},
		auditLogs: {
			status: "strong",
			details: "Event log & audit trail",
		},
		environments: {
			status: "strong",
			details: "Projects & environments",
		},
		approvalWorkflows: {
			status: "strong",
			details: "Change requests (Enterprise)",
		},
		compliance: {
			status: "strong",
			details: "SOC 2, GDPR-ready",
		},
		freeTier: {
			status: "strong",
			details: "Open source (unlimited), Pro free tier",
		},
		paidPricing: {
			status: "strong",
			details: "Pay-as-you-go: $75/seat/mo, 53M API requests (Cloud)",
		},
		openSource: {
			status: "strong",
			details: "Apache 2.0",
		},
		selfHosted: {
			status: "strong",
			details: "Docker, Kubernetes, full self-host",
		},
		cloudHosted: {
			status: "strong",
			details: "Managed cloud available",
		},
		analytics: {
			status: "partial",
			details: "Webhook-based integrations",
		},
		dataWarehouses: {
			status: "partial",
			details: "Event export via webhooks",
		},
		cicd: {
			status: "strong",
			details: "API-driven, GitHub Actions",
		},
		webhooks: {
			status: "strong",
			details: "Event webhooks",
		},
	},
};
