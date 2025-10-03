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

		reference: "https://authjs.dev",
	},
	features: {
		emailPassword: {

			status: "strong",

			details: "Credentials provider with custom logic",

			reference: "https://authjs.dev",
		},
		passwordless: { status: "strong", details: "Email magic links built-in", reference: "https://authjs.dev" },
		socialLogins: {

			status: "strong",

			details: "80+ built-in OAuth providers",

			reference: "https://authjs.dev",
		},
		enterpriseSSO: {

			status: "partial",

			details: "Via custom providers (SAML, OIDC possible)",

			reference: "https://authjs.dev",
		},
		passkeys: {

			status: "partial",

			details: "Via SimpleWebAuthn or custom implementation",

			reference: "https://authjs.dev",
		},
		mfa: {

			status: "partial",

			details: "Custom implementation via callbacks",

			reference: "https://authjs.dev",
		},
		rbac: {

			status: "partial",

			details: "Build your own with session callbacks",

			reference: "https://authjs.dev",
		},
		userProfiles: {

			status: "partial",

			details: "Store in your own database",

			reference: "https://authjs.dev",
		},
		organizations: {

			status: "partial",

			details: "Build your own with custom logic",

			reference: "https://authjs.dev",
		},
		frontendSDKs: {

			status: "strong",

			details: "Next.js, SvelteKit, SolidStart, Express",

			reference: "https://authjs.dev/getting-started/introduction",
		},
		prebuiltUI: {

			status: "partial",

			details: "Basic sign-in pages (customizable)",

			reference: "https://authjs.dev",
		},
		documentation: {

			status: "strong",

			details: "Good docs with many examples",

			reference: "https://authjs.dev/getting-started/introduction",
		},
		apiApproach: {

			status: "strong",

			details: "Framework-integrated API routes",

			reference: "https://authjs.dev/getting-started/introduction",
		},
		sessionManagement: {

			status: "strong",

			details: "JWT or database sessions with rotation",

			reference: "https://authjs.dev",
		},
		jwtSupport: {

			status: "strong",

			details: "JWT with custom claims via callbacks",

			reference: "https://authjs.dev",
		},
		compliance: {

			status: "partial",

			details: "Your responsibility (self-hosted)",

			reference: "https://authjs.dev",
		},
		rateLimiting: {

			status: "partial",

			details: "Implement via middleware or proxies",

			reference: "https://authjs.dev",
		},
		freeTier: {

			status: "strong",

			details: "Unlimited (self-hosted, open source)",

			reference: "https://authjs.dev",
		},
		paidPricing: { status: "none", details: "Free forever", reference: "https://authjs.dev" },
		openSource: { status: "strong", details: "ISC License (MIT-compatible)", reference: "https://authjs.dev" },
		selfHosted: {

			status: "strong",

			details: "Required (runs on your infrastructure)",

			reference: "https://authjs.dev",
		},
		oauthProviders: {

			status: "strong",

			details: "80+ providers (Google, GitHub, Apple, etc.)",

			reference: "https://authjs.dev",
		},
		webhooks: {

			status: "partial",

			details: "Build your own with event callbacks",

			reference: "https://authjs.dev",
		},
		thirdPartyIntegrations: {

			status: "partial",

			details: "Community adapters for various databases",

			reference: "https://authjs.dev",
		},
	},
};
