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
	},
	features: {
		autoCapture: { status: "partial", details: "Limited auto-tracking" },
		customEvents: { status: "strong", details: "Custom event tracking" },
		userProperties: { status: "strong", details: "User properties" },
		groupAnalytics: { status: "strong", details: "Account-level analytics" },
		retroactiveAnalysis: {
			status: "strong",
			details: "Govern events retroactively",
		},
		funnels: { status: "strong", details: "Conversion funnels" },
		retention: { status: "strong", details: "Retention analysis" },
		cohorts: { status: "strong", details: "Behavioral cohorts" },
		pathAnalysis: { status: "strong", details: "Pathfinder analysis" },
		trends: { status: "strong", details: "Event segmentation" },
		dashboards: { status: "strong", details: "Custom dashboards" },
		realtime: { status: "partial", details: "Near real-time" },
		customReports: { status: "strong", details: "Saved reports" },
		dataExploration: {
			status: "strong",
			details: "Amplitude Analytics UI",
		},
		alerts: { status: "strong", details: "Anomaly detection" },
		sessionReplay: {
			status: "strong",
			details: "Session Replay (via acquisition)",
		},
		heatmaps: { status: "none", details: "Not available" },
		userProfiles: { status: "strong", details: "User lookup" },
		userJourneys: { status: "strong", details: "User journey maps" },
		attribution: { status: "strong", details: "Impact analysis" },
		abTesting: { status: "strong", details: "Amplitude Experiment" },
		featureFlags: { status: "strong", details: "Feature flags included" },
		experiments: { status: "strong", details: "Full experimentation" },
		statisticalAnalysis: {
			status: "strong",
			details: "Sequential testing",
		},
		sdkLanguages: {
			status: "strong",
			details: "15+ languages (JS, iOS, Android, etc.)",
		},
		apiAccess: { status: "strong", details: "REST & GraphQL APIs" },
		dataWarehouse: { status: "strong", details: "Data streaming" },
		sqlAccess: { status: "partial", details: "Limited SQL access" },
		documentation: { status: "strong", details: "Detailed documentation" },
		gdprCompliant: { status: "strong", details: "GDPR compliant" },
		cookieless: { status: "partial", details: "Cookie-based" },
		dataResidency: { status: "strong", details: "Multi-region support" },
		anonymization: { status: "strong", details: "User deletion" },
		compliance: { status: "strong", details: "SOC 2, GDPR, HIPAA" },
		freeTier: {
			status: "strong",
			details: "Starter: 50K MTUs (Monthly Tracked Users), up to 10M events",
		},
		pricingModel: {
			status: "strong",
			details: "Plus: $49/mo for 300K MTUs at $0.049/MTU",
		},
		openSource: { status: "none", details: "Proprietary" },
		selfHosted: { status: "none", details: "Cloud-only" },
		cloudHosted: { status: "strong", details: "Fully managed" },
		cdp: { status: "strong", details: "Segment, mParticle, Tealium" },
		marketing: { status: "strong", details: "Salesforce, Braze, Iterable" },
		datatools: {
			status: "strong",
			details: "Snowflake, BigQuery, S3",
		},
		webhooks: { status: "strong", details: "Cohort syncing" },
	},
};
