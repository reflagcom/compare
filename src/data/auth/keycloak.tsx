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
		details:
			"Open source identity and access management - add authentication with minimum effort",
	},
	features: {
		emailPassword: { status: "strong", details: "Username/email + password" },
		passwordless: { status: "partial", details: "WebAuthn or custom flows" },
		socialLogins: {
			status: "strong",
			details: "Google, GitHub, Facebook, LinkedIn, etc.",
		},
		enterpriseSSO: {
			status: "strong",
			details: "SAML 2.0, OIDC, LDAP, Kerberos",
		},
		passkeys: { status: "strong", details: "WebAuthn/FIDO2 built-in" },
		mfa: { status: "strong", details: "OTP, WebAuthn/FIDO2, SMS (via SPI)" },
		rbac: {
			status: "strong",
			details: "Fine-grained authorization with policies",
		},
		userProfiles: {
			status: "strong",
			details: "Customizable attributes & federation",
		},
		organizations: {
			status: "strong",
			details: "Realms & organizations (multi-tenancy)",
		},
		frontendSDKs: {
			status: "strong",
			details: "JavaScript, Java, Python, .NET, Go adapters",
		},
		prebuiltUI: {
			status: "partial",
			details: "Admin console + customizable login themes",
		},
		documentation: {
			status: "strong",
			details: "Comprehensive official docs",
		},
		apiApproach: {
			status: "strong",
			details: "REST Admin API + standard OAuth/OIDC",
		},
		sessionManagement: {
			status: "strong",
			details: "SSO sessions, offline tokens, revocation",
		},
		jwtSupport: {
			status: "strong",
			details: "JWTs with custom claims & mappers",
		},
		compliance: {
			status: "partial",
			details: "Your responsibility (self-hosted)",
		},
		rateLimiting: {
			status: "partial",
			details: "Via reverse proxy or extensions",
		},
		freeTier: {
			status: "strong",
			details: "Unlimited (self-hosted, open source)",
		},
		paidPricing: {
			status: "none",
			details: "Free (Red Hat support available)",
		},
		openSource: { status: "strong", details: "Apache 2.0 License" },
		selfHosted: {
			status: "strong",
			details: "Required (Java app, Docker, Kubernetes)",
		},
		oauthProviders: {
			status: "strong",
			details: "OAuth 2.0, OIDC, SAML, LDAP, social providers",
		},
		webhooks: {
			status: "partial",
			details: "Event listeners via SPI extensions",
		},
		thirdPartyIntegrations: {
			status: "strong",
			details: "Extensive via SPIs & adapters",
		},
	},
};
