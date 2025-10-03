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

		reference: "https://lucia-auth.com",
	},
	features: {
		emailPassword: {

			status: "strong",

			details: "Build your own with database",

			reference: "https://lucia-auth.com",
		},
		passwordless: {

			status: "partial",

			details: "Implement yourself with email service",

			reference: "https://lucia-auth.com",
		},
		socialLogins: {

			status: "strong",

			details: "Arctic library: 50+ OAuth providers",

			reference: "https://lucia-auth.com",
		},
		enterpriseSSO: {

			status: "partial",

			details: "Custom SAML/OIDC implementation needed",

			reference: "https://lucia-auth.com",
		},
		passkeys: { status: "partial", details: "Use SimpleWebAuthn library", reference: "https://lucia-auth.com" },
		mfa: { status: "partial", details: "Build your own TOTP/SMS logic", reference: "https://lucia-auth.com" },
		rbac: {

			status: "partial",

			details: "Implement with your database schema",

			reference: "https://lucia-auth.com",
		},
		userProfiles: {

			status: "partial",

			details: "Your database, your schema",

			reference: "https://lucia-auth.com",
		},
		organizations: { status: "partial", details: "Build from scratch", reference: "https://lucia-auth.com" },
		frontendSDKs: {

			status: "partial",

			details: "Framework-agnostic TypeScript library",

			reference: "https://lucia-auth.com",
		},
		prebuiltUI: { status: "none", details: "No pre-built UI (you build it)", reference: "https://lucia-auth.com" },
		documentation: { status: "strong", details: "Clear docs with examples", reference: "https://lucia-auth.com" },
		apiApproach: { status: "strong", details: "Session-based auth library", reference: "https://lucia-auth.com" },
		sessionManagement: {

			status: "strong",

			details: "Secure database-backed sessions",

			reference: "https://lucia-auth.com",
		},
		jwtSupport: {

			status: "partial",

			details: "Use jose or other JWT library",

			reference: "https://lucia-auth.com",
		},
		compliance: {

			status: "partial",

			details: "Your responsibility (self-implemented)",

			reference: "https://lucia-auth.com",
		},
		rateLimiting: { status: "partial", details: "Implement via middleware", reference: "https://lucia-auth.com" },
		freeTier: {

			status: "strong",

			details: "Unlimited (library, not a service)",

			reference: "https://lucia-auth.com",
		},
		paidPricing: { status: "none", details: "Free forever (MIT license)", reference: "https://lucia-auth.com" },
		openSource: { status: "strong", details: "MIT License (fully open)", reference: "https://lucia-auth.com" },
		selfHosted: {

			status: "strong",

			details: "Required (TypeScript library)",

			reference: "https://lucia-auth.com",
		},
		oauthProviders: {

			status: "strong",

			details: "Arctic: 50+ OAuth providers",

			reference: "https://lucia-auth.com",
		},
		webhooks: { status: "partial", details: "Build your own event system", reference: "https://lucia-auth.com" },
		thirdPartyIntegrations: {

			status: "none",

			details: "Minimal (DIY approach)",

			reference: "https://lucia-auth.com",
		},
	},
};
