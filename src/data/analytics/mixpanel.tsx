import type { Provider } from "../../types/comparison";

function MixpanelLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Mixpanel</title>
			<rect width="24" height="24" rx="4" fill="#7856FF" />
			<circle cx="8" cy="12" r="2" fill="white" />
			<circle cx="12" cy="8" r="2" fill="white" />
			<circle cx="16" cy="14" r="2" fill="white" />
		</svg>
	);
}

export const mixpanel: Provider = {
	name: "Mixpanel",
	logo: <MixpanelLogo />,
	website: "https://mixpanel.com",
	tagline: {
		status: "strong",
		details: "Product analytics for mobile and web applications",
	},
	features: {
		autoCapture: { status: "partial", details: "Limited auto-capture" },
		customEvents: {
			status: "strong",
			details: "Comprehensive event tracking",
		},
		userProperties: { status: "strong", details: "User profiles & traits" },
		groupAnalytics: { status: "strong", details: "Group analytics" },
		retroactiveAnalysis: {
			status: "strong",
			details: "Retroactive event definitions",
		},
		funnels: { status: "strong", details: "Advanced funnel analysis" },
		retention: { status: "strong", details: "Retention reports" },
		cohorts: { status: "strong", details: "Behavioral cohorts" },
		pathAnalysis: { status: "strong", details: "Flow analysis" },
		trends: { status: "strong", details: "Trend analysis" },
		dashboards: { status: "strong", details: "Custom dashboards" },
		realtime: { status: "strong", details: "Live view" },
		customReports: { status: "strong", details: "Custom reports" },
		dataExploration: { status: "strong", details: "Visual exploration" },
		alerts: { status: "strong", details: "Custom alerts" },
		sessionReplay: {
			status: "strong",
			details: "10K replays/mo free, 20K on Growth plan",
		},
		heatmaps: { status: "none", details: "Not available" },
		userProfiles: { status: "strong", details: "User profiles" },
		userJourneys: { status: "strong", details: "User flows" },
		attribution: { status: "strong", details: "Impact analysis" },
		abTesting: { status: "none", details: "Not built-in" },
		featureFlags: { status: "none", details: "Not built-in" },
		experiments: { status: "none", details: "Via third-party" },
		statisticalAnalysis: {
			status: "partial",
			details: "Basic significance testing",
		},
		sdkLanguages: {
			status: "strong",
			details: "20+ languages (JS, Python, Swift, etc.)",
		},
		apiAccess: { status: "strong", details: "Data & query API" },
		dataWarehouse: {
			status: "strong",
			details: "Data pipelines & exports",
		},
		sqlAccess: { status: "strong", details: "JQL (Mixpanel Query Language)" },
		documentation: { status: "strong", details: "Comprehensive docs" },
		gdprCompliant: { status: "strong", details: "GDPR compliant" },
		cookieless: { status: "partial", details: "Cookie-based default" },
		dataResidency: { status: "strong", details: "US & EU data centers" },
		anonymization: { status: "strong", details: "Data deletion tools" },
		compliance: { status: "strong", details: "SOC 2, GDPR, CCPA" },
		freeTier: { status: "strong", details: "Free up to 1M events/month" },
		pricingModel: {
			status: "strong",
			details: "Growth: $0.28 per 1K events after 1M free",
		},
		openSource: { status: "none", details: "Proprietary" },
		selfHosted: { status: "none", details: "Cloud-only" },
		cloudHosted: { status: "strong", details: "Fully managed SaaS" },
		cdp: { status: "strong", details: "Segment, mParticle" },
		marketing: { status: "strong", details: "Salesforce, Marketo, Braze" },
		datatools: {
			status: "strong",
			details: "Snowflake, BigQuery, Redshift",
		},
		webhooks: { status: "strong", details: "Webhooks available" },
	},
};
