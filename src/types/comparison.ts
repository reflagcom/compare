import type * as React from "react";

// Status types
export type Status = "strong" | "partial" | "none";

export type FeatureValue = {
	status: Status;
	details: string;
};

// Provider data structure
export type Provider = {
	name: string;
	logo: React.ReactNode;
	website: string;
	tagline: FeatureValue;
	features: Record<string, FeatureValue>;
};

// Category structure
// Category definition
export interface Category {
	id: string; // Unique identifier for the category
	label: string; // Display name
	icon: React.ReactNode; // Category icon
	features: Record<string, string>; // featureKey -> feature label
}

// Comparison site configuration
export type ComparisonConfig = {
	title: string;
	subtitle: string;
	icon: React.ReactNode;
	providers: Provider[];
	categories: Category[];
	lastUpdated: string; // ISO date string
};
