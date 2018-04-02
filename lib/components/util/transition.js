export var CssEntry;
(function (CssEntry) {
    function componentDidMount(selfContext) {
        selfContext.loadingTimer = setTimeout(() => {
            selfContext.setState(Object.assign(selfContext.state, { loading: false, animation: true }));
            selfContext.animationTimer = setTimeout(() => {
                selfContext.setState(Object.assign(selfContext.state, { loading: false, animation: false }));
            }, 500);
        }, 10);
    }
    CssEntry.componentDidMount = componentDidMount;
    function componentWillMount(selfContext) {
        selfContext.setState(Object.assign(selfContext.state, { loading: true, animation: true }));
    }
    CssEntry.componentWillMount = componentWillMount;
    function componentWillUnmount(selfContext) {
        clearTimeout(selfContext.animationTimer);
        clearTimeout(selfContext.loadingTimer);
    }
    CssEntry.componentWillUnmount = componentWillUnmount;
    function className(selfContext) {
        return (selfContext.state.loading ? " loading " : " loaded ") + (selfContext.state.animation ? " animation " : "");
    }
    CssEntry.className = className;
})(CssEntry || (CssEntry = {}));
//# sourceMappingURL=transition.js.map