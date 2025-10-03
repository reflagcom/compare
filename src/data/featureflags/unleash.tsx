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

		reference: "https://www.getunleash.io/pricing",
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support", reference: "https://www.getunleash.io/pricing" },
		multivariateFlags: {

			status: "strong",

			details: "Variants with payloads",

			reference: "https://www.getunleash.io/pricing",
		},
		jsonFlags: {

			status: "strong",

			details: "JSON payloads in variants",

			reference: "https://www.getunleash.io/pricing",
		},
		flagDependencies: {

			status: "partial",

			details: "Via strategy constraints",

			reference: "https://www.getunleash.io/pricing",
		},
		scheduledRollouts: {

			status: "partial",

			details: "Via external scheduling",

			reference: "https://www.getunleash.io/pricing",
		},
		userTargeting: {

			status: "strong",

			details: "User ID targeting",

			reference: "https://www.getunleash.io/pricing",
		},
		percentageRollouts: {

			status: "strong",

			details: "Gradual rollout strategy",

			reference: "https://www.getunleash.io/pricing",
		},
		customSegments: {

			status: "strong",

			details: "Constraint-based segments",

			reference: "https://www.getunleash.io/pricing",
		},
		geoTargeting: {

			status: "partial",

			details: "Via custom constraints",

			reference: "https://www.getunleash.io/pricing",
		},
		contextualTargeting: {

			status: "strong",

			details: "Context fields & constraints",

			reference: "https://www.getunleash.io/pricing",
		},
		abTesting: {

			status: "partial",

			details: "Basic via variant weights",

			reference: "https://www.getunleash.io/pricing",
		},
		multivariateExperiments: {

			status: "partial",

			details: "Variants, no built-in analysis",

			reference: "https://www.getunleash.io/pricing",
		},
		statisticalAnalysis: {

			status: "none",

			details: "External tools required",

			reference: "https://www.getunleash.io/pricing",
		},
		metricsTracking: {

			status: "partial",

			details: "Impression data, no analysis",

			reference: "https://www.getunleash.io/pricing",
		},
		experimentGoals: {

			status: "none",

			details: "Not built-in",

			reference: "https://www.getunleash.io/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "20+ languages (JS, Java, Go, Python, .NET, etc.)",

			reference: "https://docs.getunleash.io",
		},
		localEvaluation: {

			status: "strong",

			details: "Edge SDK for local eval",

			reference: "https://www.getunleash.io/pricing",
		},
		typeSafety: {

			status: "strong",

			details: "TypeScript, strongly typed SDKs",

			reference: "https://www.getunleash.io/pricing",
		},
		documentation: {

			status: "strong",

			details: "Excellent documentation",

			reference: "https://docs.getunleash.io",
		},
		apiQuality: {

			status: "strong",

			details: "REST API + Admin API",

			reference: "https://docs.getunleash.io",
		},
		rbac: {

			status: "strong",

			details: "RBAC (Enterprise)",

			reference: "https://www.getunleash.io/pricing",
		},
		auditLogs: {

			status: "strong",

			details: "Event log & audit trail",

			reference: "https://www.getunleash.io/pricing",
		},
		environments: {

			status: "strong",

			details: "Projects & environments",

			reference: "https://www.getunleash.io/pricing",
		},
		approvalWorkflows: {

			status: "strong",

			details: "Change requests (Enterprise)",

			reference: "https://www.getunleash.io/pricing",
		},
		compliance: {

			status: "strong",

			details: "SOC 2, GDPR-ready",

			reference: "https://www.getunleash.io/privacy-policy",
		},
		freeTier: {

			status: "strong",

			details: "Open source (unlimited), Pro free tier",

			reference: "https://www.getunleash.io/pricing",
		},
		paidPricing: {

			status: "strong",

			details: "Pay-as-you-go: $75/seat/mo, 53M API requests (Cloud)",

			reference: "https://www.getunleash.io/pricing",
		},
		openSource: {

			status: "strong",

			details: "Apache 2.0",

			reference: "https://www.getunleash.io/pricing",
		},
		selfHosted: {

			status: "strong",

			details: "Docker, Kubernetes, full self-host",

			reference: "https://www.getunleash.io/pricing",
		},
		cloudHosted: {

			status: "strong",

			details: "Managed cloud available",

			reference: "https://www.getunleash.io/pricing",
		},
		analytics: {

			status: "partial",

			details: "Webhook-based integrations",

			reference: "https://www.getunleash.io/pricing",
		},
		dataWarehouses: {

			status: "partial",

			details: "Event export via webhooks",

			reference: "https://www.getunleash.io/pricing",
		},
		cicd: {

			status: "strong",

			details: "API-driven, GitHub Actions",

			reference: "https://www.getunleash.io/pricing",
		},
		webhooks: {

			status: "strong",

			details: "Event webhooks",

			reference: "https://www.getunleash.io/pricing",
		},
	},
};
