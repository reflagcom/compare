"use client";

import { createFileRoute } from "@tanstack/react-router";
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import type * as React from "react";
import { useId, useState } from "react";
import RiCheckboxCircleFill from "remixicon-react/CheckboxCircleFillIcon";
import RiCloseCircleFill from "remixicon-react/CloseLineIcon";
import RiErrorWarningLine from "remixicon-react/ErrorWarningLineIcon";
import RiShieldKeyholeFill from "remixicon-react/ShieldKeyholeFillIcon";
import { Switch } from "@/components/ui/switch";
import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

// Provider Logo Components
const ProviderLogo = ({ name }: { name: string }) => {
	const logos: Record<string, React.ReactNode> = {
		Clerk: (
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
		),
		Auth0: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="#EB5424"
				aria-label="Auth0 logo"
			>
				<title>Auth0</title>
				<path d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58 2.343 7.45-6.157-4.597-6.158 4.58 2.358-7.433-6.188-4.55 7.63-.045L12.008 0l2.356 7.404 7.615.044z" />
			</svg>
		),
		"Supabase Auth": (
			<svg
				className="w-5 h-5"
				viewBox="0 0 109 113"
				fill="none"
				aria-label="Supabase logo"
			>
				<title>Supabase</title>
				<path
					fill="url(#supabase-gradient-0)"
					d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z"
				/>
				<path
					fill="url(#supabase-gradient-1)"
					fillOpacity="0.2"
					d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874z"
				/>
				<path
					fill="#3ECF8E"
					d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875z"
				/>
				<defs>
					{/* biome-ignore lint/correctness/useUniqueElementIds: gradient IDs are scoped per provider */}
					<linearGradient
						id="supabase-gradient-0"
						x1="53.974"
						x2="94.163"
						y1="54.974"
						y2="71.829"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#249361" />
						<stop offset="1" stopColor="#3ECF8E" />
					</linearGradient>
					{/* biome-ignore lint/correctness/useUniqueElementIds: gradient IDs are scoped per provider */}
					<linearGradient
						id="supabase-gradient-1"
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
		),
		"Auth.js (NextAuth)": (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="#fff"
				aria-label="Next.js logo"
			>
				<title>Auth.js</title>
				<path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
			</svg>
		),
		"Firebase Auth": (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="#FFCA28"
				aria-label="Firebase logo"
			>
				<title>Firebase</title>
				<path d="M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z" />
			</svg>
		),
		Lucia: (
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
		),
		WorkOS: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="none"
				aria-label="WorkOS logo"
			>
				<title>WorkOS</title>
				<rect width="24" height="24" rx="6" fill="#6363F1" />
				<text
					x="12"
					y="16"
					textAnchor="middle"
					fill="white"
					fontSize="10"
					fontWeight="bold"
					fontFamily="sans-serif"
				>
					W
				</text>
			</svg>
		),
		Keycloak: (
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
		),
	};

	return logos[name] || null;
};

export const Route = createFileRoute("/")({
	component: Home,
});

// Status icon types
type Status = "strong" | "partial" | "none";

type FeatureValue = {
	status: Status;
	details: string;
};

