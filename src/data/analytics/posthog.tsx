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
	},
	features: {
		autoCapture: {
			status: "strong",
			details: "Automatic event capture without code",
		},
		customEvents: { status: "strong", details: "Custom event tracking" },
		userProperties: { status: "strong", details: "User properties & traits" },
		groupAnalytics: {
			status: "strong",
			details: "Group analytics for B2B",
		},
		retroactiveAnalysis: {
			status: "strong",
			details: "Query historical data retroactively",
		},
		funnels: { status: "strong", details: "Conversion funnels" },
		retention: { status: "strong", details: "Retention analysis" },
		cohorts: { status: "strong", details: "User cohorts" },
		pathAnalysis: { status: "strong", details: "User path analysis" },
		trends: { status: "strong", details: "Trend analysis" },
		dashboards: { status: "strong", details: "Custom dashboards" },
		realtime: { status: "strong", details: "Real-time analytics" },
		customReports: { status: "strong", details: "Custom insights" },
		dataExploration: {
			status: "strong",
			details: "SQL and visual exploration",
		},
		alerts: { status: "partial", details: "Basic alerts" },
		sessionReplay: {
			status: "strong",
			details: "Full session replay with console logs",
		},
		heatmaps: { status: "strong", details: "Heatmaps & clickmaps" },
		userProfiles: { status: "strong", details: "Individual user profiles" },
		userJourneys: { status: "strong", details: "User journey tracking" },
		attribution: { status: "partial", details: "Basic attribution" },
		abTesting: { status: "strong", details: "A/B testing built-in" },
		featureFlags: { status: "strong", details: "Feature flags included" },
		experiments: {
			status: "strong",
			details: "Full experimentation platform",
		},
		statisticalAnalysis: {
			status: "strong",
			details: "Bayesian & frequentist stats",
		},
		sdkLanguages: {
			status: "strong",
			details: "15+ languages (JS, Python, Go, PHP, etc.)",
		},
		apiAccess: { status: "strong", details: "Full REST API" },
		dataWarehouse: {
			status: "strong",
			details: "Export to Snowflake, BigQuery",
		},
		sqlAccess: { status: "strong", details: "SQL query interface" },
		documentation: { status: "strong", details: "Excellent documentation" },
		gdprCompliant: { status: "strong", details: "GDPR compliant" },
		cookieless: {
			status: "partial",
			details: "Cookie-based by default, can configure",
		},
		dataResidency: { status: "strong", details: "US & EU regions" },
		anonymization: { status: "strong", details: "Data anonymization" },
		compliance: { status: "strong", details: "SOC 2, GDPR" },
		freeTier: { status: "strong", details: "1M events/month free" },
		pricingModel: {
			status: "strong",
			details: "Pay-as-you-go per event ($0.00005/event)",
		},
		openSource: { status: "strong", details: "MIT license" },
		selfHosted: {
			status: "strong",
			details: "Docker/Kubernetes self-host",
		},
		cloudHosted: { status: "strong", details: "PostHog Cloud (US & EU)" },
		cdp: {
			status: "strong",
			details: "Segment, RudderStack integration",
		},
		marketing: {
			status: "strong",
			details: "Hubspot, Salesforce, Intercom",
		},
		datatools: {
			status: "strong",
			details: "Snowflake, BigQuery, S3",
		},
		webhooks: { status: "strong", details: "Webhooks & actions" },
	},
};
