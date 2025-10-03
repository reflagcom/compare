import type { Provider } from "../../types/comparison";

function AuthJsLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="#fff"
			aria-label="Next.js logo"
		>
			<title>Auth.js</title>
			<path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
		</svg>
	);
}

export const authjs: Provider = {
	name: "Auth.js (NextAuth)",
	logo: <AuthJsLogo />,
	website: "https://authjs.dev",
	tagline: {
		status: "strong",
		details: "Free and open source authentication for the web",
	},
	features: {
		emailPassword: {
			status: "strong",
			details: "Credentials provider with custom logic",
		},
		passwordless: { status: "strong", details: "Email magic links built-in" },
		socialLogins: {
			status: "strong",
			details: "80+ built-in OAuth providers",
		},
		enterpriseSSO: {
			status: "partial",
			details: "Via custom providers (SAML, OIDC possible)",
		},
		passkeys: {
			status: "partial",
			details: "Via SimpleWebAuthn or custom implementation",
		},
		mfa: {
			status: "partial",
			details: "Custom implementation via callbacks",
		},
		rbac: {
			status: "partial",
			details: "Build your own with session callbacks",
		},
		userProfiles: {
			status: "partial",
			details: "Store in your own database",
		},
		organizations: {
			status: "partial",
			details: "Build your own with custom logic",
		},
		frontendSDKs: {
			status: "strong",
			details: "Next.js, SvelteKit, SolidStart, Express",
		},
		prebuiltUI: {
			status: "partial",
			details: "Basic sign-in pages (customizable)",
		},
		documentation: {
			status: "strong",
			details: "Good docs with many examples",
		},
		apiApproach: {
			status: "strong",
			details: "Framework-integrated API routes",
		},
		sessionManagement: {
			status: "strong",
			details: "JWT or database sessions with rotation",
		},
		jwtSupport: {
			status: "strong",
			details: "JWT with custom claims via callbacks",
		},
		compliance: {
			status: "partial",
			details: "Your responsibility (self-hosted)",
		},
		rateLimiting: {
			status: "partial",
			details: "Implement via middleware or proxies",
		},
		freeTier: {
			status: "strong",
			details: "Unlimited (self-hosted, open source)",
		},
		paidPricing: { status: "none", details: "Free forever" },
		openSource: { status: "strong", details: "ISC License (MIT-compatible)" },
		selfHosted: {
			status: "strong",
			details: "Required (runs on your infrastructure)",
		},
		oauthProviders: {
			status: "strong",
			details: "80+ providers (Google, GitHub, Apple, etc.)",
		},
		webhooks: {
			status: "partial",
			details: "Build your own with event callbacks",
		},
		thirdPartyIntegrations: {
			status: "partial",
			details: "Community adapters for various databases",
		},
	},
};
