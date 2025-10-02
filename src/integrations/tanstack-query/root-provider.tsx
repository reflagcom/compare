import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

let queryClient: QueryClient;

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
			},
		},
	});
}

export function getContext() {
	if (typeof window === "undefined") {
		// Server: always make a new query client
		return {
			queryClient: makeQueryClient(),
		};
	}

	// Browser: make a new query client if we don't already have one
	if (!queryClient) {
		queryClient = makeQueryClient();
	}

	return {
		queryClient,
	};
}

export function Provider({
	children,
	queryClient,
}: {
	children: React.ReactNode;
	queryClient: QueryClient;
}) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
