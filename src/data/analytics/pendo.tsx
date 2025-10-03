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
	},
	features: {
		autoCapture: {
			status: "strong",
			details: "Auto-capture all clicks",
		},
		customEvents: { status: "strong", details: "Track events & metadata" },
		userProperties: { status: "strong", details: "User metadata" },
		groupAnalytics: { status: "strong", details: "Account-level data" },
		retroactiveAnalysis: {
			status: "strong",
			details: "Define events retroactively",
		},
		funnels: { status: "strong", details: "Funnel analysis" },
		retention: { status: "strong", details: "Retention reports" },
		cohorts: { status: "strong", details: "Segments" },
		pathAnalysis: { status: "strong", details: "Path analysis" },
		trends: { status: "strong", details: "Usage trends" },
		dashboards: { status: "strong", details: "Custom dashboards" },
		realtime: { status: "partial", details: "Near real-time" },
		customReports: { status: "strong", details: "Report builder" },
		dataExploration: { status: "strong", details: "Pendo Analyze" },
		alerts: { status: "partial", details: "Basic alerts" },
		sessionReplay: { status: "strong", details: "Session replay" },
		heatmaps: { status: "strong", details: "Page heatmaps" },
		userProfiles: { status: "strong", details: "Visitor profiles" },
		userJourneys: { status: "strong", details: "User paths" },
		attribution: { status: "partial", details: "Feature adoption" },
		abTesting: { status: "partial", details: "Guide experiments" },
		featureFlags: { status: "none", details: "Not available" },
		experiments: { status: "partial", details: "Limited testing" },
		statisticalAnalysis: {
			status: "partial",
			details: "Basic stats",
		},
		sdkLanguages: {
			status: "strong",
			details: "JS, iOS, Android, React Native",
		},
		apiAccess: { status: "strong", details: "REST API" },
		dataWarehouse: {
			status: "strong",
			details: "Data Sync to warehouse",
		},
		sqlAccess: { status: "none", details: "Not available" },
		documentation: { status: "strong", details: "Detailed docs" },
		gdprCompliant: { status: "strong", details: "GDPR compliant" },
		cookieless: { status: "partial", details: "Cookie-based" },
		dataResidency: { status: "partial", details: "US, EU" },
		anonymization: { status: "strong", details: "Data deletion" },
		compliance: { status: "strong", details: "SOC 2, GDPR" },
		freeTier: { status: "strong", details: "Starter: Free up to 500 MAUs" },
		pricingModel: {
			status: "strong",
			details: "Growth: Starting at $7,000/year",
		},
		openSource: { status: "none", details: "Proprietary" },
		selfHosted: { status: "none", details: "Cloud-only" },
		cloudHosted: { status: "strong", details: "Fully managed" },
		cdp: { status: "partial", details: "Limited integrations" },
		marketing: { status: "partial", details: "Salesforce, HubSpot" },
		datatools: {
			status: "strong",
			details: "Snowflake, BigQuery, Redshift",
		},
		webhooks: { status: "strong", details: "Webhooks" },
	},
};
