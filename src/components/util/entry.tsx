import * as React from "react";
import * as ReactDOM from "react-dom";
import { CssEntry } from "./css-entry";
// import "./entry.scss";

export class Entry extends React.Component<Entry.IProps, Entry.IState> {
	public state: Entry.IState = {
	};
	constructor(props: Entry.IProps) {
		super(props);
	}
	public componentWillMount() {
		CssEntry.componentWillMount(this);
	}
	public componentDidMount() {
		CssEntry.componentDidMount(this);
	}
	public componentWillUnmount() {
		CssEntry.componentWillUnmount(this);
	}
	public render(): React.ReactNode {
		return <div style={this.props.style} className={this.props.className + " " + CssEntry.className(this)}>{this.props.children}</div>;
	}
}
export namespace Entry {
	export interface IProps {
		className?: string;
		style?: any;
	}
	export interface IState {
	}
}
export default Entry;
