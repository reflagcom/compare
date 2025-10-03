import RiCodeLine from "remixicon-react/CodeLineIcon";
import RiFlag2Line from "remixicon-react/Flag2LineIcon";
import RiGroupLine from "remixicon-react/GroupLineIcon";
import RiLineChartLine from "remixicon-react/LineChartLineIcon";
import RiMoneyDollarCircleLine from "remixicon-react/MoneyDollarCircleLineIcon";
import RiPlugLine from "remixicon-react/PlugLineIcon";
import RiServerLine from "remixicon-react/ServerLineIcon";
import RiShieldCheckLine from "remixicon-react/ShieldCheckLineIcon";
import type { Category, ComparisonConfig, Provider } from "../types/comparison";

// Provider Logo Components
function LaunchDarklyLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>LaunchDarkly</title>
			<rect width="24" height="24" rx="4" fill="#405BFF" />
			<path
				d="M7 8L12 5L17 8V16L12 19L7 16V8Z"
				stroke="white"
				strokeWidth="1.5"
				fill="none"
			/>
			<path d="M12 5V12" stroke="white" strokeWidth="1.5" />
			<path d="M12 12L17 8" stroke="white" strokeWidth="1.5" />
		</svg>
	);
}

function FlagsmithLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Flagsmith</title>
			<rect width="24" height="24" rx="4" fill="#27AB83" />
			<path d="M8 6H10V18H8V6Z" fill="white" stroke="white" strokeWidth="0.5" />
			<path d="M10 6L16 10L10 14V6Z" fill="white" />
		</svg>
	);
}

function UnleashLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Unleash</title>
			<rect width="24" height="24" rx="4" fill="#635BFF" />
			<circle cx="12" cy="8" r="2" fill="white" />
			<path
				d="M12 10V16M9 16H15"
				stroke="white"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

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

function SplitLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Split</title>
			<rect width="24" height="24" rx="4" fill="#00BFA5" />
			<path d="M12 6V18M6 12H18" stroke="white" strokeWidth="2" />
		</svg>
	);
}

function GrowthBookLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>GrowthBook</title>
			<rect width="24" height="24" rx="4" fill="#6B46C1" />
			<path
				d="M8 9H16V11H8V9ZM8 13H14V15H8V13Z"
				fill="white"
				fillOpacity="0.9"
			/>
		</svg>
	);
}

function DevCycleLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>DevCycle</title>
			<rect width="24" height="24" rx="4" fill="#FF6B00" />
			<circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1.5" />
			<path
				d="M12 9V15M9 12H15"
				stroke="white"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function ConfigCatLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>ConfigCat</title>
			<rect width="24" height="24" rx="4" fill="#FF4785" />
			<path
				d="M8 10C8 10 9 8 12 8C15 8 16 10 16 10M8 14C8 14 9 16 12 16C15 16 16 14 16 14"
				stroke="white"
				strokeWidth="1.5"
				fill="none"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function ReflagLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 256 256"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Reflag</title>
			<rect width="256" height="256" fill="#09090B" />
			<path
				d="M181.333 64C187.224 64 192 68.7756 192 74.6667V181.333C192 187.224 187.224 192 181.333 192H74.6667C68.7756 192 64 187.224 64 181.333V74.6667C64 68.7756 68.7756 64 74.6667 64H181.333ZM74.6667 74.6667V181.333L181.333 74.6667H74.6667Z"
				fill="white"
			/>
		</svg>
	);
} // Feature Categories
const categories: Category[] = [
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

// Provider Data
const providers: Provider[] = [
	{
		name: "Reflag",
		logo: <ReflagLogo />,
		website: "https://reflag.com",
		tagline: {
			status: "strong",
			details: "Modern feature flag platform built for developer experience",
			reference: "https://reflag.com",
		},
		features: {
			booleanFlags: {
				status: "strong",
				details: "Full support",
				reference: "https://reflag.com/docs/flags",
			},
			multivariateFlags: {
				status: "strong",
				details: "Multi-value flags with variants",
				reference: "https://reflag.com/docs/flags",
			},
			jsonFlags: {
				status: "strong",
				details: "JSON configuration support",
				reference: "https://reflag.com/docs/flags",
			},
			flagDependencies: {
				status: "strong",
				details: "Flag prerequisites & dependencies",
				reference: "https://reflag.com/docs/flags",
			},
			scheduledRollouts: {
				status: "strong",
				details: "Time-based scheduled rollouts",
				reference: "https://reflag.com/docs/rollouts",
			},
			userTargeting: {
				status: "strong",
				details: "User & attribute targeting",
			},
			percentageRollouts: {
				status: "strong",
				details: "Gradual percentage-based rollouts",
			},
			customSegments: {
				status: "strong",
				details: "Advanced segment builder",
			},
			geoTargeting: {
				status: "strong",
				details: "Geographic targeting built-in",
			},
			contextualTargeting: {
				status: "strong",
				details: "Rich context targeting",
			},
			abTesting: {
				status: "strong",
				details: "Native A/B testing",
			},
			multivariateExperiments: {
				status: "strong",
				details: "Multi-variant experiments",
			},
			statisticalAnalysis: {
				status: "strong",
				details: "Built-in statistical analysis",
			},
			metricsTracking: {
				status: "strong",
				details: "Custom metrics & goals",
			},
			experimentGoals: {
				status: "strong",
				details: "Multiple goal tracking",
			},
			sdkLanguages: {
				status: "strong",
				details:
					"JavaScript, TypeScript, React, Node.js, Python, Go (expanding)",
			},
			localEvaluation: {
				status: "strong",
				details: "Edge-optimized local evaluation",
			},
			typeSafety: {
				status: "strong",
				details: "Full TypeScript support, auto-generated types",
			},
			documentation: {
				status: "strong",
				details: "Comprehensive docs with examples",
			},
			apiQuality: {
				status: "strong",
				details: "Modern REST API + GraphQL + SDKs",
			},
			rbac: {
				status: "strong",
				details: "Granular role-based permissions",
			},
			auditLogs: {
				status: "strong",
				details: "Complete audit trail",
			},
			environments: {
				status: "strong",
				details: "Unlimited environments",
			},
			approvalWorkflows: {
				status: "strong",
				details: "Multi-stage approval workflows",
			},
			compliance: {
				status: "strong",
				details: "SOC 2, GDPR, CCPA compliant",
			},
			freeTier: {
				status: "strong",
				details: "Generous free tier for developers",
			},
			paidPricing: {
				status: "strong",
				details: "Competitive pricing, transparent tiers",
			},
			openSource: {
				status: "partial",
				details: "Open source SDKs",
			},
			selfHosted: {
				status: "strong",
				details: "Self-hosted option available",
			},
			cloudHosted: {
				status: "strong",
				details: "Fully managed cloud",
			},
			analytics: {
				status: "strong",
				details: "Native integrations with major analytics platforms",
			},
			dataWarehouses: {
				status: "strong",
				details: "Direct data warehouse connections",
			},
			cicd: {
				status: "strong",
				details: "GitHub Actions, GitLab CI, API automation",
			},
			webhooks: {
				status: "strong",
				details: "Real-time webhooks for all events",
			},
		},
	},
	{
		name: "LaunchDarkly",
		logo: <LaunchDarklyLogo />,
		website: "https://launchdarkly.com",
		tagline: {
			status: "strong",
			details:
				"Enterprise-grade feature management platform with advanced targeting",
		},
		features: {
			booleanFlags: { status: "strong", details: "Full support" },
			multivariateFlags: {
				status: "strong",
				details: "String, number, JSON variants",
			},
			jsonFlags: {
				status: "strong",
				details: "Complex JSON configurations",
			},
			flagDependencies: {
				status: "strong",
				details: "Prerequisites and dependencies",
			},
			scheduledRollouts: {
				status: "strong",
				details: "Time-based rollout schedules",
			},
			userTargeting: {
				status: "strong",
				details: "Individual user & segment targeting",
			},
			percentageRollouts: {
				status: "strong",
				details: "Gradual rollouts with targeting",
			},
			customSegments: {
				status: "strong",
				details: "Advanced segment builder with rules",
			},
			geoTargeting: {
				status: "strong",
				details: "Country, region, city targeting",
			},
			contextualTargeting: {
				status: "strong",
				details: "Custom context attributes",
			},
			abTesting: {
				status: "strong",
				details: "Built-in experimentation platform",
			},
			multivariateExperiments: {
				status: "strong",
				details: "Multi-armed bandit testing",
			},
			statisticalAnalysis: {
				status: "strong",
				details: "Bayesian statistics engine",
			},
			metricsTracking: { status: "strong", details: "Custom metrics & events" },
			experimentGoals: {
				status: "strong",
				details: "Primary & secondary goals",
			},
			sdkLanguages: {
				status: "strong",
				details: "25+ languages (JS, Python, Go, Java, .NET, etc.)",
			},
			localEvaluation: {
				status: "strong",
				details: "Edge evaluation with streaming updates",
			},
			typeSafety: { status: "strong", details: "TypeScript, strongly typed" },
			documentation: { status: "strong", details: "Comprehensive docs" },
			apiQuality: {
				status: "strong",
				details: "REST API + GraphQL + SDKs",
			},
			rbac: {
				status: "strong",
				details: "Custom roles & permissions",
			},
			auditLogs: {
				status: "strong",
				details: "Complete audit trail",
			},
			environments: {
				status: "strong",
				details: "Unlimited environments",
			},
			approvalWorkflows: {
				status: "strong",
				details: "Change requests & approvals",
			},
			compliance: {
				status: "strong",
				details: "SOC 2, GDPR, HIPAA, FedRAMP",
			},
			freeTier: {
				status: "strong",
				details:
					"Developer: Free, unlimited seats, 5 service connections, 1K client MAUs",
			},
			paidPricing: {
				status: "strong",
				details: "Foundation: $12/service connection + $10/1K client MAU",
			},
			openSource: { status: "none", details: "Proprietary" },
			selfHosted: {
				status: "partial",
				details: "Relay Proxy for on-prem",
			},
			cloudHosted: { status: "strong", details: "Fully managed SaaS" },
			analytics: {
				status: "strong",
				details: "DataDog, New Relic, Segment, mParticle",
			},
			dataWarehouses: {
				status: "strong",
				details: "Snowflake, BigQuery data export",
			},
			cicd: {
				status: "strong",
				details: "GitHub Actions, GitLab CI, Terraform",
			},
			webhooks: { status: "strong", details: "Flag change webhooks" },
		},
	},
	{
		name: "Flagsmith",
		logo: <FlagsmithLogo />,
		website: "https://flagsmith.com",
		tagline: {
			status: "strong",
			details: "Open source feature flag and remote config service",
		},
		features: {
			booleanFlags: { status: "strong", details: "Full support" },
			multivariateFlags: {
				status: "strong",
				details: "String, number, boolean variants",
			},
			jsonFlags: { status: "strong", details: "JSON remote config" },
			flagDependencies: {
				status: "partial",
				details: "Via segment rules",
			},
			scheduledRollouts: {
				status: "strong",
				details: "Scheduled flag changes",
			},
			userTargeting: {
				status: "strong",
				details: "Identity-based targeting",
			},
			percentageRollouts: {
				status: "strong",
				details: "Percentage-based splits",
			},
			customSegments: {
				status: "strong",
				details: "Segment rules & conditions",
			},
			geoTargeting: {
				status: "partial",
				details: "Via custom traits",
			},
			contextualTargeting: {
				status: "strong",
				details: "Custom trait targeting",
			},
			abTesting: {
				status: "partial",
				details: "Basic A/B via integrations",
			},
			multivariateExperiments: {
				status: "partial",
				details: "Via integrations",
			},
			statisticalAnalysis: {
				status: "partial",
				details: "Via analytics integrations",
			},
			metricsTracking: {
				status: "partial",
				details: "Via integrations (Mixpanel, Heap)",
			},
			experimentGoals: {
				status: "partial",
				details: "External analytics required",
			},
			sdkLanguages: {
				status: "strong",
				details: "15+ languages (JS, Python, Java, .NET, Go, etc.)",
			},
			localEvaluation: {
				status: "strong",
				details: "Local evaluation mode",
			},
			typeSafety: {
				status: "strong",
				details: "TypeScript support",
			},
			documentation: {
				status: "strong",
				details: "Good docs with examples",
			},
			apiQuality: {
				status: "strong",
				details: "REST API + client SDKs",
			},
			rbac: {
				status: "strong",
				details: "Roles & permissions (paid)",
			},
			auditLogs: {
				status: "strong",
				details: "Audit log (paid)",
			},
			environments: {
				status: "strong",
				details: "Multiple environments",
			},
			approvalWorkflows: {
				status: "partial",
				details: "4-eyes via external process",
			},
			compliance: {
				status: "strong",
				details: "SOC 2 Type II, GDPR",
			},
			freeTier: {
				status: "strong",
				details: "Free: 50K requests/month, 1 team member",
			},
			paidPricing: {
				status: "strong",
				details: "Start-Up: $45/mo, 1M requests, 3 team members",
			},
			openSource: {
				status: "strong",
				details: "MIT & BSD licenses",
			},
			selfHosted: {
				status: "strong",
				details: "Docker, Kubernetes, full self-host",
			},
			cloudHosted: {
				status: "strong",
				details: "SaaS available",
			},
			analytics: {
				status: "strong",
				details: "Mixpanel, Heap, Amplitude, Segment",
			},
			dataWarehouses: {
				status: "partial",
				details: "Via data export API",
			},
			cicd: {
				status: "strong",
				details: "GitHub Actions, API-based",
			},
			webhooks: {
				status: "strong",
				details: "Change webhooks",
			},
		},
	},
	{
		name: "Unleash",
		logo: <UnleashLogo />,
		website: "https://www.getunleash.io",
		tagline: {
			status: "strong",
			details: "Privacy-first open source feature toggle system",
		},
		features: {
			booleanFlags: { status: "strong", details: "Full support" },
			multivariateFlags: {
				status: "strong",
				details: "Variants with payloads",
			},
			jsonFlags: {
				status: "strong",
				details: "JSON payloads in variants",
			},
			flagDependencies: {
				status: "partial",
				details: "Via strategy constraints",
			},
			scheduledRollouts: {
				status: "partial",
				details: "Via external scheduling",
			},
			userTargeting: {
				status: "strong",
				details: "User ID targeting",
			},
			percentageRollouts: {
				status: "strong",
				details: "Gradual rollout strategy",
			},
			customSegments: {
				status: "strong",
				details: "Constraint-based segments",
			},
			geoTargeting: {
				status: "partial",
				details: "Via custom constraints",
			},
			contextualTargeting: {
				status: "strong",
				details: "Context fields & constraints",
			},
			abTesting: {
				status: "partial",
				details: "Basic via variant weights",
			},
			multivariateExperiments: {
				status: "partial",
				details: "Variants, no built-in analysis",
			},
			statisticalAnalysis: {
				status: "none",
				details: "External tools required",
			},
			metricsTracking: {
				status: "partial",
				details: "Impression data, no analysis",
			},
			experimentGoals: {
				status: "none",
				details: "Not built-in",
			},
			sdkLanguages: {
				status: "strong",
				details: "20+ languages (JS, Java, Go, Python, .NET, etc.)",
			},
			localEvaluation: {
				status: "strong",
				details: "Edge SDK for local eval",
			},
			typeSafety: {
				status: "strong",
				details: "TypeScript, strongly typed SDKs",
			},
			documentation: {
				status: "strong",
				details: "Excellent documentation",
			},
			apiQuality: {
				status: "strong",
				details: "REST API + Admin API",
			},
			rbac: {
				status: "strong",
				details: "RBAC (Enterprise)",
			},
			auditLogs: {
				status: "strong",
				details: "Event log & audit trail",
			},
			environments: {
				status: "strong",
				details: "Projects & environments",
			},
			approvalWorkflows: {
				status: "strong",
				details: "Change requests (Enterprise)",
			},
			compliance: {
				status: "strong",
				details: "SOC 2, GDPR-ready",
			},
			freeTier: {
				status: "strong",
				details: "Open source (unlimited), Pro free tier",
			},
			paidPricing: {
				status: "strong",
				details: "Pay-as-you-go: $75/seat/mo, 53M API requests (Cloud)",
			},
			openSource: {
				status: "strong",
				details: "Apache 2.0",
			},
			selfHosted: {
				status: "strong",
				details: "Docker, Kubernetes, full self-host",
			},
			cloudHosted: {
				status: "strong",
				details: "Managed cloud available",
			},
			analytics: {
				status: "partial",
				details: "Webhook-based integrations",
			},
			dataWarehouses: {
				status: "partial",
				details: "Event export via webhooks",
			},
			cicd: {
				status: "strong",
				details: "API-driven, GitHub Actions",
			},
			webhooks: {
				status: "strong",
				details: "Event webhooks",
			},
		},
	},
	{
		name: "PostHog",
		logo: <PostHogLogo />,
		website: "https://posthog.com",
		tagline: {
			status: "strong",
			details: "All-in-one product OS with feature flags built-in",
		},
		features: {
			booleanFlags: { status: "strong", details: "Full support" },
			multivariateFlags: {
				status: "strong",
				details: "Multivariate flags",
			},
			jsonFlags: {
				status: "strong",
				details: "JSON payloads",
			},
			flagDependencies: {
				status: "partial",
				details: "Via property filters",
			},
			scheduledRollouts: {
				status: "partial",
				details: "Manual scheduling",
			},
			userTargeting: {
				status: "strong",
				details: "Person & group targeting",
			},
			percentageRollouts: {
				status: "strong",
				details: "Percentage-based rollouts",
			},
			customSegments: {
				status: "strong",
				details: "Cohorts & property filters",
			},
			geoTargeting: {
				status: "strong",
				details: "GeoIP person properties",
			},
			contextualTargeting: {
				status: "strong",
				details: "Custom properties",
			},
			abTesting: {
				status: "strong",
				details: "Native experimentation platform",
			},
			multivariateExperiments: {
				status: "strong",
				details: "Multi-variant experiments",
			},
			statisticalAnalysis: {
				status: "strong",
				details: "Bayesian & Frequentist stats",
			},
			metricsTracking: {
				status: "strong",
				details: "Full product analytics built-in",
			},
			experimentGoals: {
				status: "strong",
				details: "Primary & secondary metrics",
			},
			sdkLanguages: {
				status: "strong",
				details: "15+ languages (JS, Python, Go, PHP, Ruby, etc.)",
			},
			localEvaluation: {
				status: "strong",
				details: "Local evaluation mode",
			},
			typeSafety: {
				status: "strong",
				details: "TypeScript support",
			},
			documentation: {
				status: "strong",
				details: "Great docs & tutorials",
			},
			apiQuality: {
				status: "strong",
				details: "REST API + client SDKs",
			},
			rbac: {
				status: "strong",
				details: "Organizations & permissions",
			},
			auditLogs: {
				status: "strong",
				details: "Activity log",
			},
			environments: {
				status: "strong",
				details: "Multiple projects",
			},
			approvalWorkflows: {
				status: "none",
				details: "Not currently available",
			},
			compliance: {
				status: "strong",
				details: "SOC 2, GDPR-compliant",
			},
			freeTier: {
				status: "strong",
				details: "1M events/mo free",
			},
			paidPricing: {
				status: "strong",
				details: "Pay-as-you-go: $0.00005/request after 1M",
			},
			openSource: {
				status: "strong",
				details: "MIT license",
			},
			selfHosted: {
				status: "strong",
				details: "Docker, Kubernetes self-host",
			},
			cloudHosted: {
				status: "strong",
				details: "PostHog Cloud (US & EU)",
			},
			analytics: {
				status: "strong",
				details: "Built-in product analytics",
			},
			dataWarehouses: {
				status: "strong",
				details: "Snowflake, BigQuery export",
			},
			cicd: {
				status: "strong",
				details: "API-based, Terraform provider",
			},
			webhooks: {
				status: "strong",
				details: "Action webhooks",
			},
		},
	},
	{
		name: "Split",
		logo: <SplitLogo />,
		website: "https://www.split.io",
		tagline: {
			status: "strong",
			details: "Feature delivery platform with built-in impact monitoring",
		},
		features: {
			booleanFlags: { status: "strong", details: "Full support" },
			multivariateFlags: {
				status: "strong",
				details: "Multi-treatment splits",
			},
			jsonFlags: {
				status: "strong",
				details: "Dynamic configurations",
			},
			flagDependencies: {
				status: "strong",
				details: "Split dependencies",
			},
			scheduledRollouts: {
				status: "strong",
				details: "Scheduled rollout plans",
			},
			userTargeting: {
				status: "strong",
				details: "Targeting rules & allow lists",
			},
			percentageRollouts: {
				status: "strong",
				details: "Traffic allocation",
			},
			customSegments: {
				status: "strong",
				details: "Segment definitions",
			},
			geoTargeting: {
				status: "strong",
				details: "Geo-based targeting",
			},
			contextualTargeting: {
				status: "strong",
				details: "Attribute-based targeting",
			},
			abTesting: {
				status: "strong",
				details: "Built-in experimentation",
			},
			multivariateExperiments: {
				status: "strong",
				details: "Multi-treatment tests",
			},
			statisticalAnalysis: {
				status: "strong",
				details: "Statistical engine",
			},
			metricsTracking: {
				status: "strong",
				details: "Impact metrics & tracking",
			},
			experimentGoals: {
				status: "strong",
				details: "Guardrail & primary metrics",
			},
			sdkLanguages: {
				status: "strong",
				details: "12+ languages (JS, Java, Python, .NET, Go, etc.)",
			},
			localEvaluation: {
				status: "strong",
				details: "In-memory evaluation",
			},
			typeSafety: {
				status: "strong",
				details: "TypeScript definitions",
			},
			documentation: {
				status: "strong",
				details: "Comprehensive documentation",
			},
			apiQuality: {
				status: "strong",
				details: "REST API + Admin API",
			},
			rbac: {
				status: "strong",
				details: "Team-based permissions",
			},
			auditLogs: {
				status: "strong",
				details: "Complete audit trail",
			},
			environments: {
				status: "strong",
				details: "Multiple environments",
			},
			approvalWorkflows: {
				status: "strong",
				details: "Approval workflows",
			},
			compliance: {
				status: "strong",
				details: "SOC 2, GDPR",
			},
			freeTier: {
				status: "partial",
				details: "14-day trial, no free tier",
			},
			paidPricing: {
				status: "strong",
				details: "Custom pricing (Team & Enterprise)",
			},
			openSource: {
				status: "none",
				details: "Proprietary",
			},
			selfHosted: {
				status: "none",
				details: "Cloud-only",
			},
			cloudHosted: {
				status: "strong",
				details: "Fully managed SaaS",
			},
			analytics: {
				status: "strong",
				details: "DataDog, New Relic, Segment integrations",
			},
			dataWarehouses: {
				status: "strong",
				details: "Data pipeline to warehouses",
			},
			cicd: {
				status: "strong",
				details: "CI/CD integrations",
			},
			webhooks: {
				status: "strong",
				details: "Webhook notifications",
			},
		},
	},
	{
		name: "GrowthBook",
		logo: <GrowthBookLogo />,
		website: "https://www.growthbook.io",
		tagline: {
			status: "strong",
			details: "Open source feature flagging & A/B testing platform",
		},
		features: {
			booleanFlags: { status: "strong", details: "Full support" },
			multivariateFlags: {
				status: "strong",
				details: "Multi-value features",
			},
			jsonFlags: {
				status: "strong",
				details: "JSON feature values",
			},
			flagDependencies: {
				status: "partial",
				details: "Via targeting conditions",
			},
			scheduledRollouts: {
				status: "partial",
				details: "Manual scheduling",
			},
			userTargeting: {
				status: "strong",
				details: "Attribute-based targeting",
			},
			percentageRollouts: {
				status: "strong",
				details: "Gradual rollouts",
			},
			customSegments: {
				status: "strong",
				details: "Saved audiences",
			},
			geoTargeting: {
				status: "partial",
				details: "Via custom attributes",
			},
			contextualTargeting: {
				status: "strong",
				details: "Custom attribute targeting",
			},
			abTesting: {
				status: "strong",
				details: "Visual A/B test builder",
			},
			multivariateExperiments: {
				status: "strong",
				details: "Multi-variant experiments",
			},
			statisticalAnalysis: {
				status: "strong",
				details: "Bayesian & Frequentist engines",
			},
			metricsTracking: {
				status: "strong",
				details: "Metrics from data warehouses",
			},
			experimentGoals: {
				status: "strong",
				details: "Primary & secondary metrics",
			},
			sdkLanguages: {
				status: "strong",
				details: "15+ languages (JS, Python, Go, Ruby, PHP, etc.)",
			},
			localEvaluation: {
				status: "strong",
				details: "Edge-optimized evaluation",
			},
			typeSafety: {
				status: "strong",
				details: "TypeScript support",
			},
			documentation: {
				status: "strong",
				details: "Good documentation",
			},
			apiQuality: {
				status: "strong",
				details: "REST API + SDKs",
			},
			rbac: {
				status: "strong",
				details: "Role-based permissions (Pro)",
			},
			auditLogs: {
				status: "strong",
				details: "Audit log",
			},
			environments: {
				status: "strong",
				details: "Multiple environments",
			},
			approvalWorkflows: {
				status: "partial",
				details: "Via external process",
			},
			compliance: {
				status: "strong",
				details: "SOC 2, GDPR",
			},
			freeTier: {
				status: "strong",
				details: "Unlimited (self-hosted), Cloud free tier",
			},
			paidPricing: {
				status: "strong",
				details: "$20/seat/mo Pro, custom Enterprise",
			},
			openSource: {
				status: "strong",
				details: "MIT license",
			},
			selfHosted: {
				status: "strong",
				details: "Docker self-host",
			},
			cloudHosted: {
				status: "strong",
				details: "Managed cloud",
			},
			analytics: {
				status: "strong",
				details: "Connects to data warehouses",
			},
			dataWarehouses: {
				status: "strong",
				details: "Snowflake, BigQuery, Redshift, Mixpanel, GA",
			},
			cicd: {
				status: "strong",
				details: "API-based automation",
			},
			webhooks: {
				status: "strong",
				details: "Feature change webhooks",
			},
		},
	},
	{
		name: "DevCycle",
		logo: <DevCycleLogo />,
		website: "https://devcycle.com",
		tagline: {
			status: "strong",
			details: "Developer-first feature flag management platform",
		},
		features: {
			booleanFlags: { status: "strong", details: "Full support" },
			multivariateFlags: {
				status: "strong",
				details: "Multi-value variables",
			},
			jsonFlags: {
				status: "strong",
				details: "JSON variables",
			},
			flagDependencies: {
				status: "partial",
				details: "Via targeting rules",
			},
			scheduledRollouts: {
				status: "strong",
				details: "Scheduled changes",
			},
			userTargeting: {
				status: "strong",
				details: "User & custom targeting",
			},
			percentageRollouts: {
				status: "strong",
				details: "Percentage-based distribution",
			},
			customSegments: {
				status: "strong",
				details: "Custom audiences",
			},
			geoTargeting: {
				status: "partial",
				details: "Via custom properties",
			},
			contextualTargeting: {
				status: "strong",
				details: "Custom property targeting",
			},
			abTesting: {
				status: "strong",
				details: "Built-in experimentation",
			},
			multivariateExperiments: {
				status: "strong",
				details: "Multi-variant tests",
			},
			statisticalAnalysis: {
				status: "partial",
				details: "Basic statistics",
			},
			metricsTracking: {
				status: "strong",
				details: "Event tracking",
			},
			experimentGoals: {
				status: "strong",
				details: "Goal metrics",
			},
			sdkLanguages: {
				status: "strong",
				details: "12+ languages (JS, React, Node, Python, Go, etc.)",
			},
			localEvaluation: {
				status: "strong",
				details: "Local bucketing",
			},
			typeSafety: {
				status: "strong",
				details: "Type-safe SDKs",
			},
			documentation: {
				status: "strong",
				details: "Developer-focused docs",
			},
			apiQuality: {
				status: "strong",
				details: "Management API + SDKs",
			},
			rbac: {
				status: "strong",
				details: "Team permissions",
			},
			auditLogs: {
				status: "strong",
				details: "Activity logs",
			},
			environments: {
				status: "strong",
				details: "Multiple environments",
			},
			approvalWorkflows: {
				status: "partial",
				details: "Review process",
			},
			compliance: {
				status: "strong",
				details: "SOC 2, GDPR",
			},
			freeTier: {
				status: "strong",
				details: "Free: 1K client MAUs",
			},
			paidPricing: {
				status: "strong",
				details: "Developer: $10/mo (annual), Business: $500/mo (annual)",
			},
			openSource: {
				status: "partial",
				details: "Open source SDKs",
			},
			selfHosted: {
				status: "none",
				details: "Cloud-only",
			},
			cloudHosted: {
				status: "strong",
				details: "Managed SaaS",
			},
			analytics: {
				status: "strong",
				details: "Analytics integrations",
			},
			dataWarehouses: {
				status: "partial",
				details: "Data export",
			},
			cicd: {
				status: "strong",
				details: "GitHub integration, API",
			},
			webhooks: {
				status: "strong",
				details: "Event webhooks",
			},
		},
	},
	{
		name: "ConfigCat",
		logo: <ConfigCatLogo />,
		website: "https://configcat.com",
		tagline: {
			status: "strong",
			details: "Feature flag service with 10-minute setup",
		},
		features: {
			booleanFlags: { status: "strong", details: "Full support" },
			multivariateFlags: {
				status: "strong",
				details: "String, number, JSON",
			},
			jsonFlags: {
				status: "strong",
				details: "JSON setting values",
			},
			flagDependencies: {
				status: "partial",
				details: "Via targeting rules",
			},
			scheduledRollouts: {
				status: "partial",
				details: "Manual time-based changes",
			},
			userTargeting: {
				status: "strong",
				details: "User object targeting",
			},
			percentageRollouts: {
				status: "strong",
				details: "Percentage options",
			},
			customSegments: {
				status: "strong",
				details: "Segments with conditions",
			},
			geoTargeting: {
				status: "partial",
				details: "Via custom attributes",
			},
			contextualTargeting: {
				status: "strong",
				details: "Custom attribute targeting",
			},
			abTesting: {
				status: "partial",
				details: "Basic A/B via percentages",
			},
			multivariateExperiments: {
				status: "partial",
				details: "Via integrations",
			},
			statisticalAnalysis: {
				status: "none",
				details: "External tools needed",
			},
			metricsTracking: {
				status: "partial",
				details: "Via integrations",
			},
			experimentGoals: {
				status: "none",
				details: "Not built-in",
			},
			sdkLanguages: {
				status: "strong",
				details: "25+ languages (JS, Java, Python, .NET, Go, etc.)",
			},
			localEvaluation: {
				status: "strong",
				details: "Auto-polling with caching",
			},
			typeSafety: {
				status: "strong",
				details: "Strongly typed SDKs",
			},
			documentation: {
				status: "strong",
				details: "Clear documentation",
			},
			apiQuality: {
				status: "strong",
				details: "Public Management API",
			},
			rbac: {
				status: "strong",
				details: "Permission groups (Team+)",
			},
			auditLogs: {
				status: "strong",
				details: "Product audit log",
			},
			environments: {
				status: "strong",
				details: "Unlimited configs & environments",
			},
			approvalWorkflows: {
				status: "partial",
				details: "Two-step save",
			},
			compliance: {
				status: "strong",
				details: "SOC 2, GDPR, CCPA",
			},
			freeTier: {
				status: "strong",
				details: "Free: 10 flags, 2 environments, 5M config downloads",
			},
			paidPricing: {
				status: "strong",
				details: "Pro: $110/mo (100 flags), Smart: $325/mo (unlimited)",
			},
			openSource: {
				status: "partial",
				details: "Open source SDKs",
			},
			selfHosted: {
				status: "none",
				details: "Cloud-only",
			},
			cloudHosted: {
				status: "strong",
				details: "Fully managed SaaS",
			},
			analytics: {
				status: "strong",
				details: "Google Analytics, Mixpanel, Amplitude",
			},
			dataWarehouses: {
				status: "partial",
				details: "Webhook-based export",
			},
			cicd: {
				status: "strong",
				details: "Slack, Jira, Trello, Zapier, GitHub",
			},
			webhooks: {
				status: "strong",
				details: "Config change webhooks",
			},
		},
	},
];

export const featureFlagsComparisonConfig: ComparisonConfig = {
	title: "featureflags.compare",
	subtitle: "⋅ Easily compare different feature flag providers and platforms",
	icon: <RiFlag2Line className="w-4 h-4 mt-0.5" />,
	providers,
	categories,
	lastUpdated: "2025-10-03",
};
