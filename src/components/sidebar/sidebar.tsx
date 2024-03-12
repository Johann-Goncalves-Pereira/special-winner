import { QRL, component$, useSignal, useStore } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

export const SidebarLeft = component$(() => {
	const state = useStore({
		show: false,
		toggle: false,
	});

	return (
		<aside
			class={`relative z-10 col-start-1 row-start-2 w-0 translate-x-1.5 transition-width ${state.toggle ? "w-64" : "w-0"}`}
			onMouseOver$={() => (state.show = true)}
			onMouseOut$={() => (state.show = false)}
		>
			<div
				class={twMerge(
					`rounded-gradient absolute -inset-1.5 rounded-lg backdrop-blur transition-all
				   ${state.show || state.toggle ? "-left-1.5" : "-left-1.5 -translate-x-full"}`,
					`${state.toggle ? "bottom-0 left-0 top-0 w-[15.25rem]" : "w-64"}`,
				)}
			>
				<button
					class="rounded-gradient absolute bottom-1 right-1 rounded-inherit px-3 py-2"
					type="button"
					onClick$={() => (state.toggle = !state.toggle)}
				>
					<span class="material-symbols-rounded">pan_zoom</span>
				</button>
			</div>
			<div class="absolute inset-0 left-auto w-3" aria-hidden></div>
		</aside>
	);
});

export const SidebarRight = component$(() => {
	const state = useStore({
		show: false,
		toggle: true,
	});

	return (
		<>
			<aside
				class={`z-10 col-start-3 row-start-2 w-0 -translate-x-1.5 transition-width ${state.toggle ? "w-64" : "w-0"}`}
				onMouseOver$={() => (state.show = true)}
				onMouseOut$={() => (state.show = false)}
			>
				<div
					class={twMerge(
						`rounded-gradient absolute -inset-1.5 -left-64 ml-auto w-64 origin-right rounded-lg backdrop-blur transition-all
					${state.show || state.toggle ? "translate-x-0" : "translate-x-full"}`,
						state.toggle ? "bottom-0 top-0 w-[15.25rem] -translate-x-1.5" : "",
					)}
				>
					<button
						class="rounded-gradient absolute bottom-1 left-1 rounded-inherit px-3 py-2 "
						type="button"
						onClick$={() => (state.toggle = !state.toggle)}
					>
						<span class="material-symbols-rounded">pan_zoom</span>
					</button>
				</div>
				<div class="absolute inset-0 right-auto w-3" aria-hidden></div>
			</aside>
		</>
	);
});
