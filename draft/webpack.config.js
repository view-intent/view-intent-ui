module.exports = {
	entry: './main.tsx',
	output: {
		filename: './lib/bundle.js'
	},
	devtool: "source-map",
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	}
};
