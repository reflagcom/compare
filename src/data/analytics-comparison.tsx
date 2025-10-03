import RiBarChartLine from "remixicon-react/BarChartLineIcon";
import RiCodeLine from "remixicon-react/CodeLineIcon";
import RiDatabaseLine from "remixicon-react/DatabaseLineIcon";
import RiLineChartLine from "remixicon-react/LineChartLineIcon";
import RiMoneyDollarCircleLine from "remixicon-react/MoneyDollarCircleLineIcon";
import RiPlugLine from "remixicon-react/PlugLineIcon";
import RiServerLine from "remixicon-react/ServerLineIcon";
import RiShieldCheckLine from "remixicon-react/ShieldCheckLineIcon";
import RiUserLine from "remixicon-react/UserLineIcon";
import type { Category, ComparisonConfig, Provider } from "../types/comparison";

// Provider Logo Components
function PostHogLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>PostHog</title>
			<rect width="24" height="24" rx="4" fill="#F9BD2B" />
			<path
				d="M8 16L10 12L12 14L14 10L16 12"
				stroke="black"
				strokeWidth="1.5"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

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

function AmplitudeLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Amplitude</title>
			<rect width="24" height="24" rx="4" fill="#011E5E" />
			<path d="M8 16L12 8L16 12L12 16L8 16Z" fill="white" fillOpacity="0.9" />
		</svg>
	);
}

function HeapLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Heap</title>
			<rect width="24" height="24" rx="4" fill="#FF5C39" />
			<path d="M8 14H10V16H8V14Z" fill="white" />
			<path d="M11 11H13V16H11V11Z" fill="white" />
			<path d="M14 8H16V16H14V8Z" fill="white" />
		</svg>
	);
}

function GoogleAnalyticsLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Google Analytics</title>
			<rect width="24" height="24" rx="4" fill="#F9AB00" />
			<circle cx="8" cy="16" r="2" fill="white" />
			<rect x="11" y="10" width="2" height="8" rx="1" fill="white" />
			<rect x="14" y="6" width="2" height="12" rx="1" fill="white" />
		</svg>
	);
}

function PendoLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Pendo</title>
			<rect width="24" height="24" rx="4" fill="#0E2439" />
			<circle cx="12" cy="9" r="2.5" fill="#F8B334" />
			<path
				d="M12 11.5C9.5 11.5 7.5 13 7.5 15V17H16.5V15C16.5 13 14.5 11.5 12 11.5Z"
				fill="#F8B334"
			/>
		</svg>
	);
}

function SegmentLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Segment</title>
			<rect width="24" height="24" rx="4" fill="#52BD95" />
			<circle cx="8" cy="12" r="2" fill="white" />
			<circle cx="16" cy="12" r="2" fill="white" />
			<path d="M10 12H14" stroke="white" strokeWidth="2" />
		</svg>
	);
}

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
				d="M8 15L10 13L12 15L14 11L16 13"
				stroke="white"
				strokeWidth="1.5"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// Feature Categories
