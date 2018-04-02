export namespace CssEntry {
	export function componentDidMount(selfContext: React.Component | any) {
		selfContext.loadingTimer = setTimeout(() => {
			selfContext.setState(Object.assign(selfContext.state, {loading: false, animation: true}));
			selfContext.animationTimer = setTimeout(() => {
				selfContext.setState(Object.assign(selfContext.state, {loading: false, animation: false}));
			}, 300);
		}, 10);
	}
	export function componentWillMount(selfContext: React.Component | any) {
		selfContext.setState(Object.assign(selfContext.state, {loading: true, animation: true}));
	}
	export function componentWillUnmount(selfContext: React.Component | any) {
		clearTimeout(selfContext.animationTimer);
		clearTimeout(selfContext.loadingTimer);
	}
	export function className(selfContext: React.Component | any): string {
		return (selfContext.state.loading ? " loading " : " loaded ") + (selfContext.state.animation ? " animation " : "");
	}
}
export default CssEntry;
