"use client";

import { createFileRoute } from "@tanstack/react-router";
import { ComparisonTable } from "../components/ComparisonTable";
import { SITE } from "../config/site";
// Import all site comparison configs
import { analyticsComparisonConfig } from "../data/analytics-comparison";
import { authComparisonConfig } from "../data/auth-comparison";
import { featureFlagsComparisonConfig } from "../data/featureflags-comparison";
import type { ComparisonConfig } from "../types/comparison";

// Map of site types to their configs
const siteConfigs: Record<string, ComparisonConfig> = {
	analytics: analyticsComparisonConfig,
	auth: authComparisonConfig,
	featureflags: featureFlagsComparisonConfig,
};

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const config = siteConfigs[SITE];

	if (!config) {
		return (
			<div className="flex items-center justify-center h-screen">
				<div className="text-center">
					<h1 className="text-2xl font-bold mb-2">Site Not Found</h1>
					<p className="text-muted-foreground">
						No configuration found for site: {SITE}
					</p>
				</div>
			</div>
		);
	}

	return <ComparisonTable config={config} />;
}
