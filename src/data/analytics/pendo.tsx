import type { Provider } from "../../types/comparison";

function PendoLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Pendo</title>
			<rect width="24" height="24" rx="4" fill="#1B1464" />
			<circle cx="12" cy="9" r="2.5" fill="white" fillOpacity="0.9" />
			<path
				d="M8 14C8 12.3 9.8 11 12 11C14.2 11 16 12.3 16 14V17H8V14Z"
				fill="white"
				fillOpacity="0.9"
			/>
		</svg>
	);
}

export const pendo: Provider = {
	name: "Pendo",
	logo: <PendoLogo />,
	website: "https://pendo.io",
	tagline: {

		status: "strong",

		details: "Product experience platform with analytics",

		reference: "https://www.pendo.io/pricing",
	},
	features: {
		autoCapture: {

			status: "strong",

			details: "Auto-capture all clicks",

			reference: "https://www.pendo.io/pricing",
		},
		customEvents: { status: "strong", details: "Track events & metadata", reference: "https://www.pendo.io/pricing" },
		userProperties: { status: "strong", details: "User metadata", reference: "https://www.pendo.io/pricing" },
		groupAnalytics: { status: "strong", details: "Account-level data", reference: "https://www.pendo.io/pricing" },
		retroactiveAnalysis: {

			status: "strong",

			details: "Define events retroactively",

			reference: "https://www.pendo.io/pricing",
		},
		funnels: { status: "strong", details: "Funnel analysis", reference: "https://www.pendo.io/pricing" },
		retention: { status: "strong", details: "Retention reports", reference: "https://www.pendo.io/pricing" },
		cohorts: { status: "strong", details: "Segments", reference: "https://www.pendo.io/pricing" },
		pathAnalysis: { status: "strong", details: "Path analysis", reference: "https://www.pendo.io/pricing" },
		trends: { status: "strong", details: "Usage trends", reference: "https://www.pendo.io/pricing" },
		dashboards: { status: "strong", details: "Custom dashboards", reference: "https://www.pendo.io/pricing" },
		realtime: { status: "partial", details: "Near real-time", reference: "https://www.pendo.io/pricing" },
		customReports: { status: "strong", details: "Report builder", reference: "https://www.pendo.io/pricing" },
		dataExploration: { status: "strong", details: "Pendo Analyze", reference: "https://www.pendo.io/pricing" },
		alerts: { status: "partial", details: "Basic alerts", reference: "https://www.pendo.io/pricing" },
		sessionReplay: { status: "strong", details: "Session replay", reference: "https://www.pendo.io/pricing" },
		heatmaps: { status: "strong", details: "Page heatmaps", reference: "https://www.pendo.io/pricing" },
		userProfiles: { status: "strong", details: "Visitor profiles", reference: "https://www.pendo.io/pricing" },
		userJourneys: { status: "strong", details: "User paths", reference: "https://www.pendo.io/pricing" },
		attribution: { status: "partial", details: "Feature adoption", reference: "https://www.pendo.io/pricing" },
		abTesting: { status: "partial", details: "Guide experiments", reference: "https://www.pendo.io/pricing" },
		featureFlags: { status: "none", details: "Not available", reference: "https://www.pendo.io/pricing" },
		experiments: { status: "partial", details: "Limited testing", reference: "https://www.pendo.io/pricing" },
		statisticalAnalysis: {

			status: "partial",

			details: "Basic stats",

			reference: "https://www.pendo.io/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "JS, iOS, Android, React Native",

			reference: "https://support.pendo.io",
		},
		apiAccess: { status: "strong", details: "REST API", reference: "https://support.pendo.io" },
		dataWarehouse: {

			status: "strong",

			details: "Data Sync to warehouse",

			reference: "https://www.pendo.io/pricing",
		},
		sqlAccess: { status: "none", details: "Not available", reference: "https://www.pendo.io/pricing" },
		documentation: { status: "strong", details: "Detailed docs", reference: "https://support.pendo.io" },
		gdprCompliant: { status: "strong", details: "GDPR compliant", reference: "https://www.pendo.io/legal/privacy-policy" },
		cookieless: { status: "partial", details: "Cookie-based", reference: "https://www.pendo.io/legal/privacy-policy" },
		dataResidency: { status: "partial", details: "US, EU", reference: "https://www.pendo.io/legal/privacy-policy" },
		anonymization: { status: "strong", details: "Data deletion", reference: "https://www.pendo.io/legal/privacy-policy" },
		compliance: { status: "strong", details: "SOC 2, GDPR", reference: "https://www.pendo.io/legal/privacy-policy" },
		freeTier: { status: "strong", details: "Starter: Free up to 500 MAUs", reference: "https://www.pendo.io/pricing" },
		pricingModel: {

			status: "strong",

			details: "Growth: Starting at $7,000/year",

			reference: "https://www.pendo.io/pricing",
		},
		openSource: { status: "none", details: "Proprietary", reference: "https://www.pendo.io/pricing" },
		selfHosted: { status: "none", details: "Cloud-only", reference: "https://www.pendo.io/pricing" },
		cloudHosted: { status: "strong", details: "Fully managed", reference: "https://www.pendo.io/pricing" },
		cdp: { status: "partial", details: "Limited integrations", reference: "https://www.pendo.io/pricing" },
		marketing: { status: "partial", details: "Salesforce, HubSpot", reference: "https://www.pendo.io/pricing" },
		datatools: {

			status: "strong",

			details: "Snowflake, BigQuery, Redshift",

			reference: "https://www.pendo.io/pricing",
		},
		webhooks: { status: "strong", details: "Webhooks", reference: "https://www.pendo.io/pricing" },
	},
};
