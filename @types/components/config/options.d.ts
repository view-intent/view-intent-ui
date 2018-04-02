export interface IConfigOptions {
    srcLoaderDefault?: string;
}
export declare namespace Options {
    function set(options: IConfigOptions): void;
    function get(): IConfigOptions;
}
export default Options;
