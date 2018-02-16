import * as React from "react";
import * as ReactDOM from "react-dom";

export abstract class IconAbstract extends React.Component<IconAbstract.IProps, IconAbstract.IState> {
	public state: IconAbstract.IState = {};
	constructor(props: IconAbstract.IProps) {
		super(props);
	}
	public shouldComponentUpdate(nextProps: IconAbstract.IProps, nextState: IconAbstract.IState): boolean {
		return false;
	}
	public abstract render(): JSX.Element;
}
export namespace IconAbstract {
	export interface IProps {
		className?: string;
		width?: string;
		height?: string;
	}
	export interface IState {
	}
}
export default IconAbstract;
