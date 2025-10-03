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
		details:
			"Easy to implement, adaptable authentication and authorization platform",
	},
	features: {
		emailPassword: {
			status: "strong",
			details: "Email + password with verification",
		},
		passwordless: { status: "strong", details: "Email, SMS magic links" },
		socialLogins: {
			status: "strong",
			details: "30+ providers including all major platforms",
		},
		enterpriseSSO: {
			status: "strong",
			details: "SAML, OIDC, AD, LDAP (Professional+)",
		},
		passkeys: { status: "strong", details: "WebAuthn/FIDO2 biometric auth" },
		mfa: { status: "strong", details: "SMS, TOTP, Email, Push, WebAuthn" },
		rbac: {
			status: "strong",
			details: "Core RBAC (Professional+), fine-grained permissions",
		},
		userProfiles: {
			status: "strong",
			details: "Customizable with metadata & progressive profiling",
		},
		organizations: {
			status: "strong",
			details: "B2B organizations (Professional+)",
		},
		frontendSDKs: {
			status: "strong",
			details: "React, Angular, Vue, iOS, Android, many more",
		},
		prebuiltUI: {
			status: "strong",
			details: "Universal Login with customizable Lock widget",
		},
		documentation: {
			status: "strong",
			details: "Comprehensive docs with quickstarts",
		},
		apiApproach: { status: "strong", details: "REST API + Management API" },
		sessionManagement: {
			status: "strong",
			details: "Refresh tokens, SSO sessions, device tracking",
		},
		jwtSupport: {
			status: "strong",
			details: "JWTs with custom claims & namespacing",
		},
		compliance: {
			status: "strong",
			details: "SOC 2 Type II, ISO 27001, GDPR, HIPAA",
		},
		rateLimiting: {
			status: "strong",
			details: "Configurable rate limits & anomaly detection",
		},
		freeTier: { status: "strong", details: "7,500 MAU" },
		paidPricing: {
			status: "strong",
			details: "$35/mo (Essentials), $240/mo (Professional)",
		},
		openSource: { status: "none", details: "Proprietary" },
		selfHosted: {
			status: "none",
			details: "Cloud-only (Private Cloud available)",
		},
		oauthProviders: {
			status: "strong",
			details: "30+ social + enterprise connections",
		},
		webhooks: {
			status: "strong",
			details: "Log streams & webhooks (Professional+)",
		},
		thirdPartyIntegrations: {
			status: "strong",
			details: "Extensive marketplace with 100+ integrations",
		},
	},
};
