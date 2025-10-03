import type { Provider } from "../../types/comparison";

function PostHogLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>PostHog</title>
			<rect width="24" height="24" rx="4" fill="#F9BD2B" />
			<path
				d="M8 16L10 12L12 14L14 10L16 12"
				stroke="black"
				strokeWidth="1.5"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export const posthog: Provider = {
	name: "PostHog",
	logo: <PostHogLogo />,
	website: "https://posthog.com",
	tagline: {

		status: "strong",

		details: "All-in-one product OS with analytics, session replay, and more",

		reference: "https://posthog.com/pricing",
	},
	features: {
		autoCapture: {

			status: "strong",

			details: "Automatic event capture without code",

			reference: "https://posthog.com/pricing",
		},
		customEvents: { status: "strong", details: "Custom event tracking", reference: "https://posthog.com/pricing" },
		userProperties: { status: "strong", details: "User properties & traits", reference: "https://posthog.com/pricing" },
		groupAnalytics: {

			status: "strong",

			details: "Group analytics for B2B",

			reference: "https://posthog.com/pricing",
		},
		retroactiveAnalysis: {

			status: "strong",

			details: "Query historical data retroactively",

			reference: "https://posthog.com/pricing",
		},
		funnels: { status: "strong", details: "Conversion funnels", reference: "https://posthog.com/pricing" },
		retention: { status: "strong", details: "Retention analysis", reference: "https://posthog.com/pricing" },
		cohorts: { status: "strong", details: "User cohorts", reference: "https://posthog.com/pricing" },
		pathAnalysis: { status: "strong", details: "User path analysis", reference: "https://posthog.com/pricing" },
		trends: { status: "strong", details: "Trend analysis", reference: "https://posthog.com/pricing" },
		dashboards: { status: "strong", details: "Custom dashboards", reference: "https://posthog.com/pricing" },
		realtime: { status: "strong", details: "Real-time analytics", reference: "https://posthog.com/pricing" },
		customReports: { status: "strong", details: "Custom insights", reference: "https://posthog.com/pricing" },
		dataExploration: {

			status: "strong",

			details: "SQL and visual exploration",

			reference: "https://posthog.com/pricing",
		},
		alerts: { status: "partial", details: "Basic alerts", reference: "https://posthog.com/pricing" },
		sessionReplay: {

			status: "strong",

			details: "Full session replay with console logs",

			reference: "https://posthog.com/pricing",
		},
		heatmaps: { status: "strong", details: "Heatmaps & clickmaps", reference: "https://posthog.com/pricing" },
		userProfiles: { status: "strong", details: "Individual user profiles", reference: "https://posthog.com/pricing" },
		userJourneys: { status: "strong", details: "User journey tracking", reference: "https://posthog.com/pricing" },
		attribution: { status: "partial", details: "Basic attribution", reference: "https://posthog.com/pricing" },
		abTesting: { status: "strong", details: "A/B testing built-in", reference: "https://posthog.com/pricing" },
		featureFlags: { status: "strong", details: "Feature flags included", reference: "https://posthog.com/pricing" },
		experiments: {

			status: "strong",

			details: "Full experimentation platform",

			reference: "https://posthog.com/pricing",
		},
		statisticalAnalysis: {

			status: "strong",

			details: "Bayesian & frequentist stats",

			reference: "https://posthog.com/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "15+ languages (JS, Python, Go, PHP, etc.)",

			reference: "https://posthog.com/docs",
		},
		apiAccess: { status: "strong", details: "Full REST API", reference: "https://posthog.com/docs" },
		dataWarehouse: {

			status: "strong",

			details: "Export to Snowflake, BigQuery",

			reference: "https://posthog.com/pricing",
		},
		sqlAccess: { status: "strong", details: "SQL query interface", reference: "https://posthog.com/pricing" },
		documentation: { status: "strong", details: "Excellent documentation", reference: "https://posthog.com/docs" },
		gdprCompliant: { status: "strong", details: "GDPR compliant", reference: "https://posthog.com/privacy" },
		cookieless: {

			status: "partial",

			details: "Cookie-based by default, can configure",

			reference: "https://posthog.com/privacy",
		},
		dataResidency: { status: "strong", details: "US & EU regions", reference: "https://posthog.com/privacy" },
		anonymization: { status: "strong", details: "Data anonymization", reference: "https://posthog.com/privacy" },
		compliance: { status: "strong", details: "SOC 2, GDPR", reference: "https://posthog.com/privacy" },
		freeTier: { status: "strong", details: "1M events/month free", reference: "https://posthog.com/pricing" },
		pricingModel: {

			status: "strong",

			details: "Pay-as-you-go per event ($0.00005/event)",

			reference: "https://posthog.com/pricing",
		},
		openSource: { status: "strong", details: "MIT license", reference: "https://posthog.com/pricing" },
		selfHosted: {

			status: "strong",

			details: "Docker/Kubernetes self-host",

			reference: "https://posthog.com/pricing",
		},
		cloudHosted: { status: "strong", details: "PostHog Cloud (US & EU)", reference: "https://posthog.com/pricing" },
		cdp: {

			status: "strong",

			details: "Segment, RudderStack integration",

			reference: "https://posthog.com/pricing",
		},
		marketing: {

			status: "strong",

			details: "Hubspot, Salesforce, Intercom",

			reference: "https://posthog.com/pricing",
		},
		datatools: {

			status: "strong",

			details: "Snowflake, BigQuery, S3",

			reference: "https://posthog.com/pricing",
		},
		webhooks: { status: "strong", details: "Webhooks & actions", reference: "https://posthog.com/pricing" },
	},
};
