import type { Provider } from "../../types/comparison";

function HeapLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Heap</title>
			<rect width="24" height="24" rx="4" fill="#8A00FF" />
			<path
				d="M12 8L16 12L12 16H8L12 12L8 8H12Z"
				fill="white"
				fillOpacity="0.9"
			/>
		</svg>
	);
}

export const heap: Provider = {
	name: "Heap",
	logo: <HeapLogo />,
	website: "https://heap.io",
	tagline: {

		status: "strong",

		details: "Automatic event tracking for product analytics",

		reference: "https://heap.io/pricing",
	},
	features: {
		autoCapture: {

			status: "strong",

			details: "Complete auto-capture of all events",

			reference: "https://heap.io/pricing",
		},
		customEvents: { status: "strong", details: "Custom event tracking", reference: "https://heap.io/pricing" },
		userProperties: { status: "strong", details: "User properties", reference: "https://heap.io/pricing" },
		groupAnalytics: {

			status: "strong",

			details: "Account-level analytics",

			reference: "https://heap.io/pricing",
		},
		retroactiveAnalysis: {

			status: "strong",

			details: "Define events retroactively",

			reference: "https://heap.io/pricing",
		},
		funnels: { status: "strong", details: "Conversion funnels", reference: "https://heap.io/pricing" },
		retention: { status: "strong", details: "Retention analysis", reference: "https://heap.io/pricing" },
		cohorts: { status: "strong", details: "User segments", reference: "https://heap.io/pricing" },
		pathAnalysis: { status: "strong", details: "User journeys", reference: "https://heap.io/pricing" },
		trends: { status: "strong", details: "Event trends", reference: "https://heap.io/pricing" },
		dashboards: { status: "strong", details: "Custom dashboards", reference: "https://heap.io/pricing" },
		realtime: { status: "partial", details: "Near real-time", reference: "https://heap.io/pricing" },
		customReports: { status: "strong", details: "Saved reports", reference: "https://heap.io/pricing" },
		dataExploration: { status: "strong", details: "Heap Explore UI", reference: "https://heap.io/pricing" },
		alerts: { status: "strong", details: "Anomaly detection", reference: "https://heap.io/pricing" },
		sessionReplay: { status: "strong", details: "Session replay", reference: "https://heap.io/pricing" },
		heatmaps: { status: "strong", details: "Click heatmaps", reference: "https://heap.io/pricing" },
		userProfiles: { status: "strong", details: "User profiles", reference: "https://heap.io/pricing" },
		userJourneys: { status: "strong", details: "User paths", reference: "https://heap.io/pricing" },
		attribution: { status: "strong", details: "Impact analysis", reference: "https://heap.io/pricing" },
		abTesting: { status: "partial", details: "Basic testing", reference: "https://heap.io/pricing" },
		featureFlags: { status: "none", details: "Not available", reference: "https://heap.io/pricing" },
		experiments: { status: "partial", details: "Limited experiments", reference: "https://heap.io/pricing" },
		statisticalAnalysis: {

			status: "partial",

			details: "Basic stats",

			reference: "https://heap.io/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "10+ languages (JS, iOS, Android, etc.)",

			reference: "https://developers.heap.io",
		},
		apiAccess: { status: "strong", details: "REST API", reference: "https://developers.heap.io" },
		dataWarehouse: { status: "strong", details: "Data warehouse sync", reference: "https://heap.io/pricing" },
		sqlAccess: { status: "strong", details: "SQL access", reference: "https://heap.io/pricing" },
		documentation: { status: "strong", details: "Comprehensive docs", reference: "https://developers.heap.io" },
		gdprCompliant: { status: "strong", details: "GDPR compliant", reference: "https://heap.io/privacy" },
		cookieless: { status: "partial", details: "Cookie-based", reference: "https://heap.io/privacy" },
		dataResidency: { status: "partial", details: "US, EU", reference: "https://heap.io/privacy" },
		anonymization: { status: "strong", details: "Data deletion", reference: "https://heap.io/privacy" },
		compliance: { status: "strong", details: "SOC 2, GDPR", reference: "https://heap.io/privacy" },
		freeTier: {

			status: "strong",

			details: "Free: 10K sessions/month",

			reference: "https://heap.io/pricing",
		},
		pricingModel: {

			status: "strong",

			details: "Growth: Starting at $3,600/year",

			reference: "https://heap.io/pricing",
		},
		openSource: { status: "none", details: "Proprietary", reference: "https://heap.io/pricing" },
		selfHosted: { status: "none", details: "Cloud-only", reference: "https://heap.io/pricing" },
		cloudHosted: { status: "strong", details: "Fully managed", reference: "https://heap.io/pricing" },
		cdp: { status: "strong", details: "Segment, mParticle", reference: "https://heap.io/pricing" },
		marketing: { status: "strong", details: "Salesforce, Marketo", reference: "https://heap.io/pricing" },
		datatools: {

			status: "strong",

			details: "Snowflake, BigQuery, Redshift",

			reference: "https://heap.io/pricing",
		},
		webhooks: { status: "strong", details: "Webhooks", reference: "https://heap.io/pricing" },
	},
};
