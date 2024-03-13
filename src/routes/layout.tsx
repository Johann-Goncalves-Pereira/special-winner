import { component$, Slot, useStore, $ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Header from "~/components/header/header";

import Background from "/public/background.jpg?jsx";
import { SidebarLeft, SidebarRight } from "~/components/sidebar/sidebar";
import Footer from "~/components/footer/footer";

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

export default component$(() => {
	return (
		<>
			{/* top */}
			<Header />
			{/* center */}
			<SidebarLeft />
			<main class="rounded-gradient col-start-2 row-start-2 grid gap-3 rounded-lg backdrop-blur">
				<section class="" aria-labelledby="main-section">
					<Slot />
				</section>
			</main>
			<SidebarRight />
			{/* bottom */}
			<Footer />
			<Background
				class="fixed inset-0 -z-50 h-full w-full opacity-20"
				aria-hidden
			/>
		</>
	);
});
