import { component$, Slot, useStore, $ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Header from "~/components/header/header";

import Background from "/public/background.jpg?jsx";
import { Sidebar, Side } from "~/components/sidebar/sidebar";

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.builder.io/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	});
};

interface ShowState {
	showFooter: boolean;
	showSidebar: {
		left: boolean;
		right: boolean;
	};
}

export default component$(() => {
	const state = useStore<ShowState>({
		showFooter: true,
		showSidebar: {
			left: false,
			right: false,
		},
	});


	return (
		<>
			{/* top */}
			<Header />
			{/* center */}
			<Sidebar
				side="left"
			/>
			<main class="rounded-gradient col-start-2 row-start-2 grid gap-3 rounded-lg backdrop-blur">
				<section class="" aria-labelledby="main-section">
					<Slot />
				</section>
			</main>
			<Sidebar
				side="right"
			/>
			{/* bottom */}
			<footer class=" relative col-start-2 row-start-3 translate-y-1.5 rounded-lg">
				<div class="absolute -left-3 -right-3 bottom-0 top-auto h-3"></div>
			</footer>
			<Background
				class="fixed inset-0 -z-50 h-full w-full opacity-20"
				aria-hidden
			/>
		</>
	);
});
