import * as React from "react";
import * as ReactDOM from "react-dom";
import { Is } from "utility-collection";

export abstract class IconAbstract extends React.Component<IconAbstract.IProps, IconAbstract.IState> {
	public state: IconAbstract.IState = {};
	constructor(props: IconAbstract.IProps) {
		super(props);
	}
	public shouldComponentUpdate(nextProps: IconAbstract.IProps, nextState: IconAbstract.IState): boolean {
		return false;
	}
	public abstract render(): React.ReactElement<IconAbstract.IProps>;
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
export class Icon extends React.Component<Icon.IProps, Icon.IState> {
	public state: Icon.IState = {
	};
	constructor(props: Icon.IProps) {
		super(props);
	}
	public render(): JSX.Element {
		return <span className={"viui-icon " + ( this.props.className || "" )} style={Icon.rootStyle(this.props.size || "32px")}>{(this.props.src !== null) ? (<this.props.src />) : null }</span>;
	}
}
export namespace Icon {
	export function rootStyle(size: string): any {
		return {
			width: size,
			height: size,
		};
	}
	export interface IProps {
		className?: string;
		src: typeof IconAbstract | null;
		size?: string | undefined;
	}
	export interface IState {
	}
}
export default {
	Icon,
	IconAbstract,
};
