import { QRL, component$, useSignal } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

export type Side = { side: "left" | "right" };

export const Sidebar = component$<Side>(({ side }) => {
	const show = useSignal<boolean>(false);
	const toggle = useSignal<boolean>(false);

	const left = side === "left";
	const right = side === "right";

	return (
		<aside
			class={`relative z-10 row-start-2 w-0 transition-width 
			${left ? "col-start-1 -translate-x-1.5" : "col-start-3 translate-x-1.5"}
			${toggle.value ? "w-64" : "w-0"}`}
			onMouseOver$={() => (show.value = true)}
			onMouseOut$={() => (show.value = false)}
		>
			<div
				class={`rounded-gradient absolute min-w-[6rem] rounded-lg backdrop-blur transition-transform
				${
					(left && show.value) || (left && toggle.value)
						? "left-1.5"
						: left
							? "left-1.5 -translate-x-full"
							: left && toggle.value
								? "inset-0"
								: "-inset-1.5"
				}
				${
					(right && show.value) || (right && toggle.value)
						? "left-[calc(100%-.375rem)] -translate-x-full"
						: right
							? "left-[calc(100%-.375rem)]"
							: ""
				}
				`}
			>
				<button
					class="rounded-gradient absolute bottom-1 right-1 rounded-inherit px-3 py-2 "
					type="button"
					onClick$={() => (toggle.value = !toggle.value)}
				>
					<span class="material-symbols-rounded">pan_zoom</span>
				</button>
			</div>
			<div
				class={`absolute inset-0 w-3 
				${left ? "" : "left-auto"}`}
				aria-hidden
			></div>
		</aside>
	);
});
