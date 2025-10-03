import type { Provider } from "../../types/comparison";

function GoogleAnalyticsLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Google Analytics 4</title>
			<rect width="24" height="24" rx="4" fill="#FFA000" />
			<path
				d="M12 6C13.1 6 14 6.9 14 8V16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16V8C10 6.9 10.9 6 12 6Z"
				fill="white"
				fillOpacity="0.9"
			/>
			<circle cx="7" cy="16" r="2" fill="white" fillOpacity="0.7" />
			<path
				d="M17 10C18.1 10 19 10.9 19 12V16C19 17.1 18.1 18 17 18C15.9 18 15 17.1 15 16V12C15 10.9 15.9 10 17 10Z"
				fill="white"
				fillOpacity="0.8"
			/>
		</svg>
	);
}

export const ga4: Provider = {
	name: "Google Analytics 4",
	logo: <GoogleAnalyticsLogo />,
	website: "https://analytics.google.com",
	tagline: {
		status: "strong",
		details: "Industry-standard web analytics",
	},
	features: {
		autoCapture: { status: "partial", details: "Enhanced measurement" },
		customEvents: { status: "strong", details: "Custom event tracking" },
		userProperties: { status: "strong", details: "User properties" },
		groupAnalytics: { status: "none", details: "Not available" },
		retroactiveAnalysis: {
			status: "none",
			details: "Not available",
		},
		funnels: { status: "strong", details: "Funnel exploration" },
		retention: { status: "partial", details: "Basic retention" },
		cohorts: { status: "strong", details: "Audiences" },
		pathAnalysis: { status: "strong", details: "Path exploration" },
		trends: { status: "strong", details: "Event trends" },
		dashboards: { status: "strong", details: "Custom dashboards" },
		realtime: { status: "strong", details: "Real-time reports" },
		customReports: { status: "strong", details: "Custom reports" },
		dataExploration: { status: "strong", details: "Explore UI" },
		alerts: { status: "strong", details: "Custom alerts" },
		sessionReplay: { status: "none", details: "Not available" },
		heatmaps: { status: "none", details: "Not available" },
		userProfiles: { status: "none", details: "Not available" },
		userJourneys: { status: "strong", details: "User paths" },
		attribution: { status: "strong", details: "Attribution modeling" },
		abTesting: { status: "partial", details: "Via Google Optimize" },
		featureFlags: { status: "none", details: "Not available" },
		experiments: { status: "partial", details: "Via Google Optimize" },
		statisticalAnalysis: {
			status: "partial",
			details: "Basic stats",
		},
		sdkLanguages: {
			status: "strong",
			details: "gtag.js, Firebase SDKs",
		},
		apiAccess: { status: "strong", details: "Data API" },
		dataWarehouse: { status: "strong", details: "BigQuery export" },
		sqlAccess: { status: "strong", details: "BigQuery SQL" },
		documentation: { status: "strong", details: "Extensive docs" },
		gdprCompliant: { status: "strong", details: "GDPR features" },
		cookieless: { status: "partial", details: "Cookie-based" },
		dataResidency: { status: "partial", details: "Google-controlled" },
		anonymization: { status: "strong", details: "IP anonymization" },
		compliance: { status: "strong", details: "Google compliance" },
		freeTier: { status: "strong", details: "Free: 10M events/month" },
		pricingModel: {
			status: "strong",
			details: "GA4 360: Custom pricing",
		},
		openSource: { status: "none", details: "Proprietary" },
		selfHosted: { status: "none", details: "Cloud-only" },
		cloudHosted: { status: "strong", details: "Google Cloud" },
		cdp: { status: "partial", details: "Limited integrations" },
		marketing: { status: "strong", details: "Google Ads, Search Console" },
		datatools: { status: "strong", details: "BigQuery, Data Studio" },
		webhooks: { status: "none", details: "Not available" },
	},
};
