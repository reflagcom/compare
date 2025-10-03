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

		reference: "",
	},
	features: {
		autoCapture: { 
			status: "partial", 
			details: "Limited auto-capture",
			reference: "https://mixpanel.com/pricing"
		},
		customEvents: {
			status: "strong",
			details: "Comprehensive event tracking",
			reference: "https://mixpanel.com/pricing"
		},
		userProperties: { 
			status: "strong", 
			details: "User profiles & traits",
			reference: "https://mixpanel.com/pricing"
		},
		groupAnalytics: { 
			status: "strong", 
			details: "Group analytics",
			reference: "https://mixpanel.com/pricing"
		},
		retroactiveAnalysis: {
			status: "strong",
			details: "Retroactive event definitions",
			reference: "https://mixpanel.com/pricing"
		},
		funnels: { 
			status: "strong", 
			details: "Advanced funnel analysis",
			reference: "https://mixpanel.com/pricing"
		},
		retention: { 
			status: "strong", 
			details: "Retention reports",
			reference: "https://mixpanel.com/pricing"
		},
		cohorts: { 
			status: "strong", 
			details: "Behavioral cohorts",
			reference: "https://mixpanel.com/pricing"
		},
		pathAnalysis: { 
			status: "strong", 
			details: "Flow analysis",
			reference: "https://mixpanel.com/pricing"
		},
		trends: { 
			status: "strong", 
			details: "Trend analysis",
			reference: "https://mixpanel.com/pricing"
		},
		dashboards: { 
			status: "strong", 
			details: "Custom dashboards",
			reference: "https://mixpanel.com/pricing"
		},
		realtime: { 
			status: "strong", 
			details: "Live view",
			reference: "https://mixpanel.com/pricing"
		},
		customReports: { 
			status: "strong", 
			details: "Custom reports",
			reference: "https://mixpanel.com/pricing"
		},
		dataExploration: { 
			status: "strong", 
			details: "Visual exploration",
			reference: "https://mixpanel.com/pricing"
		},
		alerts: { 
			status: "strong", 
			details: "Custom alerts",
			reference: "https://mixpanel.com/pricing"
		},
		sessionReplay: {
			status: "strong",
			details: "10K replays/mo free, 20K on Growth plan",
			reference: "https://mixpanel.com/pricing"
		},
		heatmaps: { 
			status: "none", 
			details: "Not available",
			reference: "https://mixpanel.com/pricing"
		},
		userProfiles: { 
			status: "strong", 
			details: "User profiles",
			reference: "https://mixpanel.com/pricing"
		},
		userJourneys: { 
			status: "strong", 
			details: "User flows",
			reference: "https://mixpanel.com/pricing"
		},
		attribution: { 
			status: "strong", 
			details: "Impact analysis",
			reference: "https://mixpanel.com/pricing"
		},
		abTesting: { 
			status: "none", 
			details: "Not built-in",
			reference: "https://mixpanel.com/pricing"
		},
		featureFlags: { 
			status: "none", 
			details: "Not built-in",
			reference: "https://mixpanel.com/pricing"
		},
		experiments: { 
			status: "none", 
			details: "Via third-party",
			reference: "https://mixpanel.com/pricing"
		},
		statisticalAnalysis: {
			status: "partial",
			details: "Basic significance testing",
			reference: "https://mixpanel.com/pricing"
		},
		sdkLanguages: {
			status: "strong",
			details: "20+ languages (JS, Python, Swift, etc.)",
			reference: "https://docs.mixpanel.com/docs/sdks"
		},
		apiAccess: { 
			status: "strong", 
			details: "Data & query API",
			reference: "https://developer.mixpanel.com/reference/overview"
		},
		dataWarehouse: {
			status: "strong",
			details: "Data pipelines & exports",
			reference: "https://docs.mixpanel.com/docs/data-pipelines/integrations"
		},
		sqlAccess: { 
			status: "strong", 
			details: "JQL (Mixpanel Query Language)",
			reference: "https://docs.mixpanel.com/docs/data-pipelines/jql"
		},
		documentation: { 
			status: "strong", 
			details: "Comprehensive docs",
			reference: "https://docs.mixpanel.com"
		},
		gdprCompliant: { 
			status: "strong", 
			details: "GDPR compliant",
			reference: "https://mixpanel.com/legal/privacy-policy"
		},
		cookieless: { 
			status: "partial", 
			details: "Cookie-based default",
			reference: "https://docs.mixpanel.com/docs/privacy/cookies"
		},
		dataResidency: { 
			status: "strong", 
			details: "US & EU data centers",
			reference: "https://mixpanel.com/legal/privacy-policy"
		},
		anonymization: { 
			status: "strong", 
			details: "Data deletion tools",
			reference: "https://docs.mixpanel.com/docs/privacy/user-privacy"
		},
		compliance: { 
			status: "strong", 
			details: "SOC 2, GDPR, CCPA",
			reference: "https://mixpanel.com/legal/privacy-policy"
		},
		freeTier: { 
			status: "strong", 
			details: "Free up to 1M events/month",
			reference: "https://mixpanel.com/pricing"
		},
		pricingModel: {
			status: "strong",
			details: "Growth: $0.28 per 1K events after 1M free",
			reference: "https://mixpanel.com/pricing"
		},
		openSource: { 
			status: "none", 
			details: "Proprietary",
			reference: "https://mixpanel.com"
		},
		selfHosted: { 
			status: "none", 
			details: "Cloud-only",
			reference: "https://mixpanel.com/pricing"
		},
		cloudHosted: { 
			status: "strong", 
			details: "Fully managed SaaS",
			reference: "https://mixpanel.com/pricing"
		},
		cdp: { 
			status: "strong", 
			details: "Segment, mParticle",
			reference: "https://docs.mixpanel.com/docs/data-pipelines/integrations"
		},
		marketing: { 
			status: "strong", 
			details: "Salesforce, Marketo, Braze",
			reference: "https://docs.mixpanel.com/docs/data-pipelines/integrations"
		},
		datatools: {
			status: "strong",
			details: "Snowflake, BigQuery, Redshift",
			reference: "https://docs.mixpanel.com/docs/data-pipelines/integrations"
		},
		webhooks: { 
			status: "strong", 
			details: "Webhooks available",
			reference: "https://developer.mixpanel.com/reference/raw-data-export-api"
		},
	},
};
