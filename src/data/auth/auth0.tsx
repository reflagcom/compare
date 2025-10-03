import type { Provider } from "../../types/comparison";

function Auth0Logo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="#EB5424"
			aria-label="Auth0 logo"
		>
			<title>Auth0</title>
			<path d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58 2.343 7.45-6.157-4.597-6.158 4.58 2.358-7.433-6.188-4.55 7.63-.045L12.008 0l2.356 7.404 7.615.044z" />
		</svg>
	);
}

export const auth0: Provider = {
	name: "Auth0",
	logo: <Auth0Logo />,
	website: "https://auth0.com",
	tagline: {

		status: "strong",

		details: "Easy to implement, adaptable authentication and authorization platform",

		reference: "https://auth0.com/pricing",
	},
	features: {
		emailPassword: {

			status: "strong",

			details: "Email + password with verification",

			reference: "https://auth0.com/pricing",
		},
		passwordless: { status: "strong", details: "Email, SMS magic links", reference: "https://auth0.com/pricing" },
		socialLogins: {

			status: "strong",

			details: "30+ providers including all major platforms",

			reference: "https://auth0.com/pricing",
		},
		enterpriseSSO: {

			status: "strong",

			details: "SAML, OIDC, AD, LDAP (Professional+)",

			reference: "https://auth0.com/pricing",
		},
		passkeys: { status: "strong", details: "WebAuthn/FIDO2 biometric auth", reference: "https://auth0.com/pricing" },
		mfa: { status: "strong", details: "SMS, TOTP, Email, Push, WebAuthn", reference: "https://auth0.com/pricing" },
		rbac: {

			status: "strong",

			details: "Core RBAC (Professional+), fine-grained permissions",

			reference: "https://auth0.com/pricing",
		},
		userProfiles: {

			status: "strong",

			details: "Customizable with metadata & progressive profiling",

			reference: "https://auth0.com/pricing",
		},
		organizations: {

			status: "strong",

			details: "B2B organizations (Professional+)",

			reference: "https://auth0.com/pricing",
		},
		frontendSDKs: {

			status: "strong",

			details: "React, Angular, Vue, iOS, Android, many more",

			reference: "https://auth0.com/docs",
		},
		prebuiltUI: {

			status: "strong",

			details: "Universal Login with customizable Lock widget",

			reference: "https://auth0.com/pricing",
		},
		documentation: {

			status: "strong",

			details: "Comprehensive docs with quickstarts",

			reference: "https://auth0.com/docs",
		},
		apiApproach: { status: "strong", details: "REST API + Management API", reference: "https://auth0.com/docs" },
		sessionManagement: {

			status: "strong",

			details: "Refresh tokens, SSO sessions, device tracking",

			reference: "https://auth0.com/pricing",
		},
		jwtSupport: {

			status: "strong",

			details: "JWTs with custom claims & namespacing",

			reference: "https://auth0.com/pricing",
		},
		compliance: {

			status: "strong",

			details: "SOC 2 Type II, ISO 27001, GDPR, HIPAA",

			reference: "https://auth0.com/privacy",
		},
		rateLimiting: {

			status: "strong",

			details: "Configurable rate limits & anomaly detection",

			reference: "https://auth0.com/pricing",
		},
		freeTier: { status: "strong", details: "7,500 MAU", reference: "https://auth0.com/pricing" },
		paidPricing: {

			status: "strong",

			details: "$35/mo (Essentials), $240/mo (Professional)",

			reference: "https://auth0.com/pricing",
		},
		openSource: { status: "none", details: "Proprietary", reference: "https://auth0.com/pricing" },
		selfHosted: {

			status: "none",

			details: "Cloud-only (Private Cloud available)",

			reference: "https://auth0.com/pricing",
		},
		oauthProviders: {

			status: "strong",

			details: "30+ social + enterprise connections",

			reference: "https://auth0.com/pricing",
		},
		webhooks: {

			status: "strong",

			details: "Log streams & webhooks (Professional+)",

			reference: "https://auth0.com/pricing",
		},
		thirdPartyIntegrations: {

			status: "strong",

			details: "Extensive marketplace with 100+ integrations",

			reference: "https://auth0.com/pricing",
		},
	},
};
