"use client";

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
import { Switch } from "@/components/ui/switch";
import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type {
	ComparisonConfig,
	FeatureValue,
	Status,
} from "@/types/comparison";

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
	categoryIcon?: React.ReactNode;
	[key: string]: string | FeatureValue | boolean | React.ReactNode | undefined;
};

interface ComparisonTableProps {
	config: ComparisonConfig;
}

function ComparisonTable({ config }: ComparisonTableProps) {
	const [showExpandedContent, setShowExpandedContent] = useState(false);
	const [isScrolledVertically, setIsScrolledVertically] = useState(false);
	const [isScrolledHorizontally, setIsScrolledHorizontally] = useState(false);
	const switchId = useId();

	// Build providers lookup
	const providersByName: Record<string, (typeof config.providers)[0]> = {};
	for (const provider of config.providers) {
		providersByName[provider.name] = provider;
	}
	const providerNames = config.providers.map((p) => p.name);

	// Build data with category headers
	const data: FeatureRow[] = [];

	// Add tagline as a standalone first row (no category header)
	const taglineRow: FeatureRow = {
		feature: "",
		featureKey: "tagline",
		isCategory: false,
	};
	for (const providerName of providerNames) {
		taglineRow[providerName] = providersByName[providerName].tagline;
	}
	data.push(taglineRow);

	// Add categories and features
	for (const category of config.categories) {
		// Add category header row
		data.push({
			feature: category.label,
			categoryIcon: category.icon,
			isCategory: true,
		});

		// Add feature rows for this category
		for (const [featureKey, featureLabel] of Object.entries(
			category.features,
		)) {
			const row: FeatureRow = {
				feature: featureLabel,
				featureKey: featureKey,
				isCategory: false,
			};

			for (const providerName of providerNames) {
				row[providerName] = providersByName[providerName].features[featureKey];
			}

			data.push(row);
		}
	}

	// Handle scroll to show/hide sticky borders
	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const scrollTop = e.currentTarget.scrollTop;
		const scrollLeft = e.currentTarget.scrollLeft;
		setIsScrolledVertically(scrollTop > 0);
		setIsScrolledHorizontally(scrollLeft > 0);
	};

	const columnHelper = createColumnHelper<FeatureRow>();

	// Create columns: first column for feature names, then one column per provider
	const columns = [
		columnHelper.accessor("feature", {
			header: "",
			cell: ({ getValue, row }) => {
				const featureName = getValue();
				const isCategory = row.original.isCategory;
				const categoryIcon = row.original.categoryIcon;

				// Category header row
				if (isCategory) {
					return (
						<div className="font-bold text-md py-2 flex items-center gap-2">
							{categoryIcon}
							{featureName}
						</div>
					);
				}

				// Regular feature row with left indent
				return (
					<div className="font-medium text-sm text-muted-foreground pl-6.5">
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
						{providersByName[providerName].logo}
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

					// Type guard: exclude React nodes (shouldn't happen in provider columns)
					if (
						typeof value === "object" &&
						value !== null &&
						"status" in value
					) {
						return (
							<FeatureCell
								value={value}
								isRowExpanded={showExpandedContent}
								featureKey={featureKey}
							/>
						);
					}

					return null;
				},
				meta: {
					headerClassName: showExpandedContent
						? "sticky top-0 z-20 bg-background w-64 min-w-64 max-w-64"
						: "sticky top-0 z-20 bg-background w-40 min-w-40 max-w-40",
					cellClassName: showExpandedContent
						? "w-64 min-w-64 max-w-64"
						: "w-40 min-w-40 max-w-40",
				},
			}),
		),
	];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	const lastUpdatedAtDays = Math.floor(
		(Date.now() - new Date(config.lastUpdated).getTime()) /
			(1000 * 60 * 60 * 24),
	);

	return (
		<div className="w-full h-screen flex flex-col">
			<div className="flex items-center justify-between p-2 border-b-1 flex-shrink-0">
				<div className="flex items-center gap-1.5">
					{config.icon}
					<h1 className="text-lg font-medium">{config.title}</h1>
					<span className="text-xs text-muted-foreground">
						{config.subtitle}
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
				<div className="flex items-center justify-between">
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
					<div className="text-muted-foreground/70">
						Data last updated {lastUpdatedAtDays} day
						{lastUpdatedAtDays > 1 ? "s" : ""} ago
					</div>
				</div>
			</footer>
		</div>
	);
}

export { ComparisonTable };