// Provider data organized by provider name
const providers: Record<string, Record<string, FeatureValue>> = {
	Clerk: {
		// Overview
		tagline: {
			status: "strong",
			details:
				"Complete user management - authentication, profiles, and organizations",
		},

		// Core Authentication
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
		passkeys: { status: "strong", details: "WebAuthn/FIDO2 (paid plans only)" },

		// User Management
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

		// Developer Experience
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

		// Security & Compliance
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

		// Pricing
		freeTier: { status: "strong", details: "10,000 MAU" },
		paidPricing: { status: "strong", details: "$25/mo + $0.02/MAU" },

		// Deployment
		openSource: { status: "none", details: "Proprietary" },
		selfHosted: { status: "none", details: "Cloud-only SaaS" },

		// Integrations
		oauthProviders: {
			status: "strong",
			details: "20+ social, enterprise, Web3 providers",
		},
		webhooks: { status: "strong", details: "Real-time event webhooks (Svix)" },
		thirdPartyIntegrations: {
			status: "strong",
			details: "Segment, Vercel, Netlify, analytics tools",
		},
	},
	Auth0: {
		// Overview
		tagline: {
			status: "strong",
			details:
				"Easy to implement, adaptable authentication and authorization platform",
		},

		// Core Authentication
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

		// User Management
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

		// Developer Experience
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

		// Security & Compliance
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

		// Pricing
		freeTier: { status: "strong", details: "7,500 MAU" },
		paidPricing: {
			status: "strong",
			details: "$35/mo (Essentials), $240/mo (Professional)",
		},

		// Deployment
		openSource: { status: "none", details: "Proprietary" },
		selfHosted: {
			status: "none",
			details: "Cloud-only (Private Cloud available)",
		},

		// Integrations
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
	"Supabase Auth": {
		// Overview
		tagline: {
			status: "strong",
			details: "Open source auth with PostgreSQL Row Level Security",
		},

		// Core Authentication
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

		// User Management
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

		// Developer Experience
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

		// Security & Compliance
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

		// Pricing
		freeTier: { status: "strong", details: "50,000 MAU" },
		paidPricing: { status: "strong", details: "$25/mo + $0.00325/MAU" },

		// Deployment
		openSource: {
			status: "strong",
			details: "MIT License (fully open source)",
		},
		selfHosted: { status: "strong", details: "Docker self-hosting available" },

		// Integrations
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
	"Auth.js (NextAuth)": {
		// Overview
		tagline: {
			status: "strong",
			details: "Free and open source authentication for the web",
		},

		// Core Authentication
		emailPassword: {
			status: "strong",
			details: "Credentials provider with custom logic",
		},
		passwordless: { status: "strong", details: "Email magic links built-in" },
		socialLogins: { status: "strong", details: "80+ built-in OAuth providers" },
		enterpriseSSO: {
			status: "partial",
			details: "Via custom providers (SAML, OIDC possible)",
		},
		passkeys: {
			status: "partial",
			details: "Via SimpleWebAuthn or custom implementation",
		},

		// User Management
		mfa: { status: "partial", details: "Custom implementation via callbacks" },
		rbac: {
			status: "partial",
			details: "Build your own with session callbacks",
		},
		userProfiles: { status: "partial", details: "Store in your own database" },
		organizations: {
			status: "partial",
			details: "Build your own with custom logic",
		},

		// Developer Experience
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

		// Security & Compliance
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

		// Pricing
		freeTier: {
			status: "strong",
			details: "Unlimited (self-hosted, open source)",
		},
		paidPricing: { status: "none", details: "Free forever" },

		// Deployment
		openSource: { status: "strong", details: "ISC License (MIT-compatible)" },
		selfHosted: {
			status: "strong",
			details: "Required (runs on your infrastructure)",
		},

		// Integrations
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
	"Firebase Auth": {
		// Overview
		tagline: {
			status: "strong",
			details:
				"Simple, multi-platform sign-in with backend services and ready-made UI",
		},

		// Core Authentication
		emailPassword: {
			status: "strong",
			details: "Email + password with verification links",
		},
		passwordless: { status: "strong", details: "Email links & anonymous auth" },
		socialLogins: {
			status: "strong",
			details: "Google, Facebook, Apple, Microsoft, GitHub, Twitter",
		},
		enterpriseSSO: {
			status: "strong",
			details: "SAML & OIDC (Identity Platform)",
		},
		passkeys: {
			status: "partial",
			details: "Via Firebase Extensions or custom",
		},

		// User Management
		mfa: { status: "strong", details: "SMS, TOTP (Google Authenticator)" },
		rbac: { status: "partial", details: "Custom claims + Security Rules" },
		userProfiles: {
			status: "partial",
			details: "Store in Firestore with custom logic",
		},
		organizations: {
			status: "partial",
			details: "Build with Firestore & Security Rules",
		},

		// Developer Experience
		frontendSDKs: {
			status: "strong",
			details: "Web, iOS, Android, Flutter, Unity, C++",
		},
		prebuiltUI: {
			status: "strong",
			details: "FirebaseUI for Web, iOS, Android",
		},
		documentation: {
			status: "strong",
			details: "Excellent docs with video courses",
		},
		apiApproach: {
			status: "strong",
			details: "Client SDKs + Admin SDK for backend",
		},

		// Security & Compliance
		sessionManagement: {
			status: "strong",
			details: "ID tokens with automatic refresh",
		},
		jwtSupport: { status: "strong", details: "Firebase ID tokens (JWTs)" },
		compliance: { status: "strong", details: "SOC 2, SOC 3, ISO 27001, GDPR" },
		rateLimiting: {
			status: "strong",
			details: "App Check + Cloud Armor integration",
		},

		// Pricing
		freeTier: {
			status: "strong",
			details: "Unlimited auth users (no MAU limits)",
		},
		paidPricing: {
			status: "partial",
			details: "Free auth; phone SMS $0.06/verification",
		},

		// Deployment
		openSource: {
			status: "none",
			details: "Proprietary (Firebase Emulators for dev)",
		},
		selfHosted: { status: "none", details: "Cloud-only Google service" },

		// Integrations
		oauthProviders: {
			status: "strong",
			details: "6+ social + custom OAuth/SAML",
		},
		webhooks: {
			status: "partial",
			details: "Cloud Functions triggers for auth events",
		},
		thirdPartyIntegrations: {
			status: "strong",
			details: "Google ecosystem + Firebase Extensions",
		},
	},
	Lucia: {
		// Overview
		tagline: {
			status: "strong",
			details:
				"Open source library to implement authentication using JavaScript",
		},

		// Core Authentication
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

		// User Management
		mfa: { status: "partial", details: "Build your own TOTP/SMS logic" },
		rbac: { status: "partial", details: "Implement with your database schema" },
		userProfiles: { status: "partial", details: "Your database, your schema" },
		organizations: { status: "partial", details: "Build from scratch" },

		// Developer Experience
		frontendSDKs: {
			status: "partial",
			details: "Framework-agnostic TypeScript library",
		},
		prebuiltUI: { status: "none", details: "No pre-built UI (you build it)" },
		documentation: { status: "strong", details: "Clear docs with examples" },
		apiApproach: { status: "strong", details: "Session-based auth library" },

		// Security & Compliance
		sessionManagement: {
			status: "strong",
			details: "Secure database-backed sessions",
		},
		jwtSupport: { status: "partial", details: "Use jose or other JWT library" },
		compliance: {
			status: "partial",
			details: "Your responsibility (self-implemented)",
		},
		rateLimiting: { status: "partial", details: "Implement via middleware" },

		// Pricing
		freeTier: {
			status: "strong",
			details: "Unlimited (library, not a service)",
		},
		paidPricing: { status: "none", details: "Free forever (MIT license)" },

		// Deployment
		openSource: { status: "strong", details: "MIT License (fully open)" },
		selfHosted: { status: "strong", details: "Required (TypeScript library)" },

		// Integrations
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
	WorkOS: {
		// Overview
		tagline: {
			status: "strong",
			details:
				"Your app, enterprise ready - APIs for SSO, SCIM, and user management",
		},

		// Core Authentication
		emailPassword: { status: "strong", details: "AuthKit email + password" },
		passwordless: { status: "strong", details: "Magic links via AuthKit" },
		socialLogins: {
			status: "strong",
			details: "Microsoft, Google, GitHub via AuthKit",
		},
		enterpriseSSO: {
			status: "strong",
			details: "SAML, OIDC (enterprise focus)",
		},
		passkeys: { status: "partial", details: "Coming soon to AuthKit" },

		// User Management
		mfa: { status: "strong", details: "TOTP, SMS included in AuthKit" },
		rbac: {
			status: "strong",
			details: "Built-in with AuthKit & Organizations API",
		},
		userProfiles: {
			status: "strong",
			details: "User Management API with metadata",
		},
		organizations: {
			status: "strong",
			details: "Organizations API (B2B focus)",
		},

		// Developer Experience
		frontendSDKs: { status: "strong", details: "React, Next.js, Node.js SDKs" },
		prebuiltUI: {
			status: "strong",
			details: "AuthKit hosted UI with customization",
		},
		documentation: { status: "strong", details: "Developer-focused docs" },
		apiApproach: {
			status: "strong",
			details: "Modern REST APIs with webhooks",
		},

		// Security & Compliance
		sessionManagement: {
			status: "strong",
			details: "Managed sessions via AuthKit",
		},
		jwtSupport: { status: "strong", details: "JWTs for API authentication" },
		compliance: { status: "strong", details: "SOC 2 Type II, GDPR, HIPAA" },
		rateLimiting: {
			status: "strong",
			details: "Enterprise-grade rate limiting",
		},

		// Pricing
		freeTier: { status: "strong", details: "1 million MAU (generous)" },
		paidPricing: { status: "strong", details: "$2,500/mo per 1M MAU" },

		// Deployment
		openSource: { status: "none", details: "Proprietary" },
		selfHosted: { status: "none", details: "Cloud-only SaaS" },

		// Integrations
		oauthProviders: {
			status: "strong",
			details: "Social + enterprise SSO providers",
		},
		webhooks: {
			status: "strong",
			details: "Event-driven webhooks for all APIs",
		},
		thirdPartyIntegrations: {
			status: "strong",
			details: "Directory Sync (SCIM), Audit Logs, MFA",
		},
	},
	Keycloak: {
		// Overview
		tagline: {
			status: "strong",
			details:
				"Open source identity and access management - add authentication with minimum effort",
		},

		// Core Authentication
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

		// User Management
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

		// Developer Experience
		frontendSDKs: {
			status: "strong",
			details: "JavaScript, Java, Python, .NET, Go adapters",
		},
		prebuiltUI: {
			status: "partial",
			details: "Admin console + customizable login themes",
		},
		documentation: { status: "strong", details: "Comprehensive official docs" },
		apiApproach: {
			status: "strong",
			details: "REST Admin API + standard OAuth/OIDC",
		},

		// Security & Compliance
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

		// Pricing
		freeTier: {
			status: "strong",
			details: "Unlimited (self-hosted, open source)",
		},
		paidPricing: {
			status: "none",
			details: "Free (Red Hat support available)",
		},

		// Deployment
		openSource: { status: "strong", details: "Apache 2.0 License" },
		selfHosted: {
			status: "strong",
			details: "Required (Java app, Docker, Kubernetes)",
		},

		// Integrations
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

// Feature categories and labels
const featureCategories: Record<
	string,
	{ label: string; features: Record<string, string> }
> = {
	authentication: {
		label: "🔑 Core Authentication",
		features: {
			emailPassword: "Email/Password",
			passwordless: "Passwordless (Magic Links)",
			socialLogins: "Social Logins",
			enterpriseSSO: "Enterprise SSO (SAML/OIDC)",
			passkeys: "Passkeys/WebAuthn",
		},
	},
	userManagement: {
		label: "👤 User Management",
		features: {
			mfa: "Multi-Factor Auth",
			rbac: "RBAC/Permissions",
			userProfiles: "User Profiles",
			organizations: "Organizations/Teams",
		},
	},
	developerExperience: {
		label: "🛠️ Developer Experience",
		features: {
			frontendSDKs: "Frontend SDKs",
			prebuiltUI: "Pre-built UI Components",
			documentation: "Documentation Quality",
			apiApproach: "API Approach",
		},
	},
	security: {
		label: "🔒 Security & Compliance",
		features: {
			sessionManagement: "Session Management",
			jwtSupport: "JWT Support",
			compliance: "SOC 2 / GDPR Compliance",
			rateLimiting: "Rate Limiting / DDoS Protection",
		},
	},
	pricing: {
		label: "💰 Pricing",
		features: {
			freeTier: "Free Tier",
			paidPricing: "Paid Pricing",
		},
	},
	deployment: {
		label: "🏗️ Deployment",
		features: {
			openSource: "Open Source",
			selfHosted: "Self-Hosted Option",
		},
	},
	integrations: {
		label: "🌐 Integrations",
		features: {
			oauthProviders: "OAuth Providers",
			webhooks: "Webhooks",
			thirdPartyIntegrations: "Third-Party Integrations",
		},
	},
};

// Status Icon Component
function StatusIcon({ status }: { status: Status }) {
	switch (status) {
		case "strong":
			return <RiCheckboxCircleFill className="w-5 h-5 text-emerald-600" />;
		case "partial":
			return <RiErrorWarningLine className="w-5 h-5 text-amber-600" />;
		case "none":
			return <RiCloseCircleFill className="w-5 h-5 text-gray-500" />;
	}
}

// Expandable Cell Component
function FeatureCell({
	value,
	isRowExpanded,
	featureKey,
}: {
	value: FeatureValue;
	isRowExpanded: boolean;
	featureKey?: string;
}) {
	// Special handling for tagline - always show text, no icon
	if (featureKey === "tagline") {
		return (
			<div className="text-xs text-left whitespace-normal py-1 text-muted-foreground italic">
				{value.details}
			</div>
		);
	}

	// Determine text opacity based on status
	const textClass =
		value.status === "strong"
			? "text-foreground"
			: value.status === "none"
				? "text-muted-foreground"
				: "text-muted-foreground";

	return (
		<div
			className={`flex items-start flex-row gap-2 ${isRowExpanded ? "justify-start" : "justify-center"} py-1`}
		>
			<StatusIcon status={value.status} />
			{isRowExpanded && (
				<div
					className={`text-xs text-left whitespace-normal flex-1 ${textClass}`}
				>
					{value.details}
				</div>
			)}
		</div>
	);
}

// Transpose data: each row is a feature, each column is a provider
type FeatureRow = {
	feature: string;
	featureKey?: string;
	isCategory?: boolean;
	[key: string]: string | FeatureValue | boolean | undefined;
};

const providerNames = Object.keys(providers);

// Build data with category headers
const data: FeatureRow[] = [];

// Add tagline as a standalone first row (no category header)
const taglineRow: FeatureRow = {
	feature: "",
	featureKey: "tagline",
	isCategory: false,
};
providerNames.forEach((providerName) => {
	taglineRow[providerName] =
		providers[providerName as keyof typeof providers].tagline;
});
data.push(taglineRow);

Object.entries(featureCategories).forEach(([_categoryKey, category]) => {
	// Add category header row
	data.push({
		feature: category.label,
		isCategory: true,
	});

	// Add feature rows for this category
	Object.entries(category.features).forEach(([featureKey, featureLabel]) => {
		const row: FeatureRow = {
			feature: featureLabel,
			featureKey: featureKey,
			isCategory: false,
		};

		providerNames.forEach((providerName) => {
			row[providerName] =
				providers[providerName as keyof typeof providers][
					featureKey as keyof typeof providers.Clerk
				];
		});

		data.push(row);
	});
});

const columnHelper = createColumnHelper<FeatureRow>();

function Home() {
	const [showExpandedContent, setShowExpandedContent] = useState(false);
	const [isScrolledVertically, setIsScrolledVertically] = useState(false);
	const [isScrolledHorizontally, setIsScrolledHorizontally] = useState(false);
	const switchId = useId();

	// Handle scroll to show/hide sticky borders
	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const scrollTop = e.currentTarget.scrollTop;
		const scrollLeft = e.currentTarget.scrollLeft;
		setIsScrolledVertically(scrollTop > 0);
		setIsScrolledHorizontally(scrollLeft > 0);
	};

	// Create columns: first column for feature names, then one column per provider
	const columns = [
		columnHelper.accessor("feature", {
			header: "",
			cell: ({ getValue, row }) => {
				const featureName = getValue();
				const isCategory = row.original.isCategory;

				// Category header row
				if (isCategory) {
					return <div className="font-bold text-md py-2">{featureName}</div>;
				}

				// Regular feature row with left indent
				return (
					<div className="font-medium text-sm text-muted-foreground pl-4">
						{featureName}
					</div>
				);
			},
			meta: {
				headerClassName: "sticky top-0 left-0 z-30 bg-background",
				cellClassName: "sticky left-0 z-10 bg-background",
			},
		}),
		...providerNames.map((providerName) =>
			columnHelper.accessor((row) => row[providerName], {
				id: providerName,
				header: () => (
					<div className="flex flex-col items-center gap-3 py-4">
						<ProviderLogo name={providerName} />
						<span className="text-md font-bold text-center">
							{providerName}
						</span>
					</div>
				),
				cell: ({ getValue, row }) => {
					const value = getValue();
					const isCategory = row.original.isCategory;
					const featureKey = row.original.featureKey;

					// Empty cell for category rows
					if (isCategory) {
						return null;
					}

					if (!value) {
						return <div className="text-xs text-muted-foreground">N/A</div>;
					}

					// Type guard: value is either string or FeatureValue at this point
					if (typeof value === "string") {
						return <div className="text-sm">{value}</div>;
					}

					if (typeof value === "boolean") {
						return null;
					}

					return (
						<FeatureCell
							value={value}
							isRowExpanded={showExpandedContent}
							featureKey={featureKey}
						/>
					);
				},
				meta: {
					headerClassName:
						"sticky top-0 z-20 bg-background w-48 min-w-48 max-w-48",
					cellClassName: "w-48 min-w-48 max-w-48",
				},
			}),
		),
	];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="w-full h-screen flex flex-col">
			<div className="flex items-center justify-between p-2 border-b-1 flex-shrink-0">
				<div className="flex items-center gap-1.5">
					<RiShieldKeyholeFill className="w-4 h-4 mt-0.5" />
					<h1 className="text-lg font-medium">auth.compare</h1>
					<span className="text-xs text-muted-foreground">
						⋅ Auth providers comparison matrix
					</span>
				</div>
				<div className="flex items-center gap-2">
					<label htmlFor={switchId} className="text-sm font-medium">
						Expand details
					</label>
					<Switch
						id={switchId}
						checked={showExpandedContent}
						onCheckedChange={setShowExpandedContent}
					/>
				</div>
			</div>
			<div className="overflow-auto flex-1 relative" onScroll={handleScroll}>
				<table className="w-full caption-bottom text-sm">
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header, index) => {
									const meta = header.column.columnDef.meta as
										| { headerClassName?: string }
										| undefined;
									const isFirstColumn = index === 0;

									// Build border classes based on scroll state
									let borderClasses = "";
									if (isFirstColumn) {
										// First column: right border on horizontal scroll, bottom border on vertical scroll
										const rightBorder = isScrolledHorizontally
											? "after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-white/20"
											: "";
										const bottomBorder = isScrolledVertically
											? "before:absolute before:bottom-0 before:left-0 before:right-0 before:h-px before:bg-white/20"
											: "";
										borderClasses = `${rightBorder} ${bottomBorder}`.trim();
									} else if (isScrolledVertically) {
										// Other columns: only bottom border on vertical scroll
										borderClasses =
											"after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white/20";
									}

									return (
										<TableHead
											key={header.id}
											className={`${meta?.headerClassName} ${borderClasses}`}
										>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => {
								const isCategory = row.original.isCategory;
								return (
									<TableRow
										key={row.id}
										className={
											isCategory ? "bg-muted/20 hover:bg-muted/20" : ""
										}
									>
										{row.getVisibleCells().map((cell, cellIndex) => {
											const meta = cell.column.columnDef.meta as
												| { cellClassName?: string }
												| undefined;
											const isFirstColumn = cellIndex === 0;
											const borderClasses =
												isScrolledHorizontally && isFirstColumn
													? "after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-white/20"
													: "";
											return (
												<TableCell
													key={cell.id}
													className={`${meta?.cellClassName || ""} ${showExpandedContent ? "align-top" : ""} ${borderClasses}`}
												>
													{flexRender(
														cell.column.columnDef.cell,
														cell.getContext(),
													)}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</table>
			</div>
			<footer className="border-t bg-background p-3 text-xs text-muted-foreground flex-shrink-0">
				<div className="flex items-center gap-2">
					<span>Made by the team at</span>
					<a
						href="https://reflag.com"
						target="_blank"
						rel="noopener noreferrer"
						className="font-semibold hover:text-foreground transition-colors flex items-center gap-1.5"
					>
						<svg
							width="12"
							height="12"
							viewBox="0 0 128 128"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Reflag logo"
						>
							<title>Reflag logo</title>
							<path
								d="M117.333 0C123.224 0 128 4.77563 128 10.6667V117.333C128 123.224 123.224 128 117.333 128H10.6667C4.77563 128 1.71804e-07 123.224 0 117.333V10.6667C0 4.77563 4.77563 1.71801e-07 10.6667 0H117.333ZM10.6667 10.6667V117.333L117.333 10.6667H10.6667Z"
								fill="currentColor"
							/>
						</svg>
						Reflag
					</a>
				</div>
			</footer>
		</div>
	);
}
