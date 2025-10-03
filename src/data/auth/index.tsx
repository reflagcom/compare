import RiKey2Line from "remixicon-react/Key2LineIcon";
import RiMoneyDollarCircleLine from "remixicon-react/MoneyDollarCircleLineIcon";
import RiPlugLine from "remixicon-react/PlugLineIcon";
import RiServerLine from "remixicon-react/ServerLineIcon";
import RiShieldCheckLine from "remixicon-react/ShieldCheckLineIcon";
import RiShieldKeyholeLine from "remixicon-react/ShieldKeyholeLineIcon";
import RiTerminalBoxLine from "remixicon-react/TerminalBoxLineIcon";
import RiUserLine from "remixicon-react/UserLineIcon";
import type { Category, ComparisonConfig } from "../../types/comparison";
import { auth0 } from "./auth0";
import { authjs } from "./authjs";
// Import all auth providers
import { clerk } from "./clerk";
import { firebase } from "./firebase";
import { keycloak } from "./keycloak";
import { lucia } from "./lucia";
import { supabase } from "./supabase";
import { workos } from "./workos";

// Feature Categories
export const categories: Category[] = [
	{
		id: "authentication",
		label: "Core Authentication",
		icon: <RiKey2Line className="w-4 h-4 text-blue-500" />,
		features: {
			emailPassword: "Email/Password",
			passwordless: "Passwordless (Magic Links)",
			socialLogins: "Social Logins",
			enterpriseSSO: "Enterprise SSO (SAML/OIDC)",
			passkeys: "Passkeys/WebAuthn",
		},
	},
	{
		id: "userManagement",
		label: "User Management",
		icon: <RiUserLine className="w-4 h-4 text-purple-500" />,
		features: {
			mfa: "Multi-Factor Auth",
			rbac: "RBAC/Permissions",
			userProfiles: "User Profiles",
			organizations: "Organizations/Teams",
		},
	},
	{
		id: "developerExperience",
		label: "Developer Experience",
		icon: <RiTerminalBoxLine className="w-4 h-4 text-green-500" />,
		features: {
			frontendSDKs: "Frontend SDKs",
			prebuiltUI: "Pre-built UI Components",
			documentation: "Documentation Quality",
			apiApproach: "API Approach",
		},
	},
	{
		id: "security",
		label: "Security & Compliance",
		icon: <RiShieldCheckLine className="w-4 h-4 text-red-500" />,
		features: {
			sessionManagement: "Session Management",
			jwtSupport: "JWT Support",
			compliance: "SOC 2 / GDPR Compliance",
			rateLimiting: "Rate Limiting / DDoS Protection",
		},
	},
	{
		id: "pricing",
		label: "Pricing",
		icon: <RiMoneyDollarCircleLine className="w-4 h-4 text-amber-500" />,
		features: {
			freeTier: "Free Tier",
			paidPricing: "Paid Pricing",
		},
	},
	{
		id: "deployment",
		label: "Deployment",
		icon: <RiServerLine className="w-4 h-4 text-cyan-500" />,
		features: {
			openSource: "Open Source",
			selfHosted: "Self-Hosted Option",
		},
	},
	{
		id: "integrations",
		label: "Integrations",
		icon: <RiPlugLine className="w-4 h-4 text-pink-500" />,
		features: {
			oauthProviders: "OAuth Providers",
			webhooks: "Webhooks",
			thirdPartyIntegrations: "Third-Party Integrations",
		},
	},
];

// Providers array
export const providers = [
	clerk,
	auth0,
	supabase,
	authjs,
	firebase,
	lucia,
	workos,
	keycloak,
];

export const authComparisonConfig: ComparisonConfig = {
	title: "auth.compare",
	subtitle: "⋅ Easily compare different authentication providers/libraries",
	icon: <RiShieldKeyholeLine className="w-4 h-4 mt-0.5" />,
	providers,
	categories,
	lastUpdated: "2025-10-02",
};
