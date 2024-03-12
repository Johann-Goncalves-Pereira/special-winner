import {
	component$,
	useStore,
	useStyles$,
	useStylesScoped$,
} from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import ProfileFoto from "/public/profile.jpg?jsx";

interface State {
	isMouseClick: boolean;
	search: string;
	showMenu: boolean;
}

export default component$(() => {
	const state = useStore<State>({
		isMouseClick: false,
		search: "",
		showMenu: false,
	});

	return (
		<>
			<header
				class="relative z-10 col-start-1 col-end-4 row-start-1 grid -translate-y-1.5
				before:absolute before:-left-3 before:-right-3 before:h-3 before:content
				[&>div]:focus-within:-translate-y-0 [&>div]:hover:-translate-y-0"
			>
				<div class="rounded-gradient absolute inset-0 bottom-auto mx-auto mt-1.5 flex w-fit -translate-y-full gap-1 rounded-full text-lg text-surface-400 backdrop-blur transition-transform">
					<button
						class="rounded-bl-full rounded-tl-full p-1"
						id="header-main-menu-button"
						aria-haspopup="true"
						aria-expanded={state.showMenu}
						aria-controls="header-main-menu"
						onFocusIn$={async () => (state.showMenu = true)}
						onFocusOut$={async () => (state.showMenu = false)}
					>
						<figure>
							<ProfileFoto
								alt="Small rounded profile photo"
								class="aspect-square w-10 rounded-full"
							/>
							<figcaption class="sr-only">
								Small rounded profile photo
							</figcaption>
						</figure>
					</button>

					<ul
						class={`rounded-gradient absolute left-0 top-full -z-10 grid rounded-lg transition-all after:absolute after:inset-0 after:-top-1.5 after:h-1.5 after:content
						${state.showMenu ? "translate-y-1.5" : "pointer-events-none -translate-y-9 opacity-0"}`}
						id="header-main-menu"
						role="menu"
						aria-labelledby="header-main-menu-button"
					>
						<li class="px-4 py-1" role="header-main-menu-item">
							Profile
						</li>
						<li class="px-4 py-1" role="header-main-menu-item">
							Settings
						</li>
						<li class="px-4 py-1" role="header-main-menu-item">
							Library
						</li>
						<li class="px-4 py-1" role="header-main-menu-item">
							test
						</li>
					</ul>

					<nav class="flex gap-1">
						<a
							class="grid place-items-center p-4 hover:text-surface-50"
							href="#"
						>
							<span class="material-symbols-rounded">home</span>
						</a>
						<a
							class="grid place-items-center p-4 hover:text-surface-50"
							href="#"
						>
							<span class="material-symbols-rounded">add</span>
						</a>
						<a
							class="grid place-items-center p-4 hover:text-surface-50"
							href="#"
						>
							<span class="material-symbols-rounded">person_add</span>
						</a>
					</nav>
					<div class="material-symbols-rounded-before relative w-48 rounded-br-full rounded-tr-full">
						<input
							class={twMerge(
								"h-full w-full rounded-inherit bg-transparent pb-1 pl-[calc(2rem+1ch)] text-current transition-outline placeholder:text-sm hover:text-surface-50",
								!state.isMouseClick
									? "focus-visible:outline-accent-600"
									: "focus-visible:outline-transparent",
							)}
							type="search"
							name="search-page"
							id="search-page"
							placeholder="Search Manga"
							value={state.search}
							onClick$={() => (state.isMouseClick = true)}
							onFocusOut$={() => (state.isMouseClick = false)}
							onInput$={(e) =>
								(state.search = (e.target as HTMLInputElement).value)
							}
						/>
						<label
							class="pointer-events-none absolute inset-0 opacity-0"
							for="search-page"
						>
							search manga
						</label>
						<span
							class="material-symbols-rounded pointer-events-none absolute bottom-0 left-2 right-auto top-0 grid place-items-center"
							aria-hidden
						>
							search
						</span>
					</div>
				</div>
			</header>
		</>
	);
});
