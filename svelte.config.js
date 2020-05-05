// import sveltePreprocess from "svelte-preprocess";
import { globalStyle, scss, postcss } from "svelte-preprocess";

module.exports = {
	preprocess: [
		scss({
			includePaths: ["src"]
		}),
		postcss({
			plugins: [
				require("autoprefixer")({
					add: true,
					remove: false,
					grid: "autoplace",
					cascade: true,
					flexbox: true
				})
			]
		}),
		globalStyle()
	]
};
