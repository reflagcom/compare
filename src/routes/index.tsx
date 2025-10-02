import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold mb-8">Auth Provider Comparison</h1>
			<div className="space-y-4">
				<Link
					to="/demo/table"
					className="block p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
				>
					View Auth Providers Comparison Table
				</Link>
				<Link
					to="/demo/tanstack-query"
					className="block p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
				>
					TanStack Query Demo
				</Link>
			</div>
		</div>
	);
}
