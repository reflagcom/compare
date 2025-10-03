"use client";

import {
	CheckCircledIcon,
	ChevronRightIcon,
	CrossCircledIcon,
	ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import { createFileRoute } from "@tanstack/react-router";
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import type * as React from "react";
import { useState } from "react";
import {
	Table,
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
		freeTier: { status: "strong", details: "Yes - 10k MAU" },
		frontendComponents: {
			status: "strong",
			details: "React, Next.js, Remix, Astro, Vue",
		},
		openSource: { status: "none", details: "No" },
		oAuth: {
			status: "strong",
			details: "Google, GitHub, Microsoft, Apple, Discord, X",
		},
		mfa: { status: "strong", details: "SMS, TOTP, Backup codes" },
		selfHosted: { status: "none", details: "No" },
		paidPricing: { status: "strong", details: "$0.02/MAU after 10k" },
		sessionManagement: { status: "strong", details: "Yes" },
		rbac: { status: "partial", details: "Yes (Pro plan)" },
	},
	Auth0: {
		freeTier: { status: "strong", details: "Yes - 7.5k MAU" },
		frontendComponents: {
			status: "strong",
			details: "React, Angular, Vue, Native SDKs",
		},
		openSource: { status: "none", details: "No" },
		oAuth: {
			status: "strong",
			details: "Google, GitHub, Facebook, Twitter, LinkedIn, Apple",
		},
		mfa: { status: "strong", details: "SMS, TOTP, Email, Push" },
		selfHosted: { status: "none", details: "No" },
		paidPricing: { status: "strong", details: "Starts at $35/month" },
		sessionManagement: { status: "strong", details: "Yes" },
		rbac: { status: "strong", details: "Yes" },
	},
	"Supabase Auth": {
		freeTier: { status: "strong", details: "Yes - 50k MAU" },
		frontendComponents: {
			status: "strong",
			details: "React, Vue, Svelte, SolidJS",
		},
		openSource: { status: "strong", details: "Yes" },
		oAuth: {
			status: "strong",
			details: "Google, GitHub, GitLab, Bitbucket, Azure, Discord",
		},
		mfa: { status: "partial", details: "TOTP" },
		selfHosted: { status: "strong", details: "Yes" },
		paidPricing: { status: "strong", details: "$0.00325/MAU after 100k" },
		sessionManagement: { status: "strong", details: "Yes" },
		rbac: { status: "strong", details: "Yes (Row Level Security)" },
	},
	"Auth.js (NextAuth)": {
		freeTier: { status: "strong", details: "Yes - Unlimited (self-hosted)" },
		frontendComponents: {
			status: "strong",
			details: "Next.js, SvelteKit, Express, Qwik",
		},
		openSource: { status: "strong", details: "Yes" },
		oAuth: {
			status: "strong",
			details: "Google, GitHub, Facebook, Twitter, 80+ providers",
		},
		mfa: { status: "partial", details: "Via custom implementation" },
		selfHosted: { status: "strong", details: "Yes (required)" },
		paidPricing: { status: "strong", details: "Free (open source)" },
		sessionManagement: { status: "strong", details: "Yes" },
		rbac: { status: "partial", details: "Custom implementation" },
	},
	"Firebase Auth": {
		freeTier: { status: "strong", details: "Yes - Unlimited" },
		frontendComponents: {
			status: "strong",
			details: "React, Angular, Vue, Flutter, iOS, Android",
		},
		openSource: { status: "none", details: "No" },
		oAuth: {
			status: "strong",
			details: "Google, Facebook, Twitter, GitHub, Microsoft, Apple",
		},
		mfa: { status: "strong", details: "SMS, TOTP" },
		selfHosted: { status: "none", details: "No" },
		paidPricing: { status: "strong", details: "Free (pay for usage)" },
		sessionManagement: { status: "strong", details: "Yes" },
		rbac: { status: "partial", details: "Via Firebase Security Rules" },
	},
	Lucia: {
		freeTier: { status: "strong", details: "Yes - Unlimited (library)" },
		frontendComponents: {
			status: "strong",
			details: "Framework agnostic",
		},
		openSource: { status: "strong", details: "Yes" },
		oAuth: {
			status: "strong",
			details: "Via Arctic (50+ providers)",
		},
		mfa: { status: "partial", details: "Custom implementation" },
		selfHosted: { status: "strong", details: "Yes (library)" },
		paidPricing: { status: "strong", details: "Free (open source)" },
		sessionManagement: { status: "strong", details: "Yes (built-in)" },
		rbac: { status: "partial", details: "Custom implementation" },
	},
	WorkOS: {
		freeTier: { status: "strong", details: "Yes - 1M MAU" },
		frontendComponents: {
			status: "strong",
			details: "React, Next.js, Vanilla JS",
		},
		openSource: { status: "none", details: "No" },
		oAuth: {
			status: "strong",
			details: "Google, Microsoft, GitHub + Enterprise SSO/SAML",
		},
		mfa: { status: "strong", details: "SMS, TOTP" },
		selfHosted: { status: "none", details: "No" },
		paidPricing: { status: "strong", details: "$2,500/1M MAU after 1M" },
		sessionManagement: { status: "strong", details: "Yes" },
		rbac: { status: "strong", details: "Yes" },
	},
	Keycloak: {
		freeTier: { status: "strong", details: "Yes - Unlimited (self-hosted)" },
		frontendComponents: {
			status: "strong",
			details: "JavaScript, Java, Node.js adapters",
		},
		openSource: { status: "strong", details: "Yes" },
		oAuth: {
			status: "strong",
			details: "Google, GitHub, Facebook, SAML, LDAP",
		},
		mfa: { status: "strong", details: "OTP, WebAuthn" },
		selfHosted: { status: "strong", details: "Yes (required)" },
		paidPricing: { status: "strong", details: "Free (open source)" },
		sessionManagement: { status: "strong", details: "Yes" },
		rbac: { status: "strong", details: "Yes (built-in)" },
	},
};