const categories: Category[] = [
	{
		id: "tracking",
		label: "Event Tracking & Data Collection",
		icon: <RiDatabaseLine className="w-4 h-4 text-blue-500" />,
		features: {
			autoCapture: "Auto-capture Events",
			customEvents: "Custom Event Tracking",
			userProperties: "User Properties",
			groupAnalytics: "Group/Account Analytics",
			retroactiveAnalysis: "Retroactive Event Analysis",
		},
	},
	{
		id: "analysis",
		label: "Analysis & Insights",
		icon: <RiBarChartLine className="w-4 h-4 text-purple-500" />,
		features: {
			funnels: "Funnels",
			retention: "Retention Analysis",
			cohorts: "Cohort Analysis",
			pathAnalysis: "Path/Flow Analysis",
			trends: "Trend Analysis",
		},
	},
	{
		id: "visualization",
		label: "Visualization & Reporting",
		icon: <RiLineChartLine className="w-4 h-4 text-green-500" />,
		features: {
			dashboards: "Custom Dashboards",
			realtime: "Real-time Analytics",
			customReports: "Custom Reports",
			dataExploration: "Data Exploration Tools",
			alerts: "Alerts & Notifications",
		},
	},
	{
		id: "users",
		label: "User Analytics",
		icon: <RiUserLine className="w-4 h-4 text-amber-500" />,
		features: {
			sessionReplay: "Session Replay",
			heatmaps: "Heatmaps",
			userProfiles: "User Profiles",
			userJourneys: "User Journey Mapping",
			attribution: "Attribution Modeling",
		},
	},
	{
		id: "experimentation",
		label: "Experimentation",
		icon: <RiLineChartLine className="w-4 h-4 text-red-500" />,
		features: {
			abTesting: "A/B Testing",
			featureFlags: "Feature Flags",
			experiments: "Experimentation Platform",
			statisticalAnalysis: "Statistical Significance",
		},
	},
	{
		id: "developerExperience",
		label: "Developer Experience",
		icon: <RiCodeLine className="w-4 h-4 text-cyan-500" />,
		features: {
			sdkLanguages: "SDK Languages",
			apiAccess: "API Access",
			dataWarehouse: "Data Warehouse Export",
			sqlAccess: "SQL Query Interface",
			documentation: "Documentation Quality",
		},
	},
	{
		id: "privacy",
		label: "Privacy & Compliance",
		icon: <RiShieldCheckLine className="w-4 h-4 text-indigo-500" />,
		features: {
			gdprCompliant: "GDPR Compliant",
			cookieless: "Cookieless Tracking",
			dataResidency: "Data Residency Options",
			anonymization: "Data Anonymization",
			compliance: "Compliance Certifications",
		},
	},
	{
		id: "pricing",
		label: "Pricing",
		icon: <RiMoneyDollarCircleLine className="w-4 h-4 text-pink-500" />,
		features: {
			freeTier: "Free Tier",
			pricingModel: "Pricing Model",
		},
	},
	{
		id: "deployment",
		label: "Deployment",
		icon: <RiServerLine className="w-4 h-4 text-teal-500" />,
		features: {
			openSource: "Open Source",
			selfHosted: "Self-Hosted Option",
			cloudHosted: "Cloud Hosted",
		},
	},
	{
		id: "integrations",
		label: "Integrations",
		icon: <RiPlugLine className="w-4 h-4 text-orange-500" />,
		features: {
			cdp: "CDP Integrations",
			marketing: "Marketing Tools",
			datatools: "Data Tools (Warehouses, BI)",
			webhooks: "Webhooks & APIs",
		},
	},
];

