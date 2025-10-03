import type { Provider } from "../../types/comparison";

function WorkOSLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			aria-label="WorkOS logo"
		>
			<title>WorkOS</title>
			<rect width="24" height="24" rx="6" fill="#6363F1" />
			<text
				x="12"
				y="16"
				textAnchor="middle"
				fill="white"
				fontSize="10"
				fontWeight="bold"
				fontFamily="sans-serif"
			>
				W
			</text>
		</svg>
	);
}

export const workos: Provider = {
	name: "WorkOS",
	logo: <WorkOSLogo />,
	website: "https://workos.com",
	tagline: {
		status: "strong",
		details:
			"Your app, enterprise ready - APIs for SSO, SCIM, and user management",
	},
	features: {
		emailPassword: { status: "strong", details: "AuthKit email + password" },
		passwordless: { status: "strong", details: "Magic links via AuthKit" },
		socialLogins: {
			status: "strong",
			details: "Microsoft, Google, GitHub via AuthKit",
		},
		enterpriseSSO: {
			status: "strong",
			details: "SAML, OIDC (enterprise focus)",
		},
		passkeys: { status: "partial", details: "Coming soon to AuthKit" },
		mfa: { status: "strong", details: "TOTP, SMS included in AuthKit" },
		rbac: {
			status: "strong",
			details: "Built-in with AuthKit & Organizations API",
		},
		userProfiles: {
			status: "strong",
			details: "User Management API with metadata",
		},
		organizations: {
			status: "strong",
			details: "Organizations API (B2B focus)",
		},
		frontendSDKs: {
			status: "strong",
			details: "React, Next.js, Node.js SDKs",
		},
		prebuiltUI: {
			status: "strong",
			details: "AuthKit hosted UI with customization",
		},
		documentation: { status: "strong", details: "Developer-focused docs" },
		apiApproach: {
			status: "strong",
			details: "Modern REST APIs with webhooks",
		},
		sessionManagement: {
			status: "strong",
			details: "Managed sessions via AuthKit",
		},
		jwtSupport: { status: "strong", details: "JWTs for API authentication" },
		compliance: { status: "strong", details: "SOC 2 Type II, GDPR, HIPAA" },
		rateLimiting: {
			status: "strong",
			details: "Enterprise-grade rate limiting",
		},
		freeTier: { status: "strong", details: "1 million MAU (generous)" },
		paidPricing: { status: "strong", details: "$2,500/mo per 1M MAU" },
		openSource: { status: "none", details: "Proprietary" },
		selfHosted: { status: "none", details: "Cloud-only SaaS" },
		oauthProviders: {
			status: "strong",
			details: "Social + enterprise SSO providers",
		},
		webhooks: {
			status: "strong",
			details: "Event-driven webhooks for all APIs",
		},
		thirdPartyIntegrations: {
			status: "strong",
			details: "Directory Sync (SCIM), Audit Logs, MFA",
		},
	},
};
