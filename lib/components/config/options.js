export var Options;
(function (Options) {
    let defaultOptions = {};
    function set(options) {
        defaultOptions = Object.assign(defaultOptions, options);
    }
    Options.set = set;
    function get() {
        return defaultOptions;
    }
    Options.get = get;
})(Options || (Options = {}));
export default Options;
//# sourceMappingURL=options.js.map