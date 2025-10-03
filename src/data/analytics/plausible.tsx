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
	},
	features: {
		autoCapture: { status: "strong", details: "Auto-capture pageviews" },
		customEvents: { status: "strong", details: "Custom events" },
		userProperties: { status: "none", details: "Not available" },
		groupAnalytics: { status: "none", details: "Not available" },
		retroactiveAnalysis: {
			status: "none",
			details: "Not available",
		},
		funnels: { status: "strong", details: "Funnel analysis" },
		retention: { status: "none", details: "Not available" },
		cohorts: { status: "none", details: "Not available" },
		pathAnalysis: { status: "none", details: "Not available" },
		trends: { status: "strong", details: "Traffic trends" },
		dashboards: { status: "strong", details: "Single dashboard" },
		realtime: { status: "strong", details: "Real-time visitors" },
		customReports: { status: "partial", details: "Saved filters" },
		dataExploration: {
			status: "partial",
			details: "Simple filtering",
		},
		alerts: { status: "strong", details: "Traffic spike alerts" },
		sessionReplay: { status: "none", details: "Not available" },
		heatmaps: { status: "none", details: "Not available" },
		userProfiles: { status: "none", details: "Not available" },
		userJourneys: { status: "none", details: "Not available" },
		attribution: { status: "strong", details: "UTM tracking" },
		abTesting: { status: "none", details: "Not available" },
		featureFlags: { status: "none", details: "Not available" },
		experiments: { status: "none", details: "Not available" },
		statisticalAnalysis: {
			status: "none",
			details: "Not available",
		},
		sdkLanguages: {
			status: "partial",
			details: "JS script + community SDKs",
		},
		apiAccess: { status: "strong", details: "Stats & Events API" },
		dataWarehouse: { status: "none", details: "Not available" },
		sqlAccess: { status: "none", details: "Not available" },
		documentation: { status: "strong", details: "Clear docs" },
		gdprCompliant: { status: "strong", details: "GDPR by default" },
		cookieless: { status: "strong", details: "Cookieless tracking" },
		dataResidency: { status: "strong", details: "EU, US options" },
		anonymization: { status: "strong", details: "No PII collected" },
		compliance: { status: "strong", details: "GDPR, CCPA, PECR" },
		freeTier: { status: "none", details: "No free tier" },
		pricingModel: {
			status: "strong",
			details: "$9/mo for 10K pageviews",
		},
		openSource: { status: "strong", details: "AGPLv3 license" },
		selfHosted: { status: "strong", details: "Self-hosted option" },
		cloudHosted: { status: "strong", details: "Managed cloud" },
		cdp: { status: "none", details: "Not available" },
		marketing: { status: "partial", details: "Limited integrations" },
		datatools: { status: "none", details: "Not available" },
		webhooks: { status: "none", details: "Not available" },
	},
};
