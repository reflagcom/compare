export type SiteType = "auth" | "featureflags" | "analytics";

export const SITE: SiteType =
	(import.meta.env.VITE_SITE as SiteType | undefined) || "auth";

export interface SiteConfig {
	domain: string;
	title: string;
	description: string;
}

export const siteConfigs: Record<SiteType, SiteConfig> = {
	auth: {
		domain: "auth.compare",
		title: "Auth Compare",
		description: "Compare authentication providers and libraries",
	},
	featureflags: {
		domain: "featureflags.compare",
		title: "Feature Flags Compare",
		description: "Compare feature flag providers and services",
	},
	analytics: {
		domain: "analytics.compare",
		title: "Analytics Compare",
		description: "Compare analytics platforms and tools",
	},
} as const;

export const currentSite = siteConfigs[SITE];
