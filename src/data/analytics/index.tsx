import RiBarChartLine from "remixicon-react/BarChartLineIcon";
import RiCodeLine from "remixicon-react/CodeLineIcon";
import RiDatabaseLine from "remixicon-react/DatabaseLineIcon";
import RiLineChartLine from "remixicon-react/LineChartLineIcon";
import RiMoneyDollarCircleLine from "remixicon-react/MoneyDollarCircleLineIcon";
import RiPlugLine from "remixicon-react/PlugLineIcon";
import RiServerLine from "remixicon-react/ServerLineIcon";
import RiShieldCheckLine from "remixicon-react/ShieldCheckLineIcon";
import RiUserLine from "remixicon-react/UserLineIcon";
import type { Category, ComparisonConfig } from "../../types/comparison";
import { amplitude } from "./amplitude";
import { ga4 } from "./ga4";
import { heap } from "./heap";
import { mixpanel } from "./mixpanel";
import { pendo } from "./pendo";
import { plausible } from "./plausible";
// Import all analytics providers
import { posthog } from "./posthog";
import { segment } from "./segment";

// Feature Categories
export const categories: Category[] = [
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

// Providers array
export const providers = [
	posthog,
	mixpanel,
	amplitude,
	heap,
	ga4,
	pendo,
	segment,
	plausible,
];

export const analyticsComparisonConfig: ComparisonConfig = {
	title: "analytics.compare",
	subtitle: "⋅ Compare analytics platforms for product and digital analytics",
	icon: <RiBarChartLine className="w-4 h-4 mt-0.5" />,
	providers,
	categories,
	lastUpdated: "2025-10-03",
};
