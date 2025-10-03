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

		details: "Your app, enterprise ready - APIs for SSO, SCIM, and user management",

		reference: "https://workos.com/pricing",
	},
	features: {
		emailPassword: { status: "strong", details: "AuthKit email + password", reference: "https://workos.com/pricing" },
		passwordless: { status: "strong", details: "Magic links via AuthKit", reference: "https://workos.com/pricing" },
		socialLogins: {

			status: "strong",

			details: "Microsoft, Google, GitHub via AuthKit",

			reference: "https://workos.com/pricing",
		},
		enterpriseSSO: {

			status: "strong",

			details: "SAML, OIDC (enterprise focus)",

			reference: "https://workos.com/pricing",
		},
		passkeys: { status: "partial", details: "Coming soon to AuthKit", reference: "https://workos.com/pricing" },
		mfa: { status: "strong", details: "TOTP, SMS included in AuthKit", reference: "https://workos.com/pricing" },
		rbac: {

			status: "strong",

			details: "Built-in with AuthKit & Organizations API",

			reference: "https://workos.com/pricing",
		},
		userProfiles: {

			status: "strong",

			details: "User Management API with metadata",

			reference: "https://workos.com/pricing",
		},
		organizations: {

			status: "strong",

			details: "Organizations API (B2B focus)",

			reference: "https://workos.com/pricing",
		},
		frontendSDKs: {

			status: "strong",

			details: "React, Next.js, Node.js SDKs",

			reference: "https://workos.com/docs",
		},
		prebuiltUI: {

			status: "strong",

			details: "AuthKit hosted UI with customization",

			reference: "https://workos.com/pricing",
		},
		documentation: { status: "strong", details: "Developer-focused docs", reference: "https://workos.com/docs" },
		apiApproach: {

			status: "strong",

			details: "Modern REST APIs with webhooks",

			reference: "https://workos.com/docs",
		},
		sessionManagement: {

			status: "strong",

			details: "Managed sessions via AuthKit",

			reference: "https://workos.com/pricing",
		},
		jwtSupport: { status: "strong", details: "JWTs for API authentication", reference: "https://workos.com/pricing" },
		compliance: { status: "strong", details: "SOC 2 Type II, GDPR, HIPAA", reference: "https://workos.com/legal/privacy-policy" },
		rateLimiting: {

			status: "strong",

			details: "Enterprise-grade rate limiting",

			reference: "https://workos.com/pricing",
		},
		freeTier: { status: "strong", details: "1 million MAU (generous)", reference: "https://workos.com/pricing" },
		paidPricing: { status: "strong", details: "$2,500/mo per 1M MAU", reference: "https://workos.com/pricing" },
		openSource: { status: "none", details: "Proprietary", reference: "https://workos.com/pricing" },
		selfHosted: { status: "none", details: "Cloud-only SaaS", reference: "https://workos.com/pricing" },
		oauthProviders: {

			status: "strong",

			details: "Social + enterprise SSO providers",

			reference: "https://workos.com/pricing",
		},
		webhooks: {

			status: "strong",

			details: "Event-driven webhooks for all APIs",

			reference: "https://workos.com/pricing",
		},
		thirdPartyIntegrations: {

			status: "strong",

			details: "Directory Sync (SCIM), Audit Logs, MFA",

			reference: "https://workos.com/pricing",
		},
	},
};
