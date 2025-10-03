import type { Provider } from "../../types/comparison";

function PlausibleLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Plausible</title>
			<rect width="24" height="24" rx="4" fill="#5850EC" />
			<path
				d="M8 16V12L12 8L16 12V16"
				stroke="white"
				strokeWidth="2"
				fill="none"
				strokeOpacity="0.9"
			/>
		</svg>
	);
}

export const plausible: Provider = {
	name: "Plausible",
	logo: <PlausibleLogo />,
	website: "https://plausible.io",
	tagline: {

		status: "strong",

		details: "Privacy-first, lightweight analytics",

		reference: "https://plausible.io/pricing",
	},
	features: {
		autoCapture: { status: "strong", details: "Auto-capture pageviews", reference: "https://plausible.io/pricing" },
		customEvents: { status: "strong", details: "Custom events", reference: "https://plausible.io/pricing" },
		userProperties: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		groupAnalytics: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		retroactiveAnalysis: {

			status: "none",

			details: "Not available",

			reference: "https://plausible.io/pricing",
		},
		funnels: { status: "strong", details: "Funnel analysis", reference: "https://plausible.io/pricing" },
		retention: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		cohorts: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		pathAnalysis: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		trends: { status: "strong", details: "Traffic trends", reference: "https://plausible.io/pricing" },
		dashboards: { status: "strong", details: "Single dashboard", reference: "https://plausible.io/pricing" },
		realtime: { status: "strong", details: "Real-time visitors", reference: "https://plausible.io/pricing" },
		customReports: { status: "partial", details: "Saved filters", reference: "https://plausible.io/pricing" },
		dataExploration: {

			status: "partial",

			details: "Simple filtering",

			reference: "https://plausible.io/pricing",
		},
		alerts: { status: "strong", details: "Traffic spike alerts", reference: "https://plausible.io/pricing" },
		sessionReplay: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		heatmaps: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		userProfiles: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		userJourneys: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		attribution: { status: "strong", details: "UTM tracking", reference: "https://plausible.io/pricing" },
		abTesting: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		featureFlags: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		experiments: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		statisticalAnalysis: {

			status: "none",

			details: "Not available",

			reference: "https://plausible.io/pricing",
		},
		sdkLanguages: {

			status: "partial",

			details: "JS script + community SDKs",

			reference: "https://plausible.io/docs",
		},
		apiAccess: { status: "strong", details: "Stats & Events API", reference: "https://plausible.io/docs" },
		dataWarehouse: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		sqlAccess: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		documentation: { status: "strong", details: "Clear docs", reference: "https://plausible.io/docs" },
		gdprCompliant: { status: "strong", details: "GDPR by default", reference: "https://plausible.io/privacy" },
		cookieless: { status: "strong", details: "Cookieless tracking", reference: "https://plausible.io/privacy" },
		dataResidency: { status: "strong", details: "EU, US options", reference: "https://plausible.io/privacy" },
		anonymization: { status: "strong", details: "No PII collected", reference: "https://plausible.io/privacy" },
		compliance: { status: "strong", details: "GDPR, CCPA, PECR", reference: "https://plausible.io/privacy" },
		freeTier: { status: "none", details: "No free tier", reference: "https://plausible.io/pricing" },
		pricingModel: {

			status: "strong",

			details: "$9/mo for 10K pageviews",

			reference: "https://plausible.io/pricing",
		},
		openSource: { status: "strong", details: "AGPLv3 license", reference: "https://plausible.io/pricing" },
		selfHosted: { status: "strong", details: "Self-hosted option", reference: "https://plausible.io/pricing" },
		cloudHosted: { status: "strong", details: "Managed cloud", reference: "https://plausible.io/pricing" },
		cdp: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		marketing: { status: "partial", details: "Limited integrations", reference: "https://plausible.io/pricing" },
		datatools: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
		webhooks: { status: "none", details: "Not available", reference: "https://plausible.io/pricing" },
	},
};