// Provider Data
const providers: Provider[] = [
	{
		name: "PostHog",
		logo: <PostHogLogo />,
		website: "https://posthog.com",
		tagline: {
			status: "strong",
			details: "All-in-one product OS with analytics, session replay, and more",
		},
		features: {
			autoCapture: {
				status: "strong",
				details: "Automatic event capture without code",
			},
			customEvents: { status: "strong", details: "Custom event tracking" },
			userProperties: { status: "strong", details: "User properties & traits" },
			groupAnalytics: {
				status: "strong",
				details: "Group analytics for B2B",
			},
			retroactiveAnalysis: {
				status: "strong",
				details: "Query historical data retroactively",
			},
			funnels: { status: "strong", details: "Conversion funnels" },
			retention: { status: "strong", details: "Retention analysis" },
			cohorts: { status: "strong", details: "User cohorts" },
			pathAnalysis: { status: "strong", details: "User path analysis" },
			trends: { status: "strong", details: "Trend analysis" },
			dashboards: { status: "strong", details: "Custom dashboards" },
			realtime: { status: "strong", details: "Real-time analytics" },
			customReports: { status: "strong", details: "Custom insights" },
			dataExploration: {
				status: "strong",
				details: "SQL and visual exploration",
			},
			alerts: { status: "partial", details: "Basic alerts" },
			sessionReplay: {
				status: "strong",
				details: "Full session replay with console logs",
			},
			heatmaps: { status: "strong", details: "Heatmaps & clickmaps" },
			userProfiles: { status: "strong", details: "Individual user profiles" },
			userJourneys: { status: "strong", details: "User journey tracking" },
			attribution: { status: "partial", details: "Basic attribution" },
			abTesting: { status: "strong", details: "A/B testing built-in" },
			featureFlags: { status: "strong", details: "Feature flags included" },
			experiments: {
				status: "strong",
				details: "Full experimentation platform",
			},
			statisticalAnalysis: {
				status: "strong",
				details: "Bayesian & frequentist stats",
			},
			sdkLanguages: {
				status: "strong",
				details: "15+ languages (JS, Python, Go, PHP, etc.)",
			},
			apiAccess: { status: "strong", details: "Full REST API" },
			dataWarehouse: {
				status: "strong",
				details: "Export to Snowflake, BigQuery",
			},
			sqlAccess: { status: "strong", details: "SQL query interface" },
			documentation: { status: "strong", details: "Excellent documentation" },
			gdprCompliant: { status: "strong", details: "GDPR compliant" },
			cookieless: {
				status: "partial",
				details: "Cookie-based by default, can configure",
			},
			dataResidency: { status: "strong", details: "US & EU regions" },
			anonymization: { status: "strong", details: "Data anonymization" },
			compliance: { status: "strong", details: "SOC 2, GDPR" },
			freeTier: { status: "strong", details: "1M events/month free" },
			pricingModel: {
				status: "strong",
				details: "Pay-as-you-go per event ($0.00005/event)",
			},
			openSource: { status: "strong", details: "MIT license" },
			selfHosted: {
				status: "strong",
				details: "Docker/Kubernetes self-host",
			},
			cloudHosted: { status: "strong", details: "PostHog Cloud (US & EU)" },
			cdp: {
				status: "strong",
				details: "Segment, RudderStack integration",
			},
			marketing: {
				status: "strong",
				details: "Hubspot, Salesforce, Intercom",
			},
			datatools: {
				status: "strong",
				details: "Snowflake, BigQuery, S3",
			},
			webhooks: { status: "strong", details: "Webhooks & actions" },
		},
	},
	{
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
				details: "Growth plan: 20K replays/month free",
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
	},
	{
		name: "Amplitude",
		logo: <AmplitudeLogo />,
		website: "https://amplitude.com",
		tagline: {
			status: "strong",
			details: "Digital analytics platform for product teams",
		},
		features: {
			autoCapture: { status: "partial", details: "Limited auto-tracking" },
			customEvents: { status: "strong", details: "Custom event tracking" },
			userProperties: { status: "strong", details: "User properties" },
			groupAnalytics: { status: "strong", details: "Account-level analytics" },
			retroactiveAnalysis: {
				status: "strong",
				details: "Govern events retroactively",
			},
			funnels: { status: "strong", details: "Conversion funnels" },
			retention: { status: "strong", details: "Retention analysis" },
			cohorts: { status: "strong", details: "Behavioral cohorts" },
			pathAnalysis: { status: "strong", details: "Pathfinder analysis" },
			trends: { status: "strong", details: "Event segmentation" },
			dashboards: { status: "strong", details: "Custom dashboards" },
			realtime: { status: "partial", details: "Near real-time" },
			customReports: { status: "strong", details: "Saved reports" },
			dataExploration: {
				status: "strong",
				details: "Amplitude Analytics UI",
			},
			alerts: { status: "strong", details: "Anomaly detection" },
			sessionReplay: {
				status: "strong",
				details: "Session Replay (via acquisition)",
			},
			heatmaps: { status: "none", details: "Not available" },
			userProfiles: { status: "strong", details: "User lookup" },
			userJourneys: { status: "strong", details: "User journey maps" },
			attribution: { status: "strong", details: "Impact analysis" },
			abTesting: { status: "strong", details: "Amplitude Experiment" },
			featureFlags: { status: "strong", details: "Feature flags included" },
			experiments: { status: "strong", details: "Full experimentation" },
			statisticalAnalysis: {
				status: "strong",
				details: "Sequential testing",
			},
			sdkLanguages: {
				status: "strong",
				details: "15+ languages (JS, iOS, Android, etc.)",
			},
			apiAccess: { status: "strong", details: "REST & GraphQL APIs" },
			dataWarehouse: { status: "strong", details: "Data streaming" },
			sqlAccess: { status: "partial", details: "Limited SQL access" },
			documentation: { status: "strong", details: "Detailed documentation" },
			gdprCompliant: { status: "strong", details: "GDPR compliant" },
			cookieless: { status: "partial", details: "Cookie-based" },
			dataResidency: { status: "strong", details: "Multi-region support" },
			anonymization: { status: "strong", details: "User deletion" },
			compliance: { status: "strong", details: "SOC 2, GDPR, HIPAA" },
			freeTier: {
				status: "strong",
				details: "Starter: 50K MTUs (Monthly Tracked Users), up to 10M events",
			},
			pricingModel: {
				status: "strong",
				details: "Plus: $49/mo for 300K MTUs at $0.049/MTU",
			},
			openSource: { status: "none", details: "Proprietary" },
			selfHosted: { status: "none", details: "Cloud-only" },
			cloudHosted: { status: "strong", details: "Fully managed" },
			cdp: { status: "strong", details: "Segment, mParticle, Tealium" },
			marketing: { status: "strong", details: "Salesforce, Braze, Iterable" },
			datatools: {
				status: "strong",
				details: "Snowflake, BigQuery, S3",
			},
			webhooks: { status: "strong", details: "Cohort syncing" },
		},
	},
	{
		name: "Heap",
		logo: <HeapLogo />,
		website: "https://heap.io",
		tagline: {
			status: "strong",
			details: "Digital insights platform with auto-capture",
		},
		features: {
			autoCapture: {
				status: "strong",
				details: "Full auto-capture, no code needed",
			},
			customEvents: { status: "strong", details: "Custom events" },
			userProperties: { status: "strong", details: "User properties" },
			groupAnalytics: { status: "strong", details: "Account analytics" },
			retroactiveAnalysis: {
				status: "strong",
				details: "Define events retroactively",
			},
			funnels: { status: "strong", details: "Conversion funnels" },
			retention: { status: "strong", details: "Retention analysis" },
			cohorts: { status: "strong", details: "User segments" },
			pathAnalysis: { status: "strong", details: "Journey analysis" },
			trends: { status: "strong", details: "Event trends" },
			dashboards: { status: "strong", details: "Custom dashboards" },
			realtime: { status: "partial", details: "Near real-time" },
			customReports: { status: "strong", details: "Custom reports" },
			dataExploration: { status: "strong", details: "Visual builder" },
			alerts: { status: "partial", details: "Basic alerts" },
			sessionReplay: {
				status: "strong",
				details: "Session replay included",
			},
			heatmaps: { status: "strong", details: "Heatmaps & clickmaps" },
			userProfiles: { status: "strong", details: "Individual profiles" },
			userJourneys: { status: "strong", details: "User journeys" },
			attribution: { status: "partial", details: "Basic attribution" },
			abTesting: { status: "none", details: "Via integrations" },
			featureFlags: { status: "none", details: "Not built-in" },
			experiments: { status: "none", details: "Third-party required" },
			statisticalAnalysis: {
				status: "partial",
				details: "Basic significance",
			},
			sdkLanguages: {
				status: "strong",
				details: "Web, iOS, Android SDKs",
			},
			apiAccess: { status: "strong", details: "REST API" },
			dataWarehouse: { status: "strong", details: "Data pipeline" },
			sqlAccess: { status: "strong", details: "Heap SQL" },
			documentation: { status: "strong", details: "Good documentation" },
			gdprCompliant: { status: "strong", details: "GDPR compliant" },
			cookieless: { status: "partial", details: "Cookie-based" },
			dataResidency: { status: "partial", details: "US-based" },
			anonymization: { status: "strong", details: "User deletion" },
			compliance: { status: "strong", details: "SOC 2, GDPR" },
			freeTier: { status: "strong", details: "Free plan up to 10k sessions" },
			pricingModel: {
				status: "strong",
				details: "Session-based pricing, custom quotes",
			},
			openSource: { status: "none", details: "Proprietary" },
			selfHosted: { status: "none", details: "Cloud-only" },
			cloudHosted: { status: "strong", details: "Fully managed" },
			cdp: { status: "strong", details: "Segment integration" },
			marketing: { status: "strong", details: "Salesforce, Marketo" },
			datatools: { status: "strong", details: "Snowflake, Redshift" },
			webhooks: { status: "partial", details: "Limited webhooks" },
		},
	},
	{
		name: "Google Analytics 4",
		logo: <GoogleAnalyticsLogo />,
		website: "https://analytics.google.com",
		tagline: {
			status: "strong",
			details: "Free web analytics from Google with ML insights",
		},
		features: {
			autoCapture: {
				status: "strong",
				details: "Enhanced measurement auto-tracking",
			},
			customEvents: { status: "strong", details: "Custom events" },
			userProperties: { status: "strong", details: "User properties" },
			groupAnalytics: { status: "partial", details: "Limited groups" },
			retroactiveAnalysis: {
				status: "partial",
				details: "Limited retroactive changes",
			},
			funnels: { status: "strong", details: "Funnel exploration" },
			retention: { status: "strong", details: "User retention" },
			cohorts: { status: "strong", details: "Audiences/cohorts" },
			pathAnalysis: { status: "strong", details: "Path exploration" },
			trends: { status: "strong", details: "Event trends" },
			dashboards: { status: "strong", details: "Custom reports & dashboards" },
			realtime: { status: "strong", details: "Real-time reporting" },
			customReports: { status: "strong", details: "Explorations" },
			dataExploration: { status: "strong", details: "Analysis Hub" },
			alerts: { status: "strong", details: "Custom alerts" },
			sessionReplay: { status: "none", details: "Not available" },
			heatmaps: { status: "none", details: "Not built-in" },
			userProfiles: { status: "partial", details: "User explorer" },
			userJourneys: { status: "strong", details: "User journey" },
			attribution: {
				status: "strong",
				details: "Data-driven attribution",
			},
			abTesting: { status: "none", details: "Use Google Optimize" },
			featureFlags: { status: "none", details: "Not available" },
			experiments: { status: "partial", details: "Via Google Optimize" },
			statisticalAnalysis: {
				status: "partial",
				details: "Basic statistics",
			},
			sdkLanguages: {
				status: "strong",
				details: "Web, iOS, Android SDKs",
			},
			apiAccess: { status: "strong", details: "Data API & Admin API" },
			dataWarehouse: {
				status: "strong",
				details: "BigQuery export (paid)",
			},
			sqlAccess: {
				status: "strong",
				details: "SQL via BigQuery export",
			},
			documentation: { status: "strong", details: "Extensive docs" },
			gdprCompliant: { status: "strong", details: "GDPR features" },
			cookieless: {
				status: "partial",
				details: "Cookie-based, can disable",
			},
			dataResidency: {
				status: "partial",
				details: "Limited region control",
			},
			anonymization: { status: "strong", details: "IP anonymization" },
			compliance: {
				status: "strong",
				details: "ISO 27001, SOC 2/3",
			},
			freeTier: {
				status: "strong",
				details: "Completely free (10M events/month)",
			},
			pricingModel: {
				status: "strong",
				details: "Free, GA 360 for enterprise",
			},
			openSource: { status: "none", details: "Proprietary" },
			selfHosted: { status: "none", details: "Cloud-only" },
			cloudHosted: { status: "strong", details: "Google Cloud" },
			cdp: { status: "partial", details: "Limited CDP features" },
			marketing: {
				status: "strong",
				details: "Google Ads, Search Console",
			},
			datatools: { status: "strong", details: "BigQuery, Looker Studio" },
			webhooks: { status: "partial", details: "Limited webhooks" },
		},
	},
	{
		name: "Pendo",
		logo: <PendoLogo />,
		website: "https://pendo.io",
		tagline: {
			status: "strong",
			details: "Product experience platform with analytics and guidance",
		},
		features: {
			autoCapture: {
				status: "strong",
				details: "Auto-capture page views & clicks",
			},
			customEvents: { status: "strong", details: "Track events & features" },
			userProperties: { status: "strong", details: "Visitor metadata" },
			groupAnalytics: { status: "strong", details: "Account-level analytics" },
			retroactiveAnalysis: {
				status: "strong",
				details: "Retroactive event tagging",
			},
			funnels: { status: "strong", details: "Funnel reports" },
			retention: { status: "strong", details: "Retention analysis" },
			cohorts: { status: "strong", details: "Segments" },
			pathAnalysis: { status: "strong", details: "Path analysis" },
			trends: { status: "strong", details: "Usage trends" },
			dashboards: { status: "strong", details: "Custom dashboards" },
			realtime: { status: "partial", details: "Near real-time" },
			customReports: { status: "strong", details: "Custom reports" },
			dataExploration: { status: "strong", details: "Report builder" },
			alerts: { status: "partial", details: "Basic alerts" },
			sessionReplay: { status: "none", details: "Not available" },
			heatmaps: { status: "none", details: "Not built-in" },
			userProfiles: { status: "strong", details: "Visitor profiles" },
			userJourneys: { status: "strong", details: "User paths" },
			attribution: { status: "partial", details: "Feature adoption" },
			abTesting: { status: "none", details: "Not built-in" },
			featureFlags: { status: "none", details: "Not built-in" },
			experiments: { status: "none", details: "Via third-party" },
			statisticalAnalysis: { status: "none", details: "Basic metrics only" },
			sdkLanguages: {
				status: "strong",
				details: "Web, iOS, Android SDKs",
			},
			apiAccess: { status: "strong", details: "REST API" },
			dataWarehouse: { status: "strong", details: "Data sync" },
			sqlAccess: { status: "none", details: "Not available" },
			documentation: { status: "strong", details: "Good documentation" },
			gdprCompliant: { status: "strong", details: "GDPR compliant" },
			cookieless: { status: "partial", details: "Cookie-based" },
			dataResidency: { status: "partial", details: "US & EU" },
			anonymization: { status: "strong", details: "Data anonymization" },
			compliance: { status: "strong", details: "SOC 2, GDPR" },
			freeTier: { status: "strong", details: "Free Starter plan" },
			pricingModel: {
				status: "partial",
				details: "Custom pricing, no public tiers",
			},
			openSource: { status: "none", details: "Proprietary" },
			selfHosted: { status: "none", details: "Cloud-only" },
			cloudHosted: { status: "strong", details: "Fully managed" },
			cdp: { status: "strong", details: "Segment integration" },
			marketing: { status: "strong", details: "Salesforce, Gainsight" },
			datatools: { status: "strong", details: "Data warehouse sync" },
			webhooks: { status: "strong", details: "Webhooks available" },
		},
	},
	{
		name: "Segment",
		logo: <SegmentLogo />,
		website: "https://segment.com",
		tagline: {
			status: "strong",
			details: "Customer data platform with analytics capabilities",
		},
		features: {
			autoCapture: { status: "none", details: "Manual instrumentation" },
			customEvents: {
				status: "strong",
				details: "Track any custom event",
			},
			userProperties: { status: "strong", details: "User traits" },
			groupAnalytics: { status: "strong", details: "Group calls" },
			retroactiveAnalysis: { status: "none", details: "Not available" },
			funnels: { status: "partial", details: "Via Personas" },
			retention: { status: "partial", details: "Via Personas" },
			cohorts: { status: "strong", details: "Audiences (Personas)" },
			pathAnalysis: { status: "none", details: "Via downstream tools" },
			trends: { status: "partial", details: "Basic event explorer" },
			dashboards: { status: "partial", details: "Limited dashboards" },
			realtime: { status: "strong", details: "Real-time data flow" },
			customReports: { status: "partial", details: "Via Personas" },
			dataExploration: {
				status: "partial",
				details: "Event explorer",
			},
			alerts: { status: "partial", details: "Data quality alerts" },
			sessionReplay: { status: "none", details: "Not built-in" },
			heatmaps: { status: "none", details: "Not available" },
			userProfiles: {
				status: "strong",
				details: "Unified profiles (Personas)",
			},
			userJourneys: { status: "partial", details: "Via integrations" },
			attribution: { status: "none", details: "Via downstream tools" },
			abTesting: { status: "none", details: "Via integrations" },
			featureFlags: { status: "none", details: "Via integrations" },
			experiments: { status: "none", details: "Via integrations" },
			statisticalAnalysis: { status: "none", details: "Not built-in" },
			sdkLanguages: {
				status: "strong",
				details: "25+ languages & platforms",
			},
			apiAccess: { status: "strong", details: "HTTP API & GraphQL" },
			dataWarehouse: {
				status: "strong",
				details: "Warehouse sync & reverse ETL",
			},
			sqlAccess: { status: "none", details: "Not available" },
			documentation: { status: "strong", details: "Excellent documentation" },
			gdprCompliant: { status: "strong", details: "GDPR compliant" },
			cookieless: { status: "partial", details: "Depends on implementation" },
			dataResidency: { status: "strong", details: "Regional workspaces" },
			anonymization: { status: "strong", details: "User deletion" },
			compliance: { status: "strong", details: "SOC 2, GDPR, HIPAA" },
			freeTier: {
				status: "strong",
				details: "Free up to 1k MTU (visitors)",
			},
			pricingModel: {
				status: "strong",
				details: "$120/mo Team, custom Business",
			},
			openSource: { status: "partial", details: "Some open source libraries" },
			selfHosted: { status: "none", details: "Cloud-only" },
			cloudHosted: { status: "strong", details: "Fully managed" },
			cdp: {
				status: "strong",
				details: "IS a CDP - 450+ integrations",
			},
			marketing: {
				status: "strong",
				details: "All major marketing tools",
			},
			datatools: {
				status: "strong",
				details: "Snowflake, BigQuery, Redshift",
			},
			webhooks: { status: "strong", details: "Destinations & webhooks" },
		},
	},
	{
		name: "Plausible",
		logo: <PlausibleLogo />,
		website: "https://plausible.io",
		tagline: {
			status: "strong",
			details: "Privacy-first, lightweight, open source web analytics",
		},
		features: {
			autoCapture: {
				status: "strong",
				details: "Auto-track pageviews",
			},
			customEvents: { status: "strong", details: "Custom events & goals" },
			userProperties: { status: "none", details: "No user tracking" },
			groupAnalytics: { status: "none", details: "Not available" },
			retroactiveAnalysis: { status: "none", details: "Not available" },
			funnels: { status: "strong", details: "Funnel analysis" },
			retention: { status: "none", details: "Not available" },
			cohorts: { status: "none", details: "Not available" },
			pathAnalysis: { status: "none", details: "Not available" },
			trends: { status: "strong", details: "Traffic trends" },
			dashboards: { status: "strong", details: "Simple dashboard" },
			realtime: { status: "strong", details: "Real-time visitors" },
			customReports: { status: "partial", details: "Filtered views" },
			dataExploration: {
				status: "partial",
				details: "Basic filtering",
			},
			alerts: { status: "strong", details: "Traffic spike alerts" },
			sessionReplay: { status: "none", details: "Not available" },
			heatmaps: { status: "none", details: "Not available" },
			userProfiles: { status: "none", details: "Privacy-focused, no profiles" },
			userJourneys: { status: "none", details: "Not tracked" },
			attribution: { status: "strong", details: "UTM tracking" },
			abTesting: { status: "none", details: "Not built-in" },
			featureFlags: { status: "none", details: "Not available" },
			experiments: { status: "none", details: "Not available" },
			statisticalAnalysis: { status: "none", details: "Basic stats only" },
			sdkLanguages: {
				status: "partial",
				details: "JavaScript snippet, limited SDKs",
			},
			apiAccess: { status: "strong", details: "Stats API & Events API" },
			dataWarehouse: { status: "partial", details: "CSV export" },
			sqlAccess: { status: "none", details: "Not available" },
			documentation: { status: "strong", details: "Clear documentation" },
			gdprCompliant: {
				status: "strong",
				details: "GDPR compliant, no cookies",
			},
			cookieless: {
				status: "strong",
				details: "Completely cookieless",
			},
			dataResidency: { status: "strong", details: "EU or US hosting" },
			anonymization: {
				status: "strong",
				details: "Anonymous by design",
			},
			compliance: { status: "strong", details: "GDPR, PECR compliant" },
			freeTier: { status: "none", details: "30-day trial only" },
			pricingModel: {
				status: "strong",
				details: "$9/mo for 10k pageviews, scales up",
			},
			openSource: {
				status: "strong",
				details: "AGPL license",
			},
			selfHosted: {
				status: "strong",
				details: "Docker self-hosting",
			},
			cloudHosted: { status: "strong", details: "Plausible Cloud" },
			cdp: { status: "none", details: "Not applicable" },
			marketing: { status: "partial", details: "Limited integrations" },
			datatools: { status: "partial", details: "CSV export only" },
			webhooks: { status: "partial", details: "Limited webhooks" },
		},
	},
];

export const analyticsComparisonConfig: ComparisonConfig = {
	title: "analytics.compare",
	subtitle: "⋅ Easily compare different product analytics providers",
	icon: <RiBarChartLine className="w-4 h-4 mt-0.5" />,
	providers,
	categories,
	lastUpdated: "2025-10-03",
};
