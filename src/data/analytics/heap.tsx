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
	},
	features: {
		autoCapture: {
			status: "strong",
			details: "Complete auto-capture of all events",
		},
		customEvents: { status: "strong", details: "Custom event tracking" },
		userProperties: { status: "strong", details: "User properties" },
		groupAnalytics: {
			status: "strong",
			details: "Account-level analytics",
		},
		retroactiveAnalysis: {
			status: "strong",
			details: "Define events retroactively",
		},
		funnels: { status: "strong", details: "Conversion funnels" },
		retention: { status: "strong", details: "Retention analysis" },
		cohorts: { status: "strong", details: "User segments" },
		pathAnalysis: { status: "strong", details: "User journeys" },
		trends: { status: "strong", details: "Event trends" },
		dashboards: { status: "strong", details: "Custom dashboards" },
		realtime: { status: "partial", details: "Near real-time" },
		customReports: { status: "strong", details: "Saved reports" },
		dataExploration: { status: "strong", details: "Heap Explore UI" },
		alerts: { status: "strong", details: "Anomaly detection" },
		sessionReplay: { status: "strong", details: "Session replay" },
		heatmaps: { status: "strong", details: "Click heatmaps" },
		userProfiles: { status: "strong", details: "User profiles" },
		userJourneys: { status: "strong", details: "User paths" },
		attribution: { status: "strong", details: "Impact analysis" },
		abTesting: { status: "partial", details: "Basic testing" },
		featureFlags: { status: "none", details: "Not available" },
		experiments: { status: "partial", details: "Limited experiments" },
		statisticalAnalysis: {
			status: "partial",
			details: "Basic stats",
		},
		sdkLanguages: {
			status: "strong",
			details: "10+ languages (JS, iOS, Android, etc.)",
		},
		apiAccess: { status: "strong", details: "REST API" },
		dataWarehouse: { status: "strong", details: "Data warehouse sync" },
		sqlAccess: { status: "strong", details: "SQL access" },
		documentation: { status: "strong", details: "Comprehensive docs" },
		gdprCompliant: { status: "strong", details: "GDPR compliant" },
		cookieless: { status: "partial", details: "Cookie-based" },
		dataResidency: { status: "partial", details: "US, EU" },
		anonymization: { status: "strong", details: "Data deletion" },
		compliance: { status: "strong", details: "SOC 2, GDPR" },
		freeTier: {
			status: "strong",
			details: "Free: 10K sessions/month",
		},
		pricingModel: {
			status: "strong",
			details: "Growth: Starting at $3,600/year",
		},
		openSource: { status: "none", details: "Proprietary" },
		selfHosted: { status: "none", details: "Cloud-only" },
		cloudHosted: { status: "strong", details: "Fully managed" },
		cdp: { status: "strong", details: "Segment, mParticle" },
		marketing: { status: "strong", details: "Salesforce, Marketo" },
		datatools: {
			status: "strong",
			details: "Snowflake, BigQuery, Redshift",
		},
		webhooks: { status: "strong", details: "Webhooks" },
	},
};
