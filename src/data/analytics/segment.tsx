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

		reference: "https://segment.com/pricing",
	},
	features: {
		autoCapture: { status: "none", details: "Manual tracking", reference: "https://segment.com/pricing" },
		customEvents: { status: "strong", details: "Track, identify, page", reference: "https://segment.com/pricing" },
		userProperties: { status: "strong", details: "User traits", reference: "https://segment.com/pricing" },
		groupAnalytics: { status: "strong", details: "Group calls", reference: "https://segment.com/pricing" },
		retroactiveAnalysis: {

			status: "none",

			details: "Not available",

			reference: "https://segment.com/pricing",
		},
		funnels: { status: "partial", details: "Via destinations", reference: "https://segment.com/pricing" },
		retention: { status: "partial", details: "Via destinations", reference: "https://segment.com/pricing" },
		cohorts: { status: "partial", details: "Via destinations", reference: "https://segment.com/pricing" },
		pathAnalysis: { status: "none", details: "Not available", reference: "https://segment.com/pricing" },
		trends: { status: "partial", details: "Via destinations", reference: "https://segment.com/pricing" },
		dashboards: { status: "partial", details: "Limited built-in", reference: "https://segment.com/pricing" },
		realtime: { status: "strong", details: "Real-time streaming", reference: "https://segment.com/pricing" },
		customReports: { status: "partial", details: "Via destinations", reference: "https://segment.com/pricing" },
		dataExploration: {

			status: "partial",

			details: "Limited (focus on CDP)",

			reference: "https://segment.com/pricing",
		},
		alerts: { status: "partial", details: "Data quality alerts", reference: "https://segment.com/pricing" },
		sessionReplay: { status: "none", details: "Not available", reference: "https://segment.com/pricing" },
		heatmaps: { status: "none", details: "Not available", reference: "https://segment.com/pricing" },
		userProfiles: { status: "strong", details: "Unified profiles", reference: "https://segment.com/pricing" },
		userJourneys: { status: "partial", details: "Via destinations", reference: "https://segment.com/pricing" },
		attribution: { status: "partial", details: "Via destinations", reference: "https://segment.com/pricing" },
		abTesting: { status: "none", details: "Not available", reference: "https://segment.com/pricing" },
		featureFlags: { status: "none", details: "Not available", reference: "https://segment.com/pricing" },
		experiments: { status: "none", details: "Not available", reference: "https://segment.com/pricing" },
		statisticalAnalysis: {

			status: "none",

			details: "Not available",

			reference: "https://segment.com/pricing",
		},
		sdkLanguages: {

			status: "strong",

			details: "20+ languages (JS, iOS, Android, etc.)",

			reference: "https://segment.com/docs",
		},
		apiAccess: { status: "strong", details: "HTTP Tracking API", reference: "https://segment.com/docs" },
		dataWarehouse: {

			status: "strong",

			details: "Warehouses as destinations",

			reference: "https://segment.com/pricing",
		},
		sqlAccess: { status: "none", details: "Not available", reference: "https://segment.com/pricing" },
		documentation: { status: "strong", details: "Extensive docs", reference: "https://segment.com/docs" },
		gdprCompliant: { status: "strong", details: "GDPR tools", reference: "https://segment.com/legal/privacy" },
		cookieless: { status: "partial", details: "Cookie-based", reference: "https://segment.com/legal/privacy" },
		dataResidency: { status: "strong", details: "Multi-region", reference: "https://segment.com/legal/privacy" },
		anonymization: { status: "strong", details: "User deletion API", reference: "https://segment.com/legal/privacy" },
		compliance: { status: "strong", details: "SOC 2, GDPR, HIPAA", reference: "https://segment.com/legal/privacy" },
		freeTier: {

			status: "strong",

			details: "Free: 1K MTUs, 2 sources",

			reference: "https://segment.com/pricing",
		},
		pricingModel: {

			status: "strong",

			details: "Team: $120/mo for 10K MTUs",

			reference: "https://segment.com/pricing",
		},
		openSource: { status: "partial", details: "Open-source libraries", reference: "https://segment.com/pricing" },
		selfHosted: { status: "none", details: "Cloud-only", reference: "https://segment.com/pricing" },
		cloudHosted: { status: "strong", details: "Fully managed", reference: "https://segment.com/pricing" },
		cdp: { status: "strong", details: "Core CDP platform", reference: "https://segment.com/pricing" },
		marketing: {

			status: "strong",

			details: "450+ destinations",

			reference: "https://segment.com/pricing",
		},
		datatools: {

			status: "strong",

			details: "All major warehouses",

			reference: "https://segment.com/pricing",
		},
		webhooks: { status: "strong", details: "Webhooks destination", reference: "https://segment.com/pricing" },
	},
};
