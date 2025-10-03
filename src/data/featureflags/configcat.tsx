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

		reference: "https://configcat.com/pricing",
	},
	features: {
		booleanFlags: { status: "strong", details: "Full support", reference: "https://configcat.com/pricing" },
		multivariateFlags: {

			status: "strong",

			details: "String, number, JSON",

			reference: "https://configcat.com/pricing",
		},
		jsonFlags: {

			status: "strong",

			details: "JSON setting values",

			reference: "https://configcat.com/pricing",
		},
		flagDependencies: {

			status: "partial",

			details: "Via targeting rules",

			reference: "https://configcat.com/pricing",
		},
		scheduledRollouts: {

			status: "partial",

			details: "Manual time-based changes",

			reference: "https://configcat.com/pricing",
		},
		userTargeting: {

			status: "strong",

			details: "User object targeting",

			reference: "https://configcat.com/pricing",
		},
		percentageRollouts: {

			status: "strong",

			details: "Percentage options",

			reference: "https://configcat.com/pricing",
		},
		customSegments: {

			status: "strong",

			details: "Segments with conditions",

			reference: "https://configcat.com/pricing",
		},
		geoTargeting: {

			status: "partial",

			details: "Via custom attributes",

			reference: "https://configcat.com/pricing",
		},
		contextualTargeting: {

			status: "strong",

			details: "Custom attribute targeting",

			reference: "https://configcat.com/pricing",
		},
		abTesting: {

			status: "partial",

			details: "Basic A/B via percentages",

			reference: "https://configcat.com/pricing",
		},
		multivariateExperiments: {

			status: "partial",

			details: "Via integrations",

			reference: "https://configcat.com/pricing",
		},
		statisticalAnalysis: {

			status: "none",

			details: "External tools needed",

			reference: "https://configcat.com/pricing",
		},
		metricsTracking: {

			status: "partial",

			details: "Via integrations",

			reference: "https://configcat.com/pricing",
		},
		experimentGoals: {

			status: "none",

			details: "Not built-in",

			reference: "https://configcat.com/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "25+ languages (JS, Java, Python, .NET, Go, etc.)",

			reference: "https://configcat.com/docs",
		},
		localEvaluation: {

			status: "strong",

			details: "Auto-polling with caching",

			reference: "https://configcat.com/pricing",
		},
		typeSafety: {

			status: "strong",

			details: "Strongly typed SDKs",

			reference: "https://configcat.com/pricing",
		},
		documentation: {

			status: "strong",

			details: "Clear documentation",

			reference: "https://configcat.com/docs",
		},
		apiQuality: {

			status: "strong",

			details: "Public Management API",

			reference: "https://configcat.com/docs",
		},
		rbac: {

			status: "strong",

			details: "Permission groups (Team+)",

			reference: "https://configcat.com/pricing",
		},
		auditLogs: {

			status: "strong",

			details: "Product audit log",

			reference: "https://configcat.com/pricing",
		},
		environments: {

			status: "strong",

			details: "Unlimited configs & environments",

			reference: "https://configcat.com/pricing",
		},
		approvalWorkflows: {

			status: "partial",

			details: "Two-step save",

			reference: "https://configcat.com/pricing",
		},
		compliance: {

			status: "strong",

			details: "SOC 2, GDPR, CCPA",

			reference: "https://configcat.com/privacy",
		},
		freeTier: {

			status: "strong",

			details: "Free: 10 flags, 2 environments, 5M config downloads",

			reference: "https://configcat.com/pricing",
		},
		paidPricing: {

			status: "strong",

			details: "Pro: $110/mo (100 flags), Smart: $325/mo (unlimited)",

			reference: "https://configcat.com/pricing",
		},
		openSource: {

			status: "partial",

			details: "Open source SDKs",

			reference: "https://configcat.com/pricing",
		},
		selfHosted: {

			status: "none",

			details: "Cloud-only",

			reference: "https://configcat.com/pricing",
		},
		cloudHosted: {

			status: "strong",

			details: "Fully managed SaaS",

			reference: "https://configcat.com/pricing",
		},
		analytics: {

			status: "strong",

			details: "Google Analytics, Mixpanel, Amplitude",

			reference: "https://configcat.com/pricing",
		},
		dataWarehouses: {

			status: "partial",

			details: "Webhook-based export",

			reference: "https://configcat.com/pricing",
		},
		cicd: {

			status: "strong",

			details: "Slack, Jira, Trello, Zapier, GitHub",

			reference: "https://configcat.com/pricing",
		},
		webhooks: {

			status: "strong",

			details: "Config change webhooks",

			reference: "https://configcat.com/pricing",
		},
	},
};
