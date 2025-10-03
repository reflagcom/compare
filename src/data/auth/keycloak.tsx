import type { Provider } from "../../types/comparison";

function KeycloakLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="#4D9FDB"
			aria-label="Keycloak logo"
		>
			<title>Keycloak</title>
			<circle cx="12" cy="6" r="3" />
			<path d="M12 10c-3.5 0-6 2-6 4.5V18c0 1 .5 2 2 2h8c1.5 0 2-1 2-2v-3.5c0-2.5-2.5-4.5-6-4.5z" />
		</svg>
	);
}

export const keycloak: Provider = {
	name: "Keycloak",
	logo: <KeycloakLogo />,
	website: "https://www.keycloak.org",
	tagline: {

		status: "strong",

		details: "Open source identity and access management - add authentication with minimum effort",

		reference: "https://www.keycloak.org",
	},
	features: {
		emailPassword: { status: "strong", details: "Username/email + password", reference: "https://www.keycloak.org" },
		passwordless: { status: "partial", details: "WebAuthn or custom flows", reference: "https://www.keycloak.org" },
		socialLogins: {

			status: "strong",

			details: "Google, GitHub, Facebook, LinkedIn, etc.",

			reference: "https://www.keycloak.org",
		},
		enterpriseSSO: {

			status: "strong",

			details: "SAML 2.0, OIDC, LDAP, Kerberos",

			reference: "https://www.keycloak.org",
		},
		passkeys: { status: "strong", details: "WebAuthn/FIDO2 built-in", reference: "https://www.keycloak.org" },
		mfa: { status: "strong", details: "OTP, WebAuthn/FIDO2, SMS (via SPI)", reference: "https://www.keycloak.org" },
		rbac: {

			status: "strong",

			details: "Fine-grained authorization with policies",

			reference: "https://www.keycloak.org",
		},
		userProfiles: {

			status: "strong",

			details: "Customizable attributes & federation",

			reference: "https://www.keycloak.org",
		},
		organizations: {

			status: "strong",

			details: "Realms & organizations (multi-tenancy)",

			reference: "https://www.keycloak.org",
		},
		frontendSDKs: {

			status: "strong",

			details: "JavaScript, Java, Python, .NET, Go adapters",

			reference: "https://www.keycloak.org/documentation",
		},
		prebuiltUI: {

			status: "partial",

			details: "Admin console + customizable login themes",

			reference: "https://www.keycloak.org",
		},
		documentation: {

			status: "strong",

			details: "Comprehensive official docs",

			reference: "https://www.keycloak.org/documentation",
		},
		apiApproach: {

			status: "strong",

			details: "REST Admin API + standard OAuth/OIDC",

			reference: "https://www.keycloak.org/documentation",
		},
		sessionManagement: {

			status: "strong",

			details: "SSO sessions, offline tokens, revocation",

			reference: "https://www.keycloak.org",
		},
		jwtSupport: {

			status: "strong",

			details: "JWTs with custom claims & mappers",

			reference: "https://www.keycloak.org",
		},
		compliance: {

			status: "partial",

			details: "Your responsibility (self-hosted)",

			reference: "https://www.keycloak.org",
		},
		rateLimiting: {

			status: "partial",

			details: "Via reverse proxy or extensions",

			reference: "https://www.keycloak.org",
		},
		freeTier: {

			status: "strong",

			details: "Unlimited (self-hosted, open source)",

			reference: "https://www.keycloak.org",
		},
		paidPricing: {

			status: "none",

			details: "Free (Red Hat support available)",

			reference: "https://www.keycloak.org",
		},
		openSource: { status: "strong", details: "Apache 2.0 License", reference: "https://www.keycloak.org" },
		selfHosted: {

			status: "strong",

			details: "Required (Java app, Docker, Kubernetes)",

			reference: "https://www.keycloak.org",
		},
		oauthProviders: {

			status: "strong",

			details: "OAuth 2.0, OIDC, SAML, LDAP, social providers",

			reference: "https://www.keycloak.org",
		},
		webhooks: {

			status: "partial",

			details: "Event listeners via SPI extensions",

			reference: "https://www.keycloak.org",
		},
		thirdPartyIntegrations: {

			status: "strong",

			details: "Extensive via SPIs & adapters",

			reference: "https://www.keycloak.org",
		},
	},
};
