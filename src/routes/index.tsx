"use client";

import { createFileRoute } from "@tanstack/react-router";
import { ComparisonTable } from "../components/ComparisonTable";
import { authComparisonConfig } from "../data/auth-comparison";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return <ComparisonTable config={authComparisonConfig} />;
}
