import type { Provider } from "../../types/comparison";

function LuciaLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			aria-label="Lucia logo"
		>
			<title>Lucia</title>
			<circle cx="12" cy="12" r="10" fill="#5F3DC4" />
			<text
				x="12"
				y="16"
				textAnchor="middle"
				fill="white"
				fontSize="12"
				fontWeight="bold"
				fontFamily="monospace"
			>
				L
			</text>
		</svg>
	);
}

export const lucia: Provider = {
	name: "Lucia",
	logo: <LuciaLogo />,
	website: "https://lucia-auth.com",
	tagline: {
		status: "strong",
		details: "Open source library to implement authentication using JavaScript",
	},
	features: {
		emailPassword: {
			status: "strong",
			details: "Build your own with database",
		},
		passwordless: {
			status: "partial",
			details: "Implement yourself with email service",
		},
		socialLogins: {
			status: "strong",
			details: "Arctic library: 50+ OAuth providers",
		},
		enterpriseSSO: {
			status: "partial",
			details: "Custom SAML/OIDC implementation needed",
		},
		passkeys: { status: "partial", details: "Use SimpleWebAuthn library" },
		mfa: { status: "partial", details: "Build your own TOTP/SMS logic" },
		rbac: {
			status: "partial",
			details: "Implement with your database schema",
		},
		userProfiles: {
			status: "partial",
			details: "Your database, your schema",
		},
		organizations: { status: "partial", details: "Build from scratch" },
		frontendSDKs: {
			status: "partial",
			details: "Framework-agnostic TypeScript library",
		},
		prebuiltUI: { status: "none", details: "No pre-built UI (you build it)" },
		documentation: { status: "strong", details: "Clear docs with examples" },
		apiApproach: { status: "strong", details: "Session-based auth library" },
		sessionManagement: {
			status: "strong",
			details: "Secure database-backed sessions",
		},
		jwtSupport: {
			status: "partial",
			details: "Use jose or other JWT library",
		},
		compliance: {
			status: "partial",
			details: "Your responsibility (self-implemented)",
		},
		rateLimiting: { status: "partial", details: "Implement via middleware" },
		freeTier: {
			status: "strong",
			details: "Unlimited (library, not a service)",
		},
		paidPricing: { status: "none", details: "Free forever (MIT license)" },
		openSource: { status: "strong", details: "MIT License (fully open)" },
		selfHosted: {
			status: "strong",
			details: "Required (TypeScript library)",
		},
		oauthProviders: {
			status: "strong",
			details: "Arctic: 50+ OAuth providers",
		},
		webhooks: { status: "partial", details: "Build your own event system" },
		thirdPartyIntegrations: {
			status: "none",
			details: "Minimal (DIY approach)",
		},
	},
};
