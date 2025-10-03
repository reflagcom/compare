import type { Provider } from "../../types/comparison";

function SegmentLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Segment</title>
			<rect width="24" height="24" rx="4" fill="#52BD94" />
			<circle cx="12" cy="12" r="3" fill="white" fillOpacity="0.9" />
			<path d="M12 6V9" stroke="white" strokeWidth="2" strokeOpacity="0.9" />
			<path d="M12 15V18" stroke="white" strokeWidth="2" strokeOpacity="0.9" />
			<path d="M6 12H9" stroke="white" strokeWidth="2" strokeOpacity="0.9" />
			<path d="M15 12H18" stroke="white" strokeWidth="2" strokeOpacity="0.9" />
		</svg>
	);
}

export const segment: Provider = {
	name: "Segment",
	logo: <SegmentLogo />,
	website: "https://segment.com",
	tagline: {
		status: "strong",
		details: "Customer data platform with analytics",
	},
	features: {
		autoCapture: { status: "none", details: "Manual tracking" },
		customEvents: { status: "strong", details: "Track, identify, page" },
		userProperties: { status: "strong", details: "User traits" },
		groupAnalytics: { status: "strong", details: "Group calls" },
		retroactiveAnalysis: {
			status: "none",
			details: "Not available",
		},
		funnels: { status: "partial", details: "Via destinations" },
		retention: { status: "partial", details: "Via destinations" },
		cohorts: { status: "partial", details: "Via destinations" },
		pathAnalysis: { status: "none", details: "Not available" },
		trends: { status: "partial", details: "Via destinations" },
		dashboards: { status: "partial", details: "Limited built-in" },
		realtime: { status: "strong", details: "Real-time streaming" },
		customReports: { status: "partial", details: "Via destinations" },
		dataExploration: {
			status: "partial",
			details: "Limited (focus on CDP)",
		},
		alerts: { status: "partial", details: "Data quality alerts" },
		sessionReplay: { status: "none", details: "Not available" },
		heatmaps: { status: "none", details: "Not available" },
		userProfiles: { status: "strong", details: "Unified profiles" },
		userJourneys: { status: "partial", details: "Via destinations" },
		attribution: { status: "partial", details: "Via destinations" },
		abTesting: { status: "none", details: "Not available" },
		featureFlags: { status: "none", details: "Not available" },
		experiments: { status: "none", details: "Not available" },
		statisticalAnalysis: {
			status: "none",
			details: "Not available",
		},
		sdkLanguages: {
			status: "strong",
			details: "20+ languages (JS, iOS, Android, etc.)",
		},
		apiAccess: { status: "strong", details: "HTTP Tracking API" },
		dataWarehouse: {
			status: "strong",
			details: "Warehouses as destinations",
		},
		sqlAccess: { status: "none", details: "Not available" },
		documentation: { status: "strong", details: "Extensive docs" },
		gdprCompliant: { status: "strong", details: "GDPR tools" },
		cookieless: { status: "partial", details: "Cookie-based" },
		dataResidency: { status: "strong", details: "Multi-region" },
		anonymization: { status: "strong", details: "User deletion API" },
		compliance: { status: "strong", details: "SOC 2, GDPR, HIPAA" },
		freeTier: {
			status: "strong",
			details: "Free: 1K MTUs, 2 sources",
		},
		pricingModel: {
			status: "strong",
			details: "Team: $120/mo for 10K MTUs",
		},
		openSource: { status: "partial", details: "Open-source libraries" },
		selfHosted: { status: "none", details: "Cloud-only" },
		cloudHosted: { status: "strong", details: "Fully managed" },
		cdp: { status: "strong", details: "Core CDP platform" },
		marketing: {
			status: "strong",
			details: "450+ destinations",
		},
		datatools: {
			status: "strong",
			details: "All major warehouses",
		},
		webhooks: { status: "strong", details: "Webhooks destination" },
	},
};
