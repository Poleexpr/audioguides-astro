import { defineConfig } from "astro/config"
export default defineConfig({
	i18n: {
		defaultLocale: "ru",
		locales: ["ru", "en"],
		routing: {
			prefixDefaultLocale: true
		}
	}
})
