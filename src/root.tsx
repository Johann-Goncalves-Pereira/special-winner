import { component$ } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./root.scss";

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Don't remove the `<head>` and `<body>` elements.
	 */

	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<link rel="manifest" href="/manifest.json" />
				<RouterHead />
			</head>
			<body
				class="grid h-dvh w-dvw grid-cols-auto_1fr_auto grid-rows-auto_1fr_auto gap-1.5 overflow-hidden bg-surface-50 p-1.5 text-surface-950 dark:bg-surface-950 dark:text-surface-50"
				lang="en"
			>
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	);
});
