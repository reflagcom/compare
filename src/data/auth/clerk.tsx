import type { Provider } from "../../types/comparison";

function ClerkLogo() {
	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="none"
			aria-label="Clerk logo"
		>
			<title>Clerk</title>
			<rect width="24" height="24" rx="5" fill="#6C47FF" />
			<path
				d="M11.5 6.5C11.5 6.22386 11.7239 6 12 6H15.5C16.3284 6 17 6.67157 17 7.5V11C17 11.2761 16.7761 11.5 16.5 11.5C16.2239 11.5 16 11.2761 16 11V7.5C16 7.22386 15.7761 7 15.5 7H12C11.7239 7 11.5 6.77614 11.5 6.5Z"
				fill="white"
			/>
			<path
				d="M12.5 17.5C12.5 17.7761 12.2761 18 12 18H8.5C7.67157 18 7 17.3284 7 16.5V13C7 12.7239 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.7239 8 13V16.5C8 16.7761 8.22386 17 8.5 17H12C12.2761 17 12.5 17.2239 12.5 17.5Z"
				fill="white"
			/>
		</svg>
	);
}

export const clerk: Provider = {
	name: "Clerk",
	logo: <ClerkLogo />,
	website: "https://clerk.com",
	tagline: {
		status: "strong",
		details:
			"Complete user management - authentication, profiles, and organizations",
	},
	features: {
		emailPassword: {
			status: "strong",
			details: "Email + password with verification",
		},
		passwordless: {
			status: "strong",
			details: "Email magic links & verification codes",
		},
		socialLogins: {
			status: "strong",
			details: "Google, GitHub, Microsoft, Apple, 20+ providers",
		},
		enterpriseSSO: {
			status: "strong",
			details: "SAML & OIDC (Enhanced Auth $100/mo addon)",
		},
		passkeys: {
			status: "strong",
			details: "WebAuthn/FIDO2 (Enhanced Auth $100/mo addon)",
		},
		mfa: {
			status: "strong",
			details: "SMS, TOTP, Backup codes (Enhanced Auth $100/mo addon)",
		},
		rbac: {
			status: "strong",
			details: "Custom roles & permissions (Enhanced Auth $100/mo addon)",
		},
		userProfiles: {
			status: "strong",
			details: "Customizable with metadata fields",
		},
		organizations: {
			status: "strong",
			details: "Built-in teams with invitations",
		},
		frontendSDKs: {
			status: "strong",
			details: "React, Next.js, Remix, Gatsby, Vue, Svelte",
		},
		prebuiltUI: {
			status: "strong",
			details: "Fully customizable components & themes",
		},
		documentation: {
			status: "strong",
			details: "Excellent docs with tutorials & examples",
		},
		apiApproach: {
			status: "strong",
			details: "REST API + SDKs with TypeScript support",
		},
		sessionManagement: {
			status: "strong",
			details: "Customizable duration & refresh tokens",
		},
		jwtSupport: { status: "strong", details: "JWTs with custom claims" },
		compliance: {
			status: "strong",
			details: "SOC 2 Type II, GDPR, HIPAA (Enterprise)",
		},
		rateLimiting: {
			status: "strong",
			details: "Built-in DDoS & bot protection",
		},
		freeTier: { status: "strong", details: "10,000 MAU" },
		paidPricing: { status: "strong", details: "$25/mo + $0.02/MAU" },
		openSource: { status: "none", details: "Proprietary" },
		selfHosted: { status: "none", details: "Cloud-only SaaS" },
		oauthProviders: {
			status: "strong",
			details: "20+ social, enterprise, Web3 providers",
		},
		webhooks: {
			status: "strong",
			details: "Real-time event webhooks (Svix)",
		},
		thirdPartyIntegrations: {
			status: "strong",
			details: "Segment, Vercel, Netlify, analytics tools",
		},
	},
};