// Feature labels
const featureLabels: Record<string, string> = {
	freeTier: "Free Tier",
	paidPricing: "Paid Pricing",
	openSource: "Open Source",
	selfHosted: "Self-Hosted",
	mfa: "MFA",
	rbac: "RBAC",
	frontendComponents: "Frontend SDKs",
	oAuth: "OAuth Providers",
	sessionManagement: "Sessions",
};

// Status Icon Component
function StatusIcon({ status }: { status: Status }) {
	switch (status) {
		case "strong":
			return <CheckCircledIcon className="w-5 h-5 text-green-500" />;
		case "partial":
			return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />;
		case "none":
			return <CrossCircledIcon className="w-5 h-5 text-red-500" />;
	}
}

// Expandable Cell Component
function FeatureCell({
	value,
	isRowExpanded,
}: {
	value: FeatureValue;
	isRowExpanded: boolean;
}) {
	return (
		<div
			className={`flex ${isRowExpanded ? "items-start" : "items-center"} justify-center py-2`}
		>
			<div className="flex items-center flex-col gap-2 justify-center">
				<StatusIcon status={value.status} />
				{isRowExpanded && (
					<div className="text-xs text-left whitespace-normal flex-1">
						{value.details}
					</div>
				)}
			</div>
		</div>
	);
}

// Transpose data: each row is a feature, each column is a provider
type FeatureRow = {
	feature: string;
	[key: string]: string | FeatureValue;
};

const providerNames = Object.keys(providers);
const featureKeys = Object.keys(featureLabels);

const data: FeatureRow[] = featureKeys.map((featureKey) => {
	const row: FeatureRow = {
		feature: featureLabels[featureKey],
	};

	providerNames.forEach((providerName) => {
		row[providerName] =
			providers[providerName as keyof typeof providers][
				featureKey as keyof typeof providers.Clerk
			];
	});

	return row;
});

const columnHelper = createColumnHelper<FeatureRow>();

function Home() {
	const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

	const toggleRow = (featureName: string) => {
		setExpandedRows((prev) => {
			const next = new Set(prev);
			if (next.has(featureName)) {
				next.delete(featureName);
			} else {
				next.add(featureName);
			}
			return next;
		});
	};

	// Create columns: first column for feature names, then one column per provider
	const columns = [
		columnHelper.accessor("feature", {
			header: "Feature",
			cell: ({ getValue }) => {
				const featureName = getValue();
				const isExpanded = expandedRows.has(featureName);
				return (
					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={() => toggleRow(featureName)}
							className="hover:bg-muted/50 p-1 rounded transition-colors"
							aria-label={isExpanded ? "Collapse row" : "Expand row"}
						>
							<ChevronRightIcon
								className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`}
							/>
						</button>
						<div className="font-semibold">{featureName}</div>
					</div>
				);
			},
			meta: {
				headerClassName:
					"sticky left-0 z-10 bg-background after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-white/20",
				cellClassName:
					"sticky left-0 z-10 bg-background after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-white/20",
			},
		}),
		...providerNames.map((providerName) =>
			columnHelper.accessor((row) => row[providerName], {
				id: providerName,
				header: () => (
					<div className="flex flex-col items-center gap-3 py-6">
						<ProviderLogo name={providerName} />
						<span className="text-lg font-bold text-center">
							{providerName}
						</span>
					</div>
				),
				cell: ({ getValue, row }) => {
					const value = getValue();
					const isRowExpanded = expandedRows.has(
						row.original.feature as string,
					);
					if (!value) {
						return <div className="text-xs text-muted-foreground">N/A</div>;
					}
					return typeof value === "string" ? (
						<div className="text-sm">{value}</div>
					) : (
						<FeatureCell value={value} isRowExpanded={isRowExpanded} />
					);
				},
				meta: {
					headerClassName: "w-48 min-w-48 max-w-48",
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
		<div className="w-full p-8">
			<h1 className="text-4xl font-bold mb-8">Auth Provider Comparison</h1>
			<div className="overflow-x-auto rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									const meta = header.column.columnDef.meta as
										| { headerClassName?: string }
										| undefined;
									return (
										<TableHead
											key={header.id}
											className={meta?.headerClassName}
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
								const isRowExpanded = expandedRows.has(
									row.original.feature as string,
								);
								return (
									<TableRow key={row.id}>
										{row.getVisibleCells().map((cell) => {
											const meta = cell.column.columnDef.meta as
												| { cellClassName?: string }
												| undefined;
											return (
												<TableCell
													key={cell.id}
													className={`${meta?.cellClassName || ""} ${isRowExpanded ? "!whitespace-normal align-top" : ""}`}
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
				</Table>
			</div>
		</div>
	);
}
