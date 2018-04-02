import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./group.scss";

export class Group extends React.Component<Group.IProps, Group.IState> {
	public state: Group.IState = {
	};
	constructor(props: Group.IProps) {
		super(props);
	}
	private get direction(): string {
		return " -" + (this.props.direction || "horizontal");
	}
	public render(): JSX.Element {
		return <div className={"viui-group " + this.direction }>{this.props.children}</div>;
	}
}
export namespace Group {
	export interface IProps {
		direction?: "horizontal" | "vertical";
	}
	export interface IState {
	}
}
export default Group;
