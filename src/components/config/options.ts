export interface IConfigOptions {
	srcLoaderDefault?: string;
}
export namespace Options {
	let defaultOptions: IConfigOptions = {};
	export function set(options: IConfigOptions) {
		defaultOptions = Object.assign(defaultOptions, options);
	}
	export function get(): IConfigOptions {
		return defaultOptions;
	}
}
export default Options;
