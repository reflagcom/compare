import type { Provider } from "../../types/comparison";

function ConfigCatLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>ConfigCat</title>
			<rect width="24" height="24" rx="4" fill="#FF4785" />
			<path
				d="M8 10C8 10 9 8 12 8C15 8 16 10 16 10M8 14C8 14 9 16 12 16C15 16 16 14 16 14"
				stroke="white"
				strokeWidth="1.5"
				fill="none"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export const configcat: Provider = {
	name: "ConfigCat",
	logo: <ConfigCatLogo />,
	website: "https://configcat.com",
	tagline: {
		status: "strong",
		details: "Feature flag service with 10-minute setup",
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support" },
		multivariateFlags: {
			status: "strong",
			details: "String, number, JSON",
		},
		jsonFlags: {
			status: "strong",
			details: "JSON setting values",
		},
		flagDependencies: {
			status: "partial",
			details: "Via targeting rules",
		},
		scheduledRollouts: {
			status: "partial",
			details: "Manual time-based changes",
		},
		userTargeting: {
			status: "strong",
			details: "User object targeting",
		},
		percentageRollouts: {
			status: "strong",
			details: "Percentage options",
		},
		customSegments: {
			status: "strong",
			details: "Segments with conditions",
		},
		geoTargeting: {
			status: "partial",
			details: "Via custom attributes",
		},
		contextualTargeting: {
			status: "strong",
			details: "Custom attribute targeting",
		},
		abTesting: {
			status: "partial",
			details: "Basic A/B via percentages",
		},
		multivariateExperiments: {
			status: "partial",
			details: "Via integrations",
		},
		statisticalAnalysis: {
			status: "none",
			details: "External tools needed",
		},
		metricsTracking: {
			status: "partial",
			details: "Via integrations",
		},
		experimentGoals: {
			status: "none",
			details: "Not built-in",
		},
		sdkLanguages: {
			status: "strong",
			details: "25+ languages (JS, Java, Python, .NET, Go, etc.)",
		},
		localEvaluation: {
			status: "strong",
			details: "Auto-polling with caching",
		},
		typeSafety: {
			status: "strong",
			details: "Strongly typed SDKs",
		},
		documentation: {
			status: "strong",
			details: "Clear documentation",
		},
		apiQuality: {
			status: "strong",
			details: "Public Management API",
		},
		rbac: {
			status: "strong",
			details: "Permission groups (Team+)",
		},
		auditLogs: {
			status: "strong",
			details: "Product audit log",
		},
		environments: {
			status: "strong",
			details: "Unlimited configs & environments",
		},
		approvalWorkflows: {
			status: "partial",
			details: "Two-step save",
		},
		compliance: {
			status: "strong",
			details: "SOC 2, GDPR, CCPA",
		},
		freeTier: {
			status: "strong",
			details: "Free: 10 flags, 2 environments, 5M config downloads",
		},
		paidPricing: {
			status: "strong",
			details: "Pro: $110/mo (100 flags), Smart: $325/mo (unlimited)",
		},
		openSource: {
			status: "partial",
			details: "Open source SDKs",
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
			details: "Google Analytics, Mixpanel, Amplitude",
		},
		dataWarehouses: {
			status: "partial",
			details: "Webhook-based export",
		},
		cicd: {
			status: "strong",
			details: "Slack, Jira, Trello, Zapier, GitHub",
		},
		webhooks: {
			status: "strong",
			details: "Config change webhooks",
		},
	},
};
