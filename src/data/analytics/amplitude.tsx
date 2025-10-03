import type { Provider } from "../../types/comparison";

function AmplitudeLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Amplitude</title>
			<rect width="24" height="24" rx="4" fill="#011E5E" />
			<path d="M8 16L12 8L16 12L12 16L8 16Z" fill="white" fillOpacity="0.9" />
		</svg>
	);
}

export const amplitude: Provider = {
	name: "Amplitude",
	logo: <AmplitudeLogo />,
	website: "https://amplitude.com",
	tagline: {

		status: "strong",

		details: "Digital analytics platform for product teams",

		reference: "https://amplitude.com/pricing",
	},
	features: {
		autoCapture: { status: "partial", details: "Limited auto-tracking", reference: "https://amplitude.com/pricing" },
		customEvents: { status: "strong", details: "Custom event tracking", reference: "https://amplitude.com/pricing" },
		userProperties: { status: "strong", details: "User properties", reference: "https://amplitude.com/pricing" },
		groupAnalytics: { status: "strong", details: "Account-level analytics", reference: "https://amplitude.com/pricing" },
		retroactiveAnalysis: {

			status: "strong",

			details: "Govern events retroactively",

			reference: "https://amplitude.com/pricing",
		},
		funnels: { status: "strong", details: "Conversion funnels", reference: "https://amplitude.com/pricing" },
		retention: { status: "strong", details: "Retention analysis", reference: "https://amplitude.com/pricing" },
		cohorts: { status: "strong", details: "Behavioral cohorts", reference: "https://amplitude.com/pricing" },
		pathAnalysis: { status: "strong", details: "Pathfinder analysis", reference: "https://amplitude.com/pricing" },
		trends: { status: "strong", details: "Event segmentation", reference: "https://amplitude.com/pricing" },
		dashboards: { status: "strong", details: "Custom dashboards", reference: "https://amplitude.com/pricing" },
		realtime: { status: "partial", details: "Near real-time", reference: "https://amplitude.com/pricing" },
		customReports: { status: "strong", details: "Saved reports", reference: "https://amplitude.com/pricing" },
		dataExploration: {

			status: "strong",

			details: "Amplitude Analytics UI",

			reference: "https://amplitude.com/pricing",
		},
		alerts: { status: "strong", details: "Anomaly detection", reference: "https://amplitude.com/pricing" },
		sessionReplay: {

			status: "strong",

			details: "Session Replay (via acquisition)",

			reference: "https://amplitude.com/pricing",
		},
		heatmaps: { status: "none", details: "Not available", reference: "https://amplitude.com/pricing" },
		userProfiles: { status: "strong", details: "User lookup", reference: "https://amplitude.com/pricing" },
		userJourneys: { status: "strong", details: "User journey maps", reference: "https://amplitude.com/pricing" },
		attribution: { status: "strong", details: "Impact analysis", reference: "https://amplitude.com/pricing" },
		abTesting: { status: "strong", details: "Amplitude Experiment", reference: "https://amplitude.com/pricing" },
		featureFlags: { status: "strong", details: "Feature flags included", reference: "https://amplitude.com/pricing" },
		experiments: { status: "strong", details: "Full experimentation", reference: "https://amplitude.com/pricing" },
		statisticalAnalysis: {

			status: "strong",

			details: "Sequential testing",

			reference: "https://amplitude.com/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "15+ languages (JS, iOS, Android, etc.)",

			reference: "https://www.docs.developers.amplitude.com",
		},
		apiAccess: { status: "strong", details: "REST & GraphQL APIs", reference: "https://www.docs.developers.amplitude.com" },
		dataWarehouse: { status: "strong", details: "Data streaming", reference: "https://amplitude.com/pricing" },
		sqlAccess: { status: "partial", details: "Limited SQL access", reference: "https://amplitude.com/pricing" },
		documentation: { status: "strong", details: "Detailed documentation", reference: "https://www.docs.developers.amplitude.com" },
		gdprCompliant: { status: "strong", details: "GDPR compliant", reference: "https://amplitude.com/privacy" },
		cookieless: { status: "partial", details: "Cookie-based", reference: "https://amplitude.com/privacy" },
		dataResidency: { status: "strong", details: "Multi-region support", reference: "https://amplitude.com/privacy" },
		anonymization: { status: "strong", details: "User deletion", reference: "https://amplitude.com/privacy" },
		compliance: { status: "strong", details: "SOC 2, GDPR, HIPAA", reference: "https://amplitude.com/privacy" },
		freeTier: {

			status: "strong",

			details: "Starter: 50K MTUs (Monthly Tracked Users), up to 10M events",

			reference: "https://amplitude.com/pricing",
		},
		pricingModel: {

			status: "strong",

			details: "Plus: $49/mo for 300K MTUs at $0.049/MTU",

			reference: "https://amplitude.com/pricing",
		},
		openSource: { status: "none", details: "Proprietary", reference: "https://amplitude.com/pricing" },
		selfHosted: { status: "none", details: "Cloud-only", reference: "https://amplitude.com/pricing" },
		cloudHosted: { status: "strong", details: "Fully managed", reference: "https://amplitude.com/pricing" },
		cdp: { status: "strong", details: "Segment, mParticle, Tealium", reference: "https://amplitude.com/pricing" },
		marketing: { status: "strong", details: "Salesforce, Braze, Iterable", reference: "https://amplitude.com/pricing" },
		datatools: {

			status: "strong",

			details: "Snowflake, BigQuery, S3",

			reference: "https://amplitude.com/pricing",
		},
		webhooks: { status: "strong", details: "Cohort syncing", reference: "https://amplitude.com/pricing" },
	},
};
