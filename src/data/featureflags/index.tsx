import RiCodeLine from "remixicon-react/CodeLineIcon";
import RiFlag2Line from "remixicon-react/Flag2LineIcon";
import RiGroupLine from "remixicon-react/GroupLineIcon";
import RiLineChartLine from "remixicon-react/LineChartLineIcon";
import RiMoneyDollarCircleLine from "remixicon-react/MoneyDollarCircleLineIcon";
import RiPlugLine from "remixicon-react/PlugLineIcon";
import RiServerLine from "remixicon-react/ServerLineIcon";
import RiShieldCheckLine from "remixicon-react/ShieldCheckLineIcon";
import type { Category, ComparisonConfig } from "../../types/comparison";
import { configcat } from "./configcat";
import { devcycle } from "./devcycle";
import { flagsmith } from "./flagsmith";
import { growthbook } from "./growthbook";
import { launchdarkly } from "./launchdarkly";
import { posthog } from "./posthog";
// Import all providers
import { reflag } from "./reflag";
import { split } from "./split";
import { unleash } from "./unleash";

// Feature Categories
export const categories: Category[] = [
	{
		id: "flagManagement",
		label: "Flag Management",
		icon: <RiFlag2Line className="w-4 h-4 text-blue-500" />,
		features: {
			booleanFlags: "Boolean Flags",
			multivariateFlags: "Multivariate Flags",
			jsonFlags: "JSON/Complex Flags",
			flagDependencies: "Flag Dependencies",
			scheduledRollouts: "Scheduled Rollouts",
		},
	},
	{
		id: "targeting",
		label: "Targeting & Segmentation",
		icon: <RiGroupLine className="w-4 h-4 text-purple-500" />,
		features: {
			userTargeting: "User Targeting",
			percentageRollouts: "Percentage Rollouts",
			customSegments: "Custom Segments",
			geoTargeting: "Geographic Targeting",
			contextualTargeting: "Contextual Targeting",
		},
	},
	{
		id: "experimentation",
		label: "Experimentation & Analytics",
		icon: <RiLineChartLine className="w-4 h-4 text-green-500" />,
		features: {
			abTesting: "A/B Testing",
			multivariateExperiments: "Multivariate Experiments",
			statisticalAnalysis: "Statistical Analysis",
			metricsTracking: "Metrics Tracking",
			experimentGoals: "Experiment Goals",
		},
	},
	{
		id: "developerExperience",
		label: "Developer Experience",
		icon: <RiCodeLine className="w-4 h-4 text-amber-500" />,
		features: {
			sdkLanguages: "SDK Languages",
			localEvaluation: "Local Evaluation",
			typeSafety: "Type Safety",
			documentation: "Documentation",
			apiQuality: "API/REST Quality",
		},
	},
	{
		id: "security",
		label: "Security & Compliance",
		icon: <RiShieldCheckLine className="w-4 h-4 text-red-500" />,
		features: {
			rbac: "Role-Based Access Control",
			auditLogs: "Audit Logs",
			environments: "Multiple Environments",
			approvalWorkflows: "Approval Workflows",
			compliance: "Compliance (SOC 2, GDPR)",
		},
	},
	{
		id: "pricing",
		label: "Pricing",
		icon: <RiMoneyDollarCircleLine className="w-4 h-4 text-cyan-500" />,
		features: {
			freeTier: "Free Tier",
			paidPricing: "Paid Pricing",
		},
	},
	{
		id: "deployment",
		label: "Deployment",
		icon: <RiServerLine className="w-4 h-4 text-indigo-500" />,
		features: {
			openSource: "Open Source",
			selfHosted: "Self-Hosted Option",
			cloudHosted: "Cloud Hosted",
		},
	},
	{
		id: "integrations",
		label: "Integrations",
		icon: <RiPlugLine className="w-4 h-4 text-pink-500" />,
		features: {
			analytics: "Analytics Integrations",
			dataWarehouses: "Data Warehouses",
			cicd: "CI/CD Integration",
			webhooks: "Webhooks",
		},
	},
];

// Providers array
export const providers = [
	reflag,
	launchdarkly,
	flagsmith,
	unleash,
	posthog,
	split,
	growthbook,
	devcycle,
	configcat,
];

// Comparison config export
export const featureFlagsComparisonConfig: ComparisonConfig = {
	title: "featureflags.compare",
	subtitle: "⋅ Easily compare different feature flag providers and platforms",
	icon: <RiFlag2Line className="w-4 h-4 mt-0.5" />,
	providers,
	categories,
	lastUpdated: "2025-10-03",
};
