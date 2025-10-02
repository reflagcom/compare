"use client";

import { createFileRoute } from "@tanstack/react-router";
import {
	type Column,
	type ColumnFiltersState,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type SortingState,
	useReactTable,
	type VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
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

export const Route = createFileRoute("/demo/table")({
	component: DataTableDemo,
});

const data: Provider[] = [
	{
		name: "Clerk",
		freeTier: "Yes - 10k MAU",
		frontendComponents: "React, Next.js, Remix, Astro, Vue",
		openSource: "No",
		oAuth: "Google, GitHub, Microsoft, Apple, Discord, X",
		mfa: "SMS, TOTP, Backup codes",
		selfHosted: "No",
		paidPricing: "$0.02/MAU after 10k",
		sessionManagement: "Yes",
		rbac: "Yes (Pro plan)",
	},
	{
		name: "Auth0",
		freeTier: "Yes - 7.5k MAU",
		frontendComponents: "React, Angular, Vue, Native SDKs",
		openSource: "No",
		oAuth: "Google, GitHub, Facebook, Twitter, LinkedIn, Apple",
		mfa: "SMS, TOTP, Email, Push",
		selfHosted: "No",
		paidPricing: "Starts at $35/month",
		sessionManagement: "Yes",
		rbac: "Yes",
	},
	{
		name: "Supabase Auth",
		freeTier: "Yes - 50k MAU",
		frontendComponents: "React, Vue, Svelte, SolidJS",
		openSource: "Yes",
		oAuth: "Google, GitHub, GitLab, Bitbucket, Azure, Discord",
		mfa: "TOTP",
		selfHosted: "Yes",
		paidPricing: "$0.00325/MAU after 100k",
		sessionManagement: "Yes",
		rbac: "Yes (Row Level Security)",
	},
	{
		name: "Auth.js (NextAuth)",
		freeTier: "Yes - Unlimited (self-hosted)",
		frontendComponents: "Next.js, SvelteKit, Express, Qwik",
		openSource: "Yes",
		oAuth: "Google, GitHub, Facebook, Twitter, 80+ providers",
		mfa: "Via custom implementation",
		selfHosted: "Yes (required)",
		paidPricing: "Free (open source)",
		sessionManagement: "Yes",
		rbac: "Custom implementation",
	},
	{
		name: "Firebase Auth",
		freeTier: "Yes - Unlimited",
		frontendComponents: "React, Angular, Vue, Flutter, iOS, Android",
		openSource: "No",
		oAuth: "Google, Facebook, Twitter, GitHub, Microsoft, Apple",
		mfa: "SMS, TOTP",
		selfHosted: "No",
		paidPricing: "Free (pay for usage)",
		sessionManagement: "Yes",
		rbac: "Via Firebase Security Rules",
	},
	{
		name: "Lucia",
		freeTier: "Yes - Unlimited (library)",
		frontendComponents: "Framework agnostic",
		openSource: "Yes",
		oAuth: "Via Arctic (50+ providers)",
		mfa: "Custom implementation",
		selfHosted: "Yes (library)",
		paidPricing: "Free (open source)",
		sessionManagement: "Yes (built-in)",
		rbac: "Custom implementation",
	},
	{
		name: "WorkOS",
		freeTier: "Yes - 1M MAU",
		frontendComponents: "React, Next.js, Vanilla JS",
		openSource: "No",
		oAuth: "Google, Microsoft, GitHub + Enterprise SSO/SAML",
		mfa: "SMS, TOTP",
		selfHosted: "No",
		paidPricing: "$2,500/1M MAU after 1M",
		sessionManagement: "Yes",
		rbac: "Yes",
	},
	{
		name: "Keycloak",
		freeTier: "Yes - Unlimited (self-hosted)",
		frontendComponents: "JavaScript, Java, Node.js adapters",
		openSource: "Yes",
		oAuth: "Google, GitHub, Facebook, SAML, LDAP",
		mfa: "OTP, WebAuthn",
		selfHosted: "Yes (required)",
		paidPricing: "Free (open source)",
		sessionManagement: "Yes",
		rbac: "Yes (built-in)",
	},
];

export type Provider = {
	name: string | React.ReactNode;
	freeTier: string | React.ReactNode;
	frontendComponents: string | React.ReactNode;
	openSource: string | React.ReactNode;
	oAuth: string | React.ReactNode;
	mfa: string | React.ReactNode;
	selfHosted: string | React.ReactNode;
	paidPricing: string | React.ReactNode;
	sessionManagement: string | React.ReactNode;
	rbac: string | React.ReactNode;
};

const columnHelper = createColumnHelper<Provider>();

// Sortable header component
const SortableHeader = ({ column, children }: { column: Column<Provider>; children: React.ReactNode }) => {
	return (
		<Button
			variant="ghost"
			onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			className="p-0 hover:bg-transparent"
		>
			{children}
			<ArrowUpDown className="ml-2 h-4 w-4" />
		</Button>
	);
};

const columns = [
	columnHelper.accessor("name", {
		header: ({ column }) => <SortableHeader column={column}>Name</SortableHeader>,
		cell: ({ getValue }) => {
			const name = getValue() as string;
			return (
				<div className="flex items-center gap-2">
					<ProviderLogo name={name} />
					<span className="font-semibold">{name}</span>
				</div>
			);
		},
	}),
	columnHelper.accessor("freeTier", {
		header: ({ column }) => <SortableHeader column={column}>Free tier</SortableHeader>,
		cell: ({ getValue }) => <div className="text-sm">{getValue()}</div>,
	}),
	columnHelper.accessor("paidPricing", {
		header: ({ column }) => <SortableHeader column={column}>Paid pricing</SortableHeader>,
		cell: ({ getValue }) => <div className="text-sm">{getValue()}</div>,
	}),
	columnHelper.accessor("openSource", {
		header: ({ column }) => <SortableHeader column={column}>Open source</SortableHeader>,
		cell: ({ getValue }) => <div className="lowercase">{getValue()}</div>,
	}),
	columnHelper.accessor("selfHosted", {
		header: ({ column }) => <SortableHeader column={column}>Self-hosted</SortableHeader>,
		cell: ({ getValue }) => <div className="lowercase">{getValue()}</div>,
	}),
	columnHelper.accessor("mfa", {
		header: ({ column }) => <SortableHeader column={column}>MFA</SortableHeader>,
		cell: ({ getValue }) => <div className="text-sm">{getValue()}</div>,
	}),
	columnHelper.accessor("rbac", {
		header: ({ column }) => <SortableHeader column={column}>RBAC</SortableHeader>,
		cell: ({ getValue }) => <div className="text-sm">{getValue()}</div>,
	}),
	columnHelper.accessor("frontendComponents", {
		header: ({ column }) => <SortableHeader column={column}>Frontend SDKs</SortableHeader>,
		cell: ({ getValue }) => <div className="text-sm">{getValue()}</div>,
	}),
	columnHelper.accessor("oAuth", {
		header: ({ column }) => <SortableHeader column={column}>OAuth providers</SortableHeader>,
		cell: ({ getValue }) => <div className="text-sm">{getValue()}</div>,
	}),
	columnHelper.accessor("sessionManagement", {
		header: ({ column }) => <SortableHeader column={column}>Sessions</SortableHeader>,
		cell: ({ getValue }) => <div className="lowercase">{getValue()}</div>,
	}),
];

export function DataTableDemo() {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-full p-2">
			<div className="flex items-center py-4">
				<Input
					placeholder="Find provider..."
					value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn("name")?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className="ml-auto">
							Columns <ChevronDown />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenuCheckboxItem
										key={column.id}
										className="capitalize"
										checked={column.getIsVisible()}
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}
									>
										{column.id}
									</DropdownMenuCheckboxItem>
								);
							})}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="overflow-hidden rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
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
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
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
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="text-muted-foreground flex-1 text-sm">
					{table.getFilteredSelectedRowModel().rows.length} of{" "}
					{table.getFilteredRowModel().rows.length} row(s) selected.
				</div>
				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}
