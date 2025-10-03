import { useId } from "react";
import type { Provider } from "../../types/comparison";

function SupabaseLogo() {
	const gradientId0 = useId();
	const gradientId1 = useId();

	return (
		<svg
			className="w-5 h-5"
			viewBox="0 0 109 113"
			fill="none"
			aria-label="Supabase logo"
		>
			<title>Supabase</title>
			<path
				fill={`url(#${gradientId0})`}
				d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z"
			/>
			<path
				fill={`url(#${gradientId1})`}
				fillOpacity="0.2"
				d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z"
			/>
			<path
				fill="#3ECF8E"
				d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875z"
			/>
			<defs>
				<linearGradient
					id={gradientId0}
					x1="53.974"
					x2="94.163"
					y1="54.974"
					y2="71.829"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#249361" />
					<stop offset="1" stopColor="#3ECF8E" />
				</linearGradient>
				<linearGradient
					id={gradientId1}
					x1="36.156"
					x2="54.484"
					y1="30.578"
					y2="65.081"
					gradientUnits="userSpaceOnUse"
				>
					<stop />
					<stop offset="1" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
}

export const supabase: Provider = {
	name: "Supabase Auth",
	logo: <SupabaseLogo />,
	website: "https://supabase.com/auth",
	tagline: {
		status: "strong",
		details: "Open source auth with PostgreSQL Row Level Security",
	},
	features: {
		emailPassword: {
			status: "strong",
			details: "Email + password with confirmation",
		},
		passwordless: { status: "strong", details: "Magic links via email" },
		socialLogins: {
			status: "strong",
			details: "Google, GitHub, GitLab, Slack, 10+ providers",
		},
		enterpriseSSO: {
			status: "partial",
			details: "SAML (Enterprise plan only)",
		},
		passkeys: { status: "partial", details: "Experimental WebAuthn support" },
		mfa: { status: "strong", details: "TOTP authenticator apps" },
		rbac: {
			status: "strong",
			details: "Row Level Security (RLS) with PostgreSQL policies",
		},
		userProfiles: {
			status: "strong",
			details: "Stored in users table with custom fields",
		},
		organizations: {
			status: "partial",
			details: "Build your own with RLS policies",
		},
		frontendSDKs: {
			status: "strong",
			details: "JavaScript, React, Vue, Svelte, Angular, Flutter",
		},
		prebuiltUI: {
			status: "strong",
			details: "Auth UI library with customizable components",
		},
		documentation: {
			status: "strong",
			details: "Excellent docs with video tutorials",
		},
		apiApproach: {
			status: "strong",
			details: "RESTful + Realtime + GraphQL (pg_graphql)",
		},
		sessionManagement: {
			status: "strong",
			details: "JWT with refresh tokens & auto-refresh",
		},
		jwtSupport: {
			status: "strong",
			details: "JWTs with custom claims via PostgreSQL functions",
		},
		compliance: {
			status: "strong",
			details: "SOC 2 Type II, GDPR, HIPAA (Enterprise)",
		},
		rateLimiting: {
			status: "strong",
			details: "Built-in rate limiting per endpoint",
		},
		freeTier: { status: "strong", details: "50,000 MAU" },
		paidPricing: { status: "strong", details: "$25/mo + $0.00325/MAU" },
		openSource: {
			status: "strong",
			details: "MIT License (fully open source)",
		},
		selfHosted: {
			status: "strong",
			details: "Docker self-hosting available",
		},
		oauthProviders: {
			status: "strong",
			details: "10+ providers with custom OAuth",
		},
		webhooks: {
			status: "strong",
			details: "Database webhooks via pg_net or Edge Functions",
		},
		thirdPartyIntegrations: {
			status: "partial",
			details: "Growing ecosystem with partner integrations",
		},
	},
};
