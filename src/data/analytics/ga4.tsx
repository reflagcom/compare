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

		reference: "https://support.google.com/analytics/answer/9306384",
	},
	features: {
		autoCapture: { status: "partial", details: "Enhanced measurement", reference: "https://support.google.com/analytics/answer/9306384" },
		customEvents: { status: "strong", details: "Custom event tracking", reference: "https://support.google.com/analytics/answer/9306384" },
		userProperties: { status: "strong", details: "User properties", reference: "https://support.google.com/analytics/answer/9306384" },
		groupAnalytics: { status: "none", details: "Not available", reference: "https://support.google.com/analytics/answer/9306384" },
		retroactiveAnalysis: {

			status: "none",

			details: "Not available",

			reference: "https://support.google.com/analytics/answer/9306384",
		},
		funnels: { status: "strong", details: "Funnel exploration", reference: "https://support.google.com/analytics/answer/9306384" },
		retention: { status: "partial", details: "Basic retention", reference: "https://support.google.com/analytics/answer/9306384" },
		cohorts: { status: "strong", details: "Audiences", reference: "https://support.google.com/analytics/answer/9306384" },
		pathAnalysis: { status: "strong", details: "Path exploration", reference: "https://support.google.com/analytics/answer/9306384" },
		trends: { status: "strong", details: "Event trends", reference: "https://support.google.com/analytics/answer/9306384" },
		dashboards: { status: "strong", details: "Custom dashboards", reference: "https://support.google.com/analytics/answer/9306384" },
		realtime: { status: "strong", details: "Real-time reports", reference: "https://support.google.com/analytics/answer/9306384" },
		customReports: { status: "strong", details: "Custom reports", reference: "https://support.google.com/analytics/answer/9306384" },
		dataExploration: { status: "strong", details: "Explore UI", reference: "https://support.google.com/analytics/answer/9306384" },
		alerts: { status: "strong", details: "Custom alerts", reference: "https://support.google.com/analytics/answer/9306384" },
		sessionReplay: { status: "none", details: "Not available", reference: "https://support.google.com/analytics/answer/9306384" },
		heatmaps: { status: "none", details: "Not available", reference: "https://support.google.com/analytics/answer/9306384" },
		userProfiles: { status: "none", details: "Not available", reference: "https://support.google.com/analytics/answer/9306384" },
		userJourneys: { status: "strong", details: "User paths", reference: "https://support.google.com/analytics/answer/9306384" },
		attribution: { status: "strong", details: "Attribution modeling", reference: "https://support.google.com/analytics/answer/9306384" },
		abTesting: { status: "partial", details: "Via Google Optimize", reference: "https://support.google.com/analytics/answer/9306384" },
		featureFlags: { status: "none", details: "Not available", reference: "https://support.google.com/analytics/answer/9306384" },
		experiments: { status: "partial", details: "Via Google Optimize", reference: "https://support.google.com/analytics/answer/9306384" },
		statisticalAnalysis: {

			status: "partial",

			details: "Basic stats",

			reference: "https://support.google.com/analytics/answer/9306384",
		},
		sdkLanguages: {

			status: "strong",

			details: "gtag.js, Firebase SDKs",

			reference: "https://developers.google.com/analytics",
		},
		apiAccess: { status: "strong", details: "Data API", reference: "https://developers.google.com/analytics" },
		dataWarehouse: { status: "strong", details: "BigQuery export", reference: "https://support.google.com/analytics/answer/9306384" },
		sqlAccess: { status: "strong", details: "BigQuery SQL", reference: "https://support.google.com/analytics/answer/9306384" },
		documentation: { status: "strong", details: "Extensive docs", reference: "https://developers.google.com/analytics" },
		gdprCompliant: { status: "strong", details: "GDPR features", reference: "https://policies.google.com/privacy" },
		cookieless: { status: "partial", details: "Cookie-based", reference: "https://policies.google.com/privacy" },
		dataResidency: { status: "partial", details: "Google-controlled", reference: "https://policies.google.com/privacy" },
		anonymization: { status: "strong", details: "IP anonymization", reference: "https://policies.google.com/privacy" },
		compliance: { status: "strong", details: "Google compliance", reference: "https://policies.google.com/privacy" },
		freeTier: { status: "strong", details: "Free: 10M events/month", reference: "https://support.google.com/analytics/answer/9306384" },
		pricingModel: {

			status: "strong",

			details: "GA4 360: Custom pricing",

			reference: "https://support.google.com/analytics/answer/9306384",
		},
		openSource: { status: "none", details: "Proprietary", reference: "https://support.google.com/analytics/answer/9306384" },
		selfHosted: { status: "none", details: "Cloud-only", reference: "https://support.google.com/analytics/answer/9306384" },
		cloudHosted: { status: "strong", details: "Google Cloud", reference: "https://support.google.com/analytics/answer/9306384" },
		cdp: { status: "partial", details: "Limited integrations", reference: "https://support.google.com/analytics/answer/9306384" },
		marketing: { status: "strong", details: "Google Ads, Search Console", reference: "https://support.google.com/analytics/answer/9306384" },
		datatools: { status: "strong", details: "BigQuery, Data Studio", reference: "https://support.google.com/analytics/answer/9306384" },
		webhooks: { status: "none", details: "Not available", reference: "https://support.google.com/analytics/answer/9306384" },
	},
};
